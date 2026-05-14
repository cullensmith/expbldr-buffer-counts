System.register(["jimu-core/emotion","jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/buffer-query/src/runtime/widget.tsx ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const { useState, useRef, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
const COLORS = [
    { fill: "rgba(222,84,30,0.2)", line: "#DE541E" },
    { fill: "rgba(247,118,68,0.2)", line: "#f77644" },
    { fill: "rgba(255,200,87,0.2)", line: "#FFC857" },
    { fill: "rgba(255,238,146,0.2)", line: "#ffee92" },
    { fill: "rgba(255,240,208,0.2)", line: "#fff0d0" }
];
const DEFAULT_COLORS = ["#DE541E", "#f77644", "#FFC857", "#ffee92", "#fff0d0"];
function makeCircle(lat, lon, radiusMiles, pts = 64) {
    const R = 3958.8;
    const ring = [];
    for (let i = 0; i <= pts; i++) {
        const a = (i / pts) * 2 * Math.PI;
        const ph = Math.asin(Math.sin(lat * Math.PI / 180) * Math.cos(radiusMiles / R) +
            Math.cos(lat * Math.PI / 180) * Math.sin(radiusMiles / R) * Math.cos(a));
        const lm = lon * Math.PI / 180 + Math.atan2(Math.sin(a) * Math.sin(radiusMiles / R) * Math.cos(lat * Math.PI / 180), Math.cos(radiusMiles / R) - Math.sin(lat * Math.PI / 180) * Math.sin(ph));
        ring.push([lm * 180 / Math.PI, ph * 180 / Math.PI]);
    }
    return ring;
}
const Widget = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    const [schoolName, setSchoolName] = useState("");
    const [status, setStatus] = useState("");
    const [counts, setCounts] = useState([]);
    const [downloading, setDownloading] = useState(false);
    const [lastFeature, setLastFeature] = useState(null);
    const lastFeatureRef = useRef(null);
    const [showRadiiEditor, setShowRadiiEditor] = useState(false);
    const clickHandleRef = useRef(null);
    const modulesRef = useRef(null);
    const glRef = useRef(null);
    const busyRef = useRef(false);
    const wellLayerRef = useRef(null);
    const schoolLayerRef = useRef(null);
    const instructionDoneRef = useRef("");
    const widgetStateRef = useRef(props.state);
    widgetStateRef.current = props.state;
    const schoolLayerName = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.schoolLayerName) || "All Arlington Schools";
    const wellLayerName = ((_b = props.config) === null || _b === void 0 ? void 0 : _b.wellLayerName) || "Well hole";
    const widgetTitle = ((_c = props.config) === null || _c === void 0 ? void 0 : _c.title) || "Proximity Counts";
    const instructionStart = ((_d = props.config) === null || _d === void 0 ? void 0 : _d.instructionStart) || "Click a feature on the map";
    const instructionDone = ((_e = props.config) === null || _e === void 0 ? void 0 : _e.instructionDone) || "Click another feature to update";
    instructionDoneRef.current = instructionDone;
    const showDownloadButton = (_g = (_f = props.config) === null || _f === void 0 ? void 0 : _f.showDownloadButton) !== null && _g !== void 0 ? _g : false;
    const allowRadiiEdit = (_j = (_h = props.config) === null || _h === void 0 ? void 0 : _h.allowRadiiEdit) !== null && _j !== void 0 ? _j : false;
    const configRadii = (_q = (_o = (_m = (_l = (_k = props.config) === null || _k === void 0 ? void 0 : _k.radii) === null || _l === void 0 ? void 0 : _l.asMutable) === null || _m === void 0 ? void 0 : _m.call(_l)) !== null && _o !== void 0 ? _o : (_p = props.config) === null || _p === void 0 ? void 0 : _p.radii) !== null && _q !== void 0 ? _q : [0.5, 1, 2];
    const configColors = (_w = (_u = (_t = (_s = (_r = props.config) === null || _r === void 0 ? void 0 : _r.colors) === null || _s === void 0 ? void 0 : _s.asMutable) === null || _t === void 0 ? void 0 : _t.call(_s)) !== null && _u !== void 0 ? _u : (_v = props.config) === null || _v === void 0 ? void 0 : _v.colors) !== null && _w !== void 0 ? _w : DEFAULT_COLORS;
    const [localRadii, setLocalRadii] = useState(configRadii);
    const [localColors, setLocalColors] = useState(configColors);
    useEffect(() => { setLocalRadii(configRadii); }, [JSON.stringify(configRadii)]);
    useEffect(() => { setLocalColors(configColors); }, [JSON.stringify(configColors)]);
    const activeRadii = allowRadiiEdit ? localRadii : configRadii;
    const activeColors = allowRadiiEdit ? localColors : configColors;
    const configColorsRef = useRef(activeColors);
    configColorsRef.current = activeColors;
    const radiiRef = useRef(activeRadii);
    radiiRef.current = activeRadii;
    const layerQueryUrl = (layer) => {
        const base = layer.url.replace(/\/$/, "");
        return layer.layerId != null ? base + "/" + layer.layerId : base;
    };
    const runQuery = (feature) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        if (busyRef.current)
            return;
        busyRef.current = true;
        setCounts([]);
        try {
            const lat = (_a = feature.geometry.latitude) !== null && _a !== void 0 ? _a : feature.geometry.y;
            const lon = (_b = feature.geometry.longitude) !== null && _b !== void 0 ? _b : feature.geometry.x;
            const currentRadii = radiiRef.current;
            if (modulesRef.current && glRef.current) {
                const { Graphic } = modulesRef.current;
                glRef.current.removeAll();
                [...currentRadii].sort((a, b) => b - a).forEach((r) => {
                    var _a;
                    const ci = currentRadii.indexOf(r);
                    const hex = (_a = configColorsRef.current[ci]) !== null && _a !== void 0 ? _a : COLORS[ci % COLORS.length].line;
                    const c = { fill: hex + "33", line: hex };
                    glRef.current.add(new Graphic({
                        geometry: { type: "polygon", rings: [makeCircle(lat, lon, r)], spatialReference: { wkid: 4326 } },
                        symbol: { type: "simple-fill", color: c.fill, outline: { color: c.line, width: 2 } }
                    }));
                });
            }
            const wellLayer = wellLayerRef.current;
            const esriReq = (_c = modulesRef.current) === null || _c === void 0 ? void 0 : _c.esriRequest;
            const results = [];
            for (const r of currentRadii) {
                setStatus("Counting within " + r + " mi...");
                const geom = JSON.stringify({ rings: [makeCircle(lat, lon, r)], spatialReference: { wkid: 4326 } });
                const res = yield esriReq(layerQueryUrl(wellLayer) + "/query", { query: { returnCountOnly: true, where: "1=1", geometryType: "esriGeometryPolygon", spatialRel: "esriSpatialRelIntersects", inSR: 4326, f: "json", geometry: geom } });
                const n = (_d = res.data.count) !== null && _d !== void 0 ? _d : 0;
                results.push({ r, n });
                setCounts([...results]);
            }
            setStatus(instructionDoneRef.current);
        }
        catch (err) {
            console.error(err);
            setStatus("Error: " + ((_e = err === null || err === void 0 ? void 0 : err.message) !== null && _e !== void 0 ? _e : String(err)));
        }
        finally {
            busyRef.current = false;
        }
    });
    const handleApply = () => {
        setShowRadiiEditor(false);
        if (lastFeatureRef.current) {
            runQuery(lastFeatureRef.current);
        }
    };
    const onActiveViewChange = (jmv) => __awaiter(void 0, void 0, void 0, function* () {
        if (!jmv)
            return;
        if (clickHandleRef.current) {
            clickHandleRef.current.remove();
            clickHandleRef.current = null;
        }
        const schoolLayer = jmv.view.map.allLayers.find((l) => l.title === schoolLayerName);
        const wellLayer = jmv.view.map.allLayers.find((l) => l.title === wellLayerName && l.type === "feature");
        wellLayerRef.current = wellLayer;
        schoolLayerRef.current = schoolLayer;
        if (schoolLayer)
            yield schoolLayer.when();
        if (wellLayer) {
            yield wellLayer.load();
        }
        if (!modulesRef.current) {
            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)(["esri/Graphic", "esri/layers/GraphicsLayer", "esri/request"])
                .then(([Graphic, GraphicsLayer, esriRequest]) => {
                modulesRef.current = { Graphic, GraphicsLayer, esriRequest };
                if (!glRef.current) {
                    const gl = new GraphicsLayer({ title: "__buffer_query__", listMode: "hide" });
                    jmv.view.map.add(gl, 0);
                    glRef.current = gl;
                }
            })
                .catch(console.error);
        }
        clickHandleRef.current = jmv.view.on("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            if (widgetStateRef.current === jimu_core__WEBPACK_IMPORTED_MODULE_1__.WidgetState.Closed)
                return;
            if (busyRef.current)
                return;
            try {
                setSchoolName("");
                setCounts([]);
                setLastFeature(null);
                lastFeatureRef.current = null;
                setStatus("Identifying...");
                const hit = yield jmv.view.hitTest(event, schoolLayer ? { include: [schoolLayer] } : {});
                const result = hit.results.find((r) => r.type === "graphic");
                if (!result) {
                    (_a = glRef.current) === null || _a === void 0 ? void 0 : _a.removeAll();
                    setStatus("Click directly on a target feature");
                    return;
                }
                const hitAttrs = (_b = result.graphic.attributes) !== null && _b !== void 0 ? _b : {};
                let name = (_d = (_c = hitAttrs.name) !== null && _c !== void 0 ? _c : hitAttrs.school_name) !== null && _d !== void 0 ? _d : hitAttrs.SchoolName;
                if (!name && schoolLayerRef.current && ((_e = modulesRef.current) === null || _e === void 0 ? void 0 : _e.esriRequest)) {
                    try {
                        const fidVal = (_h = (_g = (_f = hitAttrs.fid) !== null && _f !== void 0 ? _f : hitAttrs.FID) !== null && _g !== void 0 ? _g : hitAttrs.OBJECTID) !== null && _h !== void 0 ? _h : hitAttrs.objectid;
                        if (fidVal != null) {
                            const sl = schoolLayerRef.current;
                            const nr = yield modulesRef.current.esriRequest(layerQueryUrl(sl) + "/query", {
                                query: { where: "fid = " + fidVal, outFields: "name", returnGeometry: false, f: "json" }
                            });
                            name = (_m = (_l = (_k = (_j = nr.data) === null || _j === void 0 ? void 0 : _j.features) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.attributes) === null || _m === void 0 ? void 0 : _m.name;
                        }
                    }
                    catch (e) {
                        console.warn("[buffer-query] name fetch failed", e);
                    }
                }
                setSchoolName(name !== null && name !== void 0 ? name : "Unknown");
                const feature = result.graphic;
                setLastFeature(feature);
                lastFeatureRef.current = feature;
                yield runQuery(feature);
            }
            catch (err) {
                console.error(err);
                setStatus("Error: " + ((_o = err === null || err === void 0 ? void 0 : err.message) !== null && _o !== void 0 ? _o : String(err)));
            }
        }));
    });
    const clearAll = () => {
        var _a;
        (_a = glRef.current) === null || _a === void 0 ? void 0 : _a.removeAll();
        setSchoolName("");
        setCounts([]);
        setLastFeature(null);
        lastFeatureRef.current = null;
        setStatus("");
    };
    const downloadCSV = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const layer = wellLayerRef.current;
        if (!layer || !lastFeature)
            return;
        const maxRadius = Math.max(...radiiRef.current);
        setDownloading(true);
        setStatus("Downloading...");
        try {
            let allFeatures = [];
            let start = 0;
            const pageSize = 1000;
            while (true) {
                const fs = yield layer.queryFeatures({
                    geometry: lastFeature.geometry,
                    distance: maxRadius,
                    units: "miles",
                    spatialRelationship: "intersects",
                    outFields: ["OBJECTID"],
                    returnGeometry: false,
                    num: pageSize,
                    start
                });
                allFeatures = allFeatures.concat(fs.features);
                if (!fs.exceededTransferLimit)
                    break;
                start += pageSize;
            }
            if (!allFeatures.length) {
                setStatus("No features found within " + maxRadius + " mi");
                setDownloading(false);
                return;
            }
            const fields = Object.keys(allFeatures[0].attributes);
            const escape = (v) => {
                const s = v == null ? "" : String(v);
                return s.includes(",") || s.includes('"') || s.includes("\n") ? ('"' + s.replace(/"/g, '""') + '"') : s;
            };
            const rows = [fields.join(","), ...allFeatures.map(f => fields.map(k => escape(f.attributes[k])).join(","))];
            const blob = new Blob(["\uFEFF" + rows.join("\n")], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = wellLayerName.replace(/[^a-z0-9]/gi, "_") + ".csv";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            setStatus(instructionDone);
        }
        catch (err) {
            console.error(err);
            setStatus("Download error: " + ((_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : String(err)));
        }
        finally {
            setDownloading(false);
        }
    });
    const updateLocalRadius = (i, val) => {
        const next = [...localRadii];
        next[i] = parseFloat(val) || 0.1;
        setLocalRadii(next);
    };
    const updateLocalColor = (i, val) => {
        const next = [...localColors];
        next[i] = val;
        setLocalColors(next);
    };
    const addLocalRadius = () => {
        var _a;
        if (localRadii.length < 5) {
            setLocalRadii([...localRadii, Math.max(...localRadii) + 0.25]);
            setLocalColors([...localColors, (_a = DEFAULT_COLORS[localRadii.length]) !== null && _a !== void 0 ? _a : "#cccccc"]);
        }
    };
    const removeLocalRadius = (i) => {
        setLocalRadii(localRadii.filter((_, j) => j !== i));
        setLocalColors(localColors.filter((_, j) => j !== i));
    };
    const numInput = { width: "60px", padding: "2px 4px", fontSize: "12px", border: "1px solid #ccc", borderRadius: "3px" };
    const smallBtn = { padding: "2px 7px", fontSize: "12px", cursor: "pointer" };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: "12px", fontFamily: "sans-serif", height: "100%", overflow: "auto" }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { style: { marginTop: 0, marginBottom: 0, fontSize: "14px" }, children: widgetTitle }), allowRadiiEdit && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: { padding: "4px 10px", fontSize: "12px", cursor: "pointer" }, onClick: showRadiiEditor ? handleApply : () => setShowRadiiEditor(true), children: showRadiiEditor ? "Apply" : "Edit Buffer Settings" }))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { fontSize: "12px", color: "#666", margin: "0 0 8px" }, children: status || instructionStart }), allowRadiiEdit && showRadiiEditor && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { marginBottom: "12px", padding: "8px", background: "#f9f9f9", borderRadius: "4px", border: "1px solid #e0e0e0" }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { fontSize: "11px", color: "#888", margin: "0 0 6px", fontWeight: 600 }, children: "Buffer distances (miles)" }), localRadii.map((r, i) => {
                        var _a, _b;
                        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "5px" }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "number", value: r, min: "0.1", step: "0.1", style: numInput, onChange: e => updateLocalRadius(i, e.target.value) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: "11px", color: "#999" }, children: "mi" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "color", value: (_b = (_a = localColors[i]) !== null && _a !== void 0 ? _a : DEFAULT_COLORS[i]) !== null && _b !== void 0 ? _b : "#cccccc", onChange: e => updateLocalColor(i, e.target.value), style: { width: "26px", height: "26px", padding: "1px", border: "1px solid #ccc", borderRadius: "3px", cursor: "pointer" } }), localRadii.length > 1 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: smallBtn, onClick: () => removeLocalRadius(i), children: "Remove" }))] }, i));
                    }), localRadii.length < 5 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: Object.assign(Object.assign({}, smallBtn), { marginTop: "2px" }), onClick: addLocalRadius, children: "+ Add" }))] })), schoolName && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { fontWeight: 600, fontSize: "13px", margin: "0 0 8px" }, children: schoolName }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "12px" }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { background: "#f5f5f5" }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: "6px 8px", textAlign: "left", border: "1px solid #ddd" }, children: "Radius" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { padding: "6px 8px", textAlign: "right", border: "1px solid #ddd" }, children: "Count" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: counts.map(({ r, n }, i) => {
                                    var _a;
                                    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { style: { borderLeft: ("3px solid " + ((_a = configColorsRef.current[i]) !== null && _a !== void 0 ? _a : COLORS[i % COLORS.length].line)) }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { padding: "6px 8px", border: "1px solid #ddd" }, children: ["Within ", r, " mi"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { padding: "6px 8px", textAlign: "right", border: "1px solid #ddd" }, children: n })] }, r));
                                }) })] }), (schoolName || counts.length > 0) && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: "flex", gap: "8px", marginTop: "10px", flexWrap: "wrap" }, children: [showDownloadButton && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: downloadCSV, disabled: !lastFeature || downloading, title: !lastFeature ? "Click a feature on the map first" : "", style: { padding: "4px 10px", fontSize: "12px", cursor: (!lastFeature || downloading) ? "default" : "pointer", opacity: (!lastFeature || downloading) ? 0.5 : 1 }, children: downloading ? "Downloading..." : "Download CSV" })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: clearAll, style: { padding: "4px 10px", fontSize: "12px", cursor: "pointer" }, children: "Clear" })] }))] })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_x = props.useMapWidgetIds) === null || _x === void 0 ? void 0 : _x[0], onActiveViewChange: onActiveViewChange })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9idWZmZXItcXVlcnkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p1QztBQUNHO0FBRTdGLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLDRDQUFLLENBQUM7QUFTOUMsTUFBTSxNQUFNLEdBQUc7SUFDYixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBSSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFHLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUcsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxTQUFTLEVB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LFlBQ2hLLFdBQVcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FDekMsQ0FDVixFQUNELDRFQUFRLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsc0JBRXJGLElBQ0wsQ0FDUCxJQUNHLENBQ1AsRUFFRCxnRUFBQyw2REFBb0IsSUFBQyxjQUFjLEVBQUUsV0FBSyxDQUFDLGVBQWUsMENBQUcsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEdBQUksSUFDeEcsQ0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsaUVBQWUsTUFBTSxFQUFDO0FBQ2QsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9idWZmZXItcXVlcnkvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgdHlwZSBJbW11dGFibGVPYmplY3QsIFdpZGdldFN0YXRlIH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcsIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSA9IFJlYWN0O1xuXG5pbnRlcmZhY2UgQ29uZmlnIHtcbiAgc2Nob29sTGF5ZXJOYW1lOiBzdHJpbmc7IHdlbGxMYXllck5hbWU6IHN0cmluZzsgcmFkaWk6IG51bWJlcltdOyBjb2xvcnM6IHN0cmluZ1tdO1xuICB0aXRsZTogc3RyaW5nOyBpbnN0cnVjdGlvblN0YXJ0OiBzdHJpbmc7IGluc3RydWN0aW9uRG9uZTogc3RyaW5nO1xuICBzaG93RG93bmxvYWRCdXR0b246IGJvb2xlYW47IGFsbG93UmFkaWlFZGl0OiBib29sZWFuO1xufVxudHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+O1xuXG5jb25zdCBDT0xPUlMgPSBbXG4gIHsgZmlsbDogXCJyZ2JhKDIyMiw4NCwzMCwwLjIpXCIsICAgbGluZTogXCIjREU1NDFFXCIgfSxcbiAgeyBmaWxsOiBcInJnYmEoMjQ3LDExOCw2OCwwLjIpXCIsICBsaW5lOiBcIiNmNzc2NDRcIiB9LFxuICB7IGZpbGw6IFwicmdiYSgyNTUsMjAwLDg3LDAuMilcIiwgIGxpbmU6IFwiI0ZGQzg1N1wiIH0sXG4gIHsgZmlsbDogXCJyZ2JhKDI1NSwyMzgsMTQ2LDAuMilcIiwgbGluZTogXCIjZmZlZTkyXCIgfSxcbiAgeyBmaWxsOiBcInJnYmEoMjU1LDI0MCwyMDgsMC4yKVwiLCBsaW5lOiBcIiNmZmYwZDBcIiB9XG5dO1xuY29uc3QgREVGQVVMVF9DT0xPUlMgPSBbXCIjREU1NDFFXCIsIFwiI2Y3NzY0NFwiLCBcIiNGRkM4NTdcIiwgXCIjZmZlZTkyXCIsIFwiI2ZmZjBkMFwiXTtcblxuZnVuY3Rpb24gbWFrZUNpcmNsZShsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIsIHJhZGl1c01pbGVzOiBudW1iZXIsIHB0cyA9IDY0KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IFIgPSAzOTU4Ljg7XG4gIGNvbnN0IHJpbmc6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcHRzOyBpKyspIHtcbiAgICBjb25zdCBhID0gKGkgLyBwdHMpICogMiAqIE1hdGguUEk7XG4gICAgY29uc3QgcGggPSBNYXRoLmFzaW4oTWF0aC5zaW4obGF0ICogTWF0aC5QSSAvIDE4MCkgKiBNYXRoLmNvcyhyYWRpdXNNaWxlcyAvIFIpICtcbiAgICAgIE1hdGguY29zKGxhdCAqIE1hdGguUEkgLyAxODApICogTWF0aC5zaW4ocmFkaXVzTWlsZXMgLyBSKSAqIE1hdGguY29zKGEpKTtcbiAgICBjb25zdCBsbSA9IGxvbiAqIE1hdGguUEkgLyAxODAgKyBNYXRoLmF0YW4yKFxuICAgICAgTWF0aC5zaW4oYSkgKiBNYXRoLnNpbihyYWRpdXNNaWxlcyAvIFIpICogTWF0aC5jb3MobGF0ICogTWF0aC5QSSAvIDE4MCksXG4gICAgICBNYXRoLmNvcyhyYWRpdXNNaWxlcyAvIFIpIC0gTWF0aC5zaW4obGF0ICogTWF0aC5QSSAvIDE4MCkgKiBNYXRoLnNpbihwaCkpO1xuICAgIHJpbmcucHVzaChbbG0gKiAxODAgLyBNYXRoLlBJLCBwaCAqIDE4MCAvIE1hdGguUEldKTtcbiAgfVxuICByZXR1cm4gcmluZztcbn1cblxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcbiAgY29uc3QgW3NjaG9vbE5hbWUsIHNldFNjaG9vbE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvdW50cywgc2V0Q291bnRzXSA9IHVzZVN0YXRlPHtyOiBudW1iZXI7IG46IG51bWJlcn1bXT4oW10pO1xuICBjb25zdCBbZG93bmxvYWRpbmcsIHNldERvd25sb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xhc3RGZWF0dXJlLCBzZXRMYXN0RmVhdHVyZV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICBjb25zdCBsYXN0RmVhdHVyZVJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xuICBjb25zdCBbc2hvd1JhZGlpRWRpdG9yLCBzZXRTaG93UmFkaWlFZGl0b3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGlja0hhbmRsZVJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xuICBjb25zdCBtb2R1bGVzUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XG4gIGNvbnN0IGdsUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XG4gIGNvbnN0IGJ1c3lSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICBjb25zdCB3ZWxsTGF5ZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKTtcbiAgY29uc3Qgc2Nob29sTGF5ZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25Eb25lUmVmID0gdXNlUmVmKFwiXCIpO1xuICBjb25zdCB3aWRnZXRTdGF0ZVJlZiA9IHVzZVJlZihwcm9wcy5zdGF0ZSk7XG4gIHdpZGdldFN0YXRlUmVmLmN1cnJlbnQgPSBwcm9wcy5zdGF0ZTtcblxuICBjb25zdCBzY2hvb2xMYXllck5hbWUgPSBwcm9wcy5jb25maWc/LnNjaG9vbExheWVyTmFtZSB8fCBcIkFsbCBBcmxpbmd0b24gU2Nob29sc1wiO1xuICBjb25zdCB3ZWxsTGF5ZXJOYW1lID0gcHJvcHMuY29uZmlnPy53ZWxsTGF5ZXJOYW1lIHx8IFwiV2VsbCBob2xlXCI7XG4gIGNvbnN0IHdpZGdldFRpdGxlID0gcHJvcHMuY29uZmlnPy50aXRsZSB8fCBcIlByb3hpbWl0eSBDb3VudHNcIjtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25TdGFydCA9IHByb3BzLmNvbmZpZz8uaW5zdHJ1Y3Rpb25TdGFydCB8fCBcIkNsaWNrIGEgZmVhdHVyZSBvbiB0aGUgbWFwXCI7XG4gIGNvbnN0IGluc3RydWN0aW9uRG9uZSA9IHByb3BzLmNvbmZpZz8uaW5zdHJ1Y3Rpb25Eb25lIHx8IFwiQ2xpY2sgYW5vdGhlciBmZWF0dXJlIHRvIHVwZGF0ZVwiO1xuICBpbnN0cnVjdGlvbkRvbmVSZWYuY3VycmVudCA9IGluc3RydWN0aW9uRG9uZTtcbiAgY29uc3Qgc2hvd0Rvd25sb2FkQnV0dG9uID0gcHJvcHMuY29uZmlnPy5zaG93RG93bmxvYWRCdXR0b24gPz8gZmFsc2U7XG4gIGNvbnN0IGFsbG93UmFkaWlFZGl0ID0gcHJvcHMuY29uZmlnPy5hbGxvd1JhZGlpRWRpdCA/PyBmYWxzZTtcblxuICBjb25zdCBjb25maWdSYWRpaTogbnVtYmVyW10gPSAocHJvcHMuY29uZmlnPy5yYWRpaSBhcyBhbnkpPy5hc011dGFibGU/LigpID8/IHByb3BzLmNvbmZpZz8ucmFkaWkgPz8gWzAuNSwgMSwgMl07XG4gIGNvbnN0IGNvbmZpZ0NvbG9yczogc3RyaW5nW10gPSAocHJvcHMuY29uZmlnPy5jb2xvcnMgYXMgYW55KT8uYXNNdXRhYmxlPy4oKSA/PyBwcm9wcy5jb25maWc/LmNvbG9ycyA/PyBERUZBVUxUX0NPTE9SUztcblxuICBjb25zdCBbbG9jYWxSYWRpaSwgc2V0TG9jYWxSYWRpaV0gPSB1c2VTdGF0ZTxudW1iZXJbXT4oY29uZmlnUmFkaWkpO1xuICBjb25zdCBbbG9jYWxDb2xvcnMsIHNldExvY2FsQ29sb3JzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihjb25maWdDb2xvcnMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7IHNldExvY2FsUmFkaWkoY29uZmlnUmFkaWkpOyB9LCBbSlNPTi5zdHJpbmdpZnkoY29uZmlnUmFkaWkpXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7IHNldExvY2FsQ29sb3JzKGNvbmZpZ0NvbG9ycyk7IH0sIFtKU09OLnN0cmluZ2lmeShjb25maWdDb2xvcnMpXSk7XG5cbiAgY29uc3QgYWN0aXZlUmFkaWkgPSBhbGxvd1JhZGlpRWRpdCA/IGxvY2FsUmFkaWkgOiBjb25maWdSYWRpaTtcbiAgY29uc3QgYWN0aXZlQ29sb3JzID0gYWxsb3dSYWRpaUVkaXQgPyBsb2NhbENvbG9ycyA6IGNvbmZpZ0NvbG9ycztcblxuICBjb25zdCBjb25maWdDb2xvcnNSZWYgPSB1c2VSZWY8c3RyaW5nW10+KGFjdGl2ZUNvbG9ycyk7XG4gIGNvbmZpZ0NvbG9yc1JlZi5jdXJyZW50ID0gYWN0aXZlQ29sb3JzO1xuICBjb25zdCByYWRpaVJlZiA9IHVzZVJlZjxudW1iZXJbXT4oYWN0aXZlUmFkaWkpO1xuICByYWRpaVJlZi5jdXJyZW50ID0gYWN0aXZlUmFkaWk7XG5cbiAgY29uc3QgbGF5ZXJRdWVyeVVybCA9IChsYXllcjogYW55KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBiYXNlID0gKGxheWVyLnVybCBhcyBzdHJpbmcpLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbiAgICByZXR1cm4gbGF5ZXIubGF5ZXJJZCAhPSBudWxsID8gYmFzZSArIFwiL1wiICsgbGF5ZXIubGF5ZXJJZCA6IGJhc2U7XG4gIH07XG5cbiAgY29uc3QgcnVuUXVlcnkgPSBhc3luYyAoZmVhdHVyZTogYW55KSA9PiB7XG4gICAgaWYgKGJ1c3lSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGJ1c3lSZWYuY3VycmVudCA9IHRydWU7XG4gICAgc2V0Q291bnRzKFtdKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGF0ID0gKGZlYXR1cmUuZ2VvbWV0cnkgYXMgYW55KS5sYXRpdHVkZSA/PyAoZmVhdHVyZS5nZW9tZXRyeSBhcyBhbnkpLnk7XG4gICAgICBjb25zdCBsb24gPSAoZmVhdHVyZS5nZW9tZXRyeSBhcyBhbnkpLmxvbmdpdHVkZSA/PyAoZmVhdHVyZS5nZW9tZXRyeSBhcyBhbnkpLng7XG4gICAgICBjb25zdCBjdXJyZW50UmFkaWkgPSByYWRpaVJlZi5jdXJyZW50O1xuXG4gICAgICBpZiAobW9kdWxlc1JlZi5jdXJyZW50ICYmIGdsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgeyBHcmFwaGljIH0gPSBtb2R1bGVzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGdsUmVmLmN1cnJlbnQucmVtb3ZlQWxsKCk7XG4gICAgICAgIFsuLi5jdXJyZW50UmFkaWldLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKChyKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2kgPSBjdXJyZW50UmFkaWkuaW5kZXhPZihyKTtcbiAgICAgICAgICBjb25zdCBoZXggPSBjb25maWdDb2xvcnNSZWYuY3VycmVudFtjaV0gPz8gQ09MT1JTW2NpICUgQ09MT1JTLmxlbmd0aF0ubGluZTtcbiAgICAgICAgICBjb25zdCBjID0geyBmaWxsOiBoZXggKyBcIjMzXCIsIGxpbmU6IGhleCB9O1xuICAgICAgICAgIGdsUmVmLmN1cnJlbnQuYWRkKG5ldyBHcmFwaGljKHtcbiAgICAgICAgICAgIGdlb21ldHJ5OiB7IHR5cGU6IFwicG9seWdvblwiLCByaW5nczogW21ha2VDaXJjbGUobGF0LCBsb24sIHIpXSwgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiA0MzI2IH0gfSBhcyBhbnksXG4gICAgICAgICAgICBzeW1ib2w6IHsgdHlwZTogXCJzaW1wbGUtZmlsbFwiLCBjb2xvcjogYy5maWxsLCBvdXRsaW5lOiB7IGNvbG9yOiBjLmxpbmUsIHdpZHRoOiAyIH0gfSBhcyBhbnlcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3ZWxsTGF5ZXIgPSB3ZWxsTGF5ZXJSZWYuY3VycmVudDtcbiAgICAgIGNvbnN0IGVzcmlSZXEgPSBtb2R1bGVzUmVmLmN1cnJlbnQ/LmVzcmlSZXF1ZXN0O1xuICAgICAgY29uc3QgcmVzdWx0czoge3I6IG51bWJlcjsgbjogbnVtYmVyfVtdID0gW107XG4gICAgICBmb3IgKGNvbnN0IHIgb2YgY3VycmVudFJhZGlpKSB7XG4gICAgICAgIHNldFN0YXR1cyhcIkNvdW50aW5nIHdpdGhpbiBcIiArIHIgKyBcIiBtaS4uLlwiKTtcbiAgICAgICAgY29uc3QgZ2VvbSA9IEpTT04uc3RyaW5naWZ5KHtyaW5nczpbbWFrZUNpcmNsZShsYXQsbG9uLHIpXSxzcGF0aWFsUmVmZXJlbmNlOnt3a2lkOjQzMjZ9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGVzcmlSZXEobGF5ZXJRdWVyeVVybCh3ZWxsTGF5ZXIpICsgXCIvcXVlcnlcIiwgeyBxdWVyeTogeyByZXR1cm5Db3VudE9ubHk6IHRydWUsIHdoZXJlOiBcIjE9MVwiLCBnZW9tZXRyeVR5cGU6IFwiZXNyaUdlb21ldHJ5UG9seWdvblwiLCBzcGF0aWFsUmVsOiBcImVzcmlTcGF0aWFsUmVsSW50ZXJzZWN0c1wiLCBpblNSOiA0MzI2LCBmOiBcImpzb25cIiwgZ2VvbWV0cnk6IGdlb20gfSB9KTtcbiAgICAgICAgY29uc3QgbiA9IHJlcy5kYXRhLmNvdW50ID8/IDA7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7IHIsIG4gfSk7XG4gICAgICAgIHNldENvdW50cyhbLi4ucmVzdWx0c10pO1xuICAgICAgfVxuICAgICAgc2V0U3RhdHVzKGluc3RydWN0aW9uRG9uZVJlZi5jdXJyZW50KTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgc2V0U3RhdHVzKFwiRXJyb3I6IFwiICsgKGVycj8ubWVzc2FnZSA/PyBTdHJpbmcoZXJyKSkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBidXN5UmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXBwbHkgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1JhZGlpRWRpdG9yKGZhbHNlKTtcbiAgICBpZiAobGFzdEZlYXR1cmVSZWYuY3VycmVudCkge1xuICAgICAgcnVuUXVlcnkobGFzdEZlYXR1cmVSZWYuY3VycmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQWN0aXZlVmlld0NoYW5nZSA9IGFzeW5jIChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgaWYgKCFqbXYpIHJldHVybjtcbiAgICBpZiAoY2xpY2tIYW5kbGVSZWYuY3VycmVudCkgeyBjbGlja0hhbmRsZVJlZi5jdXJyZW50LnJlbW92ZSgpOyBjbGlja0hhbmRsZVJlZi5jdXJyZW50ID0gbnVsbDsgfVxuXG4gICAgY29uc3Qgc2Nob29sTGF5ZXI6IGFueSA9IGptdi52aWV3Lm1hcC5hbGxMYXllcnMuZmluZCgobDogYW55KSA9PiBsLnRpdGxlID09PSBzY2hvb2xMYXllck5hbWUpO1xuICAgIGNvbnN0IHdlbGxMYXllcjogYW55ID0gam12LnZpZXcubWFwLmFsbExheWVycy5maW5kKChsOiBhbnkpID0+IGwudGl0bGUgPT09IHdlbGxMYXllck5hbWUgJiYgbC50eXBlID09PSBcImZlYXR1cmVcIik7XG4gICAgd2VsbExheWVyUmVmLmN1cnJlbnQgPSB3ZWxsTGF5ZXI7XG4gICAgc2Nob29sTGF5ZXJSZWYuY3VycmVudCA9IHNjaG9vbExheWVyO1xuICAgIGlmIChzY2hvb2xMYXllcikgYXdhaXQgc2Nob29sTGF5ZXIud2hlbigpO1xuICAgIGlmICh3ZWxsTGF5ZXIpIHsgYXdhaXQgd2VsbExheWVyLmxvYWQoKTsgfVxuXG4gICAgaWYgKCFtb2R1bGVzUmVmLmN1cnJlbnQpIHtcbiAgICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1wiZXNyaS9HcmFwaGljXCIsIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiLCBcImVzcmkvcmVxdWVzdFwiXSlcbiAgICAgICAgLnRoZW4oKFtHcmFwaGljLCBHcmFwaGljc0xheWVyLCBlc3JpUmVxdWVzdF0pID0+IHtcbiAgICAgICAgICBtb2R1bGVzUmVmLmN1cnJlbnQgPSB7IEdyYXBoaWMsIEdyYXBoaWNzTGF5ZXIsIGVzcmlSZXF1ZXN0IH07XG4gICAgICAgICAgaWYgKCFnbFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBnbCA9IG5ldyBHcmFwaGljc0xheWVyKHsgdGl0bGU6IFwiX19idWZmZXJfcXVlcnlfX1wiLCBsaXN0TW9kZTogXCJoaWRlXCIgfSk7XG4gICAgICAgICAgICBqbXYudmlldy5tYXAuYWRkKGdsLCAwKTtcbiAgICAgICAgICAgIGdsUmVmLmN1cnJlbnQgPSBnbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICB9XG5cbiAgICBjbGlja0hhbmRsZVJlZi5jdXJyZW50ID0gam12LnZpZXcub24oXCJjbGlja1wiLCBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHdpZGdldFN0YXRlUmVmLmN1cnJlbnQgPT09IFdpZGdldFN0YXRlLkNsb3NlZCkgcmV0dXJuO1xuICAgICAgaWYgKGJ1c3lSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0U2Nob29sTmFtZShcIlwiKTtcbiAgICAgICAgc2V0Q291bnRzKFtdKTtcbiAgICAgICAgc2V0TGFzdEZlYXR1cmUobnVsbCk7XG4gICAgICAgIGxhc3RGZWF0dXJlUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICBzZXRTdGF0dXMoXCJJZGVudGlmeWluZy4uLlwiKTtcblxuICAgICAgICBjb25zdCBoaXQgPSBhd2FpdCBqbXYudmlldy5oaXRUZXN0KGV2ZW50LCBzY2hvb2xMYXllciA/IHsgaW5jbHVkZTogW3NjaG9vbExheWVyXSB9IDoge30pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoaGl0LnJlc3VsdHMgYXMgYW55W10pLmZpbmQoKHI6IGFueSkgPT4gci50eXBlID09PSBcImdyYXBoaWNcIik7XG4gICAgICAgIGlmICghcmVzdWx0KSB7IGdsUmVmLmN1cnJlbnQ/LnJlbW92ZUFsbCgpOyBzZXRTdGF0dXMoXCJDbGljayBkaXJlY3RseSBvbiBhIHRhcmdldCBmZWF0dXJlXCIpOyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBoaXRBdHRycyA9IHJlc3VsdC5ncmFwaGljLmF0dHJpYnV0ZXMgPz8ge307XG4gICAgICAgIGxldCBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBoaXRBdHRycy5uYW1lID8/IGhpdEF0dHJzLnNjaG9vbF9uYW1lID8/IGhpdEF0dHJzLlNjaG9vbE5hbWU7XG5cbiAgICAgICAgaWYgKCFuYW1lICYmIHNjaG9vbExheWVyUmVmLmN1cnJlbnQgJiYgbW9kdWxlc1JlZi5jdXJyZW50Py5lc3JpUmVxdWVzdCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmaWRWYWwgPSBoaXRBdHRycy5maWQgPz8gaGl0QXR0cnMuRklEID8/IGhpdEF0dHJzLk9CSkVDVElEID8/IGhpdEF0dHJzLm9iamVjdGlkO1xuICAgICAgICAgICAgaWYgKGZpZFZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNsID0gc2Nob29sTGF5ZXJSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgY29uc3QgbnIgPSBhd2FpdCBtb2R1bGVzUmVmLmN1cnJlbnQuZXNyaVJlcXVlc3QobGF5ZXJRdWVyeVVybChzbCkgKyBcIi9xdWVyeVwiLCB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgd2hlcmU6IFwiZmlkID0gXCIgKyBmaWRWYWwsIG91dEZpZWxkczogXCJuYW1lXCIsIHJldHVybkdlb21ldHJ5OiBmYWxzZSwgZjogXCJqc29uXCIgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgbmFtZSA9IG5yLmRhdGE/LmZlYXR1cmVzPy5bMF0/LmF0dHJpYnV0ZXM/Lm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLndhcm4oXCJbYnVmZmVyLXF1ZXJ5XSBuYW1lIGZldGNoIGZhaWxlZFwiLCBlKTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2Nob29sTmFtZShuYW1lID8/IFwiVW5rbm93blwiKTtcbiAgICAgICAgY29uc3QgZmVhdHVyZSA9IHJlc3VsdC5ncmFwaGljO1xuICAgICAgICBzZXRMYXN0RmVhdHVyZShmZWF0dXJlKTtcbiAgICAgICAgbGFzdEZlYXR1cmVSZWYuY3VycmVudCA9IGZlYXR1cmU7XG5cbiAgICAgICAgYXdhaXQgcnVuUXVlcnkoZmVhdHVyZSk7XG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHNldFN0YXR1cyhcIkVycm9yOiBcIiArIChlcnI/Lm1lc3NhZ2UgPz8gU3RyaW5nKGVycikpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhckFsbCA9ICgpID0+IHtcbiAgICBnbFJlZi5jdXJyZW50Py5yZW1vdmVBbGwoKTtcbiAgICBzZXRTY2hvb2xOYW1lKFwiXCIpO1xuICAgIHNldENvdW50cyhbXSk7XG4gICAgc2V0TGFzdEZlYXR1cmUobnVsbCk7XG4gICAgbGFzdEZlYXR1cmVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgc2V0U3RhdHVzKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IGRvd25sb2FkQ1NWID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxheWVyID0gd2VsbExheWVyUmVmLmN1cnJlbnQ7XG4gICAgaWYgKCFsYXllciB8fCAhbGFzdEZlYXR1cmUpIHJldHVybjtcbiAgICBjb25zdCBtYXhSYWRpdXMgPSBNYXRoLm1heCguLi5yYWRpaVJlZi5jdXJyZW50KTtcbiAgICBzZXREb3dubG9hZGluZyh0cnVlKTtcbiAgICBzZXRTdGF0dXMoXCJEb3dubG9hZGluZy4uLlwiKTtcbiAgICB0cnkge1xuICAgICAgbGV0IGFsbEZlYXR1cmVzOiBhbnlbXSA9IFtdO1xuICAgICAgbGV0IHN0YXJ0ID0gMDtcbiAgICAgIGNvbnN0IHBhZ2VTaXplID0gMTAwMDtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IGZzID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGxhc3RGZWF0dXJlLmdlb21ldHJ5LFxuICAgICAgICAgIGRpc3RhbmNlOiBtYXhSYWRpdXMsXG4gICAgICAgICAgdW5pdHM6IFwibWlsZXNcIixcbiAgICAgICAgICBzcGF0aWFsUmVsYXRpb25zaGlwOiBcImludGVyc2VjdHNcIixcbiAgICAgICAgICBvdXRGaWVsZHM6IFtcIk9CSkVDVElEXCJdLFxuICAgICAgICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICAgICAgICBudW06IHBhZ2VTaXplLFxuICAgICAgICAgIHN0YXJ0XG4gICAgICAgIH0pO1xuICAgICAgICBhbGxGZWF0dXJlcyA9IGFsbEZlYXR1cmVzLmNvbmNhdChmcy5mZWF0dXJlcyk7XG4gICAgICAgIGlmICghZnMuZXhjZWVkZWRUcmFuc2ZlckxpbWl0KSBicmVhaztcbiAgICAgICAgc3RhcnQgKz0gcGFnZVNpemU7XG4gICAgICB9XG4gICAgICBpZiAoIWFsbEZlYXR1cmVzLmxlbmd0aCkgeyBzZXRTdGF0dXMoXCJObyBmZWF0dXJlcyBmb3VuZCB3aXRoaW4gXCIgKyBtYXhSYWRpdXMgKyBcIiBtaVwiKTsgc2V0RG93bmxvYWRpbmcoZmFsc2UpOyByZXR1cm47IH1cbiAgICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKGFsbEZlYXR1cmVzWzBdLmF0dHJpYnV0ZXMpO1xuICAgICAgY29uc3QgZXNjYXBlID0gKHY6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBzID0gdiA9PSBudWxsID8gXCJcIiA6IFN0cmluZyh2KTtcbiAgICAgICAgcmV0dXJuIHMuaW5jbHVkZXMoXCIsXCIpIHx8IHMuaW5jbHVkZXMoJ1wiJykgfHwgcy5pbmNsdWRlcyhcIlxcblwiKSA/ICgnXCInICsgcy5yZXBsYWNlKC9cIi9nLCAnXCJcIicpICsgJ1wiJykgOiBzO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJvd3MgPSBbZmllbGRzLmpvaW4oXCIsXCIpLCAuLi5hbGxGZWF0dXJlcy5tYXAoZiA9PiBmaWVsZHMubWFwKGsgPT4gZXNjYXBlKGYuYXR0cmlidXRlc1trXSkpLmpvaW4oXCIsXCIpKV07XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW1wiXFx1RkVGRlwiICsgcm93cy5qb2luKFwiXFxuXCIpXSwgeyB0eXBlOiBcInRleHQvY3N2O2NoYXJzZXQ9dXRmLTg7XCIgfSk7XG4gICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgYS5kb3dubG9hZCA9IHdlbGxMYXllck5hbWUucmVwbGFjZSgvW15hLXowLTldL2dpLCBcIl9cIikgKyBcIi5jc3ZcIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBhLmNsaWNrKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgc2V0U3RhdHVzKGluc3RydWN0aW9uRG9uZSk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHNldFN0YXR1cyhcIkRvd25sb2FkIGVycm9yOiBcIiArIChlcnI/Lm1lc3NhZ2UgPz8gU3RyaW5nKGVycikpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0RG93bmxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVMb2NhbFJhZGl1cyA9IChpOiBudW1iZXIsIHZhbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IFsuLi5sb2NhbFJhZGlpXTsgbmV4dFtpXSA9IHBhcnNlRmxvYXQodmFsKSB8fCAwLjE7IHNldExvY2FsUmFkaWkobmV4dCk7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZUxvY2FsQ29sb3IgPSAoaTogbnVtYmVyLCB2YWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBbLi4ubG9jYWxDb2xvcnNdOyBuZXh0W2ldID0gdmFsOyBzZXRMb2NhbENvbG9ycyhuZXh0KTtcbiAgfTtcbiAgY29uc3QgYWRkTG9jYWxSYWRpdXMgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsUmFkaWkubGVuZ3RoIDwgNSkge1xuICAgICAgc2V0TG9jYWxSYWRpaShbLi4ubG9jYWxSYWRpaSwgTWF0aC5tYXgoLi4ubG9jYWxSYWRpaSkgKyAwLjI1XSk7XG4gICAgICBzZXRMb2NhbENvbG9ycyhbLi4ubG9jYWxDb2xvcnMsIERFRkFVTFRfQ09MT1JTW2xvY2FsUmFkaWkubGVuZ3RoXSA/PyBcIiNjY2NjY2NcIl0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlTG9jYWxSYWRpdXMgPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgc2V0TG9jYWxSYWRpaShsb2NhbFJhZGlpLmZpbHRlcigoXywgaikgPT4gaiAhPT0gaSkpO1xuICAgIHNldExvY2FsQ29sb3JzKGxvY2FsQ29sb3JzLmZpbHRlcigoXywgaikgPT4gaiAhPT0gaSkpO1xuICB9O1xuXG4gIGNvbnN0IG51bUlucHV0OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyB3aWR0aDogXCI2MHB4XCIsIHBhZGRpbmc6IFwiMnB4IDRweFwiLCBmb250U2l6ZTogXCIxMnB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfTtcbiAgY29uc3Qgc21hbGxCdG46IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7IHBhZGRpbmc6IFwiMnB4IDdweFwiLCBmb250U2l6ZTogXCIxMnB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMnB4XCIsIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJhdXRvXCIgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIG1hcmdpbkJvdHRvbTogXCI4cHhcIiB9fT5cbiAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwLCBmb250U2l6ZTogXCIxNHB4XCIgfX0+e3dpZGdldFRpdGxlfTwvaDQ+XG4gICAgICAgIHthbGxvd1JhZGlpRWRpdCAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBwYWRkaW5nOiBcIjRweCAxMHB4XCIsIGZvbnRTaXplOiBcIjEycHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17c2hvd1JhZGlpRWRpdG9yID8gaGFuZGxlQXBwbHkgOiAoKSA9PiBzZXRTaG93UmFkaWlFZGl0b3IodHJ1ZSl9PlxuICAgICAgICAgICAge3Nob3dSYWRpaUVkaXRvciA/IFwiQXBwbHlcIiA6IFwiRWRpdCBCdWZmZXIgU2V0dGluZ3NcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBjb2xvcjogXCIjNjY2XCIsIG1hcmdpbjogXCIwIDAgOHB4XCIgfX0+e3N0YXR1cyB8fCBpbnN0cnVjdGlvblN0YXJ0fTwvcD5cblxuICAgICAge2FsbG93UmFkaWlFZGl0ICYmIHNob3dSYWRpaUVkaXRvciAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEycHhcIiwgcGFkZGluZzogXCI4cHhcIiwgYmFja2dyb3VuZDogXCIjZjlmOWY5XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZTBlMGUwXCIgfX0+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTFweFwiLCBjb2xvcjogXCIjODg4XCIsIG1hcmdpbjogXCIwIDAgNnB4XCIsIGZvbnRXZWlnaHQ6IDYwMCB9fT5CdWZmZXIgZGlzdGFuY2VzIChtaWxlcyk8L3A+XG4gICAgICAgICAge2xvY2FsUmFkaWkubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogXCI2cHhcIiwgbWFyZ2luQm90dG9tOiBcIjVweFwiIH19PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtyfSBtaW49XCIwLjFcIiBzdGVwPVwiMC4xXCIgc3R5bGU9e251bUlucHV0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZUxvY2FsUmFkaXVzKGksIGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTFweFwiLCBjb2xvcjogXCIjOTk5XCIgfX0+bWk8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiB2YWx1ZT17bG9jYWxDb2xvcnNbaV0gPz8gREVGQVVMVF9DT0xPUlNbaV0gPz8gXCIjY2NjY2NjXCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlTG9jYWxDb2xvcihpLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjZweFwiLCBoZWlnaHQ6IFwiMjZweFwiLCBwYWRkaW5nOiBcIjFweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIiwgYm9yZGVyUmFkaXVzOiBcIjNweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19IC8+XG4gICAgICAgICAgICAgIHtsb2NhbFJhZGlpLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3NtYWxsQnRufSBvbkNsaWNrPXsoKSA9PiByZW1vdmVMb2NhbFJhZGl1cyhpKX0+UmVtb3ZlPC9idXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7bG9jYWxSYWRpaS5sZW5ndGggPCA1ICYmIChcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgLi4uc21hbGxCdG4sIG1hcmdpblRvcDogXCIycHhcIiB9fSBvbkNsaWNrPXthZGRMb2NhbFJhZGl1c30+KyBBZGQ8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtzY2hvb2xOYW1lICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIGZvbnRTaXplOiBcIjEzcHhcIiwgbWFyZ2luOiBcIjAgMCA4cHhcIiB9fT57c2Nob29sTmFtZX08L3A+XG4gICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIiwgZm9udFNpemU6IFwiMTJweFwiIH19PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZjVmNWY1XCIgfX0+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6IFwiNnB4IDhweFwiLCB0ZXh0QWxpZ246IFwibGVmdFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNkZGRcIiB9fT5SYWRpdXM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBcIjZweCA4cHhcIiwgdGV4dEFsaWduOiBcInJpZ2h0XCIsIGJvcmRlcjogXCIxcHggc29saWQgI2RkZFwiIH19PkNvdW50PC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtjb3VudHMubWFwKCh7IHIsIG4gfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e3J9IHN0eWxlPXt7IGJvcmRlckxlZnQ6IChcIjNweCBzb2xpZCBcIiArIChjb25maWdDb2xvcnNSZWYuY3VycmVudFtpXSA/PyBDT0xPUlNbaSAlIENPTE9SUy5sZW5ndGhdLmxpbmUpKSB9fT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBcIjZweCA4cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIgfX0+V2l0aGluIHtyfSBtaTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogXCI2cHggOHB4XCIsIHRleHRBbGlnbjogXCJyaWdodFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNkZGRcIiB9fT57bn08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIHsoc2Nob29sTmFtZSB8fCBjb3VudHMubGVuZ3RoID4gMCkgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiBcIjhweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG4gICAgICAgICAgICAgIHtzaG93RG93bmxvYWRCdXR0b24gJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZG93bmxvYWRDU1Z9IGRpc2FibGVkPXshbGFzdEZlYXR1cmUgfHwgZG93bmxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17IWxhc3RGZWF0dXJlID8gXCJDbGljayBhIGZlYXR1cmUgb24gdGhlIG1hcCBmaXJzdFwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiNHB4IDEwcHhcIiwgZm9udFNpemU6IFwiMTJweFwiLCBjdXJzb3I6ICghbGFzdEZlYXR1cmUgfHwgZG93bmxvYWRpbmcpID8gXCJkZWZhdWx0XCIgOiBcInBvaW50ZXJcIiwgb3BhY2l0eTogKCFsYXN0RmVhdHVyZSB8fCBkb3dubG9hZGluZykgPyAwLjUgOiAxIH19PlxuICAgICAgICAgICAgICAgICAge2Rvd25sb2FkaW5nID8gXCJEb3dubG9hZGluZy4uLlwiIDogXCJEb3dubG9hZCBDU1ZcIn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGVhckFsbH0gc3R5bGU9e3sgcGFkZGluZzogXCI0cHggMTBweFwiLCBmb250U2l6ZTogXCIxMnB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19IG9uQWN0aXZlVmlld0NoYW5nZT17b25BY3RpdmVWaWV3Q2hhbmdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=