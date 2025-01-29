/*------ DOM - Document Object Model -------*/

// navigateur > fenêtre > document > body
console.log(navigator);
navigator.geolocation.getCurrentPosition(() => {});
console.log(window);
console.log(document);
console.log(document.body);

// récupérer le 1er paragraphe du document
const p = document.querySelector("p");
console.log(p); // element <p class="test">Hello</p>
// récupérer l'ensemble des classes du paragraphe
const classAttribute = p.classList;
console.log(classAttribute); // DOMTokenList ['test', value: 'test']
// récupérer le texte du paragraphe
const text = p.textContent;
console.log(text); // Hello     World !!!
// récupérer tous les noeuds
const allNodes = p.childNodes;
console.log(allNodes); // NodeList(3) [text, span, text]

const dp = document.getElementById("dp");
console.log(dp.valueAsDate); // date réelle : Wed Jan 29 2025 01:00:00 GMT+0100 (heure normale d’Europe centrale) {}
console.log(dp.value); // date comme chaîne de caractère : '2025-01-29'

// DOM Manipulation
// récupérer le bouton grâce à son ID
const btn = document.getElementById("btn-demo");
btn.addEventListener("click", () => {
  alert("Coucou");
});
