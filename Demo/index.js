// afficher les erreurs silencieuses
"use strict";

// afficher dans la console
console.log(42);
const table = [1, "Khun", true];
console.table(table);

// afficher une popup
// window.alert("Hello world!");

// // encoder dans une popup
// const response = window.prompt("Comment allez-vous ?");
// console.log(response);

// // demander une confirmation
// const ok = window.confirm("Avez-vous bien 18 ans ?");
// console.log(ok);

//console.log(document.body);

// let obj = {};
// Object.freeze(obj); // on ne peut plus modifier l'objet par la suite
// obj.id = 42; // avec "use strict", on a une erreur dans la console signalant que l'on essaye de modifier obj

/*-------------------*/

//----- typage -----

// documenter une variable pour son typage
/** @var {number} */

// déclarer une variable non constante
let maVariable = 42;
// maVariable = "ggg"; // après documentation, la variable affiche le type attendu au hover

// déclarer une variable constante
const PI = 3.14;

// à éviter pour déclarer une variable
// wtf = 'coucou';

// travailler avec des nombres très grands
// !!! on ne peut pas faire d'opérations entre un number et un BigInt --> que des BigInt entre eux
// BigInt("111111111111111000042"); // 111111111111111000042n

// déclarer une chaîne de caractères
let s1 = "chaine1 " + PI;
let s2 = "chaine2 " + PI;
// string interpolation
let s3 = `chaine3 ${PI}`;
console.log(s1);
console.log(s2);
console.log(s3);

// undefined
let v1;
console.log(v1);

// object
let v2 = null;
console.log(v2); // null
console.log(v1 === v2); // false
let v3 = {};
console.log(typeof v3);
let v5 = []; // array

// fonction
let v4 = () => {};
console.log(typeof v4);

// récupérer type d'un objet
let v6 = new Date();
console.log(typeof v6); // object
console.log(v6.constructor.name); // Date

// classe/prototype
class Chat {
  constructor(name) {
    this.name = name;
  }
}
Chat.prototype.Miauler = function () {
  console.log("MIAOU!!!");
};

let v7 = new Chat("Miaouss");
console.log(v7.name); // Miaouss
console.log(typeof v7); // object
console.log(v7.constructor.name); // Chat
v7.Miauler(); // MIAOU!!!

// NaN - Not a Number
console.log(42 / "Khun"); // NaN
console.log(typeof (42 / "Khun")); // number

// comparer des chaînes de caractères
"a" < "b"; // true
"a" < "B"; // false
"a".localeCompare("b"); // -1 ici (valeurs possibles : -1, 0, 1)

"12".padStart(3, "0"); // 012

"ici".replace("i", "p"); // pci
"ici".replace(/i/g, "p"); // pcp
"ici".replaceAll("i", "p"); // pcp

"11,12,13,14,15".split(","); // ['11','12','13','14','15']
