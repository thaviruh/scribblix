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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Item: function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js\");\n/* __next_internal_client_entry_do_not_use__ Item auto */ \n\n\nconst Item = (param)=>{\n    let { id, label, onClick, icon: Icon, active, documnetIcon, isSearch, level = 0, onExpand, expanded } = param;\n    const ChevronIcon = expanded ? _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : _barrel_optimize_names_ChevronDown_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: onClick,\n        role: \"button\",\n        style: {\n            paddingLeft: level ? \"${(level * 12) + 12}px\" : \"12px\"\n        },\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium\", active && \"bg-primary/5 text-primary\"),\n        children: [\n            !!id,\n            \" This \",\n            \" makes it boolean\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                className: \"shrink-0 h-[18px] mr-2 text-muted-foreground\"\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"truncate\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thaviruhettiarachchi/Desktop/Developments/scribblix/app/(main)/_components/item.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8obWFpbikvX2NvbXBvbmVudHMvaXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR2lDO0FBRW9DO0FBZTlELE1BQU1HLE9BQU87UUFBQyxFQUNqQkMsRUFBRSxFQUNGQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsTUFBTUMsSUFBSSxFQUNWQyxNQUFNLEVBQ05DLFlBQVksRUFDWkMsUUFBUSxFQUNSQyxRQUFRLENBQUMsRUFDVEMsUUFBUSxFQUNSQyxRQUFRLEVBQ0E7SUFDUixNQUFNQyxjQUFjRCxXQUFXYixvR0FBV0EsR0FBR0Msb0dBQVlBO0lBRXpELHFCQUNJLDhEQUFDYztRQUNHVixTQUFTQTtRQUNUVyxNQUFLO1FBQ0xDLE9BQU87WUFDSEMsYUFBYVAsUUFBUSwyQkFBMEI7UUFDbkQ7UUFDQVEsV0FBV3BCLDhDQUFFQSxDQUNULHNIQUNBUyxVQUFVOztZQUliLENBQUMsQ0FBQ0w7WUFBRztZQUFROzBCQUNkLDhEQUFDSTtnQkFBS1ksV0FBVTs7Ozs7OzBCQUNoQiw4REFBQ0M7Z0JBQUtELFdBQVU7MEJBQ1hmOzs7Ozs7Ozs7Ozs7QUFJakIsRUFBQztLQWxDWUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhtYWluKS9fY29tcG9uZW50cy9pdGVtLnRzeD9kM2EzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBJZCB9IGZyb20gXCJAL2NvbnZleC9fZ2VuZXJhdGVkL2RhdGFNb2RlbFwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuaW1wb3J0IHsgQ2hldnJvbkRvd24sIENoZXZyb25SaWdodCwgTHVjaWRlSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW50ZXJmYWNlIEl0ZW1Qcm9wcyB7XG4gICAgaWQ/OiBJZCA8XCJkb2N1bWVudFwiPjtcbiAgICBkb2N1bW5ldEljb24/OiBzdHJpbmc7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBleHBhbmRlZD86IGJvb2xlYW47XG4gICAgaXNTZWFyY2g/OiBib29sZWFuO1xuICAgIGxldmVsPzogbnVtYmVyO1xuICAgIG9uRXhwYW5kPzogKCkgPT4gdm9pZDtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgaWNvbjogTHVjaWRlSWNvbjtcbn07XG5cbmV4cG9ydCBjb25zdCBJdGVtID0gKHtcbiAgICBpZCxcbiAgICBsYWJlbCxcbiAgICBvbkNsaWNrLFxuICAgIGljb246IEljb24sXG4gICAgYWN0aXZlLFxuICAgIGRvY3VtbmV0SWNvbixcbiAgICBpc1NlYXJjaCxcbiAgICBsZXZlbCA9IDAsXG4gICAgb25FeHBhbmQsXG4gICAgZXhwYW5kZWQsXG59OiBJdGVtUHJvcHMpID0+IHtcbiAgICBjb25zdCBDaGV2cm9uSWNvbiA9IGV4cGFuZGVkID8gQ2hldnJvbkRvd24gOiBDaGV2cm9uUmlnaHQ7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGxldmVsID8gJyR7KGxldmVsICogMTIpICsgMTJ9cHgnIDpcIjEycHhcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgXCJncm91cCBtaW4taC1bMjdweF0gdGV4dC1zbSBweS0xIHByLTMgdy1mdWxsIGhvdmVyOmJnLXByaW1hcnkvNSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LW11dGVkLWZvcmVncm91bmQgZm9udC1tZWRpdW1cIixcbiAgICAgICAgICAgICAgICBhY3RpdmUgJiYgXCJiZy1wcmltYXJ5LzUgdGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeyEhaWR9IFRoaXMge30gbWFrZXMgaXQgYm9vbGVhblxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwic2hyaW5rLTAgaC1bMThweF0gbXItMiB0ZXh0LW11dGVkLWZvcmVncm91bmRcIi8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImNuIiwiQ2hldnJvbkRvd24iLCJDaGV2cm9uUmlnaHQiLCJJdGVtIiwiaWQiLCJsYWJlbCIsIm9uQ2xpY2siLCJpY29uIiwiSWNvbiIsImFjdGl2ZSIsImRvY3VtbmV0SWNvbiIsImlzU2VhcmNoIiwibGV2ZWwiLCJvbkV4cGFuZCIsImV4cGFuZGVkIiwiQ2hldnJvbkljb24iLCJkaXYiLCJyb2xlIiwic3R5bGUiLCJwYWRkaW5nTGVmdCIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(main)/_components/item.tsx\n"));

/***/ })

});