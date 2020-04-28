const get = function (url) { // Création d'une fonction "get" qui appliquera la méthode GET sur l'URL passée en paramètre
    return new Promise(function (resolve, reject) { // Cette fonction retournera une promesse qui fera :
        const httpRequest = new XMLHttpRequest() // La fonction va créer une requête Http
        httpRequest.onreadystatechange = function () { // On va suivre l'évolution de la requête
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) { //  Si la requête s'est correctement déroulée (elle a aboutit + renvoie un code 200)
                    resolve(httpRequest.responseText) // La promesse est résolue quand la requête a su nous renvoyer le responseText
                } else {
                    reject(httpRequest) // Si une erreur lors de l'accès à l'API a eu lieu, il faut traiter l'erreur
                }
            }
        }
        httpRequest.open("GET", url, true) // Cette requête va utiliser la méthode GET sur l'URL en paramètre, de manière asynchrone
        httpRequest.send() // La fonction envoie la requête au serveur
    })
}

export {get}