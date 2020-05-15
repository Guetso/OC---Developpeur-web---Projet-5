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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnMenuOpen\", function() { return btnMenuOpen; });\n// Animation de l'ouverture du menu\nvar btnMenuOpen = document.querySelector('.menu__btn');\nvar btnMenuClose = document.querySelector('.close');\nvar toggleMenu = document.getElementById('navpanel');\nbtnMenuOpen.addEventListener('click', function () {\n  toggleMenu.classList.add('menu--active');\n});\nbtnMenuClose.addEventListener('click', function () {\n  toggleMenu.classList.remove('menu--active');\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYW5pbS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hbmltLmpzP2M5MzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5pbWF0aW9uIGRlIGwnb3V2ZXJ0dXJlIGR1IG1lbnVcclxuXHJcbmNvbnN0IGJ0bk1lbnVPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpXHJcbmNvbnN0IGJ0bk1lbnVDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXHJcbmNvbnN0IHRvZ2dsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2cGFuZWwnKVxyXG5cclxuYnRuTWVudU9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgdG9nZ2xlTWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LS1hY3RpdmUnKVxyXG59KVxyXG5cclxuYnRuTWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIHRvZ2dsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tYWN0aXZlJylcclxufSlcclxuXHJcbmV4cG9ydCB7IGJ0bk1lbnVPcGVuIH1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/anim.js\n");

/***/ }),

/***/ "./src/confirm.js":
/*!************************!*\
  !*** ./src/confirm.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onScroll.js */ \"./src/onScroll.js\");\n/* global sessionStorage */\n\nvar myOrder = JSON.parse(sessionStorage.getItem('myOrder'));\nconsole.log(myOrder);\nvar spanId = document.getElementById('cmdId');\nspanId.innerText = myOrder.orderId;\nvar spanTotal = document.getElementById('cmdTotal');\nspanTotal.innerText = sessionStorage.getItem('total') + ' €';\nObject(_onScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlybS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maXJtLmpzPzQ4ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHNlc3Npb25TdG9yYWdlICovXHJcbmltcG9ydCBhbmltYXRpb25NZW51IGZyb20gJy4vb25TY3JvbGwuanMnXHJcblxyXG5jb25zdCBteU9yZGVyID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdteU9yZGVyJykpXHJcbmNvbnNvbGUubG9nKG15T3JkZXIpXHJcblxyXG5jb25zdCBzcGFuSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY21kSWQnKVxyXG5zcGFuSWQuaW5uZXJUZXh0ID0gbXlPcmRlci5vcmRlcklkXHJcblxyXG5jb25zdCBzcGFuVG90YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY21kVG90YWwnKVxyXG5zcGFuVG90YWwuaW5uZXJUZXh0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG90YWwnKSArICcg4oKsJ1xyXG5cclxuYW5pbWF0aW9uTWVudSgpXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/confirm.js\n");

/***/ }),

/***/ "./src/onScroll.js":
/*!*************************!*\
  !*** ./src/onScroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _anim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anim.js */ \"./src/anim.js\");\n// Menu qui change d'apparence onScroll\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var scrollY = function scrollY() {\n    var supportPageOffset = window.pageXOffset !== undefined;\n    var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';\n    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\n  };\n\n  var rect = _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getBoundingClientRect();\n  var constraint = document.querySelector(_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getAttribute('data-constraint'));\n  var constraintRect = constraint.getBoundingClientRect();\n  var constraintBottom = constraintRect.top + scrollY() + constraintRect.height - rect.height;\n\n  var onScroll = function onScroll() {\n    if (scrollY() > constraintBottom) {\n      _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.add('menu__btn--solid');\n    } else if (_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.contains('menu__btn--solid')) {\n      _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.remove('menu__btn--solid');\n    }\n  };\n\n  window.addEventListener('scroll', onScroll);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb25TY3JvbGwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb25TY3JvbGwuanM/NTBkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNZW51IHF1aSBjaGFuZ2UgZCdhcHBhcmVuY2Ugb25TY3JvbGxcclxuXHJcbmltcG9ydCB7IGJ0bk1lbnVPcGVuIH0gZnJvbSAnLi9hbmltLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNjcm9sbFkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZFxyXG4gICAgdmFyIGlzQ1NTMUNvbXBhdCA9IChkb2N1bWVudC5jb21wYXRNb2RlIHx8ICcnKSA9PT0gJ0NTUzFDb21wYXQnXHJcbiAgICByZXR1cm4gc3VwcG9ydFBhZ2VPZmZzZXRcclxuICAgICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgICAgOiBpc0NTUzFDb21wYXRcclxuICAgICAgICA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcclxuICAgICAgICA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXHJcbiAgfVxyXG5cclxuICBjb25zdCByZWN0ID0gYnRuTWVudU9wZW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICBjb25zdCBjb25zdHJhaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIGJ0bk1lbnVPcGVuLmdldEF0dHJpYnV0ZSgnZGF0YS1jb25zdHJhaW50JylcclxuICApXHJcbiAgY29uc3QgY29uc3RyYWludFJlY3QgPSBjb25zdHJhaW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgY29uc3QgY29uc3RyYWludEJvdHRvbSA9XHJcbiAgICBjb25zdHJhaW50UmVjdC50b3AgKyBzY3JvbGxZKCkgKyBjb25zdHJhaW50UmVjdC5oZWlnaHQgLSByZWN0LmhlaWdodFxyXG5cclxuICBjb25zdCBvblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChzY3JvbGxZKCkgPiBjb25zdHJhaW50Qm90dG9tKSB7XHJcbiAgICAgIGJ0bk1lbnVPcGVuLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2J0bi0tc29saWQnKVxyXG4gICAgfSBlbHNlIGlmIChidG5NZW51T3Blbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVfX2J0bi0tc29saWQnKSkge1xyXG4gICAgICBidG5NZW51T3Blbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19idG4tLXNvbGlkJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/onScroll.js\n");

/***/ })

/******/ });