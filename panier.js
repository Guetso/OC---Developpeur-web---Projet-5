import { get } from "./config.js"
//// Récupérer les infos du session storage qui contiennent l'article à ajouter au panier

(function () { /// La fonction s'exécute dès le chargement de la page
    if (sessionStorage.getItem("newOrder") === null) { // Elle vérifie qu'il existe bien une nouvelle commande stocké dans le sessionStorage
        console.log("Pas de nouvelle commande") // Si ce n'est pas le  cas, il ne se passe rien, affichage d'un commentaire dans la console
    } else { // Si elle trouve un objet "newOrder" dans le sessionStorage
        const newNb = localStorage.length // Elle créer une clé de valeur = à la taille du localStorage
        const addToCart = sessionStorage.getItem("newOrder") // Elle créer une constance addToCart, qui est = à la valeur de "neworder"
        localStorage.setItem(newNb, addToCart) // Elle attribue un nouvel objet dans le localStorage
        sessionStorage.removeItem("newOrder") // Elle supprime le "newOrder du sessionStorage"
    }
})()

////////

class Camera {
    constructor(Id, Name, Price, Lenses) {
        this.id = Id;
        this.name = Name;
        this.price = Price;
        this.lenses = Lenses
    }
}

class Cartline {
    constructor(Id,Name, Lense, Qte, Price) {
        this.id = Id ;
        this.name = Name;
        this.lense = Lense;
        this.qte = Qte;
        this.price = Price;
        this.subtotal = parseInt(this.qte) * parseInt(this.price)
    }
}


const store = []

const cart = []


function cleanArray(array) {
    var i, j, len = array.length, out = [], obj = {}
    for (i = 0; i < len; i++) {
        obj[array[i]._id + "_" + array[i].lense] = 0
    }
    for (j in obj) {
        out.push(j)
    }
    return out
}

function countQte(arr, list) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]._id === (list.split("_")[0]) && arr[i].lense === (list.split("_")[1])) {
            counter = counter + parseInt(arr[i].qte)
        }
    }
    return counter
}//(response[i].id.split("_"))[1]

/////

get("http://localhost:3000/api/cameras/").then(function (response) {

    return new Promise(function (resolve, reject) {
        for (let i = 0; i < response.length; i++) {
            for (let y = 0; y < response[i].lenses.length; y++) {
                let newCamera = new Camera(
                    response[i]._id + "_" + response[i].lenses[y],
                    response[i].name,
                    response[i].price,
                    response[i].lenses
                )
                store.push(newCamera)
            }
        }

        resolve(store)
    }).then(function addCartLine(response) {

        const rawOrder = []
        for (let i = 0; i < localStorage.length; i++) {
            const storageItem = JSON.parse(localStorage.getItem(i))
            rawOrder.push(storageItem)
        }


        const cleanOrder = cleanArray(rawOrder)

        cleanOrder.forEach(function (element) {
            for (let i = 0; i < response.length; i++) {
                if (response[i].id === element) {
                    let newCartline = new Cartline(
                        response[i].id,
                        response[i].name,
                        (response[i].id.split("_"))[1],
                        countQte(rawOrder, element),
                        response[i].price,
                    )
                    cart.push(newCartline)
                    return newCartline
                }
            }
        })
    }).then(function () {
        let counter = 0
        for (let i = 0; i < cart.length; i++) {

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
            td3.innerText = ((cartLine.price)/100) + " €"
            td4.innerText = cartLine.qte
            td5.innerText = ((cartLine.subtotal)/100)+" €"

            //// Fonction de calcul du total du panier
            counter = counter + (parseInt(cartLine.subtotal/100))
            const subtt = document.getElementById("subtt")
            subtt.innerText = counter + " €"

        }
    })
}).catch(function (error) {
    console.error("erreur lors du chargement du panier.", error)
})








/*
function addCartLine() {


    const rawOrder = []
    for (let i = 0; i < localStorage.length; i++) {
        const storageItem = JSON.parse(localStorage.getItem(i))
        rawOrder.push(storageItem)
    }
    const orderId = cleanArray(rawOrder)
    for (let element in orderId) {
        for (let i = 0; i < store.length; i++) {
            if (store[i]._id === orderId[element]) {
                let newCartline = new Cartline(
                    store[i].name,
                    storageItem[i].lense,
                    storageItem[i].qte,
                    store[i].price
                )
                return newCartline
            }
        }
    }

}
*/



/////

// Mise en forme du panier
console.log(cart)


////// Fonction de RAZ du panier

const emptyCart = function () {
    const emptyBtn = document.getElementById("empty")
    emptyBtn.addEventListener("click", function () {
        localStorage.clear()
        location.reload()
    })
}

emptyCart()

//////

// Formulaire


const form = document.getElementById("form")
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const address = document.getElementById("address")
const city = document.getElementById("city")
const email = document.getElementById("email")

form.addEventListener("submit", function (event) { // Au moment du la soumission du formulaire :
    event.preventDefault()
    ///Creation d'une instance de la classe "contact" contenant les informations de contact saisie par l'utilisateur
    const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value
    }

    const products = []
    for (let i = 0; i < cart.length; i++) {
        products.push(cart[i].id)
    }

    const data = { contact, products }

    /// Envoie de la requête

    let request = new XMLHttpRequest()
    request.open("POST", "http://localhost:3000/api/cameras/order")
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(data))
    console.log(JSON.stringify(data))
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
            let response = JSON.parse(this.responseText)
            console.log(response)
        }
    };
});

