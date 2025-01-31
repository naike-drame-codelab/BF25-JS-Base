const t1 = ["Khun", "Mike"];
const t2 = ["Thierry", "Aurelien"];
const t3 = [...t1, ...t2]; // ["Khun", "Mike","Thierry", "Aurelien"]

t3.forEach((n, index) => {
  console.log(index, n);
});

// parcourir les elements d'un tableau
for (let n of t3) {
  console.log(n); // Khun // Mike // Thierry // Aurelien
}

// parcourrir les clés/indices d'un tableau
for (let i in t3) {
  console.log(i); // 0 // 1 // 2 // 3 // 4
}

// parcourir un objet
const person = {
  id: 42,
  nom: "Khun",
  age: 42,
  job: "Dev",
};
// pas possible avec un for..of car objet n'est pas itérable
for (let property in person) {
  console.log(property); // id // nom // age // job
  console.log(person[property]); // 42 // "Khun" // 42 // "Dev"
}

// Map : objet itérable permettant de stocker des elements sous la forme de "clé/valeur"
const students = new Map();
students.set("John", 12);
students.set("Paul", 15);
students.set("Georges", 9);
students.set("Ringo", 11);

for (let [key, value] of students) {
  console.log(key, value); // John 12 // Paul 15 // Georges 9 //  Ringo 9
}

const passed = [...students].filter(([key, value]) => value >= 12);
console.log(passed); // [ [ 'John', 12 ], [ 'Paul', 15 ] ]

const avg = [...students].reduce(
  (prev, [key, value]) => prev + value / students.size, // students.size = taille de la map
  0
);
console.log(avg); // 11.75

// Set : n'autorise pas les doublons
const tableau = [];
tableau.push(42);
tableau.push(1);
tableau.push(42);
console.log(tableau); // [42, 1, 42]

const set = new Set();
set.add(42);
set.add(1);
set.add(42);
console.log(set); // {42, 1}

// éliminer les doublons d'un tableau
// conversion tableau > Set, puis conversion Set > tableau via [...]
const cleanedTab = [...new Set(tableau)];
console.log(cleanedTab); // [42, 1]

// form : nom de la recherche ou description contient la recherche + min max prix défini dans recherche
// Filtrer/submit btn
// sous la table, Moyenne des prix des produits affichés
// en cliquant sur le nom de la colonne, tri par nom, par prix, etc
// pagination
