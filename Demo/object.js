"use strict";

// en JS, on peut déclarer un obj comme constante mais on peut modifier ses propriétés
const book = {
  title: "Harry Potter",
  pages: 1025,
};

book.author = {
  firstName: "J.K.",
  lastName: "Rowling",
};
/*
    book = {
    title: "Harry Potter",
    pages: 1025,
    author : 
        {
            firstName: "J.K.",
            lastName: "Rowling",
        }
    };
*/

// !!! mais on ne peut pas modifier son affectation / la variable qui contient l'obj
// book = 45; // faux

// on peut sceller un objet pour empêcher l'ajout de nouvelles propriétés
// mais on peut toujours modifier la valeur des propriétés
Object.seal(book);
book.title = "Harry Potter à l'école des sorciers";
/*
    book = {
    title: "Harry Potter à l'école des sorciers",
    pages: 1025,
    author : 
        {
            firstName: "J.K.",
            lastName: "Rowling",
        }
    };
*/

// on peut complètement empêcher la modification d'un obj, le rendant totalement const
// pour afficher l'erreur : "use strict"
Object.freeze(book);
// book.pages = 500; // provoquera une erreur

// ----- récupérer les propriétés via un tableau (objet itérable) -----

// récupérer les propriétés de l'objet
console.log(Object.keys(book));
// [ 'title', 'pages', 'author' ]

// récupérer les valeurs de l'objet
console.log(Object.values(book));
// [
//   "Harry Potter à l'école des sorciers",
//   1025,
//   { firstName: "J.K.", lastName: "Rowling" },
// ];

// récupérer les clés et valeurs de l'objet
console.log(Object.entries(book));
// [
//   ["title", "Harry Potter à l'école des sorciers"],
//   ["pages", 1025],
//   ["author", { firstName: "J.K.", lastName: "Rowling" }],
// ];

/* -----L’opérateur « Optional chaining » -----
    Lorsqu’on lit la valeur d’une propriété d’un objet « null » ou « undefined », une erreur est
    levée par le JavaScript.

    Pour éviter cette erreur, il est possible d’utiliser l’opérateur « Optional chaining - ?. » .
    L’opérateur fonctionne comme la notation « . », sauf qu’il ne déclenche pas d’erreur sur
    les objets « null » ou « undefined », à la place, la valeur « undefined » est renvoyé.
*/
