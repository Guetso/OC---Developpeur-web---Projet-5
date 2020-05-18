/* global sessionStorage */

// MODULES NECESSAIRES

import { environment, get } from './configAjax.js' // Importation de la requête AJAX
import btnMenu from './btnMenu/btnMenu.js' // Importation du bouton menu dynamique

// VARIABLES NECESSAIRES

// Pour la fonction get()
const hash = window.location.hash // On créé une variable "hash" qui correspond au hash de l'URL qui a été chargée par l'utilisateur
const onlyHash = hash.replace('#', '') // On reformate la constante "hash" pour lui enlever le symbole "#"
const url = environment + '/api/cameras/' + onlyHash // L'URL chargée sera celle correspondant à l'id du produit
// Pour la fonction createProduct()
const h3 = document.querySelector('.sheet__title') // Recherche de l'élément qui contiendra le nom de l'article
const id = document.querySelector('.sheet__id') // Recherche de l'élément qui contiendra l'ID du produit
const img = document.querySelector('.sheet__img img') // Recherche de l'élément qui contiendra la photo de l'article
const specs = document.querySelector('.sheet__specs') // Recherche de l'élément qui contiendra la description de l'article
const select = document.getElementById('lenses-select') // Recherche de l'élément qui contiendra la liste des lentilles
const price = document.getElementById('price') // Recherche de l'élément qui contiendra le prix
// Pour la fonction addEventListener
const submit = document.getElementById('btn')
const lense = document.getElementById('lenses-select')
const qte = document.getElementById('qte')

// CREATION DE LA FONCTION GENERANT LA PAGE PRODUIT

get(url)
  .then(function (response) {
    const item = response // Item sera la réponse de la promesse à savoir les informations du produit demandé
    return item // On retourne l'objet
  }).then(function createProduct (item) {
    h3.innerText = item.name // On ajoute le nom du produit
    id.innerText = item._id // On ajoute l'id du produit
    img.setAttribute('src', item.imageUrl) // On lui donne la source de l'image
    img.setAttribute('alt', item.name) // On lui donne l'attribut a renseigner pour l'image, ici le nom de l'appareil
    specs.innerText = item.description // On ajoute la description du produit
    for (let i = 0; i < item.lenses.length; i++) { // Pour chaque modèle de lentille créer une option
      const lense = item.lenses[i] // On créer la constante qui stocke le modèle
      const option = select.appendChild(document.createElement('option')) // On ajoute l'option au "select"
      option.setAttribute('value', lense) // On précise la valeur de ce select
      option.innerText = lense // On donne le nom de la lentille
    }
    const itemPrice = item.price / 100 // On converti en unité euro
    price.innerText = itemPrice + ' €' // On ajoute le prix
  })
  .catch(function (error) {
    // Si la requête Xhr échoue, on transmet un message d'erreur et on indique qu'un problème à eu lieu lors de la requête
    console.error('Erreur lors de la requête', error) // Le message est transmis à la console pour accès aux détails
    const sheet = document.querySelector('.sheet') // On accède à l'élément section de classe "main"
    const alert = sheet.appendChild(document.createElement('div')) // On y créer une "div"
    alert.classList.add('error', 'error__server') // On ajoute la classe "error" à la div pour traitement CSS
    alert.innerText =
      "Une erreur s'est produite lors du chargement de l'article" // On y affiche le message d'erreur
  })

// CREATION DE LA FONCTIONNALITÉ "AJOUTER AU PANIER"

submit.addEventListener('click', function (event) {
  // event.preventDefault()
  const order = { // Au moment du clique sur le bouton : création d'une constante "order"
    _id: id.innerText, // qui contient l'id du produit
    lense: lense.value, // la valeur de la lentille selectionnée
    qte: qte.value // la quantité voulue
  }
  const stringOrder = JSON.stringify(order) // On transforme cet objet en chaine de caractère
  sessionStorage.setItem('newOrder', stringOrder) // Qu'on va stocker dans le "session storage" du navigateur et qu'on nomme "newOrder"
})

// BOUTON MENU DYNAMIQUE

btnMenu() // On appelle la fonction pour activer le bouton dynamique du menu
