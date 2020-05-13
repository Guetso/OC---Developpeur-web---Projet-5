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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnMenuOpen\", function() { return btnMenuOpen; });\n// Animation de l'ouverture du menu\nvar btnMenuOpen = document.querySelector(\".menu__btn\");\nvar btnMenuClose = document.querySelector(\".close\");\nvar toggleMenu = document.getElementById(\"navpanel\");\nbtnMenuOpen.addEventListener(\"click\", function () {\n  toggleMenu.classList.add(\"menu--active\");\n});\nbtnMenuClose.addEventListener(\"click\", function () {\n  toggleMenu.classList.remove(\"menu--active\");\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYW5pbS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hbmltLmpzP2M5MzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5pbWF0aW9uIGRlIGwnb3V2ZXJ0dXJlIGR1IG1lbnVcclxuXHJcbmNvbnN0IGJ0bk1lbnVPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19idG5cIilcclxuY29uc3QgYnRuTWVudUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKVxyXG5jb25zdCB0b2dnbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZwYW5lbFwiKVxyXG5cclxuYnRuTWVudU9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRvZ2dsZU1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtLWFjdGl2ZVwiKVxyXG59KVxyXG5cclxuYnRuTWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0b2dnbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hY3RpdmVcIilcclxufSlcclxuXHJcbmV4cG9ydCB7YnRuTWVudU9wZW59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/anim.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: environment, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"environment\", function() { return environment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\nvar environment = \"http://localhost:3000\";\n\nvar get = function get(url) {\n  // On créé une fonction qui permet d'utiliser la méthode GET sur une URL donnée\n  return new Promise(function (resolve, reject) {\n    // Cette fonction retournera une promesse qui fera :\n    var httpRequest = new XMLHttpRequest(); // La fonction va créer une requête Http\n\n    httpRequest.onreadystatechange = function () {\n      // On va suivre l'évolution de la requête\n      if (httpRequest.readyState === 4) {\n        if (httpRequest.status === 200) {\n          //  Si la requête s'est correctement déroulée (elle a aboutit + renvoie un code 200)\n          resolve(JSON.parse(httpRequest.responseText)); // La promesse est résolue quand la requête a su nous renvoyer le responseText\n        } else {\n          reject(httpRequest); // Si une erreur lors de l'accès à l'API a eu lieu, il faut traiter l'erreur\n        }\n      }\n    };\n\n    httpRequest.open(\"GET\", url, true); // Cette requête va utiliser la méthode GET sur l'URL en paramètre, de manière asynchrone\n\n    httpRequest.send(); // La fonction envoie la requête au serveur\n  });\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcz9kYjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVudmlyb25tZW50ID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIlxyXG5cclxuY29uc3QgZ2V0ID0gZnVuY3Rpb24gKHVybCkgeyAvLyBPbiBjcsOpw6kgdW5lIGZvbmN0aW9uIHF1aSBwZXJtZXQgZCd1dGlsaXNlciBsYSBtw6l0aG9kZSBHRVQgc3VyIHVuZSBVUkwgZG9ubsOpZVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgLy8gQ2V0dGUgZm9uY3Rpb24gcmV0b3VybmVyYSB1bmUgcHJvbWVzc2UgcXVpIGZlcmEgOlxyXG4gICAgICAgIGNvbnN0IGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgLy8gTGEgZm9uY3Rpb24gdmEgY3LDqWVyIHVuZSByZXF1w6p0ZSBIdHRwXHJcbiAgICAgICAgaHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkgeyAvLyBPbiB2YSBzdWl2cmUgbCfDqXZvbHV0aW9uIGRlIGxhIHJlcXXDqnRlXHJcbiAgICAgICAgICAgIGlmIChodHRwUmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaHR0cFJlcXVlc3Quc3RhdHVzID09PSAyMDApIHsgLy8gIFNpIGxhIHJlcXXDqnRlIHMnZXN0IGNvcnJlY3RlbWVudCBkw6lyb3Vsw6llIChlbGxlIGEgYWJvdXRpdCArIHJlbnZvaWUgdW4gY29kZSAyMDApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dCkpIC8vIExhIHByb21lc3NlIGVzdCByw6lzb2x1ZSBxdWFuZCBsYSByZXF1w6p0ZSBhIHN1IG5vdXMgcmVudm95ZXIgbGUgcmVzcG9uc2VUZXh0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChodHRwUmVxdWVzdCkgLy8gU2kgdW5lIGVycmV1ciBsb3JzIGRlIGwnYWNjw6hzIMOgIGwnQVBJIGEgZXUgbGlldSwgaWwgZmF1dCB0cmFpdGVyIGwnZXJyZXVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaHR0cFJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpIC8vIENldHRlIHJlcXXDqnRlIHZhIHV0aWxpc2VyIGxhIG3DqXRob2RlIEdFVCBzdXIgbCdVUkwgZW4gcGFyYW3DqHRyZSwgZGUgbWFuacOocmUgYXN5bmNocm9uZVxyXG4gICAgICAgIGh0dHBSZXF1ZXN0LnNlbmQoKSAvLyBMYSBmb25jdGlvbiBlbnZvaWUgbGEgcmVxdcOqdGUgYXUgc2VydmV1clxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IHsgZW52aXJvbm1lbnQgfVxyXG5leHBvcnQgeyBnZXQgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onScroll.js */ \"./src/onScroll.js\");\n // Importation de la requête AJAX\n\n\n\n(function () {\n  if (window.innerWidth <= 980) {}\n})();\n\nvar createList = function createList() {\n  // On créé une fonction qui va récupérer les différents items de caméra dans l'API pour construire la liste des produits\n  Object(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"environment\"] + \"/api/cameras/\").then(function (response) {\n    // Elle fera appel à la fonction get avec l'URL appropriée, la fonction get contenant une promesse, on lui indique quoi faire en cas de succès de la requête\n    var items = response; //Si la requête Xrh aboutie, il faudra créer une constante \"items\", qui sera la réponse de la promesse regroupant ainsi les différents modèle de caméra dans un tableau\n\n    var ul = document.getElementById(\"items\"); // On accède à l'élément \"ul\" de l'index.html\n\n    for (var i = 0; i < items.length; i++) {\n      // Pour chaque classe du tableau \"items\"\n      var item = items[i]; // On créé une variable \"item\" qui correspond à chaque élément du tableau des items\n\n      var li = ul.appendChild(document.createElement(\"li\")); // On ajoute un élément enfant \"li\" dans \"ul\"\n\n      li.classList.add(\"item\"); // On lui donne une classe\n\n      var h3 = li.appendChild(document.createElement(\"h3\")); // On créé l'élément h3 qui contiendra le nom de l'appareil\n\n      h3.classList.add(\"item__title\");\n      h3.innerText = item.name;\n      var divImg = li.appendChild(document.createElement(\"div\")); // On créer l'élément contenant l'image de l'item sous forme de div\n\n      divImg.classList.add(\"item__img\"); // On lui donne une classe\n\n      var img = divImg.appendChild(document.createElement(\"img\")); // On créer l'élément <img>\n\n      img.setAttribute(\"src\", item.imageUrl); // On lui donne la source de l'image\n\n      img.setAttribute(\"alt\", item.name); // On lui donne l'attribut a renseigner pour l'image, ici le nom de l'appareil\n\n      var a = li.appendChild(document.createElement(\"a\")); // On créé un lien pour accéder au détail de l'appareil et le commander\n\n      a.setAttribute(\"href\", \"produit.html#\" + item._id); // On charge la page \"produit.html\" + on ajoute un hash correspondant à l'id du produit demandé à l'URL\n\n      a.classList.add(\"item__btn\");\n      a.innerText = \"Voir ce modèle\";\n    }\n  })[\"catch\"](function (error) {\n    // Si la requête Xhr échoue, on transmet un message d'erreur et on indique qu'un problème à eu lieu lors de la requête\n    console.error(\"Erreur lors de la requête\", error); // Le message est transmis à la console pour accès aux détails\n\n    var main = document.getElementById(\"main\"); // On accède à l'élément section de classe \"main\"\n\n    var alert = main.appendChild(document.createElement(\"div\")); // On y créer une \"div\"\n\n    alert.classList.add(\"error\", \"error__server\"); // On ajoute la classe \"error\" à la div pour traitement CSS\n\n    alert.innerText = \"Une erreur s'est produite lors du chargement des articles\"; // On y affiche le message d'erreur\n  });\n};\n\ncreateList(); // On appel la fonction pour créer notre liste//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbnZpcm9ubWVudCwgZ2V0IH0gZnJvbSBcIi4vY29uZmlnLmpzXCIgLy8gSW1wb3J0YXRpb24gZGUgbGEgcmVxdcOqdGUgQUpBWFxyXG5pbXBvcnQgYW5pbWF0aW9uTWVudSBmcm9tIFwiLi9vblNjcm9sbC5qc1wiXHJcblxyXG4oZnVuY3Rpb24oKXtcclxuIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA5ODApIHt9XHJcbn0pKClcclxuXHJcbmNvbnN0IGNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAoKSB7IC8vIE9uIGNyw6nDqSB1bmUgZm9uY3Rpb24gcXVpIHZhIHLDqWN1cMOpcmVyIGxlcyBkaWZmw6lyZW50cyBpdGVtcyBkZSBjYW3DqXJhIGRhbnMgbCdBUEkgcG91ciBjb25zdHJ1aXJlIGxhIGxpc3RlIGRlcyBwcm9kdWl0c1xyXG4gICAgZ2V0KGVudmlyb25tZW50ICsgXCIvYXBpL2NhbWVyYXMvXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IC8vIEVsbGUgZmVyYSBhcHBlbCDDoCBsYSBmb25jdGlvbiBnZXQgYXZlYyBsJ1VSTCBhcHByb3ByacOpZSwgbGEgZm9uY3Rpb24gZ2V0IGNvbnRlbmFudCB1bmUgcHJvbWVzc2UsIG9uIGx1aSBpbmRpcXVlIHF1b2kgZmFpcmUgZW4gY2FzIGRlIHN1Y2PDqHMgZGUgbGEgcmVxdcOqdGVcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHJlc3BvbnNlLy9TaSBsYSByZXF1w6p0ZSBYcmggYWJvdXRpZSwgaWwgZmF1ZHJhIGNyw6llciB1bmUgY29uc3RhbnRlIFwiaXRlbXNcIiwgcXVpIHNlcmEgbGEgcsOpcG9uc2UgZGUgbGEgcHJvbWVzc2UgcmVncm91cGFudCBhaW5zaSBsZXMgZGlmZsOpcmVudHMgbW9kw6hsZSBkZSBjYW3DqXJhIGRhbnMgdW4gdGFibGVhdVxyXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc1wiKSAvLyBPbiBhY2PDqGRlIMOgIGwnw6lsw6ltZW50IFwidWxcIiBkZSBsJ2luZGV4Lmh0bWxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7IC8vIFBvdXIgY2hhcXVlIGNsYXNzZSBkdSB0YWJsZWF1IFwiaXRlbXNcIlxyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtc1tpXSAvLyBPbiBjcsOpw6kgdW5lIHZhcmlhYmxlIFwiaXRlbVwiIHF1aSBjb3JyZXNwb25kIMOgIGNoYXF1ZSDDqWzDqW1lbnQgZHUgdGFibGVhdSBkZXMgaXRlbXNcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gdWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKSAvLyBPbiBham91dGUgdW4gw6lsw6ltZW50IGVuZmFudCBcImxpXCIgZGFucyBcInVsXCJcclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIml0ZW1cIikgLy8gT24gbHVpIGRvbm5lIHVuZSBjbGFzc2VcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGgzID0gbGkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpKSAvLyBPbiBjcsOpw6kgbCfDqWzDqW1lbnQgaDMgcXVpIGNvbnRpZW5kcmEgbGUgbm9tIGRlIGwnYXBwYXJlaWxcclxuICAgICAgICAgICAgaDMuY2xhc3NMaXN0LmFkZChcIml0ZW1fX3RpdGxlXCIpXHJcbiAgICAgICAgICAgIGgzLmlubmVyVGV4dCA9IGl0ZW0ubmFtZVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGl2SW1nID0gbGkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkgLy8gT24gY3LDqWVyIGwnw6lsw6ltZW50IGNvbnRlbmFudCBsJ2ltYWdlIGRlIGwnaXRlbSBzb3VzIGZvcm1lIGRlIGRpdlxyXG4gICAgICAgICAgICBkaXZJbWcuY2xhc3NMaXN0LmFkZChcIml0ZW1fX2ltZ1wiKSAvLyBPbiBsdWkgZG9ubmUgdW5lIGNsYXNzZVxyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkaXZJbWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSkgLy8gT24gY3LDqWVyIGwnw6lsw6ltZW50IDxpbWc+XHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaXRlbS5pbWFnZVVybCkgLy8gT24gbHVpIGRvbm5lIGxhIHNvdXJjZSBkZSBsJ2ltYWdlXHJcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgaXRlbS5uYW1lKSAvLyBPbiBsdWkgZG9ubmUgbCdhdHRyaWJ1dCBhIHJlbnNlaWduZXIgcG91ciBsJ2ltYWdlLCBpY2kgbGUgbm9tIGRlIGwnYXBwYXJlaWxcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSkgLy8gT24gY3LDqcOpIHVuIGxpZW4gcG91ciBhY2PDqWRlciBhdSBkw6l0YWlsIGRlIGwnYXBwYXJlaWwgZXQgbGUgY29tbWFuZGVyXHJcbiAgICAgICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcInByb2R1aXQuaHRtbCNcIiArIGl0ZW0uX2lkKSAvLyBPbiBjaGFyZ2UgbGEgcGFnZSBcInByb2R1aXQuaHRtbFwiICsgb24gYWpvdXRlIHVuIGhhc2ggY29ycmVzcG9uZGFudCDDoCBsJ2lkIGR1IHByb2R1aXQgZGVtYW5kw6kgw6AgbCdVUkxcclxuICAgICAgICAgICAgYS5jbGFzc0xpc3QuYWRkKFwiaXRlbV9fYnRuXCIpXHJcbiAgICAgICAgICAgIGEuaW5uZXJUZXh0ID0gXCJWb2lyIGNlIG1vZMOobGVcIlxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsvLyBTaSBsYSByZXF1w6p0ZSBYaHIgw6ljaG91ZSwgb24gdHJhbnNtZXQgdW4gbWVzc2FnZSBkJ2VycmV1ciBldCBvbiBpbmRpcXVlIHF1J3VuIHByb2Jsw6htZSDDoCBldSBsaWV1IGxvcnMgZGUgbGEgcmVxdcOqdGVcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgcmVxdcOqdGVcIiwgZXJyb3IpIC8vIExlIG1lc3NhZ2UgZXN0IHRyYW5zbWlzIMOgIGxhIGNvbnNvbGUgcG91ciBhY2PDqHMgYXV4IGTDqXRhaWxzXHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKSAvLyBPbiBhY2PDqGRlIMOgIGwnw6lsw6ltZW50IHNlY3Rpb24gZGUgY2xhc3NlIFwibWFpblwiXHJcbiAgICAgICAgY29uc3QgYWxlcnQgPSBtYWluLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpIC8vIE9uIHkgY3LDqWVyIHVuZSBcImRpdlwiXHJcbiAgICAgICAgYWxlcnQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIsIFwiZXJyb3JfX3NlcnZlclwiKSAvLyBPbiBham91dGUgbGEgY2xhc3NlIFwiZXJyb3JcIiDDoCBsYSBkaXYgcG91ciB0cmFpdGVtZW50IENTU1xyXG4gICAgICAgIGFsZXJ0LmlubmVyVGV4dCA9IFwiVW5lIGVycmV1ciBzJ2VzdCBwcm9kdWl0ZSBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIGFydGljbGVzXCIgLy8gT24geSBhZmZpY2hlIGxlIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5jcmVhdGVMaXN0KCkgLy8gT24gYXBwZWwgbGEgZm9uY3Rpb24gcG91ciBjcsOpZXIgbm90cmUgbGlzdGVcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/onScroll.js":
/*!*************************!*\
  !*** ./src/onScroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _anim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anim.js */ \"./src/anim.js\");\n// Menu qui change d'apparence onScroll\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  var scrollY = function scrollY() {\n    var supportPageOffset = window.pageXOffset !== undefined;\n    var isCSS1Compat = (document.compatMode || \"\") === \"CSS1Compat\";\n    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\n  };\n\n  var rect = _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getBoundingClientRect();\n  var constraint = document.querySelector(_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getAttribute(\"data-constraint\"));\n  var constraintRect = constraint.getBoundingClientRect();\n  var constraintBottom = constraintRect.top + scrollY() + constraintRect.height - rect.height;\n\n  var onScroll = function onScroll() {\n    if (scrollY() > constraintBottom) {\n      _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.add(\"menu__btn--solid\");\n    } else if (_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.contains(\"menu__btn--solid\")) {\n      _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.remove(\"menu__btn--solid\");\n    }\n  };\n\n  window.addEventListener(\"scroll\", onScroll);\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb25TY3JvbGwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb25TY3JvbGwuanM/NTBkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNZW51IHF1aSBjaGFuZ2UgZCdhcHBhcmVuY2Ugb25TY3JvbGxcclxuXHJcbmltcG9ydCB7IGJ0bk1lbnVPcGVuIH0gZnJvbSBcIi4vYW5pbS5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdChmdW5jdGlvbigpe1xyXG5cclxuY29uc3Qgc2Nyb2xsWSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIGlzQ1NTMUNvbXBhdCA9ICgoZG9jdW1lbnQuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCIpO1xyXG4gICAgcmV0dXJuIHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG59XHJcblxyXG5jb25zdCByZWN0ID0gYnRuTWVudU9wZW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuY29uc3QgY29uc3RyYWludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuTWVudU9wZW4uZ2V0QXR0cmlidXRlKFwiZGF0YS1jb25zdHJhaW50XCIpKVxyXG5jb25zdCBjb25zdHJhaW50UmVjdCA9IGNvbnN0cmFpbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuY29uc3QgY29uc3RyYWludEJvdHRvbSA9IGNvbnN0cmFpbnRSZWN0LnRvcCArIHNjcm9sbFkoKSArIGNvbnN0cmFpbnRSZWN0LmhlaWdodCAtIHJlY3QuaGVpZ2h0XHJcblxyXG5jb25zdCBvblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChzY3JvbGxZKCkgPiBjb25zdHJhaW50Qm90dG9tKSB7XHJcbiAgICAgICAgYnRuTWVudU9wZW4uY2xhc3NMaXN0LmFkZChcIm1lbnVfX2J0bi0tc29saWRcIilcclxuICAgIH0gZWxzZSBpZiAoYnRuTWVudU9wZW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudV9fYnRuLS1zb2xpZFwiKSl7XHJcbiAgICAgICAgYnRuTWVudU9wZW4uY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfX2J0bi0tc29saWRcIilcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpXHJcbn0pKCkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/onScroll.js\n");

/***/ })

/******/ });