/* global XMLHttpRequest */

// MODULE AJAX

const environment = 'http://localhost:3000'

const get = function (url) {
  // On créé une fonction qui permet d'utiliser la méthode GET sur une URL donnée
  return new Promise(function (resolve, reject) { // Cette fonction retournera une promesse
    const httpRequest = new XMLHttpRequest() // La fonction va créer une requête AJAX
    httpRequest.onreadystatechange = function () { // On va suivre l'évolution de la requête
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) { //  Si la requête s'est correctement déroulée (elle a aboutit + renvoie un code 200)
          resolve(JSON.parse(httpRequest.responseText)) // La promesse est résolue quand la requête a su nous renvoyer le responseText du JSON parsé
        } else {
          reject(httpRequest) // Si une erreur lors de l'accès à l'API a eu lieu, il faut traiter l'erreur. On récupère l'objet httpRequest pour traitement ultérieur
        }
      }
    }
    httpRequest.open('GET', url, true) // Cette requête va utiliser la méthode GET sur l'URL en paramètre, de manière asynchrone
    httpRequest.send() // La fonction envoie la requête au serveur
  })
}

const post = function (url, toSend) {
  return new Promise(function (resolve, reject) {
    const httpRequest = new XMLHttpRequest()
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 201) {
          const response = JSON.parse(this.responseText)
          console.log(response)
          resolve(response)
        } else {
          reject(httpRequest)
        }
      }
    }
    httpRequest.open('POST', url, true)
    httpRequest.setRequestHeader('Content-Type', 'application/json')
    httpRequest.send(JSON.stringify(toSend))
  })
}

export { environment }
export { get }
export { post }
