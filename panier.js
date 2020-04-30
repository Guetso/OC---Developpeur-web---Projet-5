(function () {
    if (sessionStorage.getItem("newOrder") === null) {
        console.log("Pas de nouvelle commande")
    } else {
        const newOrder = sessionStorage.getItem("newOrder")

        if (localStorage.getItem(0) === null) {
            const newNb = localStorage.setItem(0, (newOrder))
        } 
        else {
            const newNb = localStorage.length
            localStorage.setItem(newNb, (newOrder))
        }
        sessionStorage.removeItem("newOrder")
    }
})()

/////

const cart = []

for (let i = 0; i < localStorage.length; i++) {
    cart.push(JSON.parse(localStorage.getItem(i)))
}

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
    console.log(cartLine)
    td1.innerText = cartLine.name
    td2.innerText = cartLine.lense
    td3.innerText = cartLine.price + " €"
    td4.innerText = cartLine.qte
    td5.innerText = cartLine.total + " €"

    
    counter = counter + cartLine.total
    const subtt = document.getElementById("subtt")
    subtt.innerText = counter + " €"

}




//////

const emptyCart = function () {
    const emptyBtn = document.getElementById("empty")
    emptyBtn.addEventListener("click", function () {
        localStorage.clear()
        location.reload()
    })
}

//////
emptyCart()
//////
console.log(cart)
