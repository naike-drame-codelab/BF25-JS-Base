// .sort()

const tab = [3, 2, 1, 6, 7, 8, -1, 2, 7, 42, -3];

tab.sort((a, b) => a - b);
// tab.sort((a, b) => (a < b ? -1 : 1));

console.log(tab); // [  -3, -1, 1, 2, 2,  3,  6, 7, 7, 8, 42]

const tab2 = [...tab];
tab2.sort((a, b) => b - a);
console.log(tab2); // [42, 8, 7, 7,  6, 3, 2, 2, 1, -1, -3]

const mots = ["maison", "àrbre", "Paquebot", "biberon"];
// mots.sort((a, b) => (a < b ? -1 : 1)); // tri sur ASCII : [ 'Paquebot', 'biberon', 'maison', 'àrbre' ]
// console.log(mots);
const mots2 = [...mots];
mots.sort((a, b) => a.localeCompare(b));
console.log(mots); // [ 'àrbre', 'biberon', 'maison', 'Paquebot' ]
mots2.sort((a, b) => b.localeCompare(a));
console.log(mots2); // [ 'Paquebot', 'maison', 'biberon', 'àrbre' ]

const t1 = ["Khun", "Mike"];
const t2 = ["Thierry", "Aurelien"];
const t3 = [...t1, ...t2]; // ["Khun", "Mike","Thierry", "Aurelien"]

// .some() = trouve si l'array contient une valeur sur base de la méthode de test
// .every() = trouve si l'array contient toutes les valeurs sur base de la méthode de test
// .find() / .findLast() = trouve 1er elem répondant à la condition
//.filter() = trouve tous les elems répondant à la condition

//----- js => c# -----

// transformer chaque element d'un tableau
// Map => Select
t3.map((n) => n.toUpperCase()); // ['KHUN', 'MIKE', 'THIERRY', 'AURELIEN']

// trouver le 1er element d'un tableau qui répond à une condition
// find => Find
t3.find((n) => n.startsWith("M")); // Mike

// chercher tous les elements qui répondent à une condition
// filter => Where
t3.filter((n) => n.length === 4); // ['Khun', 'Mike']

// vérifie si au moins un element du tableau répond à une condition
// some => Any
t3.some((n) => n.length === 4); // true

// vérifie si tous les elements du tableau répondent à une condition
// every => All
t3.every((n) => n.length === 4); // false

// trier un tableau
// toSorted => OrderBy // OrderByDescending
t3.toSorted((a, b) => a.localeCompare(b)); // ["Aurelien", "Khun", "Mike","Thierry"]

// reduce => GroupBy // Sum // Average
// ------------------------------------
// applique une fonction qui est un « accumulateur »
// et qui traite chaque valeur d'une liste (de la gauche vers la droite)
// afin de la réduire à une seule valeur
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// prev : callback function
// n : valeur initiale ou accumulateur
const sum = t3.reduce((prev, n) => prev + n.length, 0); // 23, le nb total de lettres
// iteration 1 : 0 + 4 = 4 (Khun)
// iteration 2 : 4 + 4 = 8 (Khun  +  Mike)
// iteration 3 : 8 + 7 = 15 (Khun  +  Mike + Thierry)
// iteration 4 : 15 + 8 = 23 (Khun  +  Mike + Thierry + Aurelien)
const average = t3.reduce((prev, n) => prev + n.length / t3.length, 0);
const namesString = t3.reduce((prev, current) => prev + current + ",", ""); // '' + 'Khun'+ ',' + 'Mike' + ',' + 'Thierry' + ',' + 'Aurelien' + ','
