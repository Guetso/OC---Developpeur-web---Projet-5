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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnMenuOpen\", function() { return btnMenuOpen; });\n// Animation de l'ouverture du menu\nconst btnMenuOpen = document.querySelector(\".menu__btn\");\nconst btnMenuClose = document.querySelector(\".close\");\nconst toggleMenu = document.getElementById(\"navpanel\");\nbtnMenuOpen.addEventListener(\"click\", function () {\n  toggleMenu.classList.add(\"menu--active\");\n});\nbtnMenuClose.addEventListener(\"click\", function () {\n  toggleMenu.classList.remove(\"menu--active\");\n});\n\n\n//# sourceURL=webpack:///./src/anim.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: environment, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"environment\", function() { return environment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\nconst environment = \"http://localhost:3000\";\n\nconst get = function (url) {\n  // On créé une fonction qui permet d'utiliser la méthode GET sur une URL donnée\n  return new Promise(function (resolve, reject) {\n    // Cette fonction retournera une promesse qui fera :\n    const httpRequest = new XMLHttpRequest(); // La fonction va créer une requête Http\n\n    httpRequest.onreadystatechange = function () {\n      // On va suivre l'évolution de la requête\n      if (httpRequest.readyState === 4) {\n        if (httpRequest.status === 200) {\n          //  Si la requête s'est correctement déroulée (elle a aboutit + renvoie un code 200)\n          resolve(JSON.parse(httpRequest.responseText)); // La promesse est résolue quand la requête a su nous renvoyer le responseText\n        } else {\n          reject(httpRequest); // Si une erreur lors de l'accès à l'API a eu lieu, il faut traiter l'erreur\n        }\n      }\n    };\n\n    httpRequest.open(\"GET\", url, true); // Cette requête va utiliser la méthode GET sur l'URL en paramètre, de manière asynchrone\n\n    httpRequest.send(); // La fonction envoie la requête au serveur\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/onScroll.js":
/*!*************************!*\
  !*** ./src/onScroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _anim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anim.js */ \"./src/anim.js\");\n// Menu qui change d'apparence onScroll\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  const scrollY = function () {\n    var supportPageOffset = window.pageXOffset !== undefined;\n    var isCSS1Compat = (document.compatMode || \"\") === \"CSS1Compat\";\n    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\n  };\n\n  const rect = _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getBoundingClientRect();\n  const constraint = document.querySelector(_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getAttribute(\"data-constraint\"));\n  const constraintRect = constraint.getBoundingClientRect();\n  const constraintBottom = constraintRect.top + scrollY() + constraintRect.height - rect.height;\n\n  const onScroll = function () {\n    if (scrollY() > constraintBottom) {\n      _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.add(\"menu__btn--solid\");\n    } else if (_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.contains(\"menu__btn--solid\")) {\n      _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.remove(\"menu__btn--solid\");\n    }\n  };\n\n  window.addEventListener(\"scroll\", onScroll);\n})());\n\n//# sourceURL=webpack:///./src/onScroll.js?");

/***/ }),

/***/ "./src/produit.js":
/*!************************!*\
  !*** ./src/produit.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onScroll.js */ \"./src/onScroll.js\");\n // Importation de la requête AJAX\n\n\n /////////////////////\n// Fonction de création de la page en fonction du produit choisi\n\nconst createItem = function () {\n  // On créé une fonction qui va récupérer les informations du produit en question et les afficher dans la page\n  const hash = window.location.hash; // On créé une variable \"hash\" qui correspond au hash de l'URL qui a été chargée par l'utilisateur\n\n  const id = hash.replace(\"#\", \"\"); // On reformate le \"hash\" pour lui enlever le symbole \"#\"\n\n  const url = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"environment\"] + \"/api/cameras/\" + id; // L'URL chargée sera celle correspondant à l'id du produit\n\n  Object(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(url).then(function (response) {\n    // Elle fera appel à la fonction get avec l'URL appropriée, la fonction get contenant une promesse, on lui indique quoi faire en cas de succès de la requête\n    const item = response; //Si la requête Xrh aboutie, il faudra créer une constante \"item\", qui sera la réponse de la promesse à savoir les informations du produit demandé\n    // Création du titre contenant le nom de l'article\n\n    const h3 = document.querySelector(\".sheet .sheet__title\");\n    h3.innerText = item.name; // Création des éléments nécessaires pour afficher la photo de l'article\n\n    const img = document.querySelector(\".sheet .sheet__img img\");\n    img.setAttribute(\"src\", item.imageUrl); // On lui donne la source de l'image\n\n    img.setAttribute(\"alt\", item.name); // On lui donne l'attribut a renseigner pour l'image, ici le nom de l'appareil\n    // Création du paragraphe contenant la description de l'article\n\n    const specs = document.querySelector(\".sheet .sheet__specs\");\n    specs.innerText = item.description; // Création de l'ID du produit\n\n    const id = document.querySelector(\".sheet .sheet__id\");\n    id.innerText = item._id; // Création du formulaire de choix de la lentille \n    // Création de la séléction de la lentille\n\n    const select = document.getElementById(\"lenses-select\");\n\n    for (let i = 0; i < item.lenses.length; i++) {\n      const lense = item.lenses[i];\n      const option = select.appendChild(document.createElement(\"option\"));\n      option.setAttribute(\"value\", lense);\n      option.innerText = lense;\n    } // Ajout du prix\n\n\n    const price = document.getElementById(\"price\");\n    const itemPrice = item.price / 100;\n    price.innerText = itemPrice + \" €\";\n  }).catch(function (error) {\n    // Si la requête Xhr échoue, on transmet un message d'erreur et on indique qu'un problème à eu lieu lors de la requête\n    console.error(\"Erreur lors de la requête\", error); // Le message est transmis à la console pour accès aux détails\n\n    const sheet = document.querySelector(\".sheet\"); // On accède à l'élément section de classe \"main\"\n\n    const alert = sheet.appendChild(document.createElement(\"div\")); // On y créer une \"div\"\n\n    alert.classList.add(\"error\"); // On ajoute la classe \"error\" à la div pour traitement CSS\n\n    alert.innerText = \"Une erreur s'est produite lors du chargement de l'article\"; // On y affiche le message d'erreur\n  });\n}; // Ajout d'un écouteur d'événement sur le clique du formulaire, permettant d'ajouter le produit au panier et chargeant la page panier.htmls\n\n\nconst submit = document.getElementById(\"btn\");\nconst id = document.querySelector(\".sheet__id\");\nconst lense = document.getElementById(\"lenses-select\");\nconst qte = document.getElementById(\"qte\");\nsubmit.addEventListener(\"click\", function (event) {\n  //event.preventDefault()\n  const order = {\n    // Au moment du clique sur le bouton : création d'une constante \"order\" \n    _id: id.innerText,\n    //qui contient l'id du produit\n    lense: lense.value,\n    //la valeur de la lentille selectionnée\n    qte: qte.value // la quantité voulue\n\n  };\n  const stringOrder = JSON.stringify(order); // On transforme cet objet en chaine de caractère\n\n  sessionStorage.setItem(\"newOrder\", stringOrder); // Qu'on va stocker dans le \"session storage\" du navigateur et qu'on nomme \"newOrder\"\n});\ncreateItem(); // On appel la fonction pour créer notre page produit\n\n//# sourceURL=webpack:///./src/produit.js?");

/***/ })

/******/ });