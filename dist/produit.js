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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/produit.js");
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

/***/ "./src/onScroll.js":
/*!*************************!*\
  !*** ./src/onScroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _anim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anim.js */ \"./src/anim.js\");\n// Menu qui change d'apparence onScroll\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  var scrollY = function scrollY() {\n    var supportPageOffset = window.pageXOffset !== undefined;\n    var isCSS1Compat = (document.compatMode || \"\") === \"CSS1Compat\";\n    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\n  };\n\n  var rect = _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getBoundingClientRect();\n  var constraint = document.querySelector(_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getAttribute(\"data-constraint\"));\n  var constraintRect = constraint.getBoundingClientRect();\n  var constraintBottom = constraintRect.top + scrollY() + constraintRect.height - rect.height;\n\n  var onScroll = function onScroll() {\n    if (scrollY() > constraintBottom) {\n      _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.add(\"menu__btn--solid\");\n    } else if (_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.contains(\"menu__btn--solid\")) {\n      _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.remove(\"menu__btn--solid\");\n    }\n  };\n\n  window.addEventListener(\"scroll\", onScroll);\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb25TY3JvbGwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb25TY3JvbGwuanM/NTBkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNZW51IHF1aSBjaGFuZ2UgZCdhcHBhcmVuY2Ugb25TY3JvbGxcclxuXHJcbmltcG9ydCB7IGJ0bk1lbnVPcGVuIH0gZnJvbSBcIi4vYW5pbS5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdChmdW5jdGlvbigpe1xyXG5cclxuY29uc3Qgc2Nyb2xsWSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIGlzQ1NTMUNvbXBhdCA9ICgoZG9jdW1lbnQuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCIpO1xyXG4gICAgcmV0dXJuIHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG59XHJcblxyXG5jb25zdCByZWN0ID0gYnRuTWVudU9wZW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuY29uc3QgY29uc3RyYWludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuTWVudU9wZW4uZ2V0QXR0cmlidXRlKFwiZGF0YS1jb25zdHJhaW50XCIpKVxyXG5jb25zdCBjb25zdHJhaW50UmVjdCA9IGNvbnN0cmFpbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuY29uc3QgY29uc3RyYWludEJvdHRvbSA9IGNvbnN0cmFpbnRSZWN0LnRvcCArIHNjcm9sbFkoKSArIGNvbnN0cmFpbnRSZWN0LmhlaWdodCAtIHJlY3QuaGVpZ2h0XHJcblxyXG5jb25zdCBvblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChzY3JvbGxZKCkgPiBjb25zdHJhaW50Qm90dG9tKSB7XHJcbiAgICAgICAgYnRuTWVudU9wZW4uY2xhc3NMaXN0LmFkZChcIm1lbnVfX2J0bi0tc29saWRcIilcclxuICAgIH0gZWxzZSBpZiAoYnRuTWVudU9wZW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudV9fYnRuLS1zb2xpZFwiKSl7XHJcbiAgICAgICAgYnRuTWVudU9wZW4uY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfX2J0bi0tc29saWRcIilcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpXHJcbn0pKCkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/onScroll.js\n");

/***/ }),

/***/ "./src/produit.js":
/*!************************!*\
  !*** ./src/produit.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onScroll.js */ \"./src/onScroll.js\");\n // Importation de la requête AJAX\n\n /////////////////////\n// Fonction de création de la page en fonction du produit choisi\n\nvar createItem = function createItem() {\n  // On créé une fonction qui va récupérer les informations du produit en question et les afficher dans la page\n  var hash = window.location.hash; // On créé une variable \"hash\" qui correspond au hash de l'URL qui a été chargée par l'utilisateur\n\n  var id = hash.replace(\"#\", \"\"); // On reformate le \"hash\" pour lui enlever le symbole \"#\"\n\n  var url = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"environment\"] + \"/api/cameras/\" + id; // L'URL chargée sera celle correspondant à l'id du produit\n\n  Object(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(url).then(function (response) {\n    // Elle fera appel à la fonction get avec l'URL appropriée, la fonction get contenant une promesse, on lui indique quoi faire en cas de succès de la requête\n    var item = response; //Si la requête Xrh aboutie, il faudra créer une constante \"item\", qui sera la réponse de la promesse à savoir les informations du produit demandé\n    // Création du titre contenant le nom de l'article\n\n    var h3 = document.querySelector(\".sheet .sheet__title\");\n    h3.innerText = item.name; // Création des éléments nécessaires pour afficher la photo de l'article\n\n    var img = document.querySelector(\".sheet .sheet__img img\");\n    img.setAttribute(\"src\", item.imageUrl); // On lui donne la source de l'image\n\n    img.setAttribute(\"alt\", item.name); // On lui donne l'attribut a renseigner pour l'image, ici le nom de l'appareil\n    // Création du paragraphe contenant la description de l'article\n\n    var specs = document.querySelector(\".sheet .sheet__specs\");\n    specs.innerText = item.description; // Création de l'ID du produit\n\n    var id = document.querySelector(\".sheet .sheet__id\");\n    id.innerText = item._id; // Création du formulaire de choix de la lentille \n    // Création de la séléction de la lentille\n\n    var select = document.getElementById(\"lenses-select\");\n\n    for (var i = 0; i < item.lenses.length; i++) {\n      var _lense = item.lenses[i];\n      var option = select.appendChild(document.createElement(\"option\"));\n      option.setAttribute(\"value\", _lense);\n      option.innerText = _lense;\n    } // Ajout du prix\n\n\n    var price = document.getElementById(\"price\");\n    var itemPrice = item.price / 100;\n    price.innerText = itemPrice + \" €\";\n  })[\"catch\"](function (error) {\n    // Si la requête Xhr échoue, on transmet un message d'erreur et on indique qu'un problème à eu lieu lors de la requête\n    console.error(\"Erreur lors de la requête\", error); // Le message est transmis à la console pour accès aux détails\n\n    var sheet = document.querySelector(\".sheet\"); // On accède à l'élément section de classe \"main\"\n\n    var alert = sheet.appendChild(document.createElement(\"div\")); // On y créer une \"div\"\n\n    alert.classList.add(\"error\"); // On ajoute la classe \"error\" à la div pour traitement CSS\n\n    alert.innerText = \"Une erreur s'est produite lors du chargement de l'article\"; // On y affiche le message d'erreur\n  });\n}; // Ajout d'un écouteur d'événement sur le clique du formulaire, permettant d'ajouter le produit au panier et chargeant la page panier.htmls\n\n\nvar submit = document.getElementById(\"btn\");\nvar id = document.querySelector(\".sheet__id\");\nvar lense = document.getElementById(\"lenses-select\");\nvar qte = document.getElementById(\"qte\");\nsubmit.addEventListener(\"click\", function (event) {\n  //event.preventDefault()\n  var order = {\n    // Au moment du clique sur le bouton : création d'une constante \"order\" \n    _id: id.innerText,\n    //qui contient l'id du produit\n    lense: lense.value,\n    //la valeur de la lentille selectionnée\n    qte: qte.value // la quantité voulue\n\n  };\n  var stringOrder = JSON.stringify(order); // On transforme cet objet en chaine de caractère\n\n  sessionStorage.setItem(\"newOrder\", stringOrder); // Qu'on va stocker dans le \"session storage\" du navigateur et qu'on nomme \"newOrder\"\n});\ncreateItem(); // On appel la fonction pour créer notre page produit//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZHVpdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wcm9kdWl0LmpzPzUxZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW52aXJvbm1lbnQsIGdldCB9IGZyb20gXCIuL2NvbmZpZy5qc1wiIC8vIEltcG9ydGF0aW9uIGRlIGxhIHJlcXXDqnRlIEFKQVhcclxuaW1wb3J0IGFuaW1hdGlvbk1lbnUgZnJvbSBcIi4vb25TY3JvbGwuanNcIlxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIEZvbmN0aW9uIGRlIGNyw6lhdGlvbiBkZSBsYSBwYWdlIGVuIGZvbmN0aW9uIGR1IHByb2R1aXQgY2hvaXNpXHJcblxyXG5jb25zdCBjcmVhdGVJdGVtID0gZnVuY3Rpb24gKCkgeyAvLyBPbiBjcsOpw6kgdW5lIGZvbmN0aW9uIHF1aSB2YSByw6ljdXDDqXJlciBsZXMgaW5mb3JtYXRpb25zIGR1IHByb2R1aXQgZW4gcXVlc3Rpb24gZXQgbGVzIGFmZmljaGVyIGRhbnMgbGEgcGFnZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaCAvLyBPbiBjcsOpw6kgdW5lIHZhcmlhYmxlIFwiaGFzaFwiIHF1aSBjb3JyZXNwb25kIGF1IGhhc2ggZGUgbCdVUkwgcXVpIGEgw6l0w6kgY2hhcmfDqWUgcGFyIGwndXRpbGlzYXRldXJcclxuICAgICAgICBjb25zdCBpZCA9IGhhc2gucmVwbGFjZShcIiNcIiwgXCJcIikgLy8gT24gcmVmb3JtYXRlIGxlIFwiaGFzaFwiIHBvdXIgbHVpIGVubGV2ZXIgbGUgc3ltYm9sZSBcIiNcIlxyXG4gICAgICAgIGNvbnN0IHVybCA9IGVudmlyb25tZW50ICsgXCIvYXBpL2NhbWVyYXMvXCIgKyBpZCAvLyBMJ1VSTCBjaGFyZ8OpZSBzZXJhIGNlbGxlIGNvcnJlc3BvbmRhbnQgw6AgbCdpZCBkdSBwcm9kdWl0XHJcblxyXG4gICAgICAgIGdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IC8vIEVsbGUgZmVyYSBhcHBlbCDDoCBsYSBmb25jdGlvbiBnZXQgYXZlYyBsJ1VSTCBhcHByb3ByacOpZSwgbGEgZm9uY3Rpb24gZ2V0IGNvbnRlbmFudCB1bmUgcHJvbWVzc2UsIG9uIGx1aSBpbmRpcXVlIHF1b2kgZmFpcmUgZW4gY2FzIGRlIHN1Y2PDqHMgZGUgbGEgcmVxdcOqdGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByZXNwb25zZS8vU2kgbGEgcmVxdcOqdGUgWHJoIGFib3V0aWUsIGlsIGZhdWRyYSBjcsOpZXIgdW5lIGNvbnN0YW50ZSBcIml0ZW1cIiwgcXVpIHNlcmEgbGEgcsOpcG9uc2UgZGUgbGEgcHJvbWVzc2Ugw6Agc2F2b2lyIGxlcyBpbmZvcm1hdGlvbnMgZHUgcHJvZHVpdCBkZW1hbmTDqVxyXG4gICAgICAgICAgICAgICAgLy8gQ3LDqWF0aW9uIGR1IHRpdHJlIGNvbnRlbmFudCBsZSBub20gZGUgbCdhcnRpY2xlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hlZXQgLnNoZWV0X190aXRsZVwiKVxyXG4gICAgICAgICAgICAgICAgaDMuaW5uZXJUZXh0ID0gaXRlbS5uYW1lXHJcbiAgICAgICAgICAgICAgICAvLyBDcsOpYXRpb24gZGVzIMOpbMOpbWVudHMgbsOpY2Vzc2FpcmVzIHBvdXIgYWZmaWNoZXIgbGEgcGhvdG8gZGUgbCdhcnRpY2xlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoZWV0IC5zaGVldF9faW1nIGltZ1wiKVxyXG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpdGVtLmltYWdlVXJsKSAvLyBPbiBsdWkgZG9ubmUgbGEgc291cmNlIGRlIGwnaW1hZ2VcclxuICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgaXRlbS5uYW1lKSAvLyBPbiBsdWkgZG9ubmUgbCdhdHRyaWJ1dCBhIHJlbnNlaWduZXIgcG91ciBsJ2ltYWdlLCBpY2kgbGUgbm9tIGRlIGwnYXBwYXJlaWxcclxuICAgICAgICAgICAgICAgIC8vIENyw6lhdGlvbiBkdSBwYXJhZ3JhcGhlIGNvbnRlbmFudCBsYSBkZXNjcmlwdGlvbiBkZSBsJ2FydGljbGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGVldCAuc2hlZXRfX3NwZWNzXCIpXHJcbiAgICAgICAgICAgICAgICBzcGVjcy5pbm5lclRleHQgPSBpdGVtLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAvLyBDcsOpYXRpb24gZGUgbCdJRCBkdSBwcm9kdWl0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hlZXQgLnNoZWV0X19pZFwiKVxyXG4gICAgICAgICAgICAgICAgaWQuaW5uZXJUZXh0ID0gaXRlbS5faWRcclxuICAgICAgICAgICAgICAgIC8vIENyw6lhdGlvbiBkdSBmb3JtdWxhaXJlIGRlIGNob2l4IGRlIGxhIGxlbnRpbGxlIFxyXG4gICAgICAgICAgICAgICAgLy8gQ3LDqWF0aW9uIGRlIGxhIHPDqWzDqWN0aW9uIGRlIGxhIGxlbnRpbGxlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlbnNlcy1zZWxlY3RcIilcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS5sZW5zZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuc2UgPSBpdGVtLmxlbnNlc1tpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGxlbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gbGVuc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEFqb3V0IGR1IHByaXhcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmljZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbVByaWNlID0gKChpdGVtLnByaWNlKSAvIDEwMClcclxuICAgICAgICAgICAgICAgIHByaWNlLmlubmVyVGV4dCA9IGl0ZW1QcmljZSArIFwiIOKCrFwiXHJcblxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgey8vIFNpIGxhIHJlcXXDqnRlIFhociDDqWNob3VlLCBvbiB0cmFuc21ldCB1biBtZXNzYWdlIGQnZXJyZXVyIGV0IG9uIGluZGlxdWUgcXUndW4gcHJvYmzDqG1lIMOgIGV1IGxpZXUgbG9ycyBkZSBsYSByZXF1w6p0ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIHJlcXXDqnRlXCIsIGVycm9yKSAvLyBMZSBtZXNzYWdlIGVzdCB0cmFuc21pcyDDoCBsYSBjb25zb2xlIHBvdXIgYWNjw6hzIGF1eCBkw6l0YWlsc1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoZWV0XCIpIC8vIE9uIGFjY8OoZGUgw6AgbCfDqWzDqW1lbnQgc2VjdGlvbiBkZSBjbGFzc2UgXCJtYWluXCJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsZXJ0ID0gc2hlZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkgLy8gT24geSBjcsOpZXIgdW5lIFwiZGl2XCJcclxuICAgICAgICAgICAgICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKSAvLyBPbiBham91dGUgbGEgY2xhc3NlIFwiZXJyb3JcIiDDoCBsYSBkaXYgcG91ciB0cmFpdGVtZW50IENTU1xyXG4gICAgICAgICAgICAgICAgYWxlcnQuaW5uZXJUZXh0ID0gXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlIGxvcnMgZHUgY2hhcmdlbWVudCBkZSBsJ2FydGljbGVcIiAvLyBPbiB5IGFmZmljaGUgbGUgbWVzc2FnZSBkJ2VycmV1clxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbi8vIEFqb3V0IGQndW4gw6ljb3V0ZXVyIGQnw6l2w6luZW1lbnQgc3VyIGxlIGNsaXF1ZSBkdSBmb3JtdWxhaXJlLCBwZXJtZXR0YW50IGQnYWpvdXRlciBsZSBwcm9kdWl0IGF1IHBhbmllciBldCBjaGFyZ2VhbnQgbGEgcGFnZSBwYW5pZXIuaHRtbHNcclxuXHJcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuXCIpXHJcbmNvbnN0IGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGVldF9faWRcIilcclxuY29uc3QgbGVuc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlbnNlcy1zZWxlY3RcIilcclxuY29uc3QgcXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdGVcIilcclxuXHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSB7ICAgICAgICAgICAgICAgICAgICAgICAvLyBBdSBtb21lbnQgZHUgY2xpcXVlIHN1ciBsZSBib3V0b24gOiBjcsOpYXRpb24gZCd1bmUgY29uc3RhbnRlIFwib3JkZXJcIiBcclxuICAgICAgICAgICAgICAgIF9pZDogaWQuaW5uZXJUZXh0LCAgICAgICAgICAgICAgICAgICAgIC8vcXVpIGNvbnRpZW50IGwnaWQgZHUgcHJvZHVpdFxyXG4gICAgICAgICAgICAgICAgbGVuc2U6IGxlbnNlLnZhbHVlLCAgICAgICAgICAgICAgICAgICAgLy9sYSB2YWxldXIgZGUgbGEgbGVudGlsbGUgc2VsZWN0aW9ubsOpZVxyXG4gICAgICAgICAgICAgICAgcXRlOiBxdGUudmFsdWUsICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhIHF1YW50aXTDqSB2b3VsdWVcclxuICAgICAgICB9ICAgICBcclxuIGNvbnN0IHN0cmluZ09yZGVyID0gSlNPTi5zdHJpbmdpZnkob3JkZXIpICAgICAgLy8gT24gdHJhbnNmb3JtZSBjZXQgb2JqZXQgZW4gY2hhaW5lIGRlIGNhcmFjdMOocmVcclxuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJuZXdPcmRlclwiLHN0cmluZ09yZGVyKSAvLyBRdSdvbiB2YSBzdG9ja2VyIGRhbnMgbGUgXCJzZXNzaW9uIHN0b3JhZ2VcIiBkdSBuYXZpZ2F0ZXVyIGV0IHF1J29uIG5vbW1lIFwibmV3T3JkZXJcIlxyXG59KVxyXG5cclxuXHJcbmNyZWF0ZUl0ZW0oKSAvLyBPbiBhcHBlbCBsYSBmb25jdGlvbiBwb3VyIGNyw6llciBub3RyZSBwYWdlIHByb2R1aXRcclxuXHJcblxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/produit.js\n");

/***/ })

/******/ });