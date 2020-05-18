// Animation de l'ouverture du menu en format mobile (width < 980 px)

// VARIABLES NECESSAIRES

const btnMenuOpen = document.querySelector('.menu__btn') // On récupère l'élément ayant pour class ".menu__btn" = le bouton d'ouverture du menu
const btnMenuClose = document.querySelector('.close') // On récupère l'élément ayant pour classe "close" = le bouton de fermeture du menu
const toggleMenu = document.getElementById('navpanel') // On récupère l'élément ayant pour classe "navpanel" = le corps du menu

// FONCTION D'OUVERTURE DU MENU

btnMenuOpen.addEventListener('click', function () { // Quand on clique sur le bouton "Menu"
  toggleMenu.classList.add('menu--active') // la classe "menu--active" est ajoutée = scaleX(0)->scaleX(1) (cf.SASS, Layout, btnMenu.scss)
})

// FONCTION DE FERMETURE

btnMenuClose.addEventListener('click', function () { // Quand on clique sur la croix du menu
  toggleMenu.classList.remove('menu--active') // La classe "menu--active" est retirée
})

export { btnMenuOpen } // On va le récupérer pour lui attribuer une autre caractéristique dans onScroll.js
