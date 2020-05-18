/* global sessionStorage */

// MODULES NECESSAIRES

import btnMenu from './btnMenu/btnMenu.js' // Importation du bouton menu dynamique

// VARIABLES NECESSAIRES

const myOrder = JSON.parse(sessionStorage.getItem('myOrder'))
console.log(myOrder)
const spanFirstName = document.getElementById('firstName')
const spanId = document.getElementById('cmdId')
const spanTotal = document.getElementById('cmdTotal')

// AFFICHAGE DES INFORMATIONS DE CONFIRMATION

spanFirstName.innerText = myOrder.contact.firstName
spanId.innerText = myOrder.orderId
spanTotal.innerText = sessionStorage.getItem('total') + ' €'

// BOUTON MENU DYNAMIQUE

btnMenu() // On appelle la fonction pour activer le bouton dynamique du menu
