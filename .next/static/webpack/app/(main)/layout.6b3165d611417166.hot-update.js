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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Item: function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js\");\n/* __next_internal_client_entry_do_not_use__ Item auto */ \n\n\nconst Item = (param)=>{\n    let { id, label, onClick, icon: Icon, active, documnetIcon, isSearch, level = 0, onExpand, expanded } = param;\n    const ChevronIcon = expanded ? _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: onClick,\n        role: \"button\",\n        style: {\n            paddingLeft: level ? \"${(level * 12) + 12}px\" : \"12px\"\n        },\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium\", active && \"bg-primary/5 text-primary\"),\n        children: [\n            !!id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                role: \"button\",\n                className: \"h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1\",\n                onClick: ()=>{},\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChevronIcon, {\n                    className: \"h-4 w-4 shrink-0 text-muted-foreground/50\"\n                }, void 0, false, {\n                    fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, undefined),\n            documentIcon,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                className: \"shrink-0 h-[18px] mr-2 text-muted-foreground\"\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"truncate\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8obWFpbikvX2NvbXBvbmVudHMvaXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR2lDO0FBRW9DO0FBZTlELE1BQU1HLE9BQU87UUFBQyxFQUNqQkMsRUFBRSxFQUNGQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsTUFBTUMsSUFBSSxFQUNWQyxNQUFNLEVBQ05DLFlBQVksRUFDWkMsUUFBUSxFQUNSQyxRQUFRLENBQUMsRUFDVEMsUUFBUSxFQUNSQyxRQUFRLEVBQ0E7SUFDUixNQUFNQyxjQUFjRCxXQUFXYixvR0FBV0EsR0FBR0Msb0dBQVlBO0lBRXpELHFCQUNJLDhEQUFDYztRQUNHVixTQUFTQTtRQUNUVyxNQUFLO1FBQ0xDLE9BQU87WUFDSEMsYUFBYVAsUUFBUSwyQkFBMEI7UUFDbkQ7UUFDQVEsV0FBV3BCLDhDQUFFQSxDQUNULHNIQUNBUyxVQUFVOztZQUliLENBQUMsQ0FBQ0wsb0JBQ0MsOERBQUNZO2dCQUFJQyxNQUFLO2dCQUFTRyxXQUFVO2dCQUFrRWQsU0FBUyxLQUFPOzBCQUMzRyw0RUFBQ1M7b0JBQ0dLLFdBQVU7Ozs7Ozs7Ozs7O1lBSXJCQzswQkFDRCw4REFBQ2I7Z0JBQUtZLFdBQVU7Ozs7OzswQkFDaEIsOERBQUNFO2dCQUFLRixXQUFVOzBCQUNYZjs7Ozs7Ozs7Ozs7O0FBSWpCLEVBQUM7S0F6Q1lGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8obWFpbikvX2NvbXBvbmVudHMvaXRlbS50c3g/ZDNhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgSWQgfSBmcm9tIFwiQC9jb252ZXgvX2dlbmVyYXRlZC9kYXRhTW9kZWxcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmltcG9ydCB7IENoZXZyb25Eb3duLCBDaGV2cm9uUmlnaHQsIEx1Y2lkZUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuICAgIGlkPzogSWQgPFwiZG9jdW1lbnRcIj47XG4gICAgZG9jdW1uZXRJY29uPzogc3RyaW5nO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgZXhwYW5kZWQ/OiBib29sZWFuO1xuICAgIGlzU2VhcmNoPzogYm9vbGVhbjtcbiAgICBsZXZlbD86IG51bWJlcjtcbiAgICBvbkV4cGFuZD86ICgpID0+IHZvaWQ7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIGljb246IEx1Y2lkZUljb247XG59O1xuXG5leHBvcnQgY29uc3QgSXRlbSA9ICh7XG4gICAgaWQsXG4gICAgbGFiZWwsXG4gICAgb25DbGljayxcbiAgICBpY29uOiBJY29uLFxuICAgIGFjdGl2ZSxcbiAgICBkb2N1bW5ldEljb24sXG4gICAgaXNTZWFyY2gsXG4gICAgbGV2ZWwgPSAwLFxuICAgIG9uRXhwYW5kLFxuICAgIGV4cGFuZGVkLFxufTogSXRlbVByb3BzKSA9PiB7XG4gICAgY29uc3QgQ2hldnJvbkljb24gPSBleHBhbmRlZCA/IENoZXZyb25Eb3duIDogQ2hldnJvblJpZ2h0O1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBsZXZlbCA/ICckeyhsZXZlbCAqIDEyKSArIDEyfXB4JyA6XCIxMnB4XCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgIFwiZ3JvdXAgbWluLWgtWzI3cHhdIHRleHQtc20gcHktMSBwci0zIHctZnVsbCBob3ZlcjpiZy1wcmltYXJ5LzUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgYWN0aXZlICYmIFwiYmctcHJpbWFyeS81IHRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgICB7LyogVGhpcyB7fSBtYWtlcyBpdCBib29sZWFuICovfVxuICAgICAgICAgICAgeyEhaWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImgtZnVsbCByb3VuZGVkLXNtIGhvdmVyOmJnLW5ldXRyYWwtMzAwIGRhcms6YmctbmV1dHJhbC02MDAgbXItMVwiIG9uQ2xpY2s9eygpID0+IHt9fT5cbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25JY29uIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBzaHJpbmstMCB0ZXh0LW11dGVkLWZvcmVncm91bmQvNTBcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX0gXG4gICAgICAgICAgICB7ZG9jdW1lbnRJY29uIH1cbiAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInNocmluay0wIGgtWzE4cHhdIG1yLTIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJjbiIsIkNoZXZyb25Eb3duIiwiQ2hldnJvblJpZ2h0IiwiSXRlbSIsImlkIiwibGFiZWwiLCJvbkNsaWNrIiwiaWNvbiIsIkljb24iLCJhY3RpdmUiLCJkb2N1bW5ldEljb24iLCJpc1NlYXJjaCIsImxldmVsIiwib25FeHBhbmQiLCJleHBhbmRlZCIsIkNoZXZyb25JY29uIiwiZGl2Iiwicm9sZSIsInN0eWxlIiwicGFkZGluZ0xlZnQiLCJjbGFzc05hbWUiLCJkb2N1bWVudEljb24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(main)/_components/item.tsx\n"));

/***/ })

});