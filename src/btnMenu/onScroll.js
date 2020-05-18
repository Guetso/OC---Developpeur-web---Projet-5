// Ajout d'un fond blanc au bouton de l'ouverture du menu lorsqu'il dépasse le header en scrollant en format mobile

// MODULES NECESSAIRES

import { btnMenuOpen } from './toggleMenu.js' // On récupère le bouton du menu déjà utilisé dans anim.js

// FONCTIONS NECESSAIRES

const scrollY = function () { // On créer une fonction qui va calculer la quantité de scroll effectuée par l'utilisateur avec un polyfil pour la propriété window.pageYOffset
  const supportPageOffset = window.pageXOffset !== undefined
  const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat'
  return supportPageOffset
    ? window.pageYOffset
    : isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop
}

// VARIABLES NECESSAIRES

const rect = btnMenuOpen.getBoundingClientRect() // On récupère la position de notre bouton
const constraint = document.querySelector( // On va aller chercher dans notre élément bouton, l'attribut qui indique...
  btnMenuOpen.getAttribute('data-constraint') // ...quelle est la contrainte qui force notre bouton à changer d'élément (ici le header)
)
const constraintRect = constraint.getBoundingClientRect() // On va récupérer à son tour la position de la contrainte (=le header)
const constraintBottom = // On a besoin de connaitre la position du bas de la contrainte par rapport au bouton
  constraintRect.top + scrollY() + constraintRect.height - rect.height // = la position du haut de la contrainte + la quantité de scroll + sa hauteur - la hauteur du bouton

// CREATION DE LA FONCTION ONSCROLL

const onScroll = function () {
  if (scrollY() > constraintBottom) { // Si la quantité de scroll effectué par l'utilisateur est supérieure au bas de la contrainte
    btnMenuOpen.classList.add('menu__btn--solid') // Un fond blanc est ajouté au bouton par l'ajout d'une classe --solid
  } else if (btnMenuOpen.classList.contains('menu__btn--solid')) { // Sinon
    btnMenuOpen.classList.remove('menu__btn--solid') // Le fond blanc est retiré au bouton par le retrait de la classe --solid
  }
}

export { onScroll }
