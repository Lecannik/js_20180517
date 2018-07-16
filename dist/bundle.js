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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Block = function () {\n    _createClass(Block, [{\n        key: 'name',\n        get: function get() {\n            throw new Error('Invalid component name');\n        }\n    }]);\n\n    function Block() {\n        _classCallCheck(this, Block);\n\n        this.el = document.createElement(this.name);\n    }\n\n    /**\r\n     * Вставка элемента на старинцу\r\n     * @param {Element} root - родительский элемент\r\n     */\n\n\n    _createClass(Block, [{\n        key: 'append',\n        value: function append(root) {\n            root.appendChild(this.el);\n        }\n    }]);\n\n    return Block;\n}();\n\nexports.default = Block;\n\n//# sourceURL=webpack:///./blocks/block.js?");


/***/ }),

/***/ "./blocks/button/button.js":
/*!*********************************!*\
  !*** ./blocks/button/button.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _button = __webpack_require__(/*! ./button.pug */ \"./blocks/button/button.pug\");\n\nvar _button2 = _interopRequireDefault(_button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Button = function (_Block) {\n    _inherits(Button, _Block);\n\n    _createClass(Button, [{\n        key: 'name',\n        get: function get() {\n            return 'div';\n        }\n\n        /**\r\n         * Кнопка\r\n         * @param {Object} obj\r\n         * @param {string} obj.text - текст кнопки\r\n         * @param {string} [obj.type]\r\n         */\n\n    }]);\n\n    function Button(_ref) {\n        var text = _ref.text,\n            _ref$style = _ref.style,\n            style = _ref$style === undefined ? 'button__classic' : _ref$style,\n            _ref$type = _ref.type,\n            type = _ref$type === undefined ? 'button' : _ref$type;\n\n        _classCallCheck(this, Button);\n\n        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));\n\n        _this.el.classList.toggle('button');\n        _this.el.innerHTML = (0, _button2.default)({\n            text: text,\n            type: type,\n            style: style\n        });\n\n        return _this;\n    }\n\n    return Button;\n}(_block2.default);\n\nexports.default = Button;\n\n//# sourceURL=webpack:///./blocks/button/button.js?");

/***/ }),

/***/ "./blocks/button/button.pug":
/*!**********************************!*\
  !*** ./blocks/button/button.pug ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (style, text, type) {pug_html = pug_html + \"\\u003Cbutton\" + (pug.attr(\"class\", pug.classes([\"item__button\",\"\"+style+\"\"], [false,true]), false, true)+pug.attr(\"type\", \"\"+type+\"\", true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";}.call(this,\"style\" in locals_for_with?locals_for_with.style:typeof style!==\"undefined\"?style:undefined,\"text\" in locals_for_with?locals_for_with.text:typeof text!==\"undefined\"?text:undefined,\"type\" in locals_for_with?locals_for_with.type:typeof type!==\"undefined\"?type:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/button/button.pug?");


/***/ }),

/***/ "./blocks/input/input.js":
/*!*******************************!*\
  !*** ./blocks/input/input.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _input = __webpack_require__(/*! ./input.pug */ \"./blocks/input/input.pug\");\n\nvar _input2 = _interopRequireDefault(_input);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Input = function (_Block) {\n    _inherits(Input, _Block);\n\n    _createClass(Input, [{\n        key: 'name',\n        get: function get() {\n            return 'div';\n        }\n\n        /**\r\n         * Input\r\n         * @param {Object} obj\r\n         * @param {string} obj.placeholder - текст кнопки,\r\n         * @param {string} [obj.type] - тип инпута (по умолчанию text)\r\n         */\n\n    }]);\n\n    function Input(_ref) {\n        var placeholder = _ref.placeholder,\n            _ref$type = _ref.type,\n            type = _ref$type === undefined ? 'text' : _ref$type,\n            _ref$value = _ref.value,\n            value = _ref$value === undefined ? '' : _ref$value;\n\n        _classCallCheck(this, Input);\n\n        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this));\n\n        _this.el.classList.toggle('input', true);\n        _this.el.innerHTML = (0, _input2.default)({\n            placeholder: placeholder,\n            value: value,\n            type: type\n        });\n\n        return _this;\n    }\n\n    return Input;\n}(_block2.default);\n\nexports.default = Input;\n\n//# sourceURL=webpack:///./blocks/input/input.js?");

/***/ }),

/***/ "./blocks/input/input.pug":
/*!********************************!*\
  !*** ./blocks/input/input.pug ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (placeholder, type, value) {pug_html = pug_html + \"\\u003Cdiv class=\\\"item__wrap\\\"\\u003E\\u003Cinput\" + (\" class=\\\"item__input\\\"\"+pug.attr(\"placeholder\", \"\"+placeholder+\"\", true, true)+pug.attr(\"value\", \"\"+value+\"\", true, true)+pug.attr(\"type\", \"\"+type+\"\", true, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"placeholder\" in locals_for_with?locals_for_with.placeholder:typeof placeholder!==\"undefined\"?placeholder:undefined,\"type\" in locals_for_with?locals_for_with.type:typeof type!==\"undefined\"?type:undefined,\"value\" in locals_for_with?locals_for_with.value:typeof value!==\"undefined\"?value:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/input/input.pug?");

/***/ }),

/***/ "./blocks/list/list.js":
/*!*****************************!*\
  !*** ./blocks/list/list.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _list = __webpack_require__(/*! ./list.pug */ \"./blocks/list/list.pug\");\n\nvar _list2 = _interopRequireDefault(_list);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar List = function (_Block) {\n    _inherits(List, _Block);\n\n    _createClass(List, [{\n        key: 'name',\n        get: function get() {\n            return 'ul';\n        }\n\n        /**\r\n         * Input\r\n         * @param {Object} obj\r\n         * @param {array} obj.user - массив объектов пользователей\r\n         *\r\n         */\n\n    }]);\n\n    function List(_ref) {\n        var user = _ref.user;\n\n        _classCallCheck(this, List);\n\n        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));\n\n        var list = '';\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n            for (var _iterator = user[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                var u = _step.value;\n\n                list += (0, _list2.default)({\n                    name: u.name,\n                    id: u.id\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return) {\n                    _iterator.return();\n                }\n            } finally {\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n\n        _this.el.innerHTML = list;\n        _this.el.classList.toggle('list', true);\n\n        return _this;\n    }\n\n    return List;\n}(_block2.default);\n\nexports.default = List;\n\n//# sourceURL=webpack:///./blocks/list/list.js?");

/***/ }),

/***/ "./blocks/list/list.pug":
/*!******************************!*\
  !*** ./blocks/list/list.pug ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (id, name) {pug_html = pug_html + \"\\u003Cli class=\\\"item__user\\\"\\u003E\\u003Cdiv class=\\\"item__avatar\\\"\\u003E\\u003Cimg\" + (pug.attr(\"src\", \"./avatar/\"+id+\".jpg\", true, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"item__name\\\"\\u003E\" + (pug.escape(null == (pug_interp = name) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\";}.call(this,\"id\" in locals_for_with?locals_for_with.id:typeof id!==\"undefined\"?id:undefined,\"name\" in locals_for_with?locals_for_with.name:typeof name!==\"undefined\"?name:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/list/list.pug?");

/***/ }),

/***/ "./blocks/messages/messages.js":
/*!*************************************!*\
  !*** ./blocks/messages/messages.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _messages = __webpack_require__(/*! ./messages.pug */ \"./blocks/messages/messages.pug\");\n\nvar _messages2 = _interopRequireDefault(_messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Messages = function (_Block) {\n    _inherits(Messages, _Block);\n\n    _createClass(Messages, [{\n        key: 'name',\n        get: function get() {\n            return 'div';\n        }\n\n        /**\r\n         * Кнопка\r\n         * @param {Object} obj\r\n         * @param {string} obj.text - текст сообщения\r\n         * @param {string} obj.style - стиль сообщения received, sent\r\n         * @param {string} obj.user - имя отправителя сообщения\r\n         * @param {string} obj.time - время отправки сообщения\r\n         */\n\n    }]);\n\n    function Messages(_ref) {\n        var message = _ref.message;\n\n        _classCallCheck(this, Messages);\n\n        var _this = _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this));\n\n        var list = '';\n        var scrollDiv = document.createElement('div');\n        scrollDiv.classList.toggle('item__scroll');\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n            for (var _iterator = message[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                var m = _step.value;\n\n                list += (0, _messages2.default)({\n                    user: m.user,\n                    text: m.text,\n                    time: m.time,\n                    style: m.style\n                });\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return) {\n                    _iterator.return();\n                }\n            } finally {\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n\n        scrollDiv.innerHTML = list;\n        _this.el.appendChild(scrollDiv);\n        _this.el.classList.toggle('messages');\n\n        return _this;\n    }\n\n    return Messages;\n}(_block2.default);\n\nexports.default = Messages;\n\n//# sourceURL=webpack:///./blocks/messages/messages.js?");

/***/ }),

/***/ "./blocks/messages/messages.pug":
/*!**************************************!*\
  !*** ./blocks/messages/messages.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (style, text, time, user) {pug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([\"item__wrap\",\"\"+style+\"\"], [false,true]), false, true)) + \"\\u003E\\u003Cdiv class=\\\"item__content\\\"\\u003E\\u003Cp class=\\\"item__user\\\"\\u003E\" + (pug.escape(null == (pug_interp = user) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003Cspan class=\\\"item__text\\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"item__time\\\"\\u003E\" + (pug.escape(null == (pug_interp = time) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"style\" in locals_for_with?locals_for_with.style:typeof style!==\"undefined\"?style:undefined,\"text\" in locals_for_with?locals_for_with.text:typeof text!==\"undefined\"?text:undefined,\"time\" in locals_for_with?locals_for_with.time:typeof time!==\"undefined\"?time:undefined,\"user\" in locals_for_with?locals_for_with.user:typeof user!==\"undefined\"?user:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/messages/messages.pug?");

/***/ }),

/***/ "./blocks/textarea/textarea.js":
/*!*************************************!*\
  !*** ./blocks/textarea/textarea.js ***!

  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(/*! ../block */ \"./blocks/block.js\");\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _textarea = __webpack_require__(/*! ./textarea.pug */ \"./blocks/textarea/textarea.pug\");\n\nvar _textarea2 = _interopRequireDefault(_textarea);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Textarea = function (_Block) {\n    _inherits(Textarea, _Block);\n\n    _createClass(Textarea, [{\n        key: 'name',\n        get: function get() {\n            return 'div';\n        }\n\n        /**\r\n         * Input\r\n         * @param {Object} obj\r\n         * @param {string} obj.placeholder - текст кнопки,\r\n         * @param {string} [obj.type] - тип инпута (по умолчанию text)\r\n         */\n\n    }]);\n\n    function Textarea(_ref) {\n        var placeholder = _ref.placeholder,\n            _ref$value = _ref.value,\n            value = _ref$value === undefined ? '' : _ref$value;\n\n        _classCallCheck(this, Textarea);\n\n        var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this));\n\n        _this.el.classList.toggle('textarea', true);\n        _this.el.innerHTML = (0, _textarea2.default)({\n            placeholder: placeholder,\n            value: value\n        });\n        return _this;\n    }\n\n    return Textarea;\n}(_block2.default);\n\nexports.default = Textarea;\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.js?");

/***/ }),

/***/ "./blocks/textarea/textarea.pug":
/*!**************************************!*\
  !*** ./blocks/textarea/textarea.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (placeholder, value) {pug_html = pug_html + \"\\u003Cdiv class=\\\"item__wrap\\\"\\u003E\\u003Ctextarea\" + (\" class=\\\"item__textarea\\\"\"+pug.attr(\"placeholder\", \"\"+placeholder+\"\", true, true)+pug.attr(\"value\", \"\"+value+\"\", true, true)) + \"\\u003E\\u003C\\u002Ftextarea\\u003E\\u003C\\u002Fdiv\\u003E\";}.call(this,\"placeholder\" in locals_for_with?locals_for_with.placeholder:typeof placeholder!==\"undefined\"?placeholder:undefined,\"value\" in locals_for_with?locals_for_with.value:typeof value!==\"undefined\"?value:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/textarea/textarea.pug?");


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


"use strict";
eval("\n\nvar _button = __webpack_require__(/*! ./blocks/button/button */ \"./blocks/button/button.js\");\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _input = __webpack_require__(/*! ./blocks/input/input */ \"./blocks/input/input.js\");\n\nvar _input2 = _interopRequireDefault(_input);\n\nvar _list = __webpack_require__(/*! ./blocks/list/list */ \"./blocks/list/list.js\");\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _messages = __webpack_require__(/*! ./blocks/messages/messages */ \"./blocks/messages/messages.js\");\n\nvar _messages2 = _interopRequireDefault(_messages);\n\nvar _textarea = __webpack_require__(/*! ./blocks/textarea/textarea */ \"./blocks/textarea/textarea.js\");\n\nvar _textarea2 = _interopRequireDefault(_textarea);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.addEventListener('DOMContentLoaded', function () {\n\n    var buttonEnter = new _button2.default({\n        text: 'Войти'\n    });\n\n    var buttonReg = new _button2.default({\n        text: 'Регистрация'\n    });\n\n    var buttonRegHref = new _button2.default({\n        text: 'Регистрация',\n        style: 'button__href'\n    });\n    var buttonLogin = new _button2.default({\n        text: 'Логин',\n        style: 'button__href'\n    });\n\n    var inputName = new _input2.default({\n        placeholder: 'Имя'\n    });\n\n    var inputPassword = new _input2.default({\n        placeholder: 'Пароль'\n    });\n\n    var inputName2 = new _input2.default({\n        placeholder: 'Имя'\n    });\n\n    var inputPassword2 = new _input2.default({\n        placeholder: 'Пароль'\n    });\n\n    var inputRetryPassword = new _input2.default({\n        placeholder: 'Повтор пароля'\n    });\n\n    var list = new _list2.default({\n        user: [{ name: 'Маша Петрова', id: 1 }, { name: 'Петя Иванов', id: 2 }, { name: 'Саша', id: 3 }, { name: 'Таня', id: 4 }]\n    });\n\n    var messages = new _messages2.default({\n        message: [{\n            text: 'Тестовый текст',\n            user: 'Маша Петрова',\n            time: '10:30',\n            style: 'received'\n        }, {\n            text: 'Тестовый текст сообщения',\n            user: 'Петя Иванов',\n            time: '12:30',\n            style: 'sent'\n        }, {\n            text: 'Длинный тестовый текст сообщения Длинный тестовый текст сообщения Длинный тестовый текст сообщения ',\n            user: 'Маша Петрова',\n            time: '12:40',\n            style: 'received'\n        }, {\n            text: 'Тест',\n            user: 'Петя Иванов',\n            time: '12:45',\n            style: 'sent'\n        }, {\n            text: 'Тестовый текст сообщения',\n            user: 'Петя Иванов',\n            time: '12:53',\n            style: 'sent'\n        }]\n    });\n\n    var textarea = new _textarea2.default({\n        placeholder: 'Тестовая текстареа'\n    });\n\n    inputName.append(document.querySelector('.registrationWindow'));\n    inputPassword.append(document.querySelector('.registrationWindow'));\n    buttonEnter.append(document.querySelector('.registrationWindow'));\n    buttonRegHref.append(document.querySelector('.registrationWindow'));\n\n    inputName2.append(document.querySelector('.loginWindow'));\n    inputPassword2.append(document.querySelector('.loginWindow'));\n    inputRetryPassword.append(document.querySelector('.loginWindow'));\n    buttonReg.append(document.querySelector('.loginWindow'));\n    buttonLogin.append(document.querySelector('.loginWindow'));\n\n    messages.append(document.querySelector('.chatWindow'));\n    var scrollDiv = messages.el.querySelector('.item__scroll');\n    scrollDiv.scrollTop = scrollDiv.scrollHeight;\n    textarea.append(document.querySelector('.chatWindow'));\n\n    list.append(document.querySelector('.userWindow'));\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  if (typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });