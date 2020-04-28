import{get} from "./config.js";

const getItems = function () { // On créer une fonction qui va récupérer les différents items de caméra dans l'API 
    get("http://localhost:3000/api/cameras").then(function (response) { // Elle fera appel à la fonction get avec l'URL appropriée, la fonction get contenant une promesse, on lui indique quoi faire en cas de succès de la requête
        const items = JSON.parse(response)//Si la requête aboutie, il faudra créer une constante "items", qui sera la réponse du serveur, parser en Json et regroupant ainsi les différents modèle de caméra dans un array
        const ul = document.getElementById("items") // On accède à l'élément "ul" de l'index.html
        for (let i = 0; i < items.length; i++) { // Pour chaque classe du tableau "items"
            let item = items[i] // On créer une variable "item"
            const li = ul.appendChild(document.createElement("li")) // On ajoute un élément enfant "li" dans "ul"
            li.classList.add("item") // On lui donne une classe

            const divImg = li.appendChild(document.createElement("div")) // On créer l'élément contenant l'image de l'item sous forme de div
            divImg.classList.add("item__img") // On lui donne une classe
            const img = divImg.appendChild(document.createElement("img")) // On créer l'élément <img>
            img.setAttribute("src", item.imageUrl) // On lui donne la source de l'image
            img.setAttribute("alt", item.name) // On lui donne l'attribut a renseigner pour l'image, ici le nom de l'appareil

            const h3 = li.appendChild(document.createElement("h3")) // On créer l'élément h3 qui contiendra le nom de l'appareil
            h3.classList.add("item__title")
            h3.innerText=item.name

            const btn = li.appendChild(document.createElement("button")) // On créer un bouton pour accéder au détail de l'appareil et le commander
            btn.classList.add("item__btn")
            btn.innerText="Voir ce modèle"

        }
    }).catch(function (error) {// Si la requête échoue, on transmet un message d'erreur et on indique qu'un problème à eu lieu lors de la requête
        console.error("Erreur lors de la requête", error) // Le message est transmis à la console pour accès aux détails
        const main = document.getElementById("main") // On accède à l'élément section de classe "main"
        const alert = main.appendChild(document.createElement("div")) // On y créer une "div"
        alert.classList.add("error") // On ajoute la classe "error" à la div pour traitement CSS
        alert.innerText = "Une erreur s'est produite lors du chargement des articles" // On y affiche le message d'erreur
    })
}


getItems()

