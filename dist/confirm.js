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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onScroll.js */ \"./src/btnMenu/onScroll.js\");\n// MODULES NECESSAIRES\n // CREATION DU BOUTON MENU DYNAMIQUE (TOGGLE + SCROLL)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  window.addEventListener('scroll', _onScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"onScroll\"]); // A chaque mouvement de scroll la fonction est appelée\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnRuTWVudS9idG5NZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2J0bk1lbnUvYnRuTWVudS5qcz8zNWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1PRFVMRVMgTkVDRVNTQUlSRVNcclxuXHJcbmltcG9ydCB7IG9uU2Nyb2xsIH0gZnJvbSAnLi9vblNjcm9sbC5qcydcclxuXHJcbi8vIENSRUFUSU9OIERVIEJPVVRPTiBNRU5VIERZTkFNSVFVRSAoVE9HR0xFICsgU0NST0xMKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCkgLy8gQSBjaGFxdWUgbW91dmVtZW50IGRlIHNjcm9sbCBsYSBmb25jdGlvbiBlc3QgYXBwZWzDqWVcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/btnMenu/btnMenu.js\n");

/***/ }),

/***/ "./src/btnMenu/onScroll.js":
/*!*********************************!*\
  !*** ./src/btnMenu/onScroll.js ***!
  \*********************************/
/*! exports provided: onScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onScroll\", function() { return onScroll; });\n/* harmony import */ var _toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleMenu.js */ \"./src/btnMenu/toggleMenu.js\");\n// Ajout d'un fond blanc au bouton de l'ouverture du menu lorsqu'il dépasse le header en scrollant en format mobile\n// MODULES NECESSAIRES\n // On récupère le bouton du menu déjà utilisé dans anim.js\n// FONCTIONS NECESSAIRES\n\nvar scrollY = function scrollY() {\n  // On créer une fonction qui va calculer la quantité de scroll effectuée par l'utilisateur avec un polyfil pour la propriété window.pageYOffset\n  var supportPageOffset = window.pageXOffset !== undefined;\n  var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';\n  return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\n}; // VARIABLES NECESSAIRES\n\n\nvar rect = _toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getBoundingClientRect(); // On récupère la position de notre bouton\n\nvar constraint = document.querySelector( // On va aller chercher dans notre élément bouton, l'attribut qui indique...\n_toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getAttribute('data-constraint') // ...quelle est la contrainte qui force notre bouton à changer d'élément (ici le header)\n);\nvar constraintRect = constraint.getBoundingClientRect(); // On va récupérer à son tour la position de la contrainte (=le header)\n\nvar constraintBottom = // On a besoin de connaitre la position du bas de la contrainte par rapport au bouton\nconstraintRect.top + scrollY() + constraintRect.height - rect.height; // = la position du haut de la contrainte + la quantité de scroll + sa hauteur - la hauteur du bouton\n// CREATION DE LA FONCTION ONSCROLL\n\nvar onScroll = function onScroll() {\n  if (scrollY() > constraintBottom) {\n    // Si la quantité de scroll effectué par l'utilisateur est supérieure au bas de la contrainte\n    _toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.add('menu__btn--solid'); // Un fond blanc est ajouté au bouton par l'ajout d'une classe --solid\n  } else if (_toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.contains('menu__btn--solid')) {\n    // Sinon\n    _toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.remove('menu__btn--solid'); // Le fond blanc est retiré au bouton par le retrait de la classe --solid\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnRuTWVudS9vblNjcm9sbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9idG5NZW51L29uU2Nyb2xsLmpzPzRiZTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQWpvdXQgZCd1biBmb25kIGJsYW5jIGF1IGJvdXRvbiBkZSBsJ291dmVydHVyZSBkdSBtZW51IGxvcnNxdSdpbCBkw6lwYXNzZSBsZSBoZWFkZXIgZW4gc2Nyb2xsYW50IGVuIGZvcm1hdCBtb2JpbGVcclxuXHJcbi8vIE1PRFVMRVMgTkVDRVNTQUlSRVNcclxuXHJcbmltcG9ydCB7IGJ0bk1lbnVPcGVuIH0gZnJvbSAnLi90b2dnbGVNZW51LmpzJyAvLyBPbiByw6ljdXDDqHJlIGxlIGJvdXRvbiBkdSBtZW51IGTDqWrDoCB1dGlsaXPDqSBkYW5zIGFuaW0uanNcclxuXHJcbi8vIEZPTkNUSU9OUyBORUNFU1NBSVJFU1xyXG5cclxuY29uc3Qgc2Nyb2xsWSA9IGZ1bmN0aW9uICgpIHsgLy8gT24gY3LDqWVyIHVuZSBmb25jdGlvbiBxdWkgdmEgY2FsY3VsZXIgbGEgcXVhbnRpdMOpIGRlIHNjcm9sbCBlZmZlY3R1w6llIHBhciBsJ3V0aWxpc2F0ZXVyIGF2ZWMgdW4gcG9seWZpbCBwb3VyIGxhIHByb3ByacOpdMOpIHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gIGNvbnN0IHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWRcclxuICBjb25zdCBpc0NTUzFDb21wYXQgPSAoZG9jdW1lbnQuY29tcGF0TW9kZSB8fCAnJykgPT09ICdDU1MxQ29tcGF0J1xyXG4gIHJldHVybiBzdXBwb3J0UGFnZU9mZnNldFxyXG4gICAgPyB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgIDogaXNDU1MxQ29tcGF0XHJcbiAgICAgID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxyXG4gICAgICA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXHJcbn1cclxuXHJcbi8vIFZBUklBQkxFUyBORUNFU1NBSVJFU1xyXG5cclxuY29uc3QgcmVjdCA9IGJ0bk1lbnVPcGVuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIC8vIE9uIHLDqWN1cMOocmUgbGEgcG9zaXRpb24gZGUgbm90cmUgYm91dG9uXHJcbmNvbnN0IGNvbnN0cmFpbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAvLyBPbiB2YSBhbGxlciBjaGVyY2hlciBkYW5zIG5vdHJlIMOpbMOpbWVudCBib3V0b24sIGwnYXR0cmlidXQgcXVpIGluZGlxdWUuLi5cclxuICBidG5NZW51T3Blbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29uc3RyYWludCcpIC8vIC4uLnF1ZWxsZSBlc3QgbGEgY29udHJhaW50ZSBxdWkgZm9yY2Ugbm90cmUgYm91dG9uIMOgIGNoYW5nZXIgZCfDqWzDqW1lbnQgKGljaSBsZSBoZWFkZXIpXHJcbilcclxuY29uc3QgY29uc3RyYWludFJlY3QgPSBjb25zdHJhaW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIC8vIE9uIHZhIHLDqWN1cMOpcmVyIMOgIHNvbiB0b3VyIGxhIHBvc2l0aW9uIGRlIGxhIGNvbnRyYWludGUgKD1sZSBoZWFkZXIpXHJcbmNvbnN0IGNvbnN0cmFpbnRCb3R0b20gPSAvLyBPbiBhIGJlc29pbiBkZSBjb25uYWl0cmUgbGEgcG9zaXRpb24gZHUgYmFzIGRlIGxhIGNvbnRyYWludGUgcGFyIHJhcHBvcnQgYXUgYm91dG9uXHJcbiAgY29uc3RyYWludFJlY3QudG9wICsgc2Nyb2xsWSgpICsgY29uc3RyYWludFJlY3QuaGVpZ2h0IC0gcmVjdC5oZWlnaHQgLy8gPSBsYSBwb3NpdGlvbiBkdSBoYXV0IGRlIGxhIGNvbnRyYWludGUgKyBsYSBxdWFudGl0w6kgZGUgc2Nyb2xsICsgc2EgaGF1dGV1ciAtIGxhIGhhdXRldXIgZHUgYm91dG9uXHJcblxyXG4vLyBDUkVBVElPTiBERSBMQSBGT05DVElPTiBPTlNDUk9MTFxyXG5cclxuY29uc3Qgb25TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHNjcm9sbFkoKSA+IGNvbnN0cmFpbnRCb3R0b20pIHsgLy8gU2kgbGEgcXVhbnRpdMOpIGRlIHNjcm9sbCBlZmZlY3R1w6kgcGFyIGwndXRpbGlzYXRldXIgZXN0IHN1cMOpcmlldXJlIGF1IGJhcyBkZSBsYSBjb250cmFpbnRlXHJcbiAgICBidG5NZW51T3Blbi5jbGFzc0xpc3QuYWRkKCdtZW51X19idG4tLXNvbGlkJykgLy8gVW4gZm9uZCBibGFuYyBlc3QgYWpvdXTDqSBhdSBib3V0b24gcGFyIGwnYWpvdXQgZCd1bmUgY2xhc3NlIC0tc29saWRcclxuICB9IGVsc2UgaWYgKGJ0bk1lbnVPcGVuLmNsYXNzTGlzdC5jb250YWlucygnbWVudV9fYnRuLS1zb2xpZCcpKSB7IC8vIFNpbm9uXHJcbiAgICBidG5NZW51T3Blbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X19idG4tLXNvbGlkJykgLy8gTGUgZm9uZCBibGFuYyBlc3QgcmV0aXLDqSBhdSBib3V0b24gcGFyIGxlIHJldHJhaXQgZGUgbGEgY2xhc3NlIC0tc29saWRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IG9uU2Nyb2xsIH1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/btnMenu/onScroll.js\n");

/***/ }),

/***/ "./src/btnMenu/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/btnMenu/toggleMenu.js ***!
  \***********************************/
/*! exports provided: btnMenuOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnMenuOpen\", function() { return btnMenuOpen; });\n// Animation de l'ouverture du menu en format mobile (width < 980 px)\n// VARIABLES NECESSAIRES\nvar btnMenuOpen = document.querySelector('.menu__btn'); // On récupère l'élément ayant pour class \".menu__btn\" = le bouton d'ouverture du menu\n\nvar btnMenuClose = document.querySelector('.close'); // On récupère l'élément ayant pour classe \"close\" = le bouton de fermeture du menu\n\nvar toggleMenu = document.getElementById('navpanel'); // On récupère l'élément ayant pour classe \"navpanel\" = le corps du menu\n// FONCTION D'OUVERTURE DU MENU\n\nbtnMenuOpen.addEventListener('click', function () {\n  // Quand on clique sur le bouton \"Menu\"\n  toggleMenu.classList.add('menu--active'); // la classe \"menu--active\" est ajoutée = scaleX(0)->scaleX(1) (cf.SASS, Layout, btnMenu.scss)\n}); // FONCTION DE FERMETURE\n\nbtnMenuClose.addEventListener('click', function () {\n  // Quand on clique sur la croix du menu\n  toggleMenu.classList.remove('menu--active'); // La classe \"menu--active\" est retirée\n});\n // On va le récupérer pour lui attribuer une autre caractéristique dans onScroll.js//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnRuTWVudS90b2dnbGVNZW51LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2J0bk1lbnUvdG9nZ2xlTWVudS5qcz80Yjk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFuaW1hdGlvbiBkZSBsJ291dmVydHVyZSBkdSBtZW51IGVuIGZvcm1hdCBtb2JpbGUgKHdpZHRoIDwgOTgwIHB4KVxyXG5cclxuLy8gVkFSSUFCTEVTIE5FQ0VTU0FJUkVTXHJcblxyXG5jb25zdCBidG5NZW51T3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19idG4nKSAvLyBPbiByw6ljdXDDqHJlIGwnw6lsw6ltZW50IGF5YW50IHBvdXIgY2xhc3MgXCIubWVudV9fYnRuXCIgPSBsZSBib3V0b24gZCdvdXZlcnR1cmUgZHUgbWVudVxyXG5jb25zdCBidG5NZW51Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKSAvLyBPbiByw6ljdXDDqHJlIGwnw6lsw6ltZW50IGF5YW50IHBvdXIgY2xhc3NlIFwiY2xvc2VcIiA9IGxlIGJvdXRvbiBkZSBmZXJtZXR1cmUgZHUgbWVudVxyXG5jb25zdCB0b2dnbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdnBhbmVsJykgLy8gT24gcsOpY3Vww6hyZSBsJ8OpbMOpbWVudCBheWFudCBwb3VyIGNsYXNzZSBcIm5hdnBhbmVsXCIgPSBsZSBjb3JwcyBkdSBtZW51XHJcblxyXG4vLyBGT05DVElPTiBEJ09VVkVSVFVSRSBEVSBNRU5VXHJcblxyXG5idG5NZW51T3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgLy8gUXVhbmQgb24gY2xpcXVlIHN1ciBsZSBib3V0b24gXCJNZW51XCJcclxuICB0b2dnbGVNZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtLWFjdGl2ZScpIC8vIGxhIGNsYXNzZSBcIm1lbnUtLWFjdGl2ZVwiIGVzdCBham91dMOpZSA9IHNjYWxlWCgwKS0+c2NhbGVYKDEpIChjZi5TQVNTLCBMYXlvdXQsIGJ0bk1lbnUuc2NzcylcclxufSlcclxuXHJcbi8vIEZPTkNUSU9OIERFIEZFUk1FVFVSRVxyXG5cclxuYnRuTWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyAvLyBRdWFuZCBvbiBjbGlxdWUgc3VyIGxhIGNyb2l4IGR1IG1lbnVcclxuICB0b2dnbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtLWFjdGl2ZScpIC8vIExhIGNsYXNzZSBcIm1lbnUtLWFjdGl2ZVwiIGVzdCByZXRpcsOpZVxyXG59KVxyXG5cclxuZXhwb3J0IHsgYnRuTWVudU9wZW4gfSAvLyBPbiB2YSBsZSByw6ljdXDDqXJlciBwb3VyIGx1aSBhdHRyaWJ1ZXIgdW5lIGF1dHJlIGNhcmFjdMOpcmlzdGlxdWUgZGFucyBvblNjcm9sbC5qc1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/btnMenu/toggleMenu.js\n");

/***/ }),

/***/ "./src/confirm.js":
/*!************************!*\
  !*** ./src/confirm.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _btnMenu_btnMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btnMenu/btnMenu.js */ \"./src/btnMenu/btnMenu.js\");\n/* global sessionStorage */\n// MODULES NECESSAIRES\n // Importation du bouton menu dynamique\n// VARIABLES NECESSAIRES\n\nvar myOrder = JSON.parse(sessionStorage.getItem('myOrder'));\nconsole.log(myOrder);\nvar spanFirstName = document.getElementById('firstName');\nvar spanId = document.getElementById('cmdId');\nvar spanTotal = document.getElementById('cmdTotal'); // AFFICHAGE DES INFORMATIONS DE CONFIRMATION\n\nspanFirstName.innerText = myOrder.contact.firstName;\nspanId.innerText = myOrder.orderId;\nspanTotal.innerText = sessionStorage.getItem('total') + ' €'; // BOUTON MENU DYNAMIQUE\n\nObject(_btnMenu_btnMenu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // On appelle la fonction pour activer le bouton dynamique du menu//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlybS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maXJtLmpzPzQ4ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHNlc3Npb25TdG9yYWdlICovXHJcblxyXG4vLyBNT0RVTEVTIE5FQ0VTU0FJUkVTXHJcblxyXG5pbXBvcnQgYnRuTWVudSBmcm9tICcuL2J0bk1lbnUvYnRuTWVudS5qcycgLy8gSW1wb3J0YXRpb24gZHUgYm91dG9uIG1lbnUgZHluYW1pcXVlXHJcblxyXG4vLyBWQVJJQUJMRVMgTkVDRVNTQUlSRVNcclxuXHJcbmNvbnN0IG15T3JkZXIgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ215T3JkZXInKSlcclxuY29uc29sZS5sb2cobXlPcmRlcilcclxuY29uc3Qgc3BhbkZpcnN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdE5hbWUnKVxyXG5jb25zdCBzcGFuSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY21kSWQnKVxyXG5jb25zdCBzcGFuVG90YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY21kVG90YWwnKVxyXG5cclxuLy8gQUZGSUNIQUdFIERFUyBJTkZPUk1BVElPTlMgREUgQ09ORklSTUFUSU9OXHJcblxyXG5zcGFuRmlyc3ROYW1lLmlubmVyVGV4dCA9IG15T3JkZXIuY29udGFjdC5maXJzdE5hbWVcclxuc3BhbklkLmlubmVyVGV4dCA9IG15T3JkZXIub3JkZXJJZFxyXG5zcGFuVG90YWwuaW5uZXJUZXh0ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG90YWwnKSArICcg4oKsJ1xyXG5cclxuLy8gQk9VVE9OIE1FTlUgRFlOQU1JUVVFXHJcblxyXG5idG5NZW51KCkgLy8gT24gYXBwZWxsZSBsYSBmb25jdGlvbiBwb3VyIGFjdGl2ZXIgbGUgYm91dG9uIGR5bmFtaXF1ZSBkdSBtZW51XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/confirm.js\n");

/***/ })

/******/ });