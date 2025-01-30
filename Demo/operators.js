//----- différnece entre == et stricte égalité ===
// === : compare type + valeur
0 == false; // true
0 === false; // false
undefined == null; // true
undefined === null; // false
42 == "42"; // true
42 === "42"; // false

const age = 42;
const person = {
  name: "Khun",
  age: 42,
};

const colleague = {
  name: "Aurelien",
  age: 0,
};

// différence entre ?? et ||
// ?? : vérifie si null ou undefined
// || : vérifie si c'est falsy
person.age ?? 18; // 42
colleague.age ?? 18; // 0
colleague.age || 18; // 18
person.age || 18; // 42
console.log(person?.age || 44);

const method1 = () => {
  console.log(42);
};

const method2 = () => {
  console.log(43);
};

// &&
/*
    L'expression utilisant un ET logique est évaluée de gauche à droite. Le moteur cherche s'il est possible d'utiliser un court-circuit de la façon suivante :
(une expression équivalente à faux) && expr 
sera court-circuité pour fournir directement le résultat de l'expression équivalente à faux.

Cette notion de court-circuit indique que la partie expr ci-avant n'est pas évaluée, tout effet de bord lié à cette évaluation n'aura pas lieu (par exemple, si expr est un appel de fonction, la fonction n'est pas appelée). Ce fonctionnement a lieu, car la valeur du résultat peut d'office être déterminée par l'évaluation du premier opérande. Par exemple :
*/
(method1 && method2)();
// si method1 existe, alors la seule méthode exécutée est method1
// sinon on appelle par défaut method2
