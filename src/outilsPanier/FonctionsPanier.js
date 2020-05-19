/* global localStorage, location */

// FONCTIONS NECESSAIRE AU PANIER

function cleanArray (array) {
  // Cette fonction prend en paramètre un tableau. Elle permet de créer un tableau qui ne contient que les valeurs uniques de la clé "_id"
  let i = array.length
  let j = array.length
  const len = array.length
  const out = []
  const obj = {}

  for (i = 0; i < len; i++) {
    obj[array[i]._id + '_' + array[i].lense] = 0
  }
  for (j in obj) {
    out.push(j)
  }
  return out
}

function countQte (arr, list) {
  // Cette fonction prend en paramètre un tableau et une liste qu'on va comparer pour determiner la quantité total d'un article dans le tableau et nous retourne cette quantité
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    // Pour chaque élément du tableau
    if (
      arr[i]._id === list.split('_')[0] &&
      arr[i].lense === list.split('_')[1]
    ) {
      // On cherche une correspondance de l'id et de la lentille avec la liste
      counter = counter + parseInt(arr[i].qte) // A chaque correspondance trouvée, on ajout au compteur la quantitée trouvée
    }
  }
  return counter // Cela nous retourne la quantité total d'un article dans le tableau
}

function emptyCart () {
  const emptyBtn = document.getElementById('empty')
  emptyBtn.addEventListener('click', function () {
    try {
      for (let i = 0; i < localStorage.length; i++) {
        // Une boucle for qui regardera chaque élément du localStorage. Il y a ici une subtilité qui fait qu'une des conditions d'itération de la boucle est la taille du tableau, qui sera amené à changer à chaque supression d'un élément.
        while (localStorage.key(i).startsWith('ori_')) {
          // On va donc utiliser une boucle "while" dans la boucle "for" pour être certain que la totalité du tableau sera parcouru. Tant qu'au moins un élément a une clé qui commence par 'ori_'
          localStorage.removeItem(localStorage.key(i)) // Cet élément sera supprimé.
        }
      }
    } catch (error) {
      console.log("il n'y a plus de commande 'ori_' dans le localStorage") // Comme la boucle while va fatalement nous renvoyer une erreur lorsque le localStorage sera vide, on capture l'erreur
    } finally {
      location.reload() // Quoi qu'il arrive la page sera recharger si le bouton "Vider mon panier" est cliqué
    }
  })
}

export { cleanArray, countQte, emptyCart }
