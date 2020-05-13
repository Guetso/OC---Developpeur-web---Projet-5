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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnMenuOpen\", function() { return btnMenuOpen; });\n// Animation de l'ouverture du menu\r\n\r\nconst btnMenuOpen = document.querySelector(\".menu__btn\")\r\nconst btnMenuClose = document.querySelector(\".close\")\r\nconst toggleMenu = document.getElementById(\"navpanel\")\r\n\r\nbtnMenuOpen.addEventListener(\"click\", function () {\r\n    toggleMenu.classList.add(\"menu--active\")\r\n})\r\n\r\nbtnMenuClose.addEventListener(\"click\", function () {\r\n    toggleMenu.classList.remove(\"menu--active\")\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/anim.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: environment, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"environment\", function() { return environment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\nconst environment = \"http://localhost:3000\"\r\n\r\nconst get = function (url) { // On créé une fonction qui permet d'utiliser la méthode GET sur une URL donnée\r\n    return new Promise(function (resolve, reject) { // Cette fonction retournera une promesse qui fera :\r\n        const httpRequest = new XMLHttpRequest() // La fonction va créer une requête Http\r\n        httpRequest.onreadystatechange = function () { // On va suivre l'évolution de la requête\r\n            if (httpRequest.readyState === 4) {\r\n                if (httpRequest.status === 200) { //  Si la requête s'est correctement déroulée (elle a aboutit + renvoie un code 200)\r\n                    resolve(JSON.parse(httpRequest.responseText)) // La promesse est résolue quand la requête a su nous renvoyer le responseText\r\n                } else {\r\n                    reject(httpRequest) // Si une erreur lors de l'accès à l'API a eu lieu, il faut traiter l'erreur\r\n                }\r\n            }\r\n        }\r\n        httpRequest.open(\"GET\", url, true) // Cette requête va utiliser la méthode GET sur l'URL en paramètre, de manière asynchrone\r\n        httpRequest.send() // La fonction envoie la requête au serveur\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onScroll.js */ \"./src/onScroll.js\");\n // Importation de la requête AJAX\r\n\r\n\r\n\r\nconst createList = function () { // On créé une fonction qui va récupérer les différents items de caméra dans l'API pour construire la liste des produits\r\n    Object(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"environment\"] + \"/api/cameras/\").then(function (response) { // Elle fera appel à la fonction get avec l'URL appropriée, la fonction get contenant une promesse, on lui indique quoi faire en cas de succès de la requête\r\n        const items = response//Si la requête Xrh aboutie, il faudra créer une constante \"items\", qui sera la réponse de la promesse regroupant ainsi les différents modèle de caméra dans un tableau\r\n        const ul = document.getElementById(\"items\") // On accède à l'élément \"ul\" de l'index.html\r\n        for (let i = 0; i < items.length; i++) { // Pour chaque classe du tableau \"items\"\r\n\r\n            let item = items[i] // On créé une variable \"item\" qui correspond à chaque élément du tableau des items\r\n\r\n            const li = ul.appendChild(document.createElement(\"li\")) // On ajoute un élément enfant \"li\" dans \"ul\"\r\n            li.classList.add(\"item\") // On lui donne une classe\r\n\r\n            const h3 = li.appendChild(document.createElement(\"h3\")) // On créé l'élément h3 qui contiendra le nom de l'appareil\r\n            h3.classList.add(\"item__title\")\r\n            h3.innerText = item.name\r\n\r\n            const divImg = li.appendChild(document.createElement(\"div\")) // On créer l'élément contenant l'image de l'item sous forme de div\r\n            divImg.classList.add(\"item__img\") // On lui donne une classe\r\n            const img = divImg.appendChild(document.createElement(\"img\")) // On créer l'élément <img>\r\n            img.setAttribute(\"src\", item.imageUrl) // On lui donne la source de l'image\r\n            img.setAttribute(\"alt\", item.name) // On lui donne l'attribut a renseigner pour l'image, ici le nom de l'appareil\r\n\r\n            const a = li.appendChild(document.createElement(\"a\")) // On créé un lien pour accéder au détail de l'appareil et le commander\r\n            a.setAttribute(\"href\", \"produit.html#\" + item._id) // On charge la page \"produit.html\" + on ajoute un hash correspondant à l'id du produit demandé à l'URL\r\n            a.classList.add(\"item__btn\")\r\n            a.innerText = \"Voir ce modèle\"\r\n\r\n        }\r\n    }).catch(function (error) {// Si la requête Xhr échoue, on transmet un message d'erreur et on indique qu'un problème à eu lieu lors de la requête\r\n        console.error(\"Erreur lors de la requête\", error) // Le message est transmis à la console pour accès aux détails\r\n        const main = document.getElementById(\"main\") // On accède à l'élément section de classe \"main\"\r\n        const alert = main.appendChild(document.createElement(\"div\")) // On y créer une \"div\"\r\n        alert.classList.add(\"error\",\"error__server\") // On ajoute la classe \"error\" à la div pour traitement CSS\r\n        alert.innerText = \"Une erreur s'est produite lors du chargement des articles\" // On y affiche le message d'erreur\r\n    })\r\n}\r\n\r\n\r\ncreateList() // On appel la fonction pour créer notre liste\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

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