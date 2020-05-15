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

/***/ "./src/anim.js":
/*!*********************!*\
  !*** ./src/anim.js ***!
  \*********************/
/*! exports provided: btnMenuOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnMenuOpen\", function() { return btnMenuOpen; });\n// Animation de l'ouverture du menu\nvar btnMenuOpen = document.querySelector('.menu__btn');\nvar btnMenuClose = document.querySelector('.close');\nvar toggleMenu = document.getElementById('navpanel');\nbtnMenuOpen.addEventListener('click', function () {\n  toggleMenu.classList.add('menu--active');\n});\nbtnMenuClose.addEventListener('click', function () {\n  toggleMenu.classList.remove('menu--active');\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYW5pbS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hbmltLmpzP2M5MzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5pbWF0aW9uIGRlIGwnb3V2ZXJ0dXJlIGR1IG1lbnVcclxuXHJcbmNvbnN0IGJ0bk1lbnVPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2J0bicpXHJcbmNvbnN0IGJ0bk1lbnVDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXHJcbmNvbnN0IHRvZ2dsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2cGFuZWwnKVxyXG5cclxuYnRuTWVudU9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgdG9nZ2xlTWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LS1hY3RpdmUnKVxyXG59KVxyXG5cclxuYnRuTWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIHRvZ2dsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tYWN0aXZlJylcclxufSlcclxuXHJcbmV4cG9ydCB7IGJ0bk1lbnVPcGVuIH1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/anim.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: environment, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"environment\", function() { return environment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* global XMLHttpRequest */\nvar environment = 'http://localhost:3000';\n\nvar get = function get(url) {\n  // On créé une fonction qui permet d'utiliser la méthode GET sur une URL donnée\n  return new Promise(function (resolve, reject) {\n    // Cette fonction retournera une promesse qui fera :\n    var httpRequest = new XMLHttpRequest(); // La fonction va créer une requête Http\n\n    httpRequest.onreadystatechange = function () {\n      // On va suivre l'évolution de la requête\n      if (httpRequest.readyState === 4) {\n        if (httpRequest.status === 200) {\n          //  Si la requête s'est correctement déroulée (elle a aboutit + renvoie un code 200)\n          resolve(JSON.parse(httpRequest.responseText)); // La promesse est résolue quand la requête a su nous renvoyer le responseText\n        } else {\n          reject(httpRequest); // Si une erreur lors de l'accès à l'API a eu lieu, il faut traiter l'erreur\n        }\n      }\n    };\n\n    httpRequest.open('GET', url, true); // Cette requête va utiliser la méthode GET sur l'URL en paramètre, de manière asynchrone\n\n    httpRequest.send(); // La fonction envoie la requête au serveur\n  });\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcz9kYjQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xyXG5jb25zdCBlbnZpcm9ubWVudCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXHJcblxyXG5jb25zdCBnZXQgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgLy8gT24gY3LDqcOpIHVuZSBmb25jdGlvbiBxdWkgcGVybWV0IGQndXRpbGlzZXIgbGEgbcOpdGhvZGUgR0VUIHN1ciB1bmUgVVJMIGRvbm7DqWVcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgLy8gQ2V0dGUgZm9uY3Rpb24gcmV0b3VybmVyYSB1bmUgcHJvbWVzc2UgcXVpIGZlcmEgOlxyXG4gICAgY29uc3QgaHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSAvLyBMYSBmb25jdGlvbiB2YSBjcsOpZXIgdW5lIHJlcXXDqnRlIEh0dHBcclxuICAgIGh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gT24gdmEgc3VpdnJlIGwnw6l2b2x1dGlvbiBkZSBsYSByZXF1w6p0ZVxyXG4gICAgICBpZiAoaHR0cFJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgIGlmIChodHRwUmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgLy8gIFNpIGxhIHJlcXXDqnRlIHMnZXN0IGNvcnJlY3RlbWVudCBkw6lyb3Vsw6llIChlbGxlIGEgYWJvdXRpdCArIHJlbnZvaWUgdW4gY29kZSAyMDApXHJcbiAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0KSkgLy8gTGEgcHJvbWVzc2UgZXN0IHLDqXNvbHVlIHF1YW5kIGxhIHJlcXXDqnRlIGEgc3Ugbm91cyByZW52b3llciBsZSByZXNwb25zZVRleHRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KGh0dHBSZXF1ZXN0KSAvLyBTaSB1bmUgZXJyZXVyIGxvcnMgZGUgbCdhY2PDqHMgw6AgbCdBUEkgYSBldSBsaWV1LCBpbCBmYXV0IHRyYWl0ZXIgbCdlcnJldXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGh0dHBSZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSkgLy8gQ2V0dGUgcmVxdcOqdGUgdmEgdXRpbGlzZXIgbGEgbcOpdGhvZGUgR0VUIHN1ciBsJ1VSTCBlbiBwYXJhbcOodHJlLCBkZSBtYW5pw6hyZSBhc3luY2hyb25lXHJcbiAgICBodHRwUmVxdWVzdC5zZW5kKCkgLy8gTGEgZm9uY3Rpb24gZW52b2llIGxhIHJlcXXDqnRlIGF1IHNlcnZldXJcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBlbnZpcm9ubWVudCB9XHJcbmV4cG9ydCB7IGdldCB9XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onScroll.js */ \"./src/onScroll.js\");\n // Importation de la requête AJAX\n\n\n\nvar createList = function createList() {\n  // On créé une fonction qui va récupérer les différents items de caméra dans l'API pour construire la liste des produits\n  Object(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"environment\"] + '/api/cameras/').then(function (response) {\n    // Elle fera appel à la fonction get avec l'URL appropriée, la fonction get contenant une promesse, on lui indique quoi faire en cas de succès de la requête\n    var items = response; // Si la requête Xrh aboutie, il faudra créer une constante \"items\", qui sera la réponse de la promesse regroupant ainsi les différents modèle de caméra dans un tableau\n\n    var ul = document.getElementById('items'); // On accède à l'élément \"ul\" de l'index.html\n\n    for (var i = 0; i < items.length; i++) {\n      // Pour chaque classe du tableau \"items\"\n      var item = items[i]; // On créé une variable \"item\" qui correspond à chaque élément du tableau des items\n\n      var li = ul.appendChild(document.createElement('li')); // On ajoute un élément enfant \"li\" dans \"ul\"\n\n      li.classList.add('item'); // On lui donne une classe\n\n      var h3 = li.appendChild(document.createElement('h3')); // On créé l'élément h3 qui contiendra le nom de l'appareil\n\n      h3.classList.add('item__title');\n      h3.innerText = item.name;\n      var divImg = li.appendChild(document.createElement('div')); // On créer l'élément contenant l'image de l'item sous forme de div\n\n      divImg.classList.add('item__img'); // On lui donne une classe\n\n      var img = divImg.appendChild(document.createElement('img')); // On créer l'élément <img>\n\n      img.setAttribute('src', item.imageUrl); // On lui donne la source de l'image\n\n      img.setAttribute('alt', item.name); // On lui donne l'attribut a renseigner pour l'image, ici le nom de l'appareil\n\n      var a = li.appendChild(document.createElement('a')); // On créé un lien pour accéder au détail de l'appareil et le commander\n\n      a.setAttribute('href', 'produit.html#' + item._id); // On charge la page \"produit.html\" + on ajoute un hash correspondant à l'id du produit demandé à l'URL\n\n      a.classList.add('item__btn');\n      a.innerText = 'Voir ce modèle';\n    }\n  })[\"catch\"](function (error) {\n    // Si la requête Xhr échoue, on transmet un message d'erreur et on indique qu'un problème à eu lieu lors de la requête\n    console.error('Erreur lors de la requête', error); // Le message est transmis à la console pour accès aux détails\n\n    var main = document.getElementById('main'); // On accède à l'élément section de classe \"main\"\n\n    var alert = main.appendChild(document.createElement('div')); // On y créer une \"div\"\n\n    alert.classList.add('error', 'error__server'); // On ajoute la classe \"error\" à la div pour traitement CSS\n\n    alert.innerText = \"Une erreur s'est produite lors du chargement des articles\"; // On y affiche le message d'erreur\n  });\n};\n\ncreateList(); // On appel la fonction pour créer notre liste\n\nObject(_onScroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbnZpcm9ubWVudCwgZ2V0IH0gZnJvbSAnLi9jb25maWcuanMnIC8vIEltcG9ydGF0aW9uIGRlIGxhIHJlcXXDqnRlIEFKQVhcclxuaW1wb3J0IGFuaW1hdGlvbk1lbnUgZnJvbSAnLi9vblNjcm9sbC5qcydcclxuXHJcbmNvbnN0IGNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gT24gY3LDqcOpIHVuZSBmb25jdGlvbiBxdWkgdmEgcsOpY3Vww6lyZXIgbGVzIGRpZmbDqXJlbnRzIGl0ZW1zIGRlIGNhbcOpcmEgZGFucyBsJ0FQSSBwb3VyIGNvbnN0cnVpcmUgbGEgbGlzdGUgZGVzIHByb2R1aXRzXHJcbiAgZ2V0KGVudmlyb25tZW50ICsgJy9hcGkvY2FtZXJhcy8nKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIC8vIEVsbGUgZmVyYSBhcHBlbCDDoCBsYSBmb25jdGlvbiBnZXQgYXZlYyBsJ1VSTCBhcHByb3ByacOpZSwgbGEgZm9uY3Rpb24gZ2V0IGNvbnRlbmFudCB1bmUgcHJvbWVzc2UsIG9uIGx1aSBpbmRpcXVlIHF1b2kgZmFpcmUgZW4gY2FzIGRlIHN1Y2PDqHMgZGUgbGEgcmVxdcOqdGVcclxuICAgICAgY29uc3QgaXRlbXMgPSByZXNwb25zZSAvLyBTaSBsYSByZXF1w6p0ZSBYcmggYWJvdXRpZSwgaWwgZmF1ZHJhIGNyw6llciB1bmUgY29uc3RhbnRlIFwiaXRlbXNcIiwgcXVpIHNlcmEgbGEgcsOpcG9uc2UgZGUgbGEgcHJvbWVzc2UgcmVncm91cGFudCBhaW5zaSBsZXMgZGlmZsOpcmVudHMgbW9kw6hsZSBkZSBjYW3DqXJhIGRhbnMgdW4gdGFibGVhdVxyXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtcycpIC8vIE9uIGFjY8OoZGUgw6AgbCfDqWzDqW1lbnQgXCJ1bFwiIGRlIGwnaW5kZXguaHRtbFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gUG91ciBjaGFxdWUgY2xhc3NlIGR1IHRhYmxlYXUgXCJpdGVtc1wiXHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXSAvLyBPbiBjcsOpw6kgdW5lIHZhcmlhYmxlIFwiaXRlbVwiIHF1aSBjb3JyZXNwb25kIMOgIGNoYXF1ZSDDqWzDqW1lbnQgZHUgdGFibGVhdSBkZXMgaXRlbXNcclxuXHJcbiAgICAgICAgY29uc3QgbGkgPSB1bC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpKSAvLyBPbiBham91dGUgdW4gw6lsw6ltZW50IGVuZmFudCBcImxpXCIgZGFucyBcInVsXCJcclxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdpdGVtJykgLy8gT24gbHVpIGRvbm5lIHVuZSBjbGFzc2VcclxuXHJcbiAgICAgICAgY29uc3QgaDMgPSBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpKSAvLyBPbiBjcsOpw6kgbCfDqWzDqW1lbnQgaDMgcXVpIGNvbnRpZW5kcmEgbGUgbm9tIGRlIGwnYXBwYXJlaWxcclxuICAgICAgICBoMy5jbGFzc0xpc3QuYWRkKCdpdGVtX190aXRsZScpXHJcbiAgICAgICAgaDMuaW5uZXJUZXh0ID0gaXRlbS5uYW1lXHJcblxyXG4gICAgICAgIGNvbnN0IGRpdkltZyA9IGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKSAvLyBPbiBjcsOpZXIgbCfDqWzDqW1lbnQgY29udGVuYW50IGwnaW1hZ2UgZGUgbCdpdGVtIHNvdXMgZm9ybWUgZGUgZGl2XHJcbiAgICAgICAgZGl2SW1nLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX2ltZycpIC8vIE9uIGx1aSBkb25uZSB1bmUgY2xhc3NlXHJcbiAgICAgICAgY29uc3QgaW1nID0gZGl2SW1nLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpKSAvLyBPbiBjcsOpZXIgbCfDqWzDqW1lbnQgPGltZz5cclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpdGVtLmltYWdlVXJsKSAvLyBPbiBsdWkgZG9ubmUgbGEgc291cmNlIGRlIGwnaW1hZ2VcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBpdGVtLm5hbWUpIC8vIE9uIGx1aSBkb25uZSBsJ2F0dHJpYnV0IGEgcmVuc2VpZ25lciBwb3VyIGwnaW1hZ2UsIGljaSBsZSBub20gZGUgbCdhcHBhcmVpbFxyXG5cclxuICAgICAgICBjb25zdCBhID0gbGkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKSAvLyBPbiBjcsOpw6kgdW4gbGllbiBwb3VyIGFjY8OpZGVyIGF1IGTDqXRhaWwgZGUgbCdhcHBhcmVpbCBldCBsZSBjb21tYW5kZXJcclxuICAgICAgICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsICdwcm9kdWl0Lmh0bWwjJyArIGl0ZW0uX2lkKSAvLyBPbiBjaGFyZ2UgbGEgcGFnZSBcInByb2R1aXQuaHRtbFwiICsgb24gYWpvdXRlIHVuIGhhc2ggY29ycmVzcG9uZGFudCDDoCBsJ2lkIGR1IHByb2R1aXQgZGVtYW5kw6kgw6AgbCdVUkxcclxuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX2J0bicpXHJcbiAgICAgICAgYS5pbm5lclRleHQgPSAnVm9pciBjZSBtb2TDqGxlJ1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBTaSBsYSByZXF1w6p0ZSBYaHIgw6ljaG91ZSwgb24gdHJhbnNtZXQgdW4gbWVzc2FnZSBkJ2VycmV1ciBldCBvbiBpbmRpcXVlIHF1J3VuIHByb2Jsw6htZSDDoCBldSBsaWV1IGxvcnMgZGUgbGEgcmVxdcOqdGVcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcmVxdcOqdGUnLCBlcnJvcikgLy8gTGUgbWVzc2FnZSBlc3QgdHJhbnNtaXMgw6AgbGEgY29uc29sZSBwb3VyIGFjY8OocyBhdXggZMOpdGFpbHNcclxuICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykgLy8gT24gYWNjw6hkZSDDoCBsJ8OpbMOpbWVudCBzZWN0aW9uIGRlIGNsYXNzZSBcIm1haW5cIlxyXG4gICAgICBjb25zdCBhbGVydCA9IG1haW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpIC8vIE9uIHkgY3LDqWVyIHVuZSBcImRpdlwiXHJcbiAgICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJywgJ2Vycm9yX19zZXJ2ZXInKSAvLyBPbiBham91dGUgbGEgY2xhc3NlIFwiZXJyb3JcIiDDoCBsYSBkaXYgcG91ciB0cmFpdGVtZW50IENTU1xyXG4gICAgICBhbGVydC5pbm5lclRleHQgPVxyXG4gICAgICAgIFwiVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZSBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIGFydGljbGVzXCIgLy8gT24geSBhZmZpY2hlIGxlIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgIH0pXHJcbn1cclxuXHJcbmNyZWF0ZUxpc3QoKSAvLyBPbiBhcHBlbCBsYSBmb25jdGlvbiBwb3VyIGNyw6llciBub3RyZSBsaXN0ZVxyXG5hbmltYXRpb25NZW51KClcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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