import { onScroll } from './onScroll.js'

export default function () {
  window.addEventListener('scroll', onScroll) // A chaque mouvement de scroll la fonction est appelée
}
