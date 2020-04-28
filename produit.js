import { get } from "./config.js"

const createItem = function () { // On créé une fonction qui va récupérer les informations du produit en question
    const hash = window.location.hash // On créé une variable "hash" qui correspond au hash de l'URL qui a été chargée par l'utilisateur
    const id = hash.replace("#", "") // On reformate le "hash" pour lui enlever le symbole "#"
    const url = "http://localhost:3000/api/cameras/" + id // L'URL chargée sera celle correspondant à l'id du produit
    get(url).then(function (response) { // Elle fera appel à la fonction get avec l'URL appropriée, la fonction get contenant une promesse, on lui indique quoi faire en cas de succès de la requête
        const item = response//Si la requête Xrh aboutie, il faudra créer une constante "item", qui sera la réponse de la promesse regroupant ainsi les différents modèle de caméra dans un array
        const sheet = document.querySelector(".sheet") // On accède à l'élément "article" de produit.html
// Création du titre contenant le nom de l'article
        const h2 = sheet.appendChild(document.createElement("h2"))
        h2.classList.add("sheet__title")
        h2.innerText = item.name
// Création des éléments nécessaires pour afficher la photo de l'article
        const divImg = sheet.appendChild(document.createElement("div")) // On créer l'élément contenant l'image de l'item sous forme de div
        divImg.classList.add("sheet__img") // On lui donne une classe
        const img = divImg.appendChild(document.createElement("img")) // On créer l'élément <img>
        img.setAttribute("src", item.imageUrl) // On lui donne la source de l'image
        img.setAttribute("alt", item.name) // On lui donne l'attribut a renseigner pour l'image, ici le nom de l'appareil
// Création du paragraphe contenant la description de l'article
        const specs = sheet.appendChild(document.createElement("p"))
        specs.classList.add("sheet__specs")
        specs.innerText = item.description
// Création du formulaire de choix de la lentille 
    // Création de la légende de l'interface "select"
        const label = sheet.appendChild(document.createElement("label"))
        label.setAttribute("for", "lenses-select")
        label.classList.add("sheet__label")
        label.innerText = "Choix de la lentille"
    // Création de la séléction de la lentille 
        const select = sheet.appendChild(document.createElement("select"))
        select.setAttribute("name", "lenses")
        select.setAttribute("id", "lenses-select")
        select.classList.add("sheet__form")
        const choice = select.appendChild(document.createElement("option"))
        choice.setAttribute("value", "")
        choice.innerText ="--Merci de selectionner la lentille désirée--"
        for (let i = 0; i < item.lenses.length; i++) {
            const lense = item.lenses[i]
            const option = select.appendChild(document.createElement("option"))
            option.setAttribute("value", lense)
            option.innerText = lense
        }
    }).catch(function (error) {// Si la requête Xhr échoue, on transmet un message d'erreur et on indique qu'un problème à eu lieu lors de la requête
            console.error("Erreur lors de la requête", error) // Le message est transmis à la console pour accès aux détails
            const sheet = document.querySelector(".sheet") // On accède à l'élément section de classe "main"
            const alert = sheet.appendChild(document.createElement("div")) // On y créer une "div"
            alert.classList.add("error") // On ajoute la classe "error" à la div pour traitement CSS
            alert.innerText = "Une erreur s'est produite lors du chargement de l'article" // On y affiche le message d'erreur
        })
}

createItem()