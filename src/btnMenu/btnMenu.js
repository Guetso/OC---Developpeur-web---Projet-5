// MODULES NECESSAIRES

import { onScroll } from './onScroll.js'

// CREATION DU BOUTON MENU DYNAMIQUE (TOGGLE + SCROLL)

export default function () {
  window.addEventListener('scroll', onScroll) // A chaque mouvement de scroll la fonction est appelée
}
