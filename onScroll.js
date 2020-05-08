// Menu qui change d'apparence onScroll

import { btnMenuOpen } from "./anim.js"

(function(){

const scrollY = function () {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}

const rect = btnMenuOpen.getBoundingClientRect()
const constraint = document.querySelector(btnMenuOpen.getAttribute("data-constraint"))
const constraintRect = constraint.getBoundingClientRect()
const constraintBottom = constraintRect.top + scrollY() + constraintRect.height - rect.height

const onScroll = function () {
    if (scrollY() > constraintBottom) {
        btnMenuOpen.classList.add("menu__btn--solid")
    } else if (btnMenuOpen.classList.contains("menu__btn--solid")){
        btnMenuOpen.classList.remove("menu__btn--solid")
    }
}

window.addEventListener("scroll", onScroll)
})()