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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
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

/***/ "./src/configAjax.js":
/*!***************************!*\
  !*** ./src/configAjax.js ***!
  \***************************/
/*! exports provided: environment, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"environment\", function() { return environment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* global XMLHttpRequest */\n// MODULE AJAX\nvar environment = 'http://localhost:3000';\n\nvar get = function get(url) {\n  // On créé une fonction qui permet d'utiliser la méthode GET sur une URL donnée\n  return new Promise(function (resolve, reject) {\n    // Cette fonction retournera une promesse\n    var httpRequest = new XMLHttpRequest(); // La fonction va créer une requête AJAX\n\n    httpRequest.onreadystatechange = function () {\n      // On va suivre l'évolution de la requête\n      if (httpRequest.readyState === 4) {\n        if (httpRequest.status === 200) {\n          //  Si la requête s'est correctement déroulée (elle a aboutit + renvoie un code 200)\n          resolve(JSON.parse(httpRequest.responseText)); // La promesse est résolue quand la requête a su nous renvoyer le responseText du JSON parsé\n        } else {\n          reject(httpRequest); // Si une erreur lors de l'accès à l'API a eu lieu, il faut traiter l'erreur. On récupère l'objet httpRequest pour traitement ultérieur\n        }\n      }\n    };\n\n    httpRequest.open('GET', url, true); // Cette requête va utiliser la méthode GET sur l'URL en paramètre, de manière asynchrone\n\n    httpRequest.send(); // La fonction envoie la requête au serveur\n  });\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnQWpheC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maWdBamF4LmpzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXHJcblxyXG4vLyBNT0RVTEUgQUpBWFxyXG5cclxuY29uc3QgZW52aXJvbm1lbnQgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xyXG5cclxuY29uc3QgZ2V0ID0gZnVuY3Rpb24gKHVybCkgeyAvLyBPbiBjcsOpw6kgdW5lIGZvbmN0aW9uIHF1aSBwZXJtZXQgZCd1dGlsaXNlciBsYSBtw6l0aG9kZSBHRVQgc3VyIHVuZSBVUkwgZG9ubsOpZVxyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IC8vIENldHRlIGZvbmN0aW9uIHJldG91cm5lcmEgdW5lIHByb21lc3NlXHJcbiAgICBjb25zdCBodHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpIC8vIExhIGZvbmN0aW9uIHZhIGNyw6llciB1bmUgcmVxdcOqdGUgQUpBWFxyXG4gICAgaHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkgeyAvLyBPbiB2YSBzdWl2cmUgbCfDqXZvbHV0aW9uIGRlIGxhIHJlcXXDqnRlXHJcbiAgICAgIGlmIChodHRwUmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7IC8vICBTaSBsYSByZXF1w6p0ZSBzJ2VzdCBjb3JyZWN0ZW1lbnQgZMOpcm91bMOpZSAoZWxsZSBhIGFib3V0aXQgKyByZW52b2llIHVuIGNvZGUgMjAwKVxyXG4gICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dCkpIC8vIExhIHByb21lc3NlIGVzdCByw6lzb2x1ZSBxdWFuZCBsYSByZXF1w6p0ZSBhIHN1IG5vdXMgcmVudm95ZXIgbGUgcmVzcG9uc2VUZXh0IGR1IEpTT04gcGFyc8OpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChodHRwUmVxdWVzdCkgLy8gU2kgdW5lIGVycmV1ciBsb3JzIGRlIGwnYWNjw6hzIMOgIGwnQVBJIGEgZXUgbGlldSwgaWwgZmF1dCB0cmFpdGVyIGwnZXJyZXVyLiBPbiByw6ljdXDDqHJlIGwnb2JqZXQgaHR0cFJlcXVlc3QgcG91ciB0cmFpdGVtZW50IHVsdMOpcmlldXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGh0dHBSZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSkgLy8gQ2V0dGUgcmVxdcOqdGUgdmEgdXRpbGlzZXIgbGEgbcOpdGhvZGUgR0VUIHN1ciBsJ1VSTCBlbiBwYXJhbcOodHJlLCBkZSBtYW5pw6hyZSBhc3luY2hyb25lXHJcbiAgICBodHRwUmVxdWVzdC5zZW5kKCkgLy8gTGEgZm9uY3Rpb24gZW52b2llIGxhIHJlcXXDqnRlIGF1IHNlcnZldXJcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBlbnZpcm9ubWVudCB9XHJcbmV4cG9ydCB7IGdldCB9XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/configAjax.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _configAjax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configAjax.js */ \"./src/configAjax.js\");\n/* harmony import */ var _btnMenu_btnMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btnMenu/btnMenu.js */ \"./src/btnMenu/btnMenu.js\");\n// MODULES NECESSAIRES\n // Importation de la requête AJAX\n\n // Importation du bouton menu dynamique\n// VARIABLES NECESSAIRES\n\nvar url = _configAjax_js__WEBPACK_IMPORTED_MODULE_0__[\"environment\"] + '/api/cameras/'; // L'URL de la route\n// CREATION DE LA FONCTION GENERANT LA LISTE DES PRODUITS\n\nObject(_configAjax_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(url) // Avec la fonction get on récupère la liste des caméras à l'URL spécifié en paramètre\n.then(function (response) {\n  // La fonction contenant une promesse, on lui indique quoi faire en cas de succès de la requête\n  var items = response; // On créer une constante \"response\" qui contient la liste sous forme d'array\n\n  return items; // On retourne cette objet\n}) // Si la constante \"items\" est bien créée, on chaine avec une autre promesse qui se résout par l'envoi de la constante \"items\"\n.then(function createList(items) {\n  // La callback en cas de réussite prends en paramètre cette constanste\n  var ul = document.getElementById('items'); // On accède à l'élément \"ul\" de l'index.html\n\n  for (var i = 0; i < items.length; i++) {\n    // Pour chaque objet du tableau \"items\"\n    var item = items[i]; // On créé une variable \"item\" qui correspond à chaque élément du tableau des items\n\n    var li = ul.appendChild(document.createElement('li')); // On ajoute un élément enfant \"li\" dans \"ul\"\n\n    var h3 = li.appendChild(document.createElement('h3')); // On créé l'élément h3 qui contiendra le nom de l'appareil\n\n    var divImg = li.appendChild(document.createElement('div')); // On créer l'élément contenant l'image de l'item sous forme de div\n\n    var img = divImg.appendChild(document.createElement('img')); // On créer l'élément <img>\n\n    var a = li.appendChild(document.createElement('a')); // On créé un lien pour accéder au détail de l'appareil et le commander\n\n    li.classList.add('item'); // On lui donne une classe\n\n    h3.classList.add('item__title'); // On lui donne une classe\n\n    divImg.classList.add('item__img'); // On lui donne une classe\n\n    a.classList.add('item__btn'); // On lui donne une classe\n\n    h3.innerText = item.name; // On ajoute son nom\n\n    a.innerText = 'Voir ce modèle'; // Texte du bouton\n\n    img.setAttribute('src', item.imageUrl); // On lui donne la source de l'image\n\n    img.setAttribute('alt', 'Une photo du modèle ' + item.name); // On lui donne l'attribut a renseigner pour l'image, ici le nom de l'appareil\n\n    a.setAttribute('href', 'produit.html#' + item._id); // On charge la page \"produit.html\" + on ajoute un hash correspondant à l'id du produit demandé à l'URL\n  }\n})[\"catch\"](function (error) {\n  // Si la requête Xhr et/ou la création de la liste échoue(nt)\n  console.error('Erreur lors de la requête: ', error); // Le message est transmis à la console pour accès aux détails\n\n  var main = document.getElementById('main'); // On accède à l'élément section de classe \"main\"\n\n  var alert = main.appendChild(document.createElement('div')); // On y créer une \"div\"\n\n  alert.classList.add('error', 'error__server'); // On ajoute la classe \"error\" et \"__server\" à la div pour traitement CSS\n\n  alert.innerText = \"Une erreur s'est produite lors du chargement des articles\"; // On y affiche le message d'erreur\n}); // BOUTON MENU DYNAMIQUE\n\nObject(_btnMenu_btnMenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // On appelle la fonction pour activer le bouton dynamique du menu//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNT0RVTEVTIE5FQ0VTU0FJUkVTXHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCwgZ2V0IH0gZnJvbSAnLi9jb25maWdBamF4LmpzJyAvLyBJbXBvcnRhdGlvbiBkZSBsYSByZXF1w6p0ZSBBSkFYXHJcbmltcG9ydCBidG5NZW51IGZyb20gJy4vYnRuTWVudS9idG5NZW51LmpzJyAvLyBJbXBvcnRhdGlvbiBkdSBib3V0b24gbWVudSBkeW5hbWlxdWVcclxuXHJcbi8vIFZBUklBQkxFUyBORUNFU1NBSVJFU1xyXG5cclxuY29uc3QgdXJsID0gZW52aXJvbm1lbnQgKyAnL2FwaS9jYW1lcmFzLycvLyBMJ1VSTCBkZSBsYSByb3V0ZVxyXG5cclxuLy8gQ1JFQVRJT04gREUgTEEgRk9OQ1RJT04gR0VORVJBTlQgTEEgTElTVEUgREVTIFBST0RVSVRTXHJcblxyXG5nZXQodXJsKSAvLyBBdmVjIGxhIGZvbmN0aW9uIGdldCBvbiByw6ljdXDDqHJlIGxhIGxpc3RlIGRlcyBjYW3DqXJhcyDDoCBsJ1VSTCBzcMOpY2lmacOpIGVuIHBhcmFtw6h0cmVcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgLy8gTGEgZm9uY3Rpb24gY29udGVuYW50IHVuZSBwcm9tZXNzZSwgb24gbHVpIGluZGlxdWUgcXVvaSBmYWlyZSBlbiBjYXMgZGUgc3VjY8OocyBkZSBsYSByZXF1w6p0ZVxyXG4gICAgY29uc3QgaXRlbXMgPSByZXNwb25zZSAvLyBPbiBjcsOpZXIgdW5lIGNvbnN0YW50ZSBcInJlc3BvbnNlXCIgcXVpIGNvbnRpZW50IGxhIGxpc3RlIHNvdXMgZm9ybWUgZCdhcnJheVxyXG4gICAgcmV0dXJuIGl0ZW1zIC8vIE9uIHJldG91cm5lIGNldHRlIG9iamV0XHJcbiAgfSkgLy8gU2kgbGEgY29uc3RhbnRlIFwiaXRlbXNcIiBlc3QgYmllbiBjcsOpw6llLCBvbiBjaGFpbmUgYXZlYyB1bmUgYXV0cmUgcHJvbWVzc2UgcXVpIHNlIHLDqXNvdXQgcGFyIGwnZW52b2kgZGUgbGEgY29uc3RhbnRlIFwiaXRlbXNcIlxyXG4gIC50aGVuKGZ1bmN0aW9uIGNyZWF0ZUxpc3QgKGl0ZW1zKSB7IC8vIExhIGNhbGxiYWNrIGVuIGNhcyBkZSByw6l1c3NpdGUgcHJlbmRzIGVuIHBhcmFtw6h0cmUgY2V0dGUgY29uc3RhbnN0ZVxyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMnKSAvLyBPbiBhY2PDqGRlIMOgIGwnw6lsw6ltZW50IFwidWxcIiBkZSBsJ2luZGV4Lmh0bWxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHsgLy8gUG91ciBjaGFxdWUgb2JqZXQgZHUgdGFibGVhdSBcIml0ZW1zXCJcclxuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldIC8vIE9uIGNyw6nDqSB1bmUgdmFyaWFibGUgXCJpdGVtXCIgcXVpIGNvcnJlc3BvbmQgw6AgY2hhcXVlIMOpbMOpbWVudCBkdSB0YWJsZWF1IGRlcyBpdGVtc1xyXG4gICAgICBjb25zdCBsaSA9IHVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpIC8vIE9uIGFqb3V0ZSB1biDDqWzDqW1lbnQgZW5mYW50IFwibGlcIiBkYW5zIFwidWxcIlxyXG4gICAgICBjb25zdCBoMyA9IGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJykpIC8vIE9uIGNyw6nDqSBsJ8OpbMOpbWVudCBoMyBxdWkgY29udGllbmRyYSBsZSBub20gZGUgbCdhcHBhcmVpbFxyXG4gICAgICBjb25zdCBkaXZJbWcgPSBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkgLy8gT24gY3LDqWVyIGwnw6lsw6ltZW50IGNvbnRlbmFudCBsJ2ltYWdlIGRlIGwnaXRlbSBzb3VzIGZvcm1lIGRlIGRpdlxyXG4gICAgICBjb25zdCBpbWcgPSBkaXZJbWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykpIC8vIE9uIGNyw6llciBsJ8OpbMOpbWVudCA8aW1nPlxyXG4gICAgICBjb25zdCBhID0gbGkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKSAvLyBPbiBjcsOpw6kgdW4gbGllbiBwb3VyIGFjY8OpZGVyIGF1IGTDqXRhaWwgZGUgbCdhcHBhcmVpbCBldCBsZSBjb21tYW5kZXJcclxuICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnaXRlbScpIC8vIE9uIGx1aSBkb25uZSB1bmUgY2xhc3NlXHJcbiAgICAgIGgzLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX3RpdGxlJykgLy8gT24gbHVpIGRvbm5lIHVuZSBjbGFzc2VcclxuICAgICAgZGl2SW1nLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX2ltZycpIC8vIE9uIGx1aSBkb25uZSB1bmUgY2xhc3NlXHJcbiAgICAgIGEuY2xhc3NMaXN0LmFkZCgnaXRlbV9fYnRuJykgLy8gT24gbHVpIGRvbm5lIHVuZSBjbGFzc2VcclxuICAgICAgaDMuaW5uZXJUZXh0ID0gaXRlbS5uYW1lIC8vIE9uIGFqb3V0ZSBzb24gbm9tXHJcbiAgICAgIGEuaW5uZXJUZXh0ID0gJ1ZvaXIgY2UgbW9kw6hsZScgLy8gVGV4dGUgZHUgYm91dG9uXHJcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGl0ZW0uaW1hZ2VVcmwpIC8vIE9uIGx1aSBkb25uZSBsYSBzb3VyY2UgZGUgbCdpbWFnZVxyXG4gICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnVW5lIHBob3RvIGR1IG1vZMOobGUgJyArIGl0ZW0ubmFtZSkgLy8gT24gbHVpIGRvbm5lIGwnYXR0cmlidXQgYSByZW5zZWlnbmVyIHBvdXIgbCdpbWFnZSwgaWNpIGxlIG5vbSBkZSBsJ2FwcGFyZWlsXHJcbiAgICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJ3Byb2R1aXQuaHRtbCMnICsgaXRlbS5faWQpIC8vIE9uIGNoYXJnZSBsYSBwYWdlIFwicHJvZHVpdC5odG1sXCIgKyBvbiBham91dGUgdW4gaGFzaCBjb3JyZXNwb25kYW50IMOgIGwnaWQgZHUgcHJvZHVpdCBkZW1hbmTDqSDDoCBsJ1VSTFxyXG4gICAgfVxyXG4gIH0pXHJcbiAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgLy8gU2kgbGEgcmVxdcOqdGUgWGhyIGV0L291IGxhIGNyw6lhdGlvbiBkZSBsYSBsaXN0ZSDDqWNob3VlKG50KVxyXG4gICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcmVxdcOqdGU6ICcsIGVycm9yKSAvLyBMZSBtZXNzYWdlIGVzdCB0cmFuc21pcyDDoCBsYSBjb25zb2xlIHBvdXIgYWNjw6hzIGF1eCBkw6l0YWlsc1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykgLy8gT24gYWNjw6hkZSDDoCBsJ8OpbMOpbWVudCBzZWN0aW9uIGRlIGNsYXNzZSBcIm1haW5cIlxyXG4gICAgY29uc3QgYWxlcnQgPSBtYWluLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKSAvLyBPbiB5IGNyw6llciB1bmUgXCJkaXZcIlxyXG4gICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnZXJyb3InLCAnZXJyb3JfX3NlcnZlcicpIC8vIE9uIGFqb3V0ZSBsYSBjbGFzc2UgXCJlcnJvclwiIGV0IFwiX19zZXJ2ZXJcIiDDoCBsYSBkaXYgcG91ciB0cmFpdGVtZW50IENTU1xyXG4gICAgYWxlcnQuaW5uZXJUZXh0ID1cclxuICAgICAgXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlIGxvcnMgZHUgY2hhcmdlbWVudCBkZXMgYXJ0aWNsZXNcIiAvLyBPbiB5IGFmZmljaGUgbGUgbWVzc2FnZSBkJ2VycmV1clxyXG4gIH0pXHJcblxyXG4vLyBCT1VUT04gTUVOVSBEWU5BTUlRVUVcclxuXHJcbmJ0bk1lbnUoKSAvLyBPbiBhcHBlbGxlIGxhIGZvbmN0aW9uIHBvdXIgYWN0aXZlciBsZSBib3V0b24gZHluYW1pcXVlIGR1IG1lbnVcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });