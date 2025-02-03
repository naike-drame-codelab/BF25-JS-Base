"use strict";
//------ FONCTIONS -----//
// Déclarer une fonction de plusieurs manières

// avec function, on peut appeler celle-ci avant sa déclaration
a();

function a() {
  console.log(42);
}

// b();
// en utilisant const, on est obligés d'initialiser la fonction AVANT de l'appeler
// fonction anonyme
const b = function () {
  console.log(43);
};
b();

// même si défini après, on casse automatiquement des fonctions déclarées avant
// --> garder les fonctions dans des constantes pour éviter de les casser
function a() {
  console.log("J'ai cassé la première fonction.");
}

// rien ne nous empêche en js de casser des méthodes de base :
// console.log() = 'test';
// console.log(42); // 'test'

// fonction lambda/fléchée
// !!! ce n'est pas une fonction anonyme
const c = () => {};

// différence /e/ fonction anonyme et fonction lambda avec this
// this dans fonction anonyme : élément sur lequel j'ai cliqué
DOM.buttons.search.addEventListener("click", function () {
  console.log(this);
});
// this dans fonction lambda : scope parent/global, window
DOM.buttons.search.addEventListener("click", () => {
  console.log(this);
});
// -- si je veux récupéré l'élément cliqué dans une fonction lambda :
DOM.buttons.search.addEventListener("click", ({ currentTarget }) => {
  console.log(currentTarget);
});

// ------------------------
// spread operator pour quand on ne sait pas le nb
// Les valeurs reçues seront stockées sous la forme d’une collection (Array)
const sum = (...numbers) => {
  return numbers.reduce((p, c) => p + c, 0);
};

// tableau va être transformé en une liste de paramètres envoyée à la fonction sum()
const tableau = [42, 17, 19, 1, 2, 3, 1.5];
console.log(sum(...tableau));

// -------------------------
// callback function
// fonction passée en paramètre d'une autre fonction
// Cette fonction “interne” sera ensuite invoquée par la fonction pour réaliser une action.
// exemples :
// - reduce(),
// - UTILS.avg() dans exo filtre,
// - addEventListener('typeEvent', callbackFunc)
// - filter() slide 201
