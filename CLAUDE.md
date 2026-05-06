# ArcGIS Experience Builder SDK — Claude Reference

## Environment
- All writes to `C:\Programs\` require **Admin PowerShell**
- File encoding: always use `[System.IO.File]::WriteAllText(path, content, [System.Text.Encoding]::UTF8)` — PowerShell `Set-Content -Encoding utf8` adds a BOM that breaks the dev server
- When writing TSX via PowerShell heredoc, rewrite JS template literals (backticks) as string concatenation to be safe

## Webpack / Dev Server
- Restart webpack (kill and re-run `npm start`) after any change to `manifest.json` or `config.json` — hot reload does not pick these up
- `widgets-info.json` is auto-generated on build; never edit it manually

## npm Scripts (run from `client/` directory)
- `npm start` — dev server with hot reload (development only)
- `npm run build:dev` — one-time development build
- `npm run build:prod` — production build, minified (use this for deployment)
- `npm run build:for-download` — production build to `dist-download/` folder
- `npm run build` does **not exist** — will error

## Deployment — AGOL (zip upload)
1. Run `npm run build:prod` from `C:\Programs\agol_exp_b_sdk\client\`
2. Zip the built widget: `Compress-Archive -Path "client\dist\widgets\<name>\*" -DestinationPath "<name>.zip" -Force`
   - Use `\*` not the folder itself — AGOL expects files at the zip root, not in a subfolder
3. Upload zip to ArcGIS Online Experience Builder → Custom Widgets
4. Warnings about `widgets-info.json` size (325 KiB) are expected and harmless
5. Custom widgets in online EXB are scoped per-Experience — no org-wide gallery exists. Workaround: maintain a blank template Experience with the widget installed and duplicate it for new projects.

**AGOL limitation:** The "Custom" tab for widget upload only appears if the org admin has enabled it under Org Settings → Security → "Allow members to upload custom widgets". This is an **Enterprise-only** feature — it does not exist on AGOL regardless of org settings. Confirmed on FracTracker's AGOL org (ft.maps.arcgis.com).

## Deployment — GitHub Pages (self-hosted full experience)

Use this path when AGOL custom widget upload is unavailable.

### Prerequisites
- Must **Publish** the experience in the local SDK builder before deploying — unpublished apps have `__not_publish: True` in `apps/{id}/config.json` and will not load in the viewer.
- The web map referenced by the experience must be shared publicly on AGOL.

### Steps
1. In SDK builder (`localhost:3001`), open the experience and click **Publish**.
2. Run `npm run build:prod` from `C:\Programs\agol_exp_b_sdk\client\` (Admin PowerShell).
3. Build a trimmed deploy folder — only copy what the viewer needs (the full dist is ~280 MB; trimmed is ~30 MB):
   - Framework: `jimu-core`, `jimu-ui`, `jimu-arcgis`, `jimu-layouts`, `jimu-data-source`, `jimu-theme`, `jimu-for-builder`, `themes`, `assets`, `experience`, `calcite-components`, `arcgis-*-components`
   - Widgets: `widgets/arcgis/arcgis-map/`, `widgets/buffer-query/`, `widgets/widgets-info*.json`, `widgets/widgets-entries.json`
   - Root: `version.json`, `service-worker*.js`
   - **Exclude:** `builder/`, `templates/`, `site/`, `widgets/arcgis/analysis/` (156 MB alone), all other arcgis widgets, `widgets/common/`, `widgets/lrs/`, etc.
4. Patch `experience/index.html` — fix base href and mountPath for the GitHub Pages subpath:
   ```powershell
   $html = [System.IO.File]::ReadAllText("deploy\experience\index.html")
   $html = $html -replace 'base href="/[^"]*"', 'base href="/YOUR-REPO-NAME/experience/"'
   $html = $html -replace '"mountPath": "/[^"]*"', '"mountPath": "/YOUR-REPO-NAME/"'
   ```
5. Copy patched `experience/index.html` to `experience/{appId}/index.html` — GitHub Pages needs a real file at that path since it can't do server-side SPA routing.
6. Copy app data from `C:\Programs\agol_exp_b_sdk\server\public\apps\{id}\` into `deploy\apps\{id}\` (config.json, info.json, resources/).
7. Add `.nojekyll` (empty file) at deploy root — prevents GitHub Pages from skipping underscore folders.
8. Add root `index.html` that redirects to `/{repo}/experience/{id}/`.
9. Push deploy contents to `gh-pages` branch; set GitHub Pages source to that branch via:
   ```powershell
   gh api repos/{owner}/{repo}/pages --method PUT --field "source[branch]=gh-pages" --field "source[path]=/"
   ```

### Redeployment after changes
After updating the widget or experience config in the SDK:
1. Publish in SDK builder (if experience config changed)
2. Run `npm run build:prod`
3. Re-copy patched `experience/index.html` and `experience/{id}/index.html`
4. Re-copy `apps/{id}/config.json` and `apps/{id}/resources/config/config.json`
5. Re-copy updated widget files from `dist/widgets/buffer-query/`
6. Commit and push to `gh-pages`

### GitHub Pages limitations for this setup
- AGOL dependency: map and feature layers still live on ft.maps.arcgis.com — if those go down or get un-shared, the app breaks
- Repo must be **public** for GitHub Pages to work on a free account
- Redeployment is fully manual — no CI pipeline
- App config (AGOL item IDs, portal URL) is publicly readable in the repo
- GitHub Pages has a 1 GB repo limit; current deploy is ~30 MB so headroom is fine
- Live URL: `https://cullensmith.github.io/expbldr-buffer-counts/`

## Widget File Structure
```
your-extensions/widgets/<name>/
  manifest.json          # must have hasSettingPage: true, dependency: ["jimu-arcgis"]
  config.json            # must exist for webpack to set hasConfig: true (enables Content tab)
  src/
    runtime/widget.tsx
    setting/setting.tsx
```

## Critical Gotchas

### loadArcGISJSAPIModules
**Never await it** — it hangs indefinitely in the runtime context.
Use fire-and-forget:
```tsx
loadArcGISJSAPIModules(["esri/Graphic", "esri/layers/GraphicsLayer"])
  .then(([Graphic, GraphicsLayer]) => { ... })
  .catch(console.error);
```

### Config updates in setting.tsx
Separate `onSettingChange` calls overwrite each other. Use chained `.set()` in one call:
```tsx
const setMulti = (updates: Record<string, any>) => {
  let cfg = props.config;
  Object.entries(updates).forEach(([k, v]) => { cfg = cfg.set(k, v); });
  props.onSettingChange({ id: props.id, config: cfg });
};
```

### Layer queries
- Filter count layer with `l.type === "feature"` — `allLayers` includes GroupLayers, TileLayers, etc. that lack `queryFeatureCount`
- Fetch click-layer geometry with `outSpatialReference: { wkid: 4326 }` — `hitTest` returns Web Mercator which distorts mile-based distance calculations
- Use `await layer.when()` before querying to ensure the layer is loaded
- Sequential `queryFeatureCount` calls, not `Promise.all` — parallel calls can hang

### SettingRow layout
`SettingRow label="..."` puts label text in a narrow left column. Instead use a `<div>` + `<label>` above the input:
```tsx
<div style={{ marginBottom: "12px" }}>
  <label style={{ fontSize: "12px", display: "block", marginBottom: "4px" }}>My Label</label>
  <input ... />
</div>
```

### GraphicsLayer z-order
Add at index 0 to render underneath point layers:
```tsx
jmv.view.map.add(graphicsLayer, 0);
```

### Stale closures in event handlers
Store mutable values in refs and update them each render:
```tsx
const radiiRef = useRef(radii);
radiiRef.current = radii;
// use radiiRef.current inside click handlers
```

## Working Patterns

### Haversine circle (no geometry engine needed)
```tsx
function makeCircle(lat: number, lon: number, radiusMiles: number, pts = 64): number[][] {
  const R = 3958.8;
  const ring: number[][] = [];
  for (let i = 0; i <= pts; i++) {
    const a = (i / pts) * 2 * Math.PI;
    const ph = Math.asin(Math.sin(lat * Math.PI/180) * Math.cos(radiusMiles/R) +
      Math.cos(lat * Math.PI/180) * Math.sin(radiusMiles/R) * Math.cos(a));
    const lm = lon * Math.PI/180 + Math.atan2(
      Math.sin(a) * Math.sin(radiusMiles/R) * Math.cos(lat * Math.PI/180),
      Math.cos(radiusMiles/R) - Math.sin(lat * Math.PI/180) * Math.sin(ph));
    ring.push([lm * 180/Math.PI, ph * 180/Math.PI]);
  }
  return ring;
}
```

### Spatial count query
```tsx
const n = await featureLayer.queryFeatureCount({
  geometry: pointGeometry,   // must be WGS84
  distance: radiusMiles,
  units: "miles",
  spatialRelationship: "intersects"
});
```

### Paginated CSV export
```tsx
let all: any[] = [], start = 0;
while (true) {
  const fs = await layer.queryFeatures({ where: "1=1", outFields: ["*"], returnGeometry: false, num: 1000, start });
  all = all.concat(fs.features);
  if (!fs.exceededTransferLimit) break;
  start += 1000;
}
```
