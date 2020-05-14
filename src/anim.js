// Animation de l'ouverture du menu

const btnMenuOpen = document.querySelector('.menu__btn')
const btnMenuClose = document.querySelector('.close')
const toggleMenu = document.getElementById('navpanel')

btnMenuOpen.addEventListener('click', function () {
  toggleMenu.classList.add('menu--active')
})

btnMenuClose.addEventListener('click', function () {
  toggleMenu.classList.remove('menu--active')
})

export { btnMenuOpen }
