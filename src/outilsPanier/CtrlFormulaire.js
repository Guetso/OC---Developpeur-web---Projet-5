function formIsValid (cartToCheck) {
  const main = document.getElementById('main')
  const form = document.getElementById('form')
  if (cartToCheck.length < 1) {
    // Apparition d'un message d'information indiquant que le panier est vide
    if (document.querySelector('aside') === null) {
      const aside = main.appendChild(document.createElement('aside'))
      aside.classList.add('error', 'error__panier', 'error__panier--anim') // On ajoute la classe "error" à la div pour traitement CSS
      aside.innerText = 'Votre panier est vide' // On y affiche le message d'erreur
    } else {
      // Pour rejouer l'animation en cas de multi-clique sur le bouton "envoyer"
      const aside = document.querySelector('aside')
      main.removeChild(aside)
      main.appendChild(aside)
    }
  } else if (form.checkValidity() === true) {
    return true
  } else if (document.querySelector('aside') === null) {
    const aside = main.appendChild(document.createElement('aside'))
    aside.classList.add('error', 'error__panier', 'error__panier--anim') // On ajoute la classe "error" à la div pour traitement CSS
    aside.innerText = 'Veuillez vérifier votre saisie'
  } else {
    // Pour rejouer l'animation en cas de multi-clique sur le bouton "envoyer"
    const aside = document.querySelector('aside')
    main.removeChild(aside)
    main.appendChild(aside)
  }
}

export { formIsValid }
