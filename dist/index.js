!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var r=document.querySelector(".menu__btn"),o=document.querySelector(".close"),i=document.getElementById("navpanel");r.addEventListener("click",(function(){i.classList.add("menu--active")})),o.addEventListener("click",(function(){i.classList.remove("menu--active")}));t.a=function(){var e=function(){var e=void 0!==window.pageXOffset,t="CSS1Compat"===(document.compatMode||"");return e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop},t=r.getBoundingClientRect(),n=document.querySelector(r.getAttribute("data-constraint")).getBoundingClientRect(),o=n.top+e()+n.height-t.height;window.addEventListener("scroll",(function(){e()>o?r.classList.add("menu__btn--solid"):r.classList.contains("menu__btn--solid")&&r.classList.remove("menu__btn--solid")}))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="http://localhost:3000",o=function(e){return new Promise((function(t,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&(200===r.status?t(JSON.parse(r.responseText)):n(r))},r.open("GET",e,!0),r.send()}))}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0);Object(r.b)(r.a+"/api/cameras/").then((function(e){for(var t=e,n=document.getElementById("items"),r=0;r<t.length;r++){var o=t[r],i=n.appendChild(document.createElement("li"));i.classList.add("item");var a=i.appendChild(document.createElement("h3"));a.classList.add("item__title"),a.innerText=o.name;var c=i.appendChild(document.createElement("div"));c.classList.add("item__img");var u=c.appendChild(document.createElement("img"));u.setAttribute("src",o.imageUrl),u.setAttribute("alt",o.name);var d=i.appendChild(document.createElement("a"));d.setAttribute("href","produit.html#"+o._id),d.classList.add("item__btn"),d.innerText="Voir ce modèle"}})).catch((function(e){console.error("Erreur lors de la requête",e);var t=document.getElementById("main").appendChild(document.createElement("div"));t.classList.add("error","error__server"),t.innerText="Une erreur s'est produite lors du chargement des articles"})),Object(o.a)()}]);
//# sourceMappingURL=index.js.map