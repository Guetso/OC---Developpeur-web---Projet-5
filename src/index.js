// MODULES NECESSAIRES

import { environment, get } from './configAjax.js' // Importation de la requête AJAX
import btnMenu from './btnMenu/btnMenu.js' // Importation du bouton menu dynamique

// VARIABLES NECESSAIRES

const url = environment + '/api/cameras/'// L'URL de la route

// CREATION DE LA FONCTION GENERANT LA LISTE DES PRODUITS

get(url) // Avec la fonction get on récupère la liste des caméras à l'URL spécifié en paramètre
  .then(function (response) { // La fonction contenant une promesse, on lui indique quoi faire en cas de succès de la requête
    const items = response // On créer une constante "response" qui contient la liste sous forme d'array
    return items // On retourne cette objet
  }) // Si la constante "items" est bien créée, on chaine avec une autre promesse qui se résout par l'envoi de la constante "items"
  .then(function createList (items) { // La callback en cas de réussite prends en paramètre cette constanste
    const ul = document.getElementById('items') // On accède à l'élément "ul" de l'index.html
    for (let i = 0; i < items.length; i++) { // Pour chaque objet du tableau "items"
      const item = items[i] // On créé une variable "item" qui correspond à chaque élément du tableau des items
      const li = ul.appendChild(document.createElement('li')) // On ajoute un élément enfant "li" dans "ul"
      const h3 = li.appendChild(document.createElement('h3')) // On créé l'élément h3 qui contiendra le nom de l'appareil
      const divImg = li.appendChild(document.createElement('div')) // On créer l'élément contenant l'image de l'item sous forme de div
      const img = divImg.appendChild(document.createElement('img')) // On créer l'élément <img>
      const a = li.appendChild(document.createElement('a')) // On créé un lien pour accéder au détail de l'appareil et le commander
      li.classList.add('item') // On lui donne une classe
      h3.classList.add('item__title') // On lui donne une classe
      divImg.classList.add('item__img') // On lui donne une classe
      a.classList.add('item__btn') // On lui donne une classe
      h3.innerText = item.name // On ajoute son nom
      a.innerText = 'Voir ce modèle' // Texte du bouton
      img.setAttribute('src', item.imageUrl) // On lui donne la source de l'image
      img.setAttribute('alt', 'Une photo du modèle ' + item.name) // On lui donne l'attribut a renseigner pour l'image, ici le nom de l'appareil
      a.setAttribute('href', 'produit.html#' + item._id) // On charge la page "produit.html" + on ajoute un hash correspondant à l'id du produit demandé à l'URL
    }
  })
  .catch(function (error) {
    // Si la requête Xhr et/ou la création de la liste échoue(nt)
    console.error('Erreur lors de la requête: ', error) // Le message est transmis à la console pour accès aux détails
    const main = document.getElementById('main') // On accède à l'élément section de classe "main"
    const alert = main.appendChild(document.createElement('div')) // On y créer une "div"
    alert.classList.add('error', 'error__server') // On ajoute la classe "error" et "__server" à la div pour traitement CSS
    alert.innerText =
      "Une erreur s'est produite lors du chargement des articles" // On y affiche le message d'erreur
  })

// BOUTON MENU DYNAMIQUE

btnMenu() // On appelle la fonction pour activer le bouton dynamique du menu
