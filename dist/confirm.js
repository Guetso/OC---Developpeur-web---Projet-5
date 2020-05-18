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

/***/ "./src/btnMenu/btnMenu.js":
/*!********************************!*\
  !*** ./src/btnMenu/btnMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onScroll.js */ \"./src/btnMenu/onScroll.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  window.addEventListener('scroll', _onScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"onScroll\"]); // A chaque mouvement de scroll la fonction est appelée\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnRuTWVudS9idG5NZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2J0bk1lbnUvYnRuTWVudS5qcz8zNWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uU2Nyb2xsIH0gZnJvbSAnLi9vblNjcm9sbC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpIC8vIEEgY2hhcXVlIG1vdXZlbWVudCBkZSBzY3JvbGwgbGEgZm9uY3Rpb24gZXN0IGFwcGVsw6llXHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/btnMenu/btnMenu.js\n");

/***/ }),

/***/ "./src/btnMenu/onScroll.js":
/*!*********************************!*\
  !*** ./src/btnMenu/onScroll.js ***!
  \*********************************/
/*! exports provided: onScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onScroll\", function() { return onScroll; });\n/* harmony import */ var _toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleMenu.js */ \"./src/btnMenu/toggleMenu.js\");\n// Ajout d'un fond blanc au bouton de l'ouverture du menu lorsqu'il dépasse le header en scrollant en format mobile\n// MODULES NECESSAIRES\n // On récupère le bouton du menu déjà utilisé dans anim.js\n// FONCTIONS NECESSAIRES\n\nvar scrollY = function scrollY() {\n  // On créer une fonction qui va calculer la quantité de scroll effectuée par l'utilisateur avec un polyfil pour la propriété window.pageYOffset\n  var supportPageOffset = window.pageXOffset !== undefined;\n  var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';\n  return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\n}; // RECUPERATION DES VARIABLES NECESSAIRES\n\n\nvar rect = _toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getBoundingClientRect(); // On récupère la position de notre bouton\n\nvar constraint = document.querySelector( // On va aller chercher dans notre élément bouton, l'attribut qui indique...\n_toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getAttribute('data-constraint') // ...quelle est la contrainte qui force notre bouton à changer d'élément (ici le header)\n);\nvar constraintRect = constraint.getBoundingClientRect(); // On va récupérer à son tour la position de la contrainte (=le header)\n\nvar constraintBottom = // On a besoin de connaitre la position du bas de la contrainte par rapport au bouton\nconstraintRect.top + scrollY() + constraintRect.height - rect.height; // = la position du haut de la contrainte + la quantité de scroll + sa hauteur - la hauteur du bouton\n// CREATION DE LA FONCTION ONSCROLL\n\nvar onScroll = function onScroll() {\n  if (scrollY() > constraintBottom) {\n    // Si la quantité de scroll effectué par l'utilisateur est supérieure au bas de la contrainte\n    _toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.add('menu__btn--solid'); // Un fond blanc est ajouté au bouton par l'ajout d'une classe --solid\n  } else if (_toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.contains('menu__btn--solid')) {\n    // Sinon\n    _toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.remove('menu__btn--solid'); // Le fond blanc est retiré au bouton par le retrait de la classe --solid\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnRuTWVudS9vblNjcm9sbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9idG5NZW51L29uU2Nyb2xsLmpzPzRiZTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQWpvdXQgZCd1biBmb25kIGJsYW5jIGF1IGJvdXRvbiBkZSBsJ291dmVydHVyZSBkdSBtZW51IGxvcnNxdSdpbCBkw6lwYXNzZSBsZSBoZWFkZXIgZW4gc2Nyb2xsYW50IGVuIGZvcm1hdCBtb2JpbGVcclxuXHJcbi8vIE1PRFVMRVMgTkVDRVNTQUlSRVNcclxuXHJcbmltcG9ydCB7IGJ0bk1lbnVPcGVuIH0gZnJvbSAnLi90b2dnbGVNZW51LmpzJyAvLyBPbiByw6ljdXDDqHJlIGxlIGJvdXRvbiBkdSBtZW51IGTDqWrDoCB1dGlsaXPDqSBkYW5zIGFuaW0uanNcclxuXHJcbi8vIEZPTkNUSU9OUyBORUNFU1NBSVJFU1xyXG5cclxuY29uc3Qgc2Nyb2xsWSA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyBPbiBjcsOpZXIgdW5lIGZvbmN0aW9uIHF1aSB2YSBjYWxjdWxlciBsYSBxdWFudGl0w6kgZGUgc2Nyb2xsIGVmZmVjdHXDqWUgcGFyIGwndXRpbGlzYXRldXIgYXZlYyB1biBwb2x5ZmlsIHBvdXIgbGEgcHJvcHJpw6l0w6kgd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgY29uc3Qgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZFxyXG4gIGNvbnN0IGlzQ1NTMUNvbXBhdCA9IChkb2N1bWVudC5jb21wYXRNb2RlIHx8ICcnKSA9PT0gJ0NTUzFDb21wYXQnXHJcbiAgcmV0dXJuIHN1cHBvcnRQYWdlT2Zmc2V0XHJcbiAgICA/IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgOiBpc0NTUzFDb21wYXRcclxuICAgICAgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICAgIDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcclxufVxyXG5cclxuLy8gUkVDVVBFUkFUSU9OIERFUyBWQVJJQUJMRVMgTkVDRVNTQUlSRVNcclxuXHJcbmNvbnN0IHJlY3QgPSBidG5NZW51T3Blbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSAvLyBPbiByw6ljdXDDqHJlIGxhIHBvc2l0aW9uIGRlIG5vdHJlIGJvdXRvblxyXG5jb25zdCBjb25zdHJhaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggLy8gT24gdmEgYWxsZXIgY2hlcmNoZXIgZGFucyBub3RyZSDDqWzDqW1lbnQgYm91dG9uLCBsJ2F0dHJpYnV0IHF1aSBpbmRpcXVlLi4uXHJcbiAgYnRuTWVudU9wZW4uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnN0cmFpbnQnKSAvLyAuLi5xdWVsbGUgZXN0IGxhIGNvbnRyYWludGUgcXVpIGZvcmNlIG5vdHJlIGJvdXRvbiDDoCBjaGFuZ2VyIGQnw6lsw6ltZW50IChpY2kgbGUgaGVhZGVyKVxyXG4pXHJcbmNvbnN0IGNvbnN0cmFpbnRSZWN0ID0gY29uc3RyYWludC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSAvLyBPbiB2YSByw6ljdXDDqXJlciDDoCBzb24gdG91ciBsYSBwb3NpdGlvbiBkZSBsYSBjb250cmFpbnRlICg9bGUgaGVhZGVyKVxyXG5jb25zdCBjb25zdHJhaW50Qm90dG9tID0gLy8gT24gYSBiZXNvaW4gZGUgY29ubmFpdHJlIGxhIHBvc2l0aW9uIGR1IGJhcyBkZSBsYSBjb250cmFpbnRlIHBhciByYXBwb3J0IGF1IGJvdXRvblxyXG4gIGNvbnN0cmFpbnRSZWN0LnRvcCArIHNjcm9sbFkoKSArIGNvbnN0cmFpbnRSZWN0LmhlaWdodCAtIHJlY3QuaGVpZ2h0IC8vID0gbGEgcG9zaXRpb24gZHUgaGF1dCBkZSBsYSBjb250cmFpbnRlICsgbGEgcXVhbnRpdMOpIGRlIHNjcm9sbCArIHNhIGhhdXRldXIgLSBsYSBoYXV0ZXVyIGR1IGJvdXRvblxyXG5cclxuLy8gQ1JFQVRJT04gREUgTEEgRk9OQ1RJT04gT05TQ1JPTExcclxuXHJcbmNvbnN0IG9uU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmIChzY3JvbGxZKCkgPiBjb25zdHJhaW50Qm90dG9tKSB7IC8vIFNpIGxhIHF1YW50aXTDqSBkZSBzY3JvbGwgZWZmZWN0dcOpIHBhciBsJ3V0aWxpc2F0ZXVyIGVzdCBzdXDDqXJpZXVyZSBhdSBiYXMgZGUgbGEgY29udHJhaW50ZVxyXG4gICAgYnRuTWVudU9wZW4uY2xhc3NMaXN0LmFkZCgnbWVudV9fYnRuLS1zb2xpZCcpIC8vIFVuIGZvbmQgYmxhbmMgZXN0IGFqb3V0w6kgYXUgYm91dG9uIHBhciBsJ2Fqb3V0IGQndW5lIGNsYXNzZSAtLXNvbGlkXHJcbiAgfSBlbHNlIGlmIChidG5NZW51T3Blbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVfX2J0bi0tc29saWQnKSkgeyAvLyBTaW5vblxyXG4gICAgYnRuTWVudU9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9fYnRuLS1zb2xpZCcpIC8vIExlIGZvbmQgYmxhbmMgZXN0IHJldGlyw6kgYXUgYm91dG9uIHBhciBsZSByZXRyYWl0IGRlIGxhIGNsYXNzZSAtLXNvbGlkXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBvblNjcm9sbCB9XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/btnMenu/onScroll.js\n");

/***/ }),

/***/ "./src/btnMenu/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/btnMenu/toggleMenu.js ***!
  \***********************************/
/*! exports provided: btnMenuOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnMenuOpen\", function() { return btnMenuOpen; });\n// Animation de l'ouverture du menu en format mobile (width < 980 px)\nvar btnMenuOpen = document.querySelector('.menu__btn'); // On récupère l'élément ayant pour class \".menu__btn\" = le bouton d'ouverture du menu\n\nvar btnMenuClose = document.querySelector('.close'); // On récupère l'élément ayant pour classe \"close\" = le bouton de fermeture du menu\n\nvar toggleMenu = document.getElementById('navpanel'); // On récupère l'élément ayant pour classe \"navpanel\" = le corps du menu\n// Fonction d'ouverture du menu\n\nbtnMenuOpen.addEventListener('click', function () {\n  // Quand on clique sur le bouton \"Menu\"\n  toggleMenu.classList.add('menu--active'); // la classe \"menu--active\" est ajoutée = scaleX(0)->scaleX(1) (cf.SASS, Layout, btnMenu.scss)\n}); // Fonction de fermeture du menu\n\nbtnMenuClose.addEventListener('click', function () {\n  // Quand on clique sur la croix du menu\n  toggleMenu.classList.remove('menu--active'); // La classe \"menu--active\" est retirée\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnRuTWVudS90b2dnbGVNZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2J0bk1lbnUvdG9nZ2xlTWVudS5qcz80Yjk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFuaW1hdGlvbiBkZSBsJ291dmVydHVyZSBkdSBtZW51IGVuIGZvcm1hdCBtb2JpbGUgKHdpZHRoIDwgOTgwIHB4KVxyXG5cclxuY29uc3QgYnRuTWVudU9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYnRuJykgLy8gT24gcsOpY3Vww6hyZSBsJ8OpbMOpbWVudCBheWFudCBwb3VyIGNsYXNzIFwiLm1lbnVfX2J0blwiID0gbGUgYm91dG9uIGQnb3V2ZXJ0dXJlIGR1IG1lbnVcclxuY29uc3QgYnRuTWVudUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJykgLy8gT24gcsOpY3Vww6hyZSBsJ8OpbMOpbWVudCBheWFudCBwb3VyIGNsYXNzZSBcImNsb3NlXCIgPSBsZSBib3V0b24gZGUgZmVybWV0dXJlIGR1IG1lbnVcclxuY29uc3QgdG9nZ2xlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZwYW5lbCcpIC8vIE9uIHLDqWN1cMOocmUgbCfDqWzDqW1lbnQgYXlhbnQgcG91ciBjbGFzc2UgXCJuYXZwYW5lbFwiID0gbGUgY29ycHMgZHUgbWVudVxyXG5cclxuLy8gRm9uY3Rpb24gZCdvdXZlcnR1cmUgZHUgbWVudVxyXG5cclxuYnRuTWVudU9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7IC8vIFF1YW5kIG9uIGNsaXF1ZSBzdXIgbGUgYm91dG9uIFwiTWVudVwiXHJcbiAgdG9nZ2xlTWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LS1hY3RpdmUnKSAvLyBsYSBjbGFzc2UgXCJtZW51LS1hY3RpdmVcIiBlc3QgYWpvdXTDqWUgPSBzY2FsZVgoMCktPnNjYWxlWCgxKSAoY2YuU0FTUywgTGF5b3V0LCBidG5NZW51LnNjc3MpXHJcbn0pXHJcblxyXG4vLyBGb25jdGlvbiBkZSBmZXJtZXR1cmUgZHUgbWVudVxyXG5cclxuYnRuTWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyAvLyBRdWFuZCBvbiBjbGlxdWUgc3VyIGxhIGNyb2l4IGR1IG1lbnVcclxuICB0b2dnbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtLWFjdGl2ZScpIC8vIExhIGNsYXNzZSBcIm1lbnUtLWFjdGl2ZVwiIGVzdCByZXRpcsOpZVxyXG59KVxyXG5cclxuZXhwb3J0IHsgYnRuTWVudU9wZW4gfVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/btnMenu/toggleMenu.js\n");

/***/ }),

/***/ "./src/confirm.js":
/*!************************!*\
  !*** ./src/confirm.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _btnMenu_btnMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btnMenu/btnMenu.js */ \"./src/btnMenu/btnMenu.js\");\n/* global sessionStorage */\n // Importation du bouton menu dynamique\n\nvar myOrder = JSON.parse(sessionStorage.getItem('myOrder'));\nconsole.log(myOrder);\nvar spanId = document.getElementById('cmdId');\nspanId.innerText = myOrder.orderId;\nvar spanTotal = document.getElementById('cmdTotal');\nspanTotal.innerText = sessionStorage.getItem('total') + ' €';\nObject(_btnMenu_btnMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlybS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maXJtLmpzPzQ4ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHNlc3Npb25TdG9yYWdlICovXHJcbmltcG9ydCBidG5NZW51IGZyb20gJy4vYnRuTWVudS9idG5NZW51LmpzJyAvLyBJbXBvcnRhdGlvbiBkdSBib3V0b24gbWVudSBkeW5hbWlxdWVcclxuXHJcbmNvbnN0IG15T3JkZXIgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ215T3JkZXInKSlcclxuY29uc29sZS5sb2cobXlPcmRlcilcclxuXHJcbmNvbnN0IHNwYW5JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbWRJZCcpXHJcbnNwYW5JZC5pbm5lclRleHQgPSBteU9yZGVyLm9yZGVySWRcclxuXHJcbmNvbnN0IHNwYW5Ub3RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbWRUb3RhbCcpXHJcbnNwYW5Ub3RhbC5pbm5lclRleHQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b3RhbCcpICsgJyDigqwnXHJcblxyXG5idG5NZW51KClcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/confirm.js\n");

/***/ })

/******/ });