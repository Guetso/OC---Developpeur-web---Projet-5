const get = function (url) { // On créé une fonction qui permet d'utiliser la méthode GET sur une URL donnée
    return new Promise(function (resolve, reject) { // Cette fonction retournera une promesse qui fera :
        const httpRequest = new XMLHttpRequest() // La fonction va créer une requête Http
        httpRequest.onreadystatechange = function () { // On va suivre l'évolution de la requête
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) { //  Si la requête s'est correctement déroulée (elle a aboutit + renvoie un code 200)
                    resolve(JSON.parse(httpRequest.responseText)) // La promesse est résolue quand la requête a su nous renvoyer le responseText
                } else {
                    reject(httpRequest) // Si une erreur lors de l'accès à l'API a eu lieu, il faut traiter l'erreur
                }
            }
        }
        httpRequest.open("GET", url, true) // Cette requête va utiliser la méthode GET sur l'URL en paramètre, de manière asynchrone
        httpRequest.send() // La fonction envoie la requête au serveur
    })
}

/*
const setCookie = function (cname, cvalue, exdays) { // On créé une fonction pour ajouter des cookies avec 3 paramètre : un nom, une valeur, un délai d'expiration
    let d = new Date() // On créé une variable "d" qui correspond à la date du jour (sous forme d'objet JS)
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)) // On modifie la constante "d" pour lui ajouter un nombre de jour en plus (à définir "exdays")
    const expires = "expires=" + d.toUTCString() // On créé une constante "expires" qui renvoie une string indiquant la date d'expiration du cookie ("expires = date")
    document.cookie = cname + "=" + cvalue + "; " + expires + ';path=/' // La fonction ajoute le cookie au document
}

const saveCart = function inCartItemNum(inCartItemNum, cartArticles) { // On créé une fonction qui va sauvegarder le contenu du panier dans 2 cookies
    setCookie('inCartItemNum', inCartItemNum, 5) // Le premier sera nommé "InCartItemNum", contiendra le nombre de chaques articles en chaine de caractère, pour une durée de vie de 5 jours
    setCookie('cartArticles', JSON.stringify(cartArticles), 5) // Le second sera nommé "carArticles", contiendra les articles en chaine de caractère, pour une durée de vie de 5 jours
}

const getCookie = function (cname) { // On créé une fonction qui va récupérer ces cookies, elle prends en paramètre le nom du cookie à récupérer
    const name = cname + "="
    const ca = document.cookie.split(";")
}


export { setCookie }
export { saveCart }
*/

export { get }