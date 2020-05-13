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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/confirm.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/anim.js":
/*!*********************!*\
  !*** ./src/anim.js ***!
  \*********************/
/*! exports provided: btnMenuOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnMenuOpen\", function() { return btnMenuOpen; });\n// Animation de l'ouverture du menu\r\n\r\nconst btnMenuOpen = document.querySelector(\".menu__btn\")\r\nconst btnMenuClose = document.querySelector(\".close\")\r\nconst toggleMenu = document.getElementById(\"navpanel\")\r\n\r\nbtnMenuOpen.addEventListener(\"click\", function () {\r\n    toggleMenu.classList.add(\"menu--active\")\r\n})\r\n\r\nbtnMenuClose.addEventListener(\"click\", function () {\r\n    toggleMenu.classList.remove(\"menu--active\")\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/anim.js?");

/***/ }),

/***/ "./src/confirm.js":
/*!************************!*\
  !*** ./src/confirm.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onScroll.js */ \"./src/onScroll.js\");\n\r\n\r\nconst myOrder = JSON.parse(sessionStorage.getItem(\"myOrder\"))\r\nconsole.log(myOrder)\r\n\r\nconst spanId = document.getElementById(\"cmdId\")\r\nspanId.innerText = myOrder.orderId\r\n\r\nconst spanTotal = document.getElementById(\"cmdTotal\")\r\nspanTotal.innerText = sessionStorage.getItem(\"total\") +\" €\"\n\n//# sourceURL=webpack:///./src/confirm.js?");

/***/ }),

/***/ "./src/onScroll.js":
/*!*************************!*\
  !*** ./src/onScroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _anim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anim.js */ \"./src/anim.js\");\n// Menu qui change d'apparence onScroll\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function(){\r\n\r\nconst scrollY = function () {\r\n    var supportPageOffset = window.pageXOffset !== undefined;\r\n    var isCSS1Compat = ((document.compatMode || \"\") === \"CSS1Compat\");\r\n    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\r\n}\r\n\r\nconst rect = _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getBoundingClientRect()\r\nconst constraint = document.querySelector(_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getAttribute(\"data-constraint\"))\r\nconst constraintRect = constraint.getBoundingClientRect()\r\nconst constraintBottom = constraintRect.top + scrollY() + constraintRect.height - rect.height\r\n\r\nconst onScroll = function () {\r\n    if (scrollY() > constraintBottom) {\r\n        _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.add(\"menu__btn--solid\")\r\n    } else if (_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.contains(\"menu__btn--solid\")){\r\n        _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.remove(\"menu__btn--solid\")\r\n    }\r\n}\r\n\r\nwindow.addEventListener(\"scroll\", onScroll)\r\n})());\n\n//# sourceURL=webpack:///./src/onScroll.js?");

/***/ })

/******/ });