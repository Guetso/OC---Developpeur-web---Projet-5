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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/panier.js");
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

/***/ "./src/onScroll.js":
/*!*************************!*\
  !*** ./src/onScroll.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _anim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anim.js */ \"./src/anim.js\");\n// Menu qui change d'apparence onScroll\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function(){\r\n\r\nconst scrollY = function () {\r\n    var supportPageOffset = window.pageXOffset !== undefined;\r\n    var isCSS1Compat = ((document.compatMode || \"\") === \"CSS1Compat\");\r\n    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;\r\n}\r\n\r\nconst rect = _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getBoundingClientRect()\r\nconst constraint = document.querySelector(_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].getAttribute(\"data-constraint\"))\r\nconst constraintRect = constraint.getBoundingClientRect()\r\nconst constraintBottom = constraintRect.top + scrollY() + constraintRect.height - rect.height\r\n\r\nconst onScroll = function () {\r\n    if (scrollY() > constraintBottom) {\r\n        _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.add(\"menu__btn--solid\")\r\n    } else if (_anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.contains(\"menu__btn--solid\")){\r\n        _anim_js__WEBPACK_IMPORTED_MODULE_0__[\"btnMenuOpen\"].classList.remove(\"menu__btn--solid\")\r\n    }\r\n}\r\n\r\nwindow.addEventListener(\"scroll\", onScroll)\r\n})());\n\n//# sourceURL=webpack:///./src/onScroll.js?");

/***/ }),

/***/ "./src/panier.js":
/*!***********************!*\
  !*** ./src/panier.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onScroll.js */ \"./src/onScroll.js\");\n // Importation de la requête AJAX\r\n\r\n\r\n/////////////////////\r\n\r\n// On met en place une fonction qui s'auto exécute et qui vérifie si le session storage contient un objet \"newOrder\"\r\n\r\n(function () {                                                // La fonction s'exécute dès le chargement de la page\r\n    if (sessionStorage.getItem(\"newOrder\") === null) {        // Elle vérifie qu'il existe bien une nouvelle commande stocké dans le sessionStorage\r\n        console.log(\"Pas de nouvelle commande à ajouter\")               // Si ce n'est pas le  cas, il ne se passe rien, affichage d'un commentaire dans la console\r\n    } else {                                                  // Si elle trouve un objet \"newOrder\" dans le sessionStorage\r\n        const newNb = localStorage.length                     // Elle créer une clé de valeur = à la taille du localStorage\r\n        const addToCart = sessionStorage.getItem(\"newOrder\")  // Elle créer une constante addToCart, qui est = à la valeur de \"neworder\"\r\n        localStorage.setItem(newNb, addToCart)                // Elle attribue un nouvel objet dans le localStorage\r\n        sessionStorage.removeItem(\"newOrder\")                 // Elle supprime le \"newOrder du sessionStorage\" ainsi il ne peut y avoir qu'un seul \"newOrder\" dans le sessionStorage\r\n    }\r\n})()\r\n\r\n//////// CREATION DU PANIER \r\n\r\n//Initialisation des classes nécessaires à la création du panier :\r\n\r\n\r\nclass Camera {                                  // Correspond à un modèle de caméra présent dans le catalogue du site\r\n    constructor(Id, Name, Price, Lenses) {\r\n        this.id = Id;\r\n        this.name = Name;\r\n        this.price = Price;\r\n        this.lenses = Lenses\r\n    }\r\n}\r\n\r\nclass Cartline {                                // Correspond à une ligne du panier\r\n    constructor(Id, Name, Lense, Qte, Price) {\r\n        this.id = Id;\r\n        this.name = Name;\r\n        this.lense = Lense;\r\n        this.qte = Qte;\r\n        this.price = Price;\r\n        this.subtotal = parseInt(this.qte) * parseInt(this.price)\r\n    }\r\n}\r\n\r\n///////// Initialisation des variables nécessaires  à la création du panier :\r\n\r\nconst store = []                                // Correspond au catalogue du magasin\r\n\r\nconst cart = []                                 // Correspond au panier \r\n\r\n///////// Initialisation des fonctions nécessaires à la  création du panier : \r\n\r\nfunction cleanArray(array) {                    // Cette fonction prend en paramètre un tableau. Elle permet de créer un tableau qui ne contient que les valeurs uniques de la clé \"_id\"\r\n    let i = array.length\r\n    let j = array.length\r\n    let len = array.length\r\n    let out = []\r\n    let obj = {}\r\n\r\n    for (i = 0; i < len; i++) {\r\n        obj[array[i]._id + \"_\" + array[i].lense] = 0\r\n    }\r\n    for (j in obj) {\r\n        out.push(j)\r\n    }\r\n    return out\r\n}\r\n\r\nfunction countQte(arr, list) {              //Cette fonction prend en paramètre un tableau et une liste qu'on va comparer pour determiner la quantité total d'un article précis dans le tableau et nous retourne cette quantité\r\n    let counter = 0\r\n    for (let i = 0; i < arr.length; i++) { // Pour chaque élément du tableau\r\n        if (arr[i]._id === (list.split(\"_\")[0]) && arr[i].lense === (list.split(\"_\")[1])) { // On cherche une correspondance de l'id et de la lentille avec la liste \r\n            counter = counter + parseInt(arr[i].qte) // A chaque correspondance trouvée, on ajout au compteur la quantitée trouvée\r\n        }\r\n    }\r\n    return counter // Cela nous retourne la quantité total d'un article dans le tableau\r\n}\r\n\r\nfunction post(toSend) {\r\n    return new Promise(function (resolve, reject) {\r\n        const httpRequest = new XMLHttpRequest()\r\n        httpRequest.open(\"POST\", _config_js__WEBPACK_IMPORTED_MODULE_0__[\"environment\"] + \"/api/cameras/order\")\r\n        httpRequest.setRequestHeader(\"Content-Type\", \"application/json\")\r\n        httpRequest.send(JSON.stringify(toSend))\r\n        httpRequest.onreadystatechange = function () {\r\n            if (httpRequest.readyState === 4) {\r\n                if (httpRequest.status === 201) {\r\n                    let response = JSON.parse(this.responseText)\r\n                    console.log(response)\r\n                    resolve(response)\r\n                } else {\r\n                    reject(httpRequest)\r\n                }\r\n            }\r\n        }\r\n    })\r\n}\r\n\r\n///// CREATION DU PANIER\r\n\r\nObject(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(\"http://localhost:3000/api/cameras/\").then(function (response) { // Avec la requête AJAX on récupère la liste des articles sur le serveur (response).\r\n    return new Promise(function (resolve, reject) {                  // Si la requête aboutie : On créé une fonction qui prend en paramètre la liste des caméras que le serveur nous retourne. Cette fonction contient également une promesse.\r\n\r\n        // 1ère étape : Création du magasin (store) un tableau qui contient la liste des caméras en stock\r\n\r\n        for (let i = 0; i < response.length; i++) {                 // Pour chaque caméras présentes dans la réponse du serveur (5 caméras)\r\n            for (let y = 0; y < response[i].lenses.length; y++) {   // ET pour chaques lentilles possibles à chaque caméra\r\n                let newCamera = new Camera(                         // On créé une instance de la classe Camera qui aura les caractéristiques suivantes :\r\n                    response[i]._id + \"_\" + response[i].lenses[y],  // Un Id qui est = à l'id du modèle concaténé avec le nom de chaque lentille \r\n                    response[i].name,                               // Un nom inchangé par rapport à la réponse du serveur\r\n                    response[i].price,                              // Un prix inchangé par rapport à la réponse du serveur\r\n                    response[i].lenses                              // La lentille de ce modèle\r\n                )\r\n                store.push(newCamera)                               // L'instance ainsi créée est mis dans le tableau \"store\"\r\n            }\r\n        }\r\n        resolve(store)                                              //Si la fonction se déroule sans problème, la promesse nous renvoi le tableau \"store\" qui contient ainsi 11 produits différents (5 caméras avec chaque option de lentille possible)\r\n\r\n        // 2ème étape : Ajout d'une ligne de panier pour chaque objet présent dans le localStorage \r\n\r\n    }).then(function addCartLine() {                        // Suite à la résolution de la promesse consistant à créer un magasin\r\n\r\n        const rawOrder = []                                         // On créé une variable rawOrder, qui contient tous les objet du local storage\r\n        for (let i = 0; i < localStorage.length; i++) {\r\n            const storageItem = JSON.parse(localStorage.getItem(i))\r\n            rawOrder.push(storageItem)                              // Le rawOrder pouvant contenir des lignes de commande contenant le même article (même caméra + même lentille) il va falloir le nettoyer pour additionner les lignes similaires.\r\n        }\r\n\r\n        const cleanOrder = cleanArray(rawOrder)                     // On fait appel à la fonction \"CleanArray\" qui va créer une liste des identifiants uniques de rawOrder\r\n        cleanOrder.forEach(function (line) {                        // Pour chacun de ces identifiants uniques : on va le comparer avec notre magasin\r\n            for (let i = 0; i < store.length; i++) {                // On demande pour chaque article présent dans la magasin\r\n                if (store[i].id === line) {                         // Si on trouve une correspondance entre l'id d'un article du magasin et l'id de notre liste de commande\r\n                    let newCartline = new Cartline(                 // Alors on créer une ligne de panier (instance de la classe CartLine)\r\n                        (store[i].id.split(\"_\"))[0],                // Avec un l'id correspondant = On divise l'Id et on ne garde que la 1ère partie avant le \"_\" on a donc retrouvé l'id original, lisible par le serveur\r\n                        store[i].name,                              // Le nom du produit en question\r\n                        (store[i].id.split(\"_\"))[1],                // Le choix de la lentille = On divise l'Id et on ne garde que la 2nd partie après le \"_\" on a donc le nom de la lentille choisie \r\n                        countQte(rawOrder, line),                   // Pour la quantité on fait appel à la fonction countQte qui prend en paramètre la liste de commande brut (= localStorage) et la liste des \"ids\" commandées elle va additionner toutes les quantités correspondantes à l'id\r\n                        store[i].price,                             //Le prix du produit en question\r\n                    )\r\n                    cart.push(newCartline)                          // On peut alors mettre cette ligne de panier dans le panier\r\n                }\r\n            }\r\n        })\r\n\r\n        // 2ème étape : Ajout d'une ligne de panier pour chaque objet présent dans le localStorage\r\n\r\n    }).then(function () {                                           // On peut maintenant lancer la mise en forme du panier\r\n        let subCounter = 0\r\n        for (let i = 0; i < cart.length; i++) {                         // Pour chaque élément du panier une ligne html doit être mise en forme\r\n\r\n            const tbody = document.getElementById(\"cart-tablebody\")\r\n            const tr = document.createElement(\"tr\")\r\n            tbody.appendChild(tr)\r\n            const td1 = document.createElement(\"td\")\r\n            const td2 = document.createElement(\"td\")\r\n            const td3 = document.createElement(\"td\")\r\n            const td4 = document.createElement(\"td\")\r\n            const td5 = document.createElement(\"td\")\r\n            tr.appendChild(td1)\r\n            tr.appendChild(td2)\r\n            tr.appendChild(td3)\r\n            tr.appendChild(td4)\r\n            tr.appendChild(td5)\r\n\r\n            const cartLine = cart[i]\r\n            td1.innerText = cartLine.name\r\n            td2.innerText = cartLine.lense\r\n            td3.innerText = ((cartLine.price) / 100) + \" €\"\r\n            td4.innerText = cartLine.qte\r\n            td5.innerText = ((cartLine.subtotal) / 100) + \" €\"\r\n\r\n            //// Fonction de calcul du total du panier\r\n            subCounter = subCounter + (parseInt(cartLine.subtotal / 100))\r\n            const subtt = document.getElementById(\"subtt\")\r\n            subtt.innerText = subCounter + \" €\"\r\n            sessionStorage.setItem(\"total\", subCounter)\r\n        }\r\n    })\r\n}).catch(function (error) {\r\n    console.error(\"erreur lors du chargement du panier.\", error)\r\n})\r\n\r\n////// Fonction de RAZ du panier\r\n\r\nconst emptyCart = function () {\r\n    const emptyBtn = document.getElementById(\"empty\")\r\n    emptyBtn.addEventListener(\"click\", function () {    // Quand on clique sur le bouton \"vider le panier\"\r\n        localStorage.clear()                            // Efface le locale storage\r\n        location.reload()                               // Recharge la page\r\n    })\r\n}\r\n\r\nemptyCart()\r\n\r\n/////////\r\n\r\n// Récupération des informations du formulaire pour requête POST au serveur\r\n\r\nconst main = document.getElementById(\"main\")\r\nconst form = document.getElementById(\"form\")\r\nconst firstName = document.getElementById(\"firstname\")\r\nconst lastName = document.getElementById(\"lastname\")\r\nconst address = document.getElementById(\"address\")\r\nconst city = document.getElementById(\"city\")\r\nconst email = document.getElementById(\"email\")\r\nconst submit = document.getElementById(\"submit\")\r\n\r\nsubmit.addEventListener(\"click\", function (event) { // Au moment du la soumission du formulaire :\r\n    event.preventDefault()\r\n    console.log(form.checkValidity())\r\n    if (cart.length < 1) { //Apparition d'un message d'information indiquant que le panier est vide\r\n        if (document.querySelector(\"aside\") === null) {\r\n            const aside = main.appendChild(document.createElement(\"aside\"))\r\n            aside.classList.add(\"error\", \"error__panier\", \"error__panier--anim\") // On ajoute la classe \"error\" à la div pour traitement CSS\r\n            aside.innerText = \"Votre panier est vide\" // On y affiche le message d'erreur\r\n        } else { // Pour rejouer l'animation en cas de multi-clique sur le bouton \"envoyer\"\r\n            const aside = document.querySelector(\"aside\")\r\n            main.removeChild(aside)\r\n            main.appendChild(aside)\r\n        }\r\n    } else if (form.checkValidity() === true) {\r\n        ///Creation d'une variable contact contenant les informations de contact saisie par l'utilisateur\r\n        const contact = {\r\n            firstName: firstName.value,\r\n            lastName: lastName.value,\r\n            address: address.value,\r\n            city: city.value,\r\n            email: email.value\r\n        }\r\n        const products = [] // Création d'une variables \"products\" qui contient les informations du panier\r\n        for (let i = 0; i < cart.length; i++) {\r\n            products.push(cart[i].id)\r\n        }\r\n\r\n        const data = { contact, products } // Création d'une variable \"data\" qui contient les 2 éléments à transmettre au serveur\r\n\r\n        /// Envoie de la requête\r\n\r\n        post(data).then(function (response) {\r\n            window.location.href = \"confirm.html\"\r\n            const myOrder = JSON.stringify(response)      // On transforme cet objet en chaine de caractère\r\n            sessionStorage.setItem(\"myOrder\", myOrder)\r\n            localStorage.clear()\r\n        }).catch(function (error) {\r\n            console.error(\"Erreur lors de l'envoi des données: \" + error)\r\n        })\r\n    } else if (document.querySelector(\"aside\") === null) {\r\n        const aside = main.appendChild(document.createElement(\"aside\"))\r\n        aside.classList.add(\"error\", \"error__panier\", \"error__panier--anim\") // On ajoute la classe \"error\" à la div pour traitement CSS\r\n        aside.innerText = \"Veuillez vérifier votre saisie\"\r\n    } else { // Pour rejouer l'animation en cas de multi-clique sur le bouton \"envoyer\"\r\n        const aside = document.querySelector(\"aside\")\r\n        main.removeChild(aside)\r\n        main.appendChild(aside)\r\n    }\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./src/panier.js?");

/***/ })

/******/ });