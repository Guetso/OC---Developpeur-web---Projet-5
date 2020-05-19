/* global sessionStorage, localStorage */

// MODULES NECESSAIRES

import { environment, get, post } from './ajax/requetesAjax.js' // Importation de la requête AJAX
import { Camera } from './class/camera.js' // Importation de la classe caméra
import { Cartline } from './class/cartLine.js' // Importation de la classe caméra
import {
  cleanArray,
  countQte,
  emptyCart
} from './outilsPanier/FonctionsPanier.js' // Importation de fonctions utiles au fonctionnement du panier
import { formIsValid } from './outilsPanier/CtrlFormulaire.js'
import btnMenu from './btnMenu/btnMenu.js' // Importation du bouton menu dynamique

// VARIABLES NECESSAIRES

const urlGet = environment + '/api/cameras/' // L'URL de la route Get
const urlPost = environment + '/api/cameras/order' // L'URL de la route Post
const rawCart = [] // Correspond au contenu du panier brut, avant traitement
const cart = [] // Correspond au contenu panier après traitement
const store = [] // Correspond au total des produits disponibles

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const address = document.getElementById('address')
const city = document.getElementById('city')
const email = document.getElementById('email')
const submit = document.getElementById('submit')

// FONCTION DE RECUPERATION DU SESSION STORAGE

;(function () {
  // On met en place une fonction qui s'auto exécute et qui vérifie si le session storage contient un objet "newOrder"
  if (sessionStorage.getItem('newOrder') === null) {
    // Elle vérifie qu'il existe bien une nouvelle commande stocké dans le sessionStorage
    console.log('Pas de nouvelle commande à ajouter') // Si ce n'est pas le  cas, il ne se passe rien, affichage d'un commentaire dans la console
  } else { // Si elle trouve un objet "newOrder" dans le sessionStorage
    let newNb = 0
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === 'ori_' + localStorage.length) {
        newNb = localStorage.length + 1
      } else {
        newNb = localStorage.length
      }
    }
    const addToCart = sessionStorage.getItem('newOrder') // Elle créer une constante addToCart, qui est = à la valeur de "neworder"
    localStorage.setItem('ori_' + newNb, addToCart) // Elle attribue un nouvel objet dans le localStorage avec une clé personnalisée (ori_+n°)
    sessionStorage.removeItem('newOrder') // Elle supprime le "newOrder du sessionStorage" ainsi il ne peut y avoir qu'un seul "newOrder" dans le sessionStorage
  }
})()

// FONCTION DE CREATION DU PANIER

get(urlGet)
  .then(function (response) { // Avec la requête AJAX on récupère la liste des articles sur le serveur (response).
    for (let i = 0; i < response.length; i++) { // Pour chaque caméras présentes dans la réponse du serveur (5 caméras)
      for (let y = 0; y < response[i].lenses.length; y++) { // ET pour chaques lentilles possibles à chaque caméra
        const newCamera = new Camera( // On créé une instance de la classe Camera qui aura les caractéristiques suivantes :
          response[i]._id + '_' + response[i].lenses[y], // Un Id qui est = à l'id du modèle concaténé avec le nom de chaque lentille
          response[i].name, // Un nom inchangé par rapport à la réponse du serveur
          response[i].price, // Un prix inchangé par rapport à la réponse du serveur
          response[i].lenses // La lentille de ce modèle
        )
        store.push(newCamera) // L'instance ainsi créée est mis dans le tableau "store"
      }
    }
    return store // Si la fonction se déroule sans problème, la promesse nous renvoi le tableau "store" qui contient ainsi 11 produits différents (5 caméras avec chaque option de lentille possible)
  })
  .then(function (response) {
    for (let i = 0; i < localStorage.length; i++) { // Pour chaque objet du localStorage
      if (localStorage.key(i).startsWith('ori_')) { // ET si la clé de cet objet commence par "ori_"
        const itemToGet = JSON.parse(localStorage.getItem(localStorage.key(i))) // On créé une constante qui correspond à cet objet parsé en Json
        rawCart.push(itemToGet) // Et on le met dans le rawCart
      }
    }
    const cleanOrder = cleanArray(rawCart) // On fait appel à la fonction "CleanArray" qui va créer une liste des identifiants uniques de rawCart
    cleanOrder.forEach(function (line) { // Pour chacun de ces identifiants uniques : on va le comparer avec notre magasin
      for (let i = 0; i < response.length; i++) { // On demande pour chaque article présent dans la magasin
        if (store[i].id === line) { // Si on trouve une correspondance entre l'id d'un article du magasin et l'id de notre liste de commande
          const newCartline = new Cartline( // Alors on créé une ligne de panier
            response[i].id.split('_')[0], // Avec un l'id correspondant = On divise l'Id et on ne garde que la 1ère partie avant le "_" on a donc retrouvé l'id original, lisible par le serveur
            response[i].name, // Le nom du produit en question
            response[i].id.split('_')[1], // Le choix de la lentille = On divise l'Id et on ne garde que la 2nd partie après le "_" on a donc le nom de la lentille choisie
            countQte(rawCart, line), // Pour la quantité on fait appel à la fonction countQte qui prend en paramètre la liste de commande brut (= localStorage) et la liste des "ids" commandées elle va additionner toutes les quantités correspondantes à l'id
            response[i].price // Le prix du produit en question
          )
          cart.push(newCartline) // On peut alors mettre cette ligne de panier dans le panier
        }
      }
    })
    return cart
  })
  .then(function (response) { // On peut maintenant lancer la mise en forme du panier
    let subCounter = 0
    for (let i = 0; i < response.length; i++) { // Pour chaque élément du panier une ligne html doit être mise en forme
      const cartLine = response[i]
      const tbody = document.getElementById('cart-tablebody')
      const tr = document.createElement('tr')
      const td1 = document.createElement('td')
      const td2 = document.createElement('td')
      const td3 = document.createElement('td')
      const td4 = document.createElement('td')
      const td5 = document.createElement('td')
      tbody.appendChild(tr)
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)
      tr.appendChild(td5)
      td1.innerText = cartLine.name
      td2.innerText = cartLine.lense
      td3.innerText = cartLine.price / 100 + ' €'
      td4.innerText = cartLine.qte
      td5.innerText = cartLine.subtotal / 100 + ' €'

      // Fonction de calcul du total du panier
      subCounter = subCounter + parseInt(cartLine.subtotal / 100)
      const subtt = document.getElementById('subtt')
      subtt.innerText = subCounter + ' €'
      sessionStorage.setItem('total', subCounter) // on le stock dans le sessionStorage pour réutilisation dans confirm.js
    }
  })
  .catch(function (error) { // Si la requête Xhr et/ou la création de la liste échoue(nt)
    console.error('Erreur lors de la requête: ', error) // Le message est transmis à la console pour accès aux détails
    const main = document.getElementById('main') // On accède à l'élément section de classe "main"
    const alert = main.appendChild(document.createElement('div')) // On y créer une "div"
    alert.classList.add('error', 'error__server') // On ajoute la classe "error" et "__server" à la div pour traitement CSS
    alert.innerText =
      "Une erreur s'est produite lors du chargement des articles" // On y affiche le message d'erreur
  })

// SOUMISSION DU FORMULAIRE

submit.addEventListener('click', function (event) { // Au moment du la soumission du formulaire :
  event.preventDefault()
  if (formIsValid(cart) === true) { // Creation d'une variable contact contenant les informations de contact saisie par l'utilisateur
    const contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value
    }
    const products = [] // Création d'une variables "products" qui contient les informations du panier
    for (let i = 0; i < cart.length; i++) {
      products.push(cart[i].id)
    }
    const data = { contact, products } // Création d'une variable "data" qui contient les 2 éléments à transmettre au serveur
    post(urlPost, data)
      .then(function (response) {
        window.location.href = 'confirm.html'
        const myOrder = JSON.stringify(response) // On transforme cet objet en chaine de caractère
        sessionStorage.setItem('myOrder', myOrder)
        localStorage.clear()
      })
      .catch(function (error) { // Si la requête Xhr et/ou la création de la liste échoue(nt)
        console.error('Erreur lors de la requête: ', error) // Le message est transmis à la console pour accès aux détails
        const main = document.getElementById('main') // On accède à l'élément section de classe "main"
        const alert = main.appendChild(document.createElement('div')) // On y créer une "div"
        alert.classList.add('error', 'error__server') // On ajoute la classe "error" et "__server" à la div pour traitement CSS
        alert.innerText =
          "Une erreur s'est produite lors de l'envoi du formulaire" // On y affiche le message d'erreur
      })
  }
})

emptyCart() // Fonction de remise à zéro du panier
btnMenu() // On appelle la fonction pour activer le bouton dynamique du menu
