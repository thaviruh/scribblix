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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Item: function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js\");\n/* __next_internal_client_entry_do_not_use__ Item auto */ \n\n\nconst Item = (param)=>{\n    let { id, label, onClick, icon: Icon, active, documentIcon, isSearch, level = 0, onExpand, expanded } = param;\n    const ChevronIcon = expanded ? _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: onClick,\n        role: \"button\",\n        style: {\n            paddingLeft: level ? \"${(level * 12) + 12}px\" : \"12px\"\n        },\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium\", active && \"bg-primary/5 text-primary\"),\n        children: [\n            !!id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                role: \"button\",\n                className: \"h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1\",\n                onClick: ()=>{},\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChevronIcon, {\n                    className: \"h-4 w-4 shrink-0 text-muted-foreground/50\"\n                }, void 0, false, {\n                    fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, undefined),\n            documentIcon ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shrink-0 mr-2 text-[18px]\",\n                children: documentIcon\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                className: \"shrink-0 h-[18px] mr-2 text-muted-foreground\"\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 61,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"truncate\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            isSearch && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"kbd\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(COM, {}, void 0, false, {\n                        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 67,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8obWFpbikvX2NvbXBvbmVudHMvaXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR2lDO0FBRW9DO0FBZ0I5RCxNQUFNRyxPQUFPO1FBQUMsRUFDakJDLEVBQUUsRUFDRkMsS0FBSyxFQUNMQyxPQUFPLEVBQ1BDLE1BQU1DLElBQUksRUFDVkMsTUFBTSxFQUNOQyxZQUFZLEVBQ1pDLFFBQVEsRUFDUkMsUUFBUSxDQUFDLEVBQ1RDLFFBQVEsRUFDUkMsUUFBUSxFQUNBO0lBQ1IsTUFBTUMsY0FBY0QsV0FBV2Isb0dBQVdBLEdBQUdDLG9HQUFZQTtJQUV6RCxxQkFDSSw4REFBQ2M7UUFDR1YsU0FBU0E7UUFDVFcsTUFBSztRQUNMQyxPQUFPO1lBQ0hDLGFBQWFQLFFBQVEsMkJBQTBCO1FBQ25EO1FBQ0FRLFdBQVdwQiw4Q0FBRUEsQ0FDVCxzSEFDQVMsVUFBVTs7WUFJYixDQUFDLENBQUNMLG9CQUNDLDhEQUFDWTtnQkFBSUMsTUFBSztnQkFBU0csV0FBVTtnQkFBa0VkLFNBQVMsS0FBTzswQkFDM0csNEVBQUNTO29CQUNHSyxXQUFVOzs7Ozs7Ozs7OztZQUlyQlYsNkJBQ0csOERBQUNNO2dCQUFJSSxXQUFVOzBCQUNWVjs7Ozs7MENBR0wsOERBQUNGO2dCQUFLWSxXQUFVOzs7Ozs7MEJBRXBCLDhEQUFDQztnQkFBS0QsV0FBVTswQkFDWGY7Ozs7OztZQUVKTSwwQkFDRyw4REFBQ1c7MEJBQ0csNEVBQUNEOzhCQUNHLDRFQUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCLEVBQUM7S0FyRFlwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKG1haW4pL19jb21wb25lbnRzL2l0ZW0udHN4P2QzYTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IElkIH0gZnJvbSBcIkAvY29udmV4L19nZW5lcmF0ZWQvZGF0YU1vZGVsXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5pbXBvcnQgeyBDaGV2cm9uRG93biwgQ2hldnJvblJpZ2h0LCBMdWNpZGVJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgaXNTZWEgfSBmcm9tIFwibm9kZTpzZWFcIjtcblxuaW50ZXJmYWNlIEl0ZW1Qcm9wcyB7XG4gICAgaWQ/OiBJZCA8XCJkb2N1bWVudFwiPjtcbiAgICBkb2N1bWVudEljb24/OiBzdHJpbmc7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBleHBhbmRlZD86IGJvb2xlYW47XG4gICAgaXNTZWFyY2g/OiBib29sZWFuO1xuICAgIGxldmVsPzogbnVtYmVyO1xuICAgIG9uRXhwYW5kPzogKCkgPT4gdm9pZDtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgaWNvbjogTHVjaWRlSWNvbjtcbn07XG5cbmV4cG9ydCBjb25zdCBJdGVtID0gKHtcbiAgICBpZCxcbiAgICBsYWJlbCxcbiAgICBvbkNsaWNrLFxuICAgIGljb246IEljb24sXG4gICAgYWN0aXZlLFxuICAgIGRvY3VtZW50SWNvbixcbiAgICBpc1NlYXJjaCxcbiAgICBsZXZlbCA9IDAsXG4gICAgb25FeHBhbmQsXG4gICAgZXhwYW5kZWQsXG59OiBJdGVtUHJvcHMpID0+IHtcbiAgICBjb25zdCBDaGV2cm9uSWNvbiA9IGV4cGFuZGVkID8gQ2hldnJvbkRvd24gOiBDaGV2cm9uUmlnaHQ7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGxldmVsID8gJyR7KGxldmVsICogMTIpICsgMTJ9cHgnIDpcIjEycHhcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgXCJncm91cCBtaW4taC1bMjdweF0gdGV4dC1zbSBweS0xIHByLTMgdy1mdWxsIGhvdmVyOmJnLXByaW1hcnkvNSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LW11dGVkLWZvcmVncm91bmQgZm9udC1tZWRpdW1cIixcbiAgICAgICAgICAgICAgICBhY3RpdmUgJiYgXCJiZy1wcmltYXJ5LzUgdGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsvKiBUaGlzIHt9IG1ha2VzIGl0IGJvb2xlYW4gKi99XG4gICAgICAgICAgICB7ISFpZCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaC1mdWxsIHJvdW5kZWQtc20gaG92ZXI6YmctbmV1dHJhbC0zMDAgZGFyazpiZy1uZXV0cmFsLTYwMCBtci0xXCIgb25DbGljaz17KCkgPT4ge319PlxuICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkljb24gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHNocmluay0wIHRleHQtbXV0ZWQtZm9yZWdyb3VuZC81MFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfSBcbiAgICAgICAgICAgIHtkb2N1bWVudEljb24gPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaHJpbmstMCBtci0yIHRleHQtWzE4cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkb2N1bWVudEljb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApOiAoXG4gICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwic2hyaW5rLTAgaC1bMThweF0gbXItMiB0ZXh0LW11dGVkLWZvcmVncm91bmRcIi8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB7aXNTZWFyY2ggJiYgKFxuICAgICAgICAgICAgICAgIDxrYmQ+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENPTT48L0NPTT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwva2JkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImNuIiwiQ2hldnJvbkRvd24iLCJDaGV2cm9uUmlnaHQiLCJJdGVtIiwiaWQiLCJsYWJlbCIsIm9uQ2xpY2siLCJpY29uIiwiSWNvbiIsImFjdGl2ZSIsImRvY3VtZW50SWNvbiIsImlzU2VhcmNoIiwibGV2ZWwiLCJvbkV4cGFuZCIsImV4cGFuZGVkIiwiQ2hldnJvbkljb24iLCJkaXYiLCJyb2xlIiwic3R5bGUiLCJwYWRkaW5nTGVmdCIsImNsYXNzTmFtZSIsInNwYW4iLCJrYmQiLCJDT00iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(main)/_components/item.tsx\n"));

/***/ })

});