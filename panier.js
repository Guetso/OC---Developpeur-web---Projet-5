import { get } from "./config.js" // Importation de la requête AJAX
import { environment } from "./config.js"
/////////////////////

// On met en place une fonction qui s'auto exécute et qui vérifie si le session storage contient un objet "newOrder"

(function () {                                                // La fonction s'exécute dès le chargement de la page
    if (sessionStorage.getItem("newOrder") === null) {        // Elle vérifie qu'il existe bien une nouvelle commande stocké dans le sessionStorage
        console.log("Pas de nouvelle commande à ajouter")               // Si ce n'est pas le  cas, il ne se passe rien, affichage d'un commentaire dans la console
    } else {                                                  // Si elle trouve un objet "newOrder" dans le sessionStorage
        const newNb = localStorage.length                     // Elle créer une clé de valeur = à la taille du localStorage
        const addToCart = sessionStorage.getItem("newOrder")  // Elle créer une constante addToCart, qui est = à la valeur de "neworder"
        localStorage.setItem(newNb, addToCart)                // Elle attribue un nouvel objet dans le localStorage
        sessionStorage.removeItem("newOrder")                 // Elle supprime le "newOrder du sessionStorage" ainsi il ne peut y avoir qu'un seul "newOrder" dans le sessionStorage
    }
})()

//////// CREATION DU PANIER 

//Initialisation des classes nécessaires à la création du panier :


class Camera {                                  // Correspond à un modèle de caméra présent dans le catalogue du site
    constructor(Id, Name, Price, Lenses) {
        this.id = Id;
        this.name = Name;
        this.price = Price;
        this.lenses = Lenses
    }
}

class Cartline {                                // Correspond à une ligne du panier
    constructor(Id, Name, Lense, Qte, Price) {
        this.id = Id;
        this.name = Name;
        this.lense = Lense;
        this.qte = Qte;
        this.price = Price;
        this.subtotal = parseInt(this.qte) * parseInt(this.price)
    }
}

///////// Initialisation des variables nécessaires  à la création du panier :

const store = []                                // Correspond au catalogue du magasin

const cart = []                                 // Correspond au panier 

///////// Initialisation des fonctions nécessaires à la  création du panier : 

function cleanArray(array) {                    // Cette fonction prend en paramètre un tableau. Elle permet de créer un tableau qui ne contient que les valeurs uniques de la clé "_id"
    let i = array.length
    let j = array.length
    let len = array.length
    let out = []
    let obj = {}

    for (i = 0; i < len; i++) {
        obj[array[i]._id + "_" + array[i].lense] = 0
    }
    for (j in obj) {
        out.push(j)
    }
    return out
}

function countQte(arr, list) {              //Cette fonction prend en paramètre un tableau et une liste qu'on va comparer pour determiner la quantité total d'un article précis dans le tableau et nous retourne cette quantité
    let counter = 0
    for (let i = 0; i < arr.length; i++) { // Pour chaque élément du tableau
        if (arr[i]._id === (list.split("_")[0]) && arr[i].lense === (list.split("_")[1])) { // On cherche une correspondance de l'id et de la lentille avec la liste 
            counter = counter + parseInt(arr[i].qte) // A chaque correspondance trouvée, on ajout au compteur la quantitée trouvée
        }
    }
    return counter // Cela nous retourne la quantité total d'un article dans le tableau
}

function post(toSend) {
    return new Promise(function (resolve, reject) {
        const httpRequest = new XMLHttpRequest()
        httpRequest.open("POST", environment + "/api/cameras/order")
        httpRequest.setRequestHeader("Content-Type", "application/json")
        httpRequest.send(JSON.stringify(toSend))
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 201) {
                    let response = JSON.parse(this.responseText)
                    console.log(response)
                    resolve(response)
                } else {
                    reject(httpRequest)
                }
            }
        }
    })
}

///// CREATION DU PANIER

get("http://localhost:3000/api/cameras/").then(function (response) { // Avec la requête AJAX on récupère la liste des articles sur le serveur (response).
    return new Promise(function (resolve, reject) {                  // Si la requête aboutie : On créé une fonction qui prend en paramètre la liste des caméras que le serveur nous retourne. Cette fonction contient également une promesse.

        // 1ère étape : Création du magasin (store) un tableau qui contient la liste des caméras en stock

        for (let i = 0; i < response.length; i++) {                 // Pour chaque caméras présentes dans la réponse du serveur (5 caméras)
            for (let y = 0; y < response[i].lenses.length; y++) {   // ET pour chaques lentilles possibles à chaque caméra
                let newCamera = new Camera(                         // On créé une instance de la classe Camera qui aura les caractéristiques suivantes :
                    response[i]._id + "_" + response[i].lenses[y],  // Un Id qui est = à l'id du modèle concaténé avec le nom de chaque lentille 
                    response[i].name,                               // Un nom inchangé par rapport à la réponse du serveur
                    response[i].price,                              // Un prix inchangé par rapport à la réponse du serveur
                    response[i].lenses                              // La lentille de ce modèle
                )
                store.push(newCamera)                               // L'instance ainsi créée est mis dans le tableau "store"
            }
        }
        resolve(store)                                              //Si la fonction se déroule sans problème, la promesse nous renvoi le tableau "store" qui contient ainsi 11 produits différents (5 caméras avec chaque option de lentille possible)

        // 2ème étape : Ajout d'une ligne de panier pour chaque objet présent dans le localStorage 

    }).then(function addCartLine() {                        // Suite à la résolution de la promesse consistant à créer un magasin

        const rawOrder = []                                         // On créé une variable rawOrder, qui contient tous les objet du local storage
        for (let i = 0; i < localStorage.length; i++) {
            const storageItem = JSON.parse(localStorage.getItem(i))
            rawOrder.push(storageItem)                              // Le rawOrder pouvant contenir des lignes de commande contenant le même article (même caméra + même lentille) il va falloir le nettoyer pour additionner les lignes similaires.
        }
        
        const cleanOrder = cleanArray(rawOrder)                     // On fait appel à la fonction "CleanArray" qui va créer une liste des identifiants uniques de rawOrder
        cleanOrder.forEach(function (line) {                        // Pour chacun de ces identifiants uniques : on va le comparer avec notre magasin
            for (let i = 0; i < store.length; i++) {                // On demande pour chaque article présent dans la magasin
                if (store[i].id === line) {                         // Si on trouve une correspondance entre l'id d'un article du magasin et l'id de notre liste de commande
                    let newCartline = new Cartline(                 // Alors on créer une ligne de panier (instance de la classe CartLine)
                        (store[i].id.split("_"))[0],                // Avec un l'id correspondant = On divise l'Id et on ne garde que la 1ère partie avant le "_" on a donc retrouvé l'id original, lisible par le serveur
                        store[i].name,                              // Le nom du produit en question
                        (store[i].id.split("_"))[1],                // Le choix de la lentille = On divise l'Id et on ne garde que la 2nd partie après le "_" on a donc le nom de la lentille choisie 
                        countQte(rawOrder, line),                   // Pour la quantité on fait appel à la fonction countQte qui prend en paramètre la liste de commande brut (= localStorage) et la liste des "ids" commandées elle va additionner toutes les quantités correspondantes à l'id
                        store[i].price,                             //Le prix du produit en question
                    )
                    cart.push(newCartline)                          // On peut alors mettre cette ligne de panier dans le panier
                }
            }
        })

        // 2ème étape : Ajout d'une ligne de panier pour chaque objet présent dans le localStorage

    }).then(function () {                                           // On peut maintenant lancer la mise en forme du panier
        let subCounter = 0
        for (let i = 0; i < cart.length; i++) {                         // Pour chaque élément du panier une ligne html doit être mise en forme

            const tbody = document.getElementById("cart-tablebody")
            const tr = document.createElement("tr")
            tbody.appendChild(tr)
            const td1 = document.createElement("td")
            const td2 = document.createElement("td")
            const td3 = document.createElement("td")
            const td4 = document.createElement("td")
            const td5 = document.createElement("td")
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)

            const cartLine = cart[i]
            td1.innerText = cartLine.name
            td2.innerText = cartLine.lense
            td3.innerText = ((cartLine.price) / 100) + " €"
            td4.innerText = cartLine.qte
            td5.innerText = ((cartLine.subtotal) / 100) + " €"

            //// Fonction de calcul du total du panier
            subCounter = subCounter + (parseInt(cartLine.subtotal / 100))
            const subtt = document.getElementById("subtt")
            subtt.innerText = subCounter + " €"
            sessionStorage.setItem("total",subCounter)
        }
    })
}).catch(function (error) {
    console.error("erreur lors du chargement du panier.", error)
})

////// Fonction de RAZ du panier

const emptyCart = function () {
    const emptyBtn = document.getElementById("empty")
    emptyBtn.addEventListener("click", function () {    // Quand on clique sur le bouton "vider le panier"
        localStorage.clear()                            // Efface le locale storage
        location.reload()                               // Recharge la page
    })
}

emptyCart()

/////////

// Récupération des informations du formulaire pour requête POST au serveur

const submit = document.getElementById("submit")
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const address = document.getElementById("address")
const city = document.getElementById("city")
const email = document.getElementById("email")

submit.addEventListener("click", function (event) { // Au moment du la soumission du formulaire :
    event.preventDefault()
    ///Creation d'une variable contact contenant les informations de contact saisie par l'utilisateur
    const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value
    }

    const products = [] // Création d'une variables "products" qui contient les informations du panier
    for (let i = 0; i < cart.length; i++) {
        products.push(cart[i].id)
    }

    const data = { contact, products } // Création d'une variable "data" qui contient les 2 éléments à transmettre au serveur

    /// Envoie de la requête

    post(data).then(function (response) {
        window.location.href = "confirm.html"
        const myOrder = JSON.stringify(response)      // On transforme cet objet en chaine de caractère
        sessionStorage.setItem("myOrder",myOrder)
        localStorage.clear() 
    }).catch(function (error) {
        console.error("Erreur lors de l'envoi des données: " + error)
    })
})

