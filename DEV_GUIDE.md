# Buffer Query Widget — Developer Guide

## What This Widget Does
Clicks a point feature on a configurable "click layer", draws geodesic buffer rings at configurable distances, counts features from a "count layer" within each ring, and displays results in a sidebar table. Optional: end-user editable radii, CSV export of features within the largest buffer.

---

## Prerequisites
- Node.js (LTS)
- ArcGIS Experience Builder SDK 1.20.0 installed at `C:\Programs\agol_exp_b_sdk`
- Admin rights to write to `C:\Programs\`
- An ArcGIS Online account for signing in to the local dev server

---

## Initial Setup
1. Open **Admin PowerShell** and navigate to the SDK root:
   ```
   cd C:\Programs\agol_exp_b_sdk\client
   ```
2. Install dependencies (first time only):
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm start
   ```
4. Open `http://localhost:3001` in a browser and sign in with your ArcGIS Online account.

> **Note:** Use HTTP, not HTTPS, for local development to avoid certificate issues.

---

## Widget Location
```
client/your-extensions/widgets/buffer-query/
  manifest.json          — widget metadata and dependencies
  config.json            — default configuration values
  src/
    runtime/widget.tsx   — the map-facing widget UI
    setting/setting.tsx  — the Content panel in the EXB builder
```

---

## Development Workflow

### Making code changes
- Edit files in `src/runtime/` or `src/setting/` — the dev server hot-reloads automatically.
- After changing `manifest.json` or `config.json`, **restart the dev server** (Ctrl+C, then `npm start` again). Hot reload does not pick up these files.

### Adding the widget to an app
1. In the EXB builder, create or open an Experience.
2. Click **Insert** → find **Buffer Query** under custom widgets.
3. Open the **Content** panel on the right to configure layers, radii, labels, and user options.
4. Connect a map widget when prompted.

### File writes
All edits to files under `C:\Programs\` must be made from an **Admin PowerShell** window. Use:
```powershell
[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
```
Do not use `Set-Content -Encoding utf8` — it adds a BOM that breaks the dev server.

---

## Configuration Reference
All settings are stored in the widget's config object and editable from the Content panel.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `schoolLayerName` | string | `""` | Title of the layer to click on |
| `wellLayerName` | string | `""` | Title of the FeatureLayer to count |
| `radii` | number[] | `[0.5, 1, 2]` | Buffer distances in miles (up to 5) |
| `colors` | string[] | (orange palette) | Hex color per ring |
| `title` | string | `"Proximity Counts"` | Widget heading |
| `instructionStart` | string | `"Click a feature..."` | Text shown before any click |
| `instructionDone` | string | `"Click another..."` | Text shown after results load |
| `showDownloadButton` | boolean | `false` | Show CSV export button |
| `allowRadiiEdit` | boolean | `false` | Let end users adjust radii |

---

## Known Limitations
- The click layer must support `queryFeatures` with geometry output (hosted FeatureLayer).
- The count layer must be a FeatureLayer (`l.type === "feature"`). Tile layers and group layers are silently skipped.
- Buffer accuracy degrades slightly at very large distances (>50 miles) due to the Haversine approximation — acceptable for most use cases.
- `loadArcGISJSAPIModules` cannot be awaited in the runtime context; modules load asynchronously after first map click.
- Widget state (last clicked feature, local radii edits) is not persisted across page refreshes.

---

## Deployment Options

### Option A: AGOL zip upload
> **Note:** This requires the org admin to enable "Allow members to upload custom widgets" under Org Settings → Security. This is an **Enterprise-only** feature and does **not** exist on FracTracker's AGOL org (ft.maps.arcgis.com). Documented here for completeness if the org ever moves to Enterprise.

1. Build (Admin PowerShell, from `C:\Programs\agol_exp_b_sdk\client\`):
   ```
   npm run build:prod
   ```
   > `npm run build` does not exist. Warnings about `widgets-info.json` exceeding 244 KiB are expected and harmless.
2. Zip the widget — `*` is critical so files land at the zip root, not in a subfolder:
   ```powershell
   Compress-Archive -Path "C:\Programs\agol_exp_b_sdk\client\dist\widgets\buffer-query\*" -DestinationPath "C:\Users\culms\Downloads\buffer-query.zip" -Force
   ```
3. In EXB online, open an Experience → Insert widget → Custom tab → upload zip.
4. Widget is scoped to that Experience only. Workaround: keep a blank template Experience with the widget installed and duplicate it for new projects.

---

### Option B: GitHub Pages (current live deployment)

The full Experience (map + widget) is self-hosted as a static site. Live URL: **https://cullensmith.github.io/expbldr-buffer-counts/**

Source repo: `cullensmith/expbldr-buffer-counts` (public), `gh-pages` branch.
Dev/config repo: `cullensmith/expbldr-dev-buffer-counts` (private), `main` branch holds source files and CLAUDE.md.

#### Key requirements
- The experience must be **Published** in the SDK builder before deploying — unpublished apps have `__not_publish: True` in `apps/{id}/config.json` and will not load
- The web map must be shared publicly on AGOL
- `experience/index.html` requires two path fixes for the GitHub Pages subpath (base href and mountPath)
- `experience/{id}/index.html` must exist as a real file — GitHub Pages can't do server-side SPA routing
- `.nojekyll` file must be at the repo root — prevents GitHub Pages from skipping underscore folders

#### Redeploying after changes

**Widget code changed:**
1. Run `npm run build:prod` (Admin PowerShell)
2. Copy updated widget files (local repo must be on `gh-pages` branch):
   ```powershell
   Copy-Item "C:\Programs\agol_exp_b_sdk\client\dist\widgets\buffer-query" `
     "C:\fractracker\repos\ExperienceBuilder_SDK\radii_proximity_count\widgets\buffer-query" -Recurse -Force
   ```
3. Commit and push:
   ```powershell
   git add widgets/buffer-query
   git commit -m "Update widget build"
   git push public gh-pages
   ```

**Experience config changed (layers, radii, layout, etc.):**
1. Click **Publish** in the SDK builder at `localhost:3001`
2. Run `npm run build:prod`
3. Copy updated app config:
   ```powershell
   $src = "C:\Programs\agol_exp_b_sdk\server\public\apps\2"
   $dst = "C:\fractracker\repos\ExperienceBuilder_SDK\radii_proximity_count"
   Copy-Item "$src\config.json" "$dst\apps\2\config.json" -Force
   Copy-Item "$src\resources\config\config.json" "$dst\apps\2\resources\config\config.json" -Force
   ```
4. Copy updated widget files (step 2 above), commit and push to `public gh-pages`

#### Limitations
- Map layers still live on ft.maps.arcgis.com — if un-shared or the service goes down, the app breaks
- App config (AGOL item IDs, portal URL) is publicly readable in the repo
- Redeployment is fully manual — no CI pipeline
- Repo must stay public for GitHub Pages on a free account

---

## Suggested Future Enhancements

### High value / low effort
- **Field picker for CSV export** — let the user choose which fields to include rather than exporting all attributes
- **Zoom to buffer** — add a button that zooms the map view to the extent of the largest ring after a click
- **Layer URL support** — allow specifying layers by service URL instead of layer title, making the widget more portable across different maps

### Medium effort
- **Polygon / polyline click layer** — currently assumes the click layer is points; extend `hitTest` handling to support other geometry types and use centroid for buffering
- **Multiple selections** — allow clicking several features and show a comparison table across all of them
- **Export with geometry** — add lat/lon columns (or WKT) to the CSV so the download is usable directly in other GIS tools

### Larger features
- **Ring-specific counts in CSV** — instead of exporting all features within the max radius, export with a column indicating which ring each feature falls in
- **Instant Apps compatibility** — package as an Instant Apps template component so it works outside of Experience Builder
- **Results persistence** — store the last query result in the widget state so results survive a map pan/zoom or brief navigation away
