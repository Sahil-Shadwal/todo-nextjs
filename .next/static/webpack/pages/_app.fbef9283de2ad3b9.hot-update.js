"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ \"./components/Modal.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openModal = ref[0], setOpenModal = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            openModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setOpenModal: setOpenModal\n            }, void 0, false, {\n                fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/Header.js\",\n                lineNumber: 9,\n                columnNumber: 27\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sticky top-0 w-full left-0 bg-inherit flex items-center justify-center p-4 border-b border-solid border-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl select-none sm:text-6xl\",\n                        children: \"TODO LIST\"\n                    }, void 0, false, {\n                        fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/Header.js\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: function() {\n                            return setOpenModal(true);\n                        },\n                        className: \"fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl\"\n                    }, void 0, false, {\n                        fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/Header.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/Header.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUN2Qjs7QUFFWixTQUFTSSxNQUFNLEdBQUc7O0lBQzdCLElBQWtDRixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSnJELFNBSW9CLEdBQWtCQSxHQUFlLEdBQWpDLEVBSnBCLFlBSWtDLEdBQUlBLEdBQWUsR0FBbkI7SUFFOUIscUJBQ0k7O1lBQ0tHLFNBQVMsa0JBQUksOERBQUNGLDhDQUFLO2dCQUFDRyxZQUFZLEVBQUVBLFlBQVk7Ozs7O29CQUFJOzBCQUNuRCw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLCtHQUFnSDs7a0NBQzNILDhEQUFDQyxJQUFFO3dCQUFDRCxTQUFTLEVBQUMsa0NBQW1DO2tDQUFDLFdBQVM7Ozs7OzRCQUFLO2tDQUNoRSw4REFBQ0UsR0FBQzt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNTCxZQUFZLENBQUMsSUFBSSxDQUFDO3lCQUFBO3dCQUFFRSxTQUFTLEVBQUMsbUZBQW1GOzs7Ozs0QkFBSzs7Ozs7O29CQUN0STs7b0JBQ1AsQ0FDTjtDQUNKO0dBWnVCSixNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge29wZW5Nb2RhbCAmJiA8TW9kYWwgc2V0T3Blbk1vZGFsPXtzZXRPcGVuTW9kYWx9IC8+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0aWNreSB0b3AtMCB3LWZ1bGwgbGVmdC0wIGJnLWluaGVyaXQgZmxleCBpdGVtcy1jZW50ZXIgIGp1c3RpZnktY2VudGVyIHAtNCBib3JkZXItYiBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlJz5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCAgc2VsZWN0LW5vbmUgc206dGV4dC02eGwnPlRPRE8gTElTVDwvaDE+XG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4gc2V0T3Blbk1vZGFsKHRydWUpfSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS11c2VyIHRleHQteGwgZHVyYXRpb24tMzAwIGhvdmVyOm9wYWNpdHktNDAgY3Vyc29yLXBvaW50ZXIgc206dGV4dC0zeGxcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb2RhbCIsIkhlYWRlciIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});