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

///// Ajouter les objets du localStorage dans un tableau "cart"

const cart = []

for (let i = 0; i < localStorage.length; i++) {
    const storageItem = JSON.parse(localStorage.getItem(i))
    cart.push(storageItem)
}

/////

function compare(a, b) {
    if (a._id < b._id)
        return -1;
    if (a._id > b._id)
        return 1;
    return 0;
}

cart.sort(compare)

//

function cleanArray(array) {
    var i, j, len = array.length, out = [], obj = {};
    for (i = 0; i < len; i++) {
      obj[array[i]._id] = 0;
    }
    for (j in obj) {
      out.push(j);
    }
    return out;
  }
  
  const newCart = cleanArray(cart)
  console.log(newCart)

/////
console.log(cart)
// Mise en forme du panier
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
    td3.innerText = cartLine.price
    td4.innerText = cartLine.qte
    td5.innerText = (parseInt(cartLine.price) * parseInt(cartLine.qte)) + " €"

    //// Fonction de calcul du total du panier
    counter = counter + (parseInt(cartLine.price) * parseInt(cartLine.qte))
    const subtt = document.getElementById("subtt")
    subtt.innerText = counter + " €"

}

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
        products.push(cart[i]._id)
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