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
const t3 = [...t1, ...t2];

// .some() = trouve si l'array contient une valeur sur base de la méthode de test
// .every() = trouve si l'array contient toutes les valeurs sur base de la méthode de test
// .find() / .findLast() = trouve 1er elem répondant à la condition
//.filter() = trouve tous les elems répondant à la condition

//----- js => c# -----
// map => Select
// find => Find
// filter => Where
// some => Any
// every => All
// toSorted => OrderBy // OrderByDescending
// reduce => GroupBy // Sum // Average
