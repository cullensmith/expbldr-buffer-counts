System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
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
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
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

/***/ },

/***/ "jimu-ui/advanced/setting-components"
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/buffer-query/src/setting/setting.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");




const { useState } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
const DEFAULT_COLORS = ["#DE541E", "#f77644", "#FFC857", "#ffee92", "#fff0d0"];
const Setting = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
    const [layers, setLayers] = useState([]);
    const radii = (_f = (_d = (_c = (_b = (_a = props.config) === null || _a === void 0 ? void 0 : _a.radii) === null || _b === void 0 ? void 0 : _b.asMutable) === null || _c === void 0 ? void 0 : _c.call(_b)) !== null && _d !== void 0 ? _d : (_e = props.config) === null || _e === void 0 ? void 0 : _e.radii) !== null && _f !== void 0 ? _f : [0.5, 1, 2];
    const colors = (_m = (_k = (_j = (_h = (_g = props.config) === null || _g === void 0 ? void 0 : _g.colors) === null || _h === void 0 ? void 0 : _h.asMutable) === null || _j === void 0 ? void 0 : _j.call(_h)) !== null && _k !== void 0 ? _k : (_l = props.config) === null || _l === void 0 ? void 0 : _l.colors) !== null && _m !== void 0 ? _m : DEFAULT_COLORS;
    const onMapSelect = (ids) => props.onSettingChange({ id: props.id, useMapWidgetIds: ids });
    const set = (key, val) => props.onSettingChange({ id: props.id, config: props.config.set(key, val) });
    const setMulti = (updates) => {
        let cfg = props.config;
        Object.entries(updates).forEach(([k, v]) => { cfg = cfg.set(k, v); });
        props.onSettingChange({ id: props.id, config: cfg });
    };
    const onActiveViewChange = (jmv) => {
        if (!jmv)
            return;
        const titles = [];
        jmv.view.map.allLayers.forEach((l) => { if (l.title)
            titles.push(l.title); });
        setLayers(titles);
    };
    const updateRadius = (i, val) => {
        const next = [...radii];
        next[i] = parseFloat(val) || 0.1;
        set("radii", next);
    };
    const updateColor = (i, val) => {
        const next = [...colors];
        next[i] = val;
        set("colors", next);
    };
    const addRadius = () => {
        var _a;
        if (radii.length < 5) {
            setMulti({
                radii: [...radii, Math.max(...radii) + 0.25],
                colors: [...colors, (_a = DEFAULT_COLORS[radii.length]) !== null && _a !== void 0 ? _a : "#cccccc"]
            });
        }
    };
    const removeRadius = (i) => {
        setMulti({
            radii: radii.filter((_, j) => j !== i),
            colors: colors.filter((_, j) => j !== i)
        });
    };
    const sel = { width: "100%", padding: "4px 6px", fontSize: "13px", border: "1px solid #ccc", borderRadius: "3px" };
    const txt = { width: "100%", padding: "4px 6px", fontSize: "13px", border: "1px solid #ccc", borderRadius: "3px", boxSizing: "border-box" };
    const lbl = { fontSize: "12px", marginBottom: "4px", display: "block", color: "#aaa" };
    const field = { marginBottom: "12px" };
    const btn = { padding: "3px 8px", fontSize: "12px", cursor: "pointer" };
    const toggleRow = { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13px", color: "#aaa", marginBottom: "10px" };
    const hint = { fontSize: "11px", color: "#666", margin: "-6px 0 10px 24px" };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Labels", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: "0 8px 4px" }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: field, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: lbl, children: "Title" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { style: txt, type: "text", value: (_p = (_o = props.config) === null || _o === void 0 ? void 0 : _o.title) !== null && _p !== void 0 ? _p : "Proximity Counts", placeholder: "Proximity Counts", onChange: e => set("title", e.target.value) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: field, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: lbl, children: "Start instruction" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { style: txt, type: "text", value: (_r = (_q = props.config) === null || _q === void 0 ? void 0 : _q.instructionStart) !== null && _r !== void 0 ? _r : "Click a feature on the map", placeholder: "Click a feature on the map", onChange: e => set("instructionStart", e.target.value) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: field, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: lbl, children: "Done instruction" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { style: txt, type: "text", value: (_t = (_s = props.config) === null || _s === void 0 ? void 0 : _s.instructionDone) !== null && _t !== void 0 ? _t : "Click another feature to update", placeholder: "Click another feature to update", onChange: e => set("instructionDone", e.target.value) })] })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Map", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { useMapWidgetIds: props.useMapWidgetIds, onSelect: onMapSelect }) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Layers", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: "0 8px 4px" }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: field, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: lbl, children: "Click layer" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { style: sel, value: (_v = (_u = props.config) === null || _u === void 0 ? void 0 : _u.schoolLayerName) !== null && _v !== void 0 ? _v : "", onChange: e => set("schoolLayerName", e.target.value), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "", children: "-- select --" }), layers.map(t => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: t, children: t }, t))] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: field, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { style: lbl, children: "Count layer" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { style: sel, value: (_x = (_w = props.config) === null || _w === void 0 ? void 0 : _w.wellLayerName) !== null && _x !== void 0 ? _x : "", onChange: e => set("wellLayerName", e.target.value), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "", children: "-- select --" }), layers.map(t => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: t, children: t }, t))] })] })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Buffer distances (miles)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: "0 8px 4px" }, children: [radii.map((r, i) => {
                            var _a, _b;
                            return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: field, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: lbl, children: ["Radius ", i + 1] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "number", style: { width: "70px", padding: "4px 6px", fontSize: "13px", border: "1px solid #ccc", borderRadius: "3px" }, value: r, min: "0.1", step: "0.1", onChange: e => updateRadius(i, e.target.value) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "color", value: (_b = (_a = colors[i]) !== null && _a !== void 0 ? _a : DEFAULT_COLORS[i]) !== null && _b !== void 0 ? _b : "#cccccc", onChange: e => updateColor(i, e.target.value), style: { width: "28px", height: "28px", padding: "1px", border: "1px solid #ccc", borderRadius: "3px", cursor: "pointer" } }), radii.length > 1 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: btn, onClick: () => removeRadius(i), children: "Remove" }))] })] }, i));
                        }), radii.length < 5 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: btn, onClick: addRadius, children: "+ Add radius" }))] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "User options", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: "0 8px 8px" }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: toggleRow, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: (_z = (_y = props.config) === null || _y === void 0 ? void 0 : _y.showDownloadButton) !== null && _z !== void 0 ? _z : false, onChange: e => set("showDownloadButton", e.target.checked) }), "Show CSV download button"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: hint, children: "Exports count-layer features within the largest buffer as CSV." }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { style: toggleRow, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "checkbox", checked: (_1 = (_0 = props.config) === null || _0 === void 0 ? void 0 : _0.allowRadiiEdit) !== null && _1 !== void 0 ? _1 : false, onChange: e => set("allowRadiiEdit", e.target.checked) }), "Allow users to edit radii"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: hint, children: "Shows radii controls in the widget so users can adjust distances and colors." })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.JimuMapViewComponent, { useMapWidgetId: (_2 = props.useMapWidgetIds) === null || _2 === void 0 ? void 0 : _2[0], onActiveViewChange: onActiveViewChange })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9idWZmZXItcXVlcnkvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7Ozs7Ozs7O0FDQUEsaUY7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKSztBQUU0QztBQUMvQjtBQUVyRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsNENBQUssQ0FBQztBQVMzQixNQUFNLGNBQWMsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUUvRSxNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQXNDLEVBQUUsRUFBRTs7SUFDekQsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxRQUFRLENBQVcsRUFBRSxDQUFDLENBQUM7SUFDbkQsTUFBTSxLQUFLLEdBQWEsd0JBQUMsV0FBSyxDQUFDLE1BQU0sMENBQUUsS0FBYSwwQ0FBRSxTQUFTLGtEQUFJLG1DQUFJLFdBQUssQ0FBQyxN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MENBQUUsa0JBQWtCLG1DQUFJLEtBQUssRUFDbEQsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUksZ0NBRTFELEVBQ1IsdUVBQUcsS0FBSyxFQUFFLElBQUksK0VBQW9FLEVBRWxGLDRFQUFPLEtBQUssRUFBRSxTQUFTLGFBQ3JCLDJFQUFPLElBQUksRUFBQyxVQUFVLEVBQ3BCLE9BQU8sRUFBRSxpQkFBSyxDQUFDLE1BQU0sMENBQUUsY0FBYyxtQ0FBSSxLQUFLLEVBQzlDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFJLGlDQUV0RCxFQUNSLHVFQUFHLEtBQUssRUFBRSxJQUFJLDZGQUFrRixJQUM1RixHQUNTLEVBRWpCLGdFQUFDLDZEQUFvQixJQUFDLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsR0FBSSxJQUN4RyxDQUNQLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixpRUFBZSxPQUFPLEVBQUM7QUFDZixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9idWZmZXItcXVlcnkvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgSW1tdXRhYmxlT2JqZWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgdHlwZSBBbGxXaWRnZXRTZXR0aW5nUHJvcHMgfSBmcm9tIFwiamltdS1mb3ItYnVpbGRlclwiO1xuaW1wb3J0IHsgTWFwV2lkZ2V0U2VsZWN0b3IsIFNldHRpbmdSb3csIFNldHRpbmdTZWN0aW9uIH0gZnJvbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuXG5jb25zdCB7IHVzZVN0YXRlIH0gPSBSZWFjdDtcblxuaW50ZXJmYWNlIENvbmZpZyB7XG4gIHNjaG9vbExheWVyTmFtZTogc3RyaW5nOyB3ZWxsTGF5ZXJOYW1lOiBzdHJpbmc7IHJhZGlpOiBudW1iZXJbXTsgY29sb3JzOiBzdHJpbmdbXTtcbiAgdGl0bGU6IHN0cmluZzsgaW5zdHJ1Y3Rpb25TdGFydDogc3RyaW5nOyBpbnN0cnVjdGlvbkRvbmU6IHN0cmluZztcbiAgc2hvd0Rvd25sb2FkQnV0dG9uOiBib29sZWFuOyBhbGxvd1JhZGlpRWRpdDogYm9vbGVhbjtcbn1cbnR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Q29uZmlnPjtcblxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSBbXCIjREU1NDFFXCIsIFwiI2Y3NzY0NFwiLCBcIiNGRkM4NTdcIiwgXCIjZmZlZTkyXCIsIFwiI2ZmZjBkMFwiXTtcblxuY29uc3QgU2V0dGluZyA9IChwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPElNQ29uZmlnPikgPT4ge1xuICBjb25zdCBbbGF5ZXJzLCBzZXRMYXllcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgcmFkaWk6IG51bWJlcltdID0gKHByb3BzLmNvbmZpZz8ucmFkaWkgYXMgYW55KT8uYXNNdXRhYmxlPy4oKSA/PyBwcm9wcy5jb25maWc/LnJhZGlpID8/IFswLjUsIDEsIDJdO1xuICBjb25zdCBjb2xvcnM6IHN0cmluZ1tdID0gKHByb3BzLmNvbmZpZz8uY29sb3JzIGFzIGFueSk/LmFzTXV0YWJsZT8uKCkgPz8gcHJvcHMuY29uZmlnPy5jb2xvcnMgPz8gREVGQVVMVF9DT0xPUlM7XG5cbiAgY29uc3Qgb25NYXBTZWxlY3QgPSAoaWRzOiBzdHJpbmdbXSkgPT4gcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCB1c2VNYXBXaWRnZXRJZHM6IGlkcyB9KTtcblxuICBjb25zdCBzZXQgPSAoa2V5OiBzdHJpbmcsIHZhbDogYW55KSA9PlxuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IGlkOiBwcm9wcy5pZCwgY29uZmlnOiBwcm9wcy5jb25maWcuc2V0KGtleSwgdmFsKSB9KTtcblxuICBjb25zdCBzZXRNdWx0aSA9ICh1cGRhdGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiB7XG4gICAgbGV0IGNmZyA9IHByb3BzLmNvbmZpZztcbiAgICBPYmplY3QuZW50cmllcyh1cGRhdGVzKS5mb3JFYWNoKChbaywgdl0pID0+IHsgY2ZnID0gY2ZnLnNldChrLCB2KTsgfSk7XG4gICAgcHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHByb3BzLmlkLCBjb25maWc6IGNmZyB9KTtcbiAgfTtcblxuICBjb25zdCBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGlmICgham12KSByZXR1cm47XG4gICAgY29uc3QgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGptdi52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgobDogYW55KSA9PiB7IGlmIChsLnRpdGxlKSB0aXRsZXMucHVzaChsLnRpdGxlKTsgfSk7XG4gICAgc2V0TGF5ZXJzKHRpdGxlcyk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUmFkaXVzID0gKGk6IG51bWJlciwgdmFsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gWy4uLnJhZGlpXTsgbmV4dFtpXSA9IHBhcnNlRmxvYXQodmFsKSB8fCAwLjE7IHNldChcInJhZGlpXCIsIG5leHQpO1xuICB9O1xuICBjb25zdCB1cGRhdGVDb2xvciA9IChpOiBudW1iZXIsIHZhbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IFsuLi5jb2xvcnNdOyBuZXh0W2ldID0gdmFsOyBzZXQoXCJjb2xvcnNcIiwgbmV4dCk7XG4gIH07XG4gIGNvbnN0IGFkZFJhZGl1cyA9ICgpID0+IHtcbiAgICBpZiAocmFkaWkubGVuZ3RoIDwgNSkge1xuICAgICAgc2V0TXVsdGkoe1xuICAgICAgICByYWRpaTogWy4uLnJhZGlpLCBNYXRoLm1heCguLi5yYWRpaSkgKyAwLjI1XSxcbiAgICAgICAgY29sb3JzOiBbLi4uY29sb3JzLCBERUZBVUxUX0NPTE9SU1tyYWRpaS5sZW5ndGhdID8/IFwiI2NjY2NjY1wiXVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVSYWRpdXMgPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgc2V0TXVsdGkoe1xuICAgICAgcmFkaWk6IHJhZGlpLmZpbHRlcigoXywgaikgPT4gaiAhPT0gaSksXG4gICAgICBjb2xvcnM6IGNvbG9ycy5maWx0ZXIoKF8sIGopID0+IGogIT09IGkpXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2VsOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiNHB4IDZweFwiLCBmb250U2l6ZTogXCIxM3B4XCIsIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfTtcbiAgY29uc3QgdHh0OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiNHB4IDZweFwiLCBmb250U2l6ZTogXCIxM3B4XCIsIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIsIGJveFNpemluZzogXCJib3JkZXItYm94XCIgfTtcbiAgY29uc3QgbGJsOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyBmb250U2l6ZTogXCIxMnB4XCIsIG1hcmdpbkJvdHRvbTogXCI0cHhcIiwgZGlzcGxheTogXCJibG9ja1wiLCBjb2xvcjogXCIjYWFhXCIgfTtcbiAgY29uc3QgZmllbGQ6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7IG1hcmdpbkJvdHRvbTogXCIxMnB4XCIgfTtcbiAgY29uc3QgYnRuOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0geyBwYWRkaW5nOiBcIjNweCA4cHhcIiwgZm9udFNpemU6IFwiMTJweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH07XG4gIGNvbnN0IHRvZ2dsZVJvdzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHsgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogXCI4cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgZm9udFNpemU6IFwiMTNweFwiLCBjb2xvcjogXCIjYWFhXCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfTtcbiAgY29uc3QgaGludDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHsgZm9udFNpemU6IFwiMTFweFwiLCBjb2xvcjogXCIjNjY2XCIsIG1hcmdpbjogXCItNnB4IDAgMTBweCAyNHB4XCIgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJMYWJlbHNcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjAgOHB4IDRweFwiIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2ZpZWxkfT5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGJsfT5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3R4dH0gdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuY29uZmlnPy50aXRsZSA/PyBcIlByb3hpbWl0eSBDb3VudHNcIn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm94aW1pdHkgQ291bnRzXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0KFwidGl0bGVcIiwgZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2ZpZWxkfT5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGJsfT5TdGFydCBpbnN0cnVjdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3R4dH0gdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuY29uZmlnPy5pbnN0cnVjdGlvblN0YXJ0ID8/IFwiQ2xpY2sgYSBmZWF0dXJlIG9uIHRoZSBtYXBcIn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDbGljayBhIGZlYXR1cmUgb24gdGhlIG1hcFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldChcImluc3RydWN0aW9uU3RhcnRcIiwgZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2ZpZWxkfT5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGJsfT5Eb25lIGluc3RydWN0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17dHh0fSB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb25maWc/Lmluc3RydWN0aW9uRG9uZSA/PyBcIkNsaWNrIGFub3RoZXIgZmVhdHVyZSB0byB1cGRhdGVcIn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDbGljayBhbm90aGVyIGZlYXR1cmUgdG8gdXBkYXRlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0KFwiaW5zdHJ1Y3Rpb25Eb25lXCIsIGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuXG4gICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9XCJNYXBcIj5cbiAgICAgICAgPFNldHRpbmdSb3c+PE1hcFdpZGdldFNlbGVjdG9yIHVzZU1hcFdpZGdldElkcz17cHJvcHMudXNlTWFwV2lkZ2V0SWRzfSBvblNlbGVjdD17b25NYXBTZWxlY3R9IC8+PC9TZXR0aW5nUm93PlxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiTGF5ZXJzXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIwIDhweCA0cHhcIiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtmaWVsZH0+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xibH0+Q2xpY2sgbGF5ZXI8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBzdHlsZT17c2VsfSB2YWx1ZT17cHJvcHMuY29uZmlnPy5zY2hvb2xMYXllck5hbWUgPz8gXCJcIn0gb25DaGFuZ2U9e2UgPT4gc2V0KFwic2Nob29sTGF5ZXJOYW1lXCIsIGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBzZWxlY3QgLS08L29wdGlvbj5cbiAgICAgICAgICAgICAge2xheWVycy5tYXAodCA9PiA8b3B0aW9uIGtleT17dH0gdmFsdWU9e3R9Pnt0fTwvb3B0aW9uPil9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtmaWVsZH0+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xibH0+Q291bnQgbGF5ZXI8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBzdHlsZT17c2VsfSB2YWx1ZT17cHJvcHMuY29uZmlnPy53ZWxsTGF5ZXJOYW1lID8/IFwiXCJ9IG9uQ2hhbmdlPXtlID0+IHNldChcIndlbGxMYXllck5hbWVcIiwgZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tIHNlbGVjdCAtLTwvb3B0aW9uPlxuICAgICAgICAgICAgICB7bGF5ZXJzLm1hcCh0ID0+IDxvcHRpb24ga2V5PXt0fSB2YWx1ZT17dH0+e3R9PC9vcHRpb24+KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG5cbiAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT1cIkJ1ZmZlciBkaXN0YW5jZXMgKG1pbGVzKVwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMCA4cHggNHB4XCIgfX0+XG4gICAgICAgICAge3JhZGlpLm1hcCgociwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXtmaWVsZH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGJsfT5SYWRpdXMge2kgKyAxfTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogXCI2cHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI3MHB4XCIsIHBhZGRpbmc6IFwiNHB4IDZweFwiLCBmb250U2l6ZTogXCIxM3B4XCIsIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLCBib3JkZXJSYWRpdXM6IFwiM3B4XCIgfX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyfSBtaW49XCIwLjFcIiBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVJhZGl1cyhpLCBlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29sb3JzW2ldID8/IERFRkFVTFRfQ09MT1JTW2ldID8/IFwiI2NjY2NjY1wifVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlQ29sb3IoaSwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjhweFwiLCBoZWlnaHQ6IFwiMjhweFwiLCBwYWRkaW5nOiBcIjFweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIiwgYm9yZGVyUmFkaXVzOiBcIjNweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19IC8+XG4gICAgICAgICAgICAgICAge3JhZGlpLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17YnRufSBvbkNsaWNrPXsoKSA9PiByZW1vdmVSYWRpdXMoaSl9PlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3JhZGlpLmxlbmd0aCA8IDUgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17YnRufSBvbkNsaWNrPXthZGRSYWRpdXN9PisgQWRkIHJhZGl1czwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiVXNlciBvcHRpb25zXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIwIDhweCA4cHhcIiB9fT5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9e3RvZ2dsZVJvd30+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17cHJvcHMuY29uZmlnPy5zaG93RG93bmxvYWRCdXR0b24gPz8gZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldChcInNob3dEb3dubG9hZEJ1dHRvblwiLCBlLnRhcmdldC5jaGVja2VkKX0gLz5cbiAgICAgICAgICAgIFNob3cgQ1NWIGRvd25sb2FkIGJ1dHRvblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHAgc3R5bGU9e2hpbnR9PkV4cG9ydHMgY291bnQtbGF5ZXIgZmVhdHVyZXMgd2l0aGluIHRoZSBsYXJnZXN0IGJ1ZmZlciBhcyBDU1YuPC9wPlxuXG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXt0b2dnbGVSb3d9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLmNvbmZpZz8uYWxsb3dSYWRpaUVkaXQgPz8gZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldChcImFsbG93UmFkaWlFZGl0XCIsIGUudGFyZ2V0LmNoZWNrZWQpfSAvPlxuICAgICAgICAgICAgQWxsb3cgdXNlcnMgdG8gZWRpdCByYWRpaVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHAgc3R5bGU9e2hpbnR9PlNob3dzIHJhZGlpIGNvbnRyb2xzIGluIHRoZSB3aWRnZXQgc28gdXNlcnMgY2FuIGFkanVzdCBkaXN0YW5jZXMgYW5kIGNvbG9ycy48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cblxuICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXtwcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXtvbkFjdGl2ZVZpZXdDaGFuZ2V9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nO1xuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=