/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/block.js":
/*!*************************!*\
  !*** ./blocks/block.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Block; });\nclass Block {\r\n\r\n    get name() {\r\n        throw new Error('Invalid component name');\r\n    }\r\n\r\n    constructor() {\r\n        this.el = document.createElement(this.name);\r\n    }\r\n\r\n    /**\r\n     * Вставка элемента на старинцу\r\n     * @param {Element} root - родительский элемент\r\n     */\r\n    append(root) {\r\n        root.appendChild(this.el);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/block.js?");

/***/ }),

/***/ "./blocks/button/button.js":
/*!*********************************!*\
  !*** ./blocks/button/button.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\r\n\r\nclass Button extends _block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    get name() {\r\n        return 'button';\r\n    }\r\n\r\n    /**\r\n     * Кнопка\r\n     * @param {Object} obj\r\n     * @param {string} obj.text - текст кнопки\r\n     * @param {string} [obj.type]\r\n     */\r\n    constructor({ text, type = 'button' }) {\r\n        super();\r\n\r\n        this.el.textContent = text;\r\n        this.el.classList.toggle('button');\r\n        this.el.type = type;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/button/button.js?");

/***/ }),

/***/ "./blocks/input/input.js":
/*!*******************************!*\
  !*** ./blocks/input/input.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\r\n\r\nclass Input extends _block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    get name () {\r\n        return 'input';\r\n    }\r\n\r\n    /**\r\n     * Input\r\n     * @param {Object} obj\r\n     * @param {string} obj.placeholder - текст кнопки,\r\n     * @param {string} [obj.type] - тип инпута (по умолчанию text)\r\n     */\r\n    constructor({ placeholder, type = 'text', value='' }) {\r\n        super();\r\n\r\n        this.el.classList.toggle('input', true);\r\n        this.el.type  = type;\r\n        this.el.placeholder = placeholder;\r\n        this.el.value = value;\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/input/input.js?");

/***/ }),

/***/ "./blocks/list/list.js":
/*!*****************************!*\
  !*** ./blocks/list/list.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\r\n\r\nclass List extends _block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    get name () {\r\n        return 'list';\r\n    }\r\n\r\n    /**\r\n     * textarea\r\n     * @param {Object} obj\r\n     * @param {string} obj.usersOnlile - объект списка пользователей,\r\n\r\n     */\r\n    constructor({ usersOnlile }) {\r\n        super();\r\n\r\n        console.log({usersOnlile});\r\n\r\n        let list = '';\r\n        for(let li of usersOnlile){\r\n            list += '<li>Пользователю '+ li +' онлайн .</li>'\r\n        }\r\n\r\n\r\n        this.el.innerHeight = list;\r\n\r\n        this.el.classList.toggle('list', true);\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./blocks/list/list.js?");

/***/ }),

/***/ "./blocks/textarea/textarea.js":
/*!*************************************!*\
  !*** ./blocks/textarea/textarea.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Textarea; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\r\n\r\nclass Textarea extends _block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    get name () {\r\n        return 'textarea';\r\n    }\r\n\r\n    /**\r\n     * textarea\r\n     * @param {Object} obj\r\n     * @param {string} obj.placeholder - текст кнопки,\r\n\r\n     */\r\n    constructor({ placeholder }) {\r\n        super();\r\n\r\n        this.el.classList.toggle('textarea', true);\r\n\r\n        this.el.placeholder = placeholder;\r\n\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/button/button */ \"./blocks/button/button.js\");\n/* harmony import */ var _blocks_input_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/input/input */ \"./blocks/input/input.js\");\n/* harmony import */ var _blocks_textarea_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/textarea/textarea */ \"./blocks/textarea/textarea.js\");\n/* harmony import */ var _blocks_list_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/list/list */ \"./blocks/list/list.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n\r\n    let usersOnlile = [1,23,4, '434'];\r\n\r\n\r\n    let button = new _blocks_button_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        text: 'Тестовая кнопка'\r\n    });\r\n\r\n    let input = new _blocks_input_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\r\n        placeholder: 'Тестовый инпут'\r\n    });\r\n\r\n    let textarea = new _blocks_textarea_textarea__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n        placeholder : \"test\"\r\n    });\r\n\r\n    let list= {};\r\n    list = new _blocks_list_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({usersOnlile});\r\n\r\n    button.append(document.body);\r\n    input.append(document.body);\r\n    textarea.append(document.body);\r\n    list.append(document.body);\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });