//A PASSER DANS UN JS A PART ET A IMPORTER ICI

const get = function (url) { // Création d'une fonction "get" qui appliquera la méthode GET sur l'URL passée en paramètre
    return new Promise(function (resolve, reject) { // Cette fonction retournera une promesse qui fera :
        const httpRequest = new XMLHttpRequest() // La fonction va créer une requête Http
        httpRequest.onreadystatechange = function () { // On va suivre l'évolution de la requête
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) { //  Si la requête s'est correctement déroulée (elle a aboutit + renvoie un code 200)
                    resolve(httpRequest.responseText)
                } else {
                    reject(httpRequest) // Sinon il faut traiter l'erreur
                }
            }
        }
        httpRequest.open("GET", url, true) // Cette requête va utiliser la méthode GET sur l'URL en paramètre, de manière asynchrone
        httpRequest.send() // La fonction envoie la requête au serveur
    })
}

//

const getItems = function () { // On créer une fonction qui va récupérer les différents items de caméra dans l'API 
    get("http://localhost:3000/api/cameras").then(function (response) { // Elle fera appel à la fonction get avec l'URL appropriée, la fonction get contenant une promesse, on lui indique quoi faire en cas de succès de la requête
        const items = JSON.parse(response)//Si la requête aboutie, il faudra créer une constante "items", qui sera la réponse du serveur, parser en Json et regroupant ainsi les différents modèle de caméra dans un array
        const ul = document.getElementById("items")
        for (let i = 0; i < items.length; i++) {
            let item = items[i]
            const li = ul.appendChild(document.createElement("li"))
            li.classList.add("item")

            const divImg = li.appendChild(document.createElement("div"))
            divImg.classList.add("item__img")
            const img = divImg.appendChild(document.createElement("img"))
            img.setAttribute("src", item.imageUrl)
        

            const h3 = li.appendChild(document.createElement("h3"))
            h3.classList.add("item__title")
            h3.innerText=item.name

            const btn = li.appendChild(document.createElement("button"))
            btn.classList.add("item__btn")
            btn.innerText="Voir ce modèle"

        }
    }).catch(function (error) {// Si la requête échoue, on transmet un message d'erreur et on indique qu'un problème à eu lieu lors de la requête
        console.error("Erreur lors de la requête", error) // A MODIFIER
    })
}


getItems()

