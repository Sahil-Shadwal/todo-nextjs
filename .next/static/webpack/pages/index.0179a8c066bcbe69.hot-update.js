"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UserDashboard.js":
/*!*************************************!*\
  !*** ./components/UserDashboard.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserDashboard; }\n/* harmony export */ });\n/* harmony import */ var _home_sahilshadwal_Desktop_Assignment_todoapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_sahilshadwal_Desktop_Assignment_todoapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_sahilshadwal_Desktop_Assignment_todoapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _TodoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoCard */ \"./components/TodoCard.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _hooks_fetchTodos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/fetchTodos */ \"./hooks/fetchTodos.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction UserDashboard() {\n    var _this = this;\n    var handleAddEdit = function handleAddEdit(todoKey) {\n        return function() {\n            console.log(todos[todoKey]);\n            console.log(\"bannan\");\n            setEdit(todoKey);\n            setEdittedValue(todos[todoKey]);\n        };\n    };\n    var handleDelete = function handleDelete(todoKey) {\n        return _asyncToGenerator(_home_sahilshadwal_Desktop_Assignment_todoapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tempObj, userRef;\n            return _home_sahilshadwal_Desktop_Assignment_todoapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        tempObj = _objectSpread({}, todos);\n                        delete tempObj[todoKey];\n                        setTodos(tempObj);\n                        userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"users\", currentUser.uid);\n                        _ctx.next = 6;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)(userRef, {\n                            \"todos\": _defineProperty({}, todoKey, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.deleteField)())\n                        }, {\n                            merge: true\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n    };\n    _s();\n    var ref = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)(), userInfo = ref.userInfo, currentUser = ref.currentUser;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), edit = ref1[0], setEdit = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), todo1 = ref2[0], setTodo = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), edittedValue = ref3[0], setEdittedValue = ref3[1];\n    var ref4 = (0,_hooks_fetchTodos__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(), todos = ref4.todos, setTodos = ref4.setTodos, loading = ref4.loading, error = ref4.error;\n    console.log(todos);\n    function handleAddTodo() {\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function _handleAddTodo() {\n        _handleAddTodo = // useEffect(() => {\n        //     if (!userInfo || Object.keys(userInfo).length === 0) {\n        //         setAddTodo(true)\n        //     }\n        // }, [userInfo])\n        _asyncToGenerator(_home_sahilshadwal_Desktop_Assignment_todoapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var _Math, newKey, userRef;\n            return _home_sahilshadwal_Desktop_Assignment_todoapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        if (todo1) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        newKey = Object.keys(todos).length === 0 ? 1 : (_Math = Math).max.apply(_Math, _toConsumableArray(Object.keys(todos))) + 1;\n                        setTodos(_objectSpread({}, todos, _defineProperty({}, newKey, todo1)));\n                        userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"users\", currentUser.uid);\n                        _ctx.next = 8;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)(userRef, {\n                            \"todos\": _defineProperty({}, newKey, todo1)\n                        }, {\n                            merge: true\n                        });\n                    case 8:\n                        setTodo(\"\");\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function handleEditTodo() {\n        return _handleEditTodo.apply(this, arguments);\n    }\n    function _handleEditTodo() {\n        _handleEditTodo = _asyncToGenerator(_home_sahilshadwal_Desktop_Assignment_todoapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var newKey, userRef;\n            return _home_sahilshadwal_Desktop_Assignment_todoapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (edittedValue) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 2:\n                        newKey = edit;\n                        setTodos(_objectSpread({}, todos, _defineProperty({}, newKey, edittedValue)));\n                        userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"users\", currentUser.uid);\n                        _ctx.next = 7;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)(userRef, {\n                            \"todos\": _defineProperty({}, newKey, edittedValue)\n                        }, {\n                            merge: true\n                        });\n                    case 7:\n                        setEdit(null);\n                        setEdittedValue(\"\");\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleEditTodo.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-stretch\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter todo\",\n                        value: todo1,\n                        onChange: function(e) {\n                            return setTodo(e.target.value);\n                        },\n                        className: \"outline-none p-3 text-base sm:text-lg text-slate-900 flex-1\"\n                    }, void 0, false, {\n                        fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/UserDashboard.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleAddTodo,\n                        className: \"w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40\",\n                        children: \"ADD\"\n                    }, void 0, false, {\n                        fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/UserDashboard.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/UserDashboard.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-1 grid place-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                    className: \"fa-solid fa-spinner animate-spin text-6xl\"\n                }, void 0, false, {\n                    fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/UserDashboard.js\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/UserDashboard.js\",\n                lineNumber: 84,\n                columnNumber: 28\n            }, this),\n            !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: Object.keys(todos || {}).map(function(todo, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TodoCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        handleEditTodo: handleEditTodo,\n                        handleAddEdit: handleAddEdit,\n                        edit: edit,\n                        todoKey: todo,\n                        edittedValue: edittedValue,\n                        setEdittedValue: setEdittedValue,\n                        handleDelete: handleDelete,\n                        children: todos[todo]\n                    }, i, false, {\n                        fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/UserDashboard.js\",\n                        lineNumber: 91,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sahilshadwal/Desktop/Assignment/todoapp/components/UserDashboard.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, this);\n};\n_s(UserDashboard, \"iJb+qoeVZl4efd7dh9metuTqWcA=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth,\n        _hooks_fetchTodos__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = UserDashboard;\nvar _c;\n$RefreshReg$(_c, \"UserDashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJEYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNGO0FBQ2Y7QUFDNEI7QUFDN0I7QUFDZTs7QUFFaEMsU0FBU1UsYUFBYSxHQUFHOztRQTZDM0JDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxPQUFPLEVBQUU7UUFDNUIsT0FBTyxXQUFNO1lBQ1RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUNILE9BQU8sQ0FBQyxDQUFDO1lBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDckJFLE9BQU8sQ0FBQ0osT0FBTyxDQUFDO1lBQ2hCSyxlQUFlLENBQUNGLEtBQUssQ0FBQ0gsT0FBTyxDQUFDLENBQUM7U0FDbEM7S0FDSjtRQUVRTSxZQUFZLEdBQXJCLFNBQVNBLFlBQVksQ0FBQ04sT0FBTyxFQUFFO1FBQzNCLE9BQU8sOExBQVk7Z0JBQ1RPLE9BQU8sRUFJUEMsT0FBTzs7Ozt3QkFKUEQsT0FBTyxHQUFHLGtCQUFLSixLQUFLLENBQUU7d0JBQzVCLE9BQU9JLE9BQU8sQ0FBQ1AsT0FBTyxDQUFDO3dCQUV2QlMsUUFBUSxDQUFDRixPQUFPLENBQUM7d0JBQ1hDLE9BQU8sR0FBR2YsdURBQUcsQ0FBQ0cseUNBQUUsRUFBRSxPQUFPLEVBQUVjLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDOzsrQkFDM0NqQiwwREFBTSxDQUFDYyxPQUFPLEVBQUU7NEJBQ2xCLE9BQU8sRUFDSCxvQkFBQ1IsT0FBTyxFQUFHTCwrREFBVyxFQUFFO3lCQUUvQixFQUFFOzRCQUFFaUIsS0FBSyxFQUFFLElBQUk7eUJBQUUsQ0FBQzs7Ozs7O1NBRXRCO0tBQ0o7O0lBbkVELElBQWtDckIsR0FBUyxHQUFUQSw2REFBTyxFQUFFLEVB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OztRQUNDUCx5REFBTztRQUtHTSx5REFBYTs7O0FBTnJDQyxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlckRhc2hib2FyZC5qcz9lNTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCdcbmltcG9ydCBUb2RvQ2FyZCBmcm9tICcuL1RvZG9DYXJkJ1xuaW1wb3J0IHsgZG9jLCBzZXREb2MsIGRlbGV0ZUZpZWxkIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSdcbmltcG9ydCB1c2VGZXRjaFRvZG9zIGZyb20gJy4uL2hvb2tzL2ZldGNoVG9kb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJEYXNoYm9hcmQoKSB7XG4gICAgY29uc3QgeyB1c2VySW5mbywgY3VycmVudFVzZXIgfSA9IHVzZUF1dGgoKVxuICAgIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW3RvZG8sIHNldFRvZG9dID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2VkaXR0ZWRWYWx1ZSwgc2V0RWRpdHRlZFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgeyB0b2Rvcywgc2V0VG9kb3MsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VGZXRjaFRvZG9zKClcblxuXG5cbiAgICBjb25zb2xlLmxvZyh0b2RvcylcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGlmICghdXNlckluZm8gfHwgT2JqZWN0LmtleXModXNlckluZm8pLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vICAgICAgICAgc2V0QWRkVG9kbyh0cnVlKVxuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW3VzZXJJbmZvXSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFkZFRvZG8oKSB7XG4gICAgICAgIGlmICghdG9kbykgeyByZXR1cm4gfVxuICAgICAgICBjb25zdCBuZXdLZXkgPSBPYmplY3Qua2V5cyh0b2RvcykubGVuZ3RoID09PSAwID8gMSA6IE1hdGgubWF4KC4uLk9iamVjdC5rZXlzKHRvZG9zKSkgKyAxXG4gICAgICAgIHNldFRvZG9zKHsgLi4udG9kb3MsIFtuZXdLZXldOiB0b2RvIH0pXG4gICAgICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZGIsICd1c2VycycsIGN1cnJlbnRVc2VyLnVpZClcbiAgICAgICAgYXdhaXQgc2V0RG9jKHVzZXJSZWYsIHtcbiAgICAgICAgICAgICd0b2Rvcyc6IHtcbiAgICAgICAgICAgICAgICBbbmV3S2V5XTogdG9kb1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7IG1lcmdlOiB0cnVlIH0pXG4gICAgICAgIHNldFRvZG8oJycpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRWRpdFRvZG8oKSB7XG4gICAgICAgIGlmICghZWRpdHRlZFZhbHVlKSB7IHJldHVybiB9XG4gICAgICAgIGNvbnN0IG5ld0tleSA9IGVkaXRcbiAgICAgICAgc2V0VG9kb3MoeyAuLi50b2RvcywgW25ld0tleV06IGVkaXR0ZWRWYWx1ZSB9KVxuICAgICAgICBjb25zdCB1c2VyUmVmID0gZG9jKGRiLCAndXNlcnMnLCBjdXJyZW50VXNlci51aWQpXG4gICAgICAgIGF3YWl0IHNldERvYyh1c2VyUmVmLCB7XG4gICAgICAgICAgICAndG9kb3MnOiB7XG4gICAgICAgICAgICAgICAgW25ld0tleV06IGVkaXR0ZWRWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7IG1lcmdlOiB0cnVlIH0pXG4gICAgICAgIHNldEVkaXQobnVsbClcbiAgICAgICAgc2V0RWRpdHRlZFZhbHVlKCcnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZEVkaXQodG9kb0tleSkge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kb3NbdG9kb0tleV0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmFubmFuJylcbiAgICAgICAgICAgIHNldEVkaXQodG9kb0tleSlcbiAgICAgICAgICAgIHNldEVkaXR0ZWRWYWx1ZSh0b2Rvc1t0b2RvS2V5XSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZSh0b2RvS2V5KSB7XG4gICAgICAgIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wT2JqID0geyAuLi50b2RvcyB9XG4gICAgICAgICAgICBkZWxldGUgdGVtcE9ialt0b2RvS2V5XVxuXG4gICAgICAgICAgICBzZXRUb2Rvcyh0ZW1wT2JqKVxuICAgICAgICAgICAgY29uc3QgdXNlclJlZiA9IGRvYyhkYiwgJ3VzZXJzJywgY3VycmVudFVzZXIudWlkKVxuICAgICAgICAgICAgYXdhaXQgc2V0RG9jKHVzZXJSZWYsIHtcbiAgICAgICAgICAgICAgICAndG9kb3MnOiB7XG4gICAgICAgICAgICAgICAgICAgIFt0b2RvS2V5XTogZGVsZXRlRmllbGQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHsgbWVyZ2U6IHRydWUgfSlcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtYXgtdy1bNjVjaF0gdGV4dC14cyBzbTp0ZXh0LXNtIG14LWF1dG8gZmxleCBmbGV4LWNvbCBmbGV4LTEgZ2FwLTMgc206Z2FwLTUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtc3RyZXRjaCc+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPVwiRW50ZXIgdG9kb1wiIHZhbHVlPXt0b2RvfSBvbkNoYW5nZT17KGUpID0+IHNldFRvZG8oZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgcC0zIHRleHQtYmFzZSBzbTp0ZXh0LWxnIHRleHQtc2xhdGUtOTAwIGZsZXgtMVwiIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfSBjbGFzc05hbWU9J3ctZml0IHB4LTQgc206cHgtNiBweS0yIHNtOnB5LTMgYmctYW1iZXItNDAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gdGV4dC1iYXNlIGR1cmF0aW9uLTMwMCBob3ZlcjpvcGFjaXR5LTQwJz5BREQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyhsb2FkaW5nKSAmJiAoPGRpdiBjbGFzc05hbWU9J2ZsZXgtMSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtc3Bpbm5lciBhbmltYXRlLXNwaW4gdGV4dC02eGxcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICAgeyghbG9hZGluZykgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRvZG9zIHx8IHt9KS5tYXAoKHRvZG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvZG9DYXJkIGhhbmRsZUVkaXRUb2RvPXtoYW5kbGVFZGl0VG9kb30ga2V5PXtpfSBoYW5kbGVBZGRFZGl0PXtoYW5kbGVBZGRFZGl0fSBlZGl0PXtlZGl0fSB0b2RvS2V5PXt0b2RvfSBlZGl0dGVkVmFsdWU9e2VkaXR0ZWRWYWx1ZX0gc2V0RWRpdHRlZFZhbHVlPXtzZXRFZGl0dGVkVmFsdWV9IGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvZG9zW3RvZG9dfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9kb0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiB7IWFkZFRvZG8gJiYgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBZGRUb2RvKHRydWUpfSBjbGFzc05hbWU9J3RleHQtY3lhbi0zMDAgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItY3lhbi0zMDAgcHktMiB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdGV4dC1sZyBkdXJhdGlvbi0zMDAgaG92ZXI6b3BhY2l0eS0zMCc+QUREIFRPRE88L2J1dHRvbj59ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUF1dGgiLCJUb2RvQ2FyZCIsImRvYyIsInNldERvYyIsImRlbGV0ZUZpZWxkIiwiZGIiLCJ1c2VGZXRjaFRvZG9zIiwiVXNlckRhc2hib2FyZCIsImhhbmRsZUFkZEVkaXQiLCJ0b2RvS2V5IiwiY29uc29sZSIsImxvZyIsInRvZG9zIiwic2V0RWRpdCIsInNldEVkaXR0ZWRWYWx1ZSIsImhhbmRsZURlbGV0ZSIsInRlbXBPYmoiLCJ1c2VyUmVmIiwic2V0VG9kb3MiLCJjdXJyZW50VXNlciIsInVpZCIsIm1lcmdlIiwidXNlckluZm8iLCJlZGl0IiwidG9kbyIsInNldFRvZG8iLCJlZGl0dGVkVmFsdWUiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVBZGRUb2RvIiwiTWF0aCIsIm5ld0tleSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJtYXgiLCJoYW5kbGVFZGl0VG9kbyIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserDashboard.js\n");

/***/ })

});