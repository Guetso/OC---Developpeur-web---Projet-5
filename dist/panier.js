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

/***/ "./src/panier.js":
/*!***********************!*\
  !*** ./src/panier.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onScroll.js */ \"./src/onScroll.js\");\n // Importation de la requête AJAX\n\n\n /////////////////////\n// On met en place une fonction qui s'auto exécute et qui vérifie si le session storage contient un objet \"newOrder\"\n\n(function () {\n  // La fonction s'exécute dès le chargement de la page\n  if (sessionStorage.getItem(\"newOrder\") === null) {\n    // Elle vérifie qu'il existe bien une nouvelle commande stocké dans le sessionStorage\n    console.log(\"Pas de nouvelle commande à ajouter\"); // Si ce n'est pas le  cas, il ne se passe rien, affichage d'un commentaire dans la console\n  } else {\n    // Si elle trouve un objet \"newOrder\" dans le sessionStorage\n    const newNb = localStorage.length; // Elle créer une clé de valeur = à la taille du localStorage\n\n    const addToCart = sessionStorage.getItem(\"newOrder\"); // Elle créer une constante addToCart, qui est = à la valeur de \"neworder\"\n\n    localStorage.setItem(newNb, addToCart); // Elle attribue un nouvel objet dans le localStorage\n\n    sessionStorage.removeItem(\"newOrder\"); // Elle supprime le \"newOrder du sessionStorage\" ainsi il ne peut y avoir qu'un seul \"newOrder\" dans le sessionStorage\n  }\n})(); //////// CREATION DU PANIER \n//Initialisation des classes nécessaires à la création du panier :\n\n\nclass Camera {\n  // Correspond à un modèle de caméra présent dans le catalogue du site\n  constructor(Id, Name, Price, Lenses) {\n    this.id = Id;\n    this.name = Name;\n    this.price = Price;\n    this.lenses = Lenses;\n  }\n\n}\n\nclass Cartline {\n  // Correspond à une ligne du panier\n  constructor(Id, Name, Lense, Qte, Price) {\n    this.id = Id;\n    this.name = Name;\n    this.lense = Lense;\n    this.qte = Qte;\n    this.price = Price;\n    this.subtotal = parseInt(this.qte) * parseInt(this.price);\n  }\n\n} ///////// Initialisation des variables nécessaires  à la création du panier :\n\n\nconst store = []; // Correspond au catalogue du magasin\n\nconst cart = []; // Correspond au panier \n///////// Initialisation des fonctions nécessaires à la  création du panier : \n\nfunction cleanArray(array) {\n  // Cette fonction prend en paramètre un tableau. Elle permet de créer un tableau qui ne contient que les valeurs uniques de la clé \"_id\"\n  let i = array.length;\n  let j = array.length;\n  let len = array.length;\n  let out = [];\n  let obj = {};\n\n  for (i = 0; i < len; i++) {\n    obj[array[i]._id + \"_\" + array[i].lense] = 0;\n  }\n\n  for (j in obj) {\n    out.push(j);\n  }\n\n  return out;\n}\n\nfunction countQte(arr, list) {\n  //Cette fonction prend en paramètre un tableau et une liste qu'on va comparer pour determiner la quantité total d'un article précis dans le tableau et nous retourne cette quantité\n  let counter = 0;\n\n  for (let i = 0; i < arr.length; i++) {\n    // Pour chaque élément du tableau\n    if (arr[i]._id === list.split(\"_\")[0] && arr[i].lense === list.split(\"_\")[1]) {\n      // On cherche une correspondance de l'id et de la lentille avec la liste \n      counter = counter + parseInt(arr[i].qte); // A chaque correspondance trouvée, on ajout au compteur la quantitée trouvée\n    }\n  }\n\n  return counter; // Cela nous retourne la quantité total d'un article dans le tableau\n}\n\nfunction post(toSend) {\n  return new Promise(function (resolve, reject) {\n    const httpRequest = new XMLHttpRequest();\n    httpRequest.open(\"POST\", _config_js__WEBPACK_IMPORTED_MODULE_0__[\"environment\"] + \"/api/cameras/order\");\n    httpRequest.setRequestHeader(\"Content-Type\", \"application/json\");\n    httpRequest.send(JSON.stringify(toSend));\n\n    httpRequest.onreadystatechange = function () {\n      if (httpRequest.readyState === 4) {\n        if (httpRequest.status === 201) {\n          let response = JSON.parse(this.responseText);\n          console.log(response);\n          resolve(response);\n        } else {\n          reject(httpRequest);\n        }\n      }\n    };\n  });\n} ///// CREATION DU PANIER\n\n\nObject(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(\"http://localhost:3000/api/cameras/\").then(function (response) {\n  // Avec la requête AJAX on récupère la liste des articles sur le serveur (response).\n  return new Promise(function (resolve, reject) {\n    // Si la requête aboutie : On créé une fonction qui prend en paramètre la liste des caméras que le serveur nous retourne. Cette fonction contient également une promesse.\n    // 1ère étape : Création du magasin (store) un tableau qui contient la liste des caméras en stock\n    for (let i = 0; i < response.length; i++) {\n      // Pour chaque caméras présentes dans la réponse du serveur (5 caméras)\n      for (let y = 0; y < response[i].lenses.length; y++) {\n        // ET pour chaques lentilles possibles à chaque caméra\n        let newCamera = new Camera( // On créé une instance de la classe Camera qui aura les caractéristiques suivantes :\n        response[i]._id + \"_\" + response[i].lenses[y], // Un Id qui est = à l'id du modèle concaténé avec le nom de chaque lentille \n        response[i].name, // Un nom inchangé par rapport à la réponse du serveur\n        response[i].price, // Un prix inchangé par rapport à la réponse du serveur\n        response[i].lenses // La lentille de ce modèle\n        );\n        store.push(newCamera); // L'instance ainsi créée est mis dans le tableau \"store\"\n      }\n    }\n\n    resolve(store); //Si la fonction se déroule sans problème, la promesse nous renvoi le tableau \"store\" qui contient ainsi 11 produits différents (5 caméras avec chaque option de lentille possible)\n    // 2ème étape : Ajout d'une ligne de panier pour chaque objet présent dans le localStorage \n  }).then(function addCartLine() {\n    // Suite à la résolution de la promesse consistant à créer un magasin\n    const rawOrder = []; // On créé une variable rawOrder, qui contient tous les objet du local storage\n\n    for (let i = 0; i < localStorage.length; i++) {\n      const storageItem = JSON.parse(localStorage.getItem(i));\n      rawOrder.push(storageItem); // Le rawOrder pouvant contenir des lignes de commande contenant le même article (même caméra + même lentille) il va falloir le nettoyer pour additionner les lignes similaires.\n    }\n\n    const cleanOrder = cleanArray(rawOrder); // On fait appel à la fonction \"CleanArray\" qui va créer une liste des identifiants uniques de rawOrder\n\n    cleanOrder.forEach(function (line) {\n      // Pour chacun de ces identifiants uniques : on va le comparer avec notre magasin\n      for (let i = 0; i < store.length; i++) {\n        // On demande pour chaque article présent dans la magasin\n        if (store[i].id === line) {\n          // Si on trouve une correspondance entre l'id d'un article du magasin et l'id de notre liste de commande\n          let newCartline = new Cartline( // Alors on créer une ligne de panier (instance de la classe CartLine)\n          store[i].id.split(\"_\")[0], // Avec un l'id correspondant = On divise l'Id et on ne garde que la 1ère partie avant le \"_\" on a donc retrouvé l'id original, lisible par le serveur\n          store[i].name, // Le nom du produit en question\n          store[i].id.split(\"_\")[1], // Le choix de la lentille = On divise l'Id et on ne garde que la 2nd partie après le \"_\" on a donc le nom de la lentille choisie \n          countQte(rawOrder, line), // Pour la quantité on fait appel à la fonction countQte qui prend en paramètre la liste de commande brut (= localStorage) et la liste des \"ids\" commandées elle va additionner toutes les quantités correspondantes à l'id\n          store[i].price);\n          cart.push(newCartline); // On peut alors mettre cette ligne de panier dans le panier\n        }\n      }\n    }); // 2ème étape : Ajout d'une ligne de panier pour chaque objet présent dans le localStorage\n  }).then(function () {\n    // On peut maintenant lancer la mise en forme du panier\n    let subCounter = 0;\n\n    for (let i = 0; i < cart.length; i++) {\n      // Pour chaque élément du panier une ligne html doit être mise en forme\n      const tbody = document.getElementById(\"cart-tablebody\");\n      const tr = document.createElement(\"tr\");\n      tbody.appendChild(tr);\n      const td1 = document.createElement(\"td\");\n      const td2 = document.createElement(\"td\");\n      const td3 = document.createElement(\"td\");\n      const td4 = document.createElement(\"td\");\n      const td5 = document.createElement(\"td\");\n      tr.appendChild(td1);\n      tr.appendChild(td2);\n      tr.appendChild(td3);\n      tr.appendChild(td4);\n      tr.appendChild(td5);\n      const cartLine = cart[i];\n      td1.innerText = cartLine.name;\n      td2.innerText = cartLine.lense;\n      td3.innerText = cartLine.price / 100 + \" €\";\n      td4.innerText = cartLine.qte;\n      td5.innerText = cartLine.subtotal / 100 + \" €\"; //// Fonction de calcul du total du panier\n\n      subCounter = subCounter + parseInt(cartLine.subtotal / 100);\n      const subtt = document.getElementById(\"subtt\");\n      subtt.innerText = subCounter + \" €\";\n      sessionStorage.setItem(\"total\", subCounter);\n    }\n  });\n}).catch(function (error) {\n  console.error(\"erreur lors du chargement du panier.\", error);\n}); ////// Fonction de RAZ du panier\n\nconst emptyCart = function () {\n  const emptyBtn = document.getElementById(\"empty\");\n  emptyBtn.addEventListener(\"click\", function () {\n    // Quand on clique sur le bouton \"vider le panier\"\n    localStorage.clear(); // Efface le locale storage\n\n    location.reload(); // Recharge la page\n  });\n};\n\nemptyCart(); /////////\n// Récupération des informations du formulaire pour requête POST au serveur\n\nconst main = document.getElementById(\"main\");\nconst form = document.getElementById(\"form\");\nconst firstName = document.getElementById(\"firstname\");\nconst lastName = document.getElementById(\"lastname\");\nconst address = document.getElementById(\"address\");\nconst city = document.getElementById(\"city\");\nconst email = document.getElementById(\"email\");\nconst submit = document.getElementById(\"submit\");\nsubmit.addEventListener(\"click\", function (event) {\n  // Au moment du la soumission du formulaire :\n  event.preventDefault();\n  console.log(form.checkValidity());\n\n  if (cart.length < 1) {\n    //Apparition d'un message d'information indiquant que le panier est vide\n    if (document.querySelector(\"aside\") === null) {\n      const aside = main.appendChild(document.createElement(\"aside\"));\n      aside.classList.add(\"error\", \"error__panier\", \"error__panier--anim\"); // On ajoute la classe \"error\" à la div pour traitement CSS\n\n      aside.innerText = \"Votre panier est vide\"; // On y affiche le message d'erreur\n    } else {\n      // Pour rejouer l'animation en cas de multi-clique sur le bouton \"envoyer\"\n      const aside = document.querySelector(\"aside\");\n      main.removeChild(aside);\n      main.appendChild(aside);\n    }\n  } else if (form.checkValidity() === true) {\n    ///Creation d'une variable contact contenant les informations de contact saisie par l'utilisateur\n    const contact = {\n      firstName: firstName.value,\n      lastName: lastName.value,\n      address: address.value,\n      city: city.value,\n      email: email.value\n    };\n    const products = []; // Création d'une variables \"products\" qui contient les informations du panier\n\n    for (let i = 0; i < cart.length; i++) {\n      products.push(cart[i].id);\n    }\n\n    const data = {\n      contact,\n      products\n    }; // Création d'une variable \"data\" qui contient les 2 éléments à transmettre au serveur\n    /// Envoie de la requête\n\n    post(data).then(function (response) {\n      window.location.href = \"confirm.html\";\n      const myOrder = JSON.stringify(response); // On transforme cet objet en chaine de caractère\n\n      sessionStorage.setItem(\"myOrder\", myOrder);\n      localStorage.clear();\n    }).catch(function (error) {\n      console.error(\"Erreur lors de l'envoi des données: \" + error);\n    });\n  } else if (document.querySelector(\"aside\") === null) {\n    const aside = main.appendChild(document.createElement(\"aside\"));\n    aside.classList.add(\"error\", \"error__panier\", \"error__panier--anim\"); // On ajoute la classe \"error\" à la div pour traitement CSS\n\n    aside.innerText = \"Veuillez vérifier votre saisie\";\n  } else {\n    // Pour rejouer l'animation en cas de multi-clique sur le bouton \"envoyer\"\n    const aside = document.querySelector(\"aside\");\n    main.removeChild(aside);\n    main.appendChild(aside);\n  }\n});\n\n//# sourceURL=webpack:///./src/panier.js?");

/***/ })

/******/ });