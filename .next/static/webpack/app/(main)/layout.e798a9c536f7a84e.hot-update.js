"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/layout",{

/***/ "(app-pages-browser)/./app/(main)/_components/item.tsx":
/*!*****************************************!*\
  !*** ./app/(main)/_components/item.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Item: function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js\");\n/* __next_internal_client_entry_do_not_use__ Item auto */ \n\nconst Item = (param)=>{\n    let { id, label, onClick, icon: Icon, active, documnetIcon, isSearch, level = 0, onExpand, expanded } = param;\n    const ChevronIcon = expanded ? _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: onClick,\n        role: \"button\",\n        style: {\n            paddingLeft: \"12px\"\n        },\n        className: \"group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                className: \"shrink-0 h-[18px] mr-2 text-muted-foreground\"\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"truncate\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8obWFpbikvX2NvbXBvbmVudHMvaXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJcUU7QUFlOUQsTUFBTUUsT0FBTztRQUFDLEVBQ2pCQyxFQUFFLEVBQ0ZDLEtBQUssRUFDTEMsT0FBTyxFQUNQQyxNQUFNQyxJQUFJLEVBQ1ZDLE1BQU0sRUFDTkMsWUFBWSxFQUNaQyxRQUFRLEVBQ1JDLFFBQVEsQ0FBQyxFQUNUQyxRQUFRLEVBQ1JDLFFBQVEsRUFDQTtJQUNSLE1BQU1DLGNBQWNELFdBQVdiLG9HQUFXQSxHQUFHQyxvR0FBWUE7SUFFekQscUJBQ0ksOERBQUNjO1FBQ0dWLFNBQVNBO1FBQ1RXLE1BQUs7UUFDTEMsT0FBTztZQUNIQyxhQUFhO1FBQU07UUFDdkJDLFdBQVU7OzBCQUVWLDhEQUFDWjtnQkFBS1ksV0FBVTs7Ozs7OzBCQUNoQiw4REFBQ0M7Z0JBQUtELFdBQVU7MEJBQ1hmOzs7Ozs7Ozs7Ozs7QUFJakIsRUFBQztLQTVCWUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhtYWluKS9fY29tcG9uZW50cy9pdGVtLnRzeD9kM2EzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBJZCB9IGZyb20gXCJAL2NvbnZleC9fZ2VuZXJhdGVkL2RhdGFNb2RlbFwiO1xuXG5pbXBvcnQgeyBDaGV2cm9uRG93biwgQ2hldnJvblJpZ2h0LCBMdWNpZGVJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgICBpZD86IElkIDxcImRvY3VtZW50XCI+O1xuICAgIGRvY3VtbmV0SWNvbj86IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGV4cGFuZGVkPzogYm9vbGVhbjtcbiAgICBpc1NlYXJjaD86IGJvb2xlYW47XG4gICAgbGV2ZWw/OiBudW1iZXI7XG4gICAgb25FeHBhbmQ/OiAoKSA9PiB2b2lkO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBpY29uOiBMdWNpZGVJY29uO1xufTtcblxuZXhwb3J0IGNvbnN0IEl0ZW0gPSAoe1xuICAgIGlkLFxuICAgIGxhYmVsLFxuICAgIG9uQ2xpY2ssXG4gICAgaWNvbjogSWNvbixcbiAgICBhY3RpdmUsXG4gICAgZG9jdW1uZXRJY29uLFxuICAgIGlzU2VhcmNoLFxuICAgIGxldmVsID0gMCxcbiAgICBvbkV4cGFuZCxcbiAgICBleHBhbmRlZCxcbn06IEl0ZW1Qcm9wcykgPT4ge1xuICAgIGNvbnN0IENoZXZyb25JY29uID0gZXhwYW5kZWQgPyBDaGV2cm9uRG93biA6IENoZXZyb25SaWdodDtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMnB4XCJ9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgbWluLWgtWzI3cHhdIHRleHQtc20gcHktMSBwci0zIHctZnVsbCBob3ZlcjpiZy1wcmltYXJ5LzUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwic2hyaW5rLTAgaC1bMThweF0gbXItMiB0ZXh0LW11dGVkLWZvcmVncm91bmRcIi8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkNoZXZyb25Eb3duIiwiQ2hldnJvblJpZ2h0IiwiSXRlbSIsImlkIiwibGFiZWwiLCJvbkNsaWNrIiwiaWNvbiIsIkljb24iLCJhY3RpdmUiLCJkb2N1bW5ldEljb24iLCJpc1NlYXJjaCIsImxldmVsIiwib25FeHBhbmQiLCJleHBhbmRlZCIsIkNoZXZyb25JY29uIiwiZGl2Iiwicm9sZSIsInN0eWxlIiwicGFkZGluZ0xlZnQiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(main)/_components/item.tsx\n"));

/***/ })

});