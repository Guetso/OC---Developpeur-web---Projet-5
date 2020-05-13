import animationMenu from "./onScroll.js"

const myOrder = JSON.parse(sessionStorage.getItem("myOrder"))
console.log(myOrder)

const spanId = document.getElementById("cmdId")
spanId.innerText = myOrder.orderId

const spanTotal = document.getElementById("cmdTotal")
spanTotal.innerText = sessionStorage.getItem("total") +" €"