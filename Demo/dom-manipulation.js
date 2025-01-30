// créer un élément
const element = document.createElement("img");
element.src =
  "https://chats-british-shorthair.com/wp-content/uploads/2024/06/beabritishcat-club-1024x683.jpeg";

console.log(element);

// ajouter un element dans le body à la fin
document.body.append(element);

// retirer un element
element.remove();

// ajouter un element à un autre
const div1 = document.querySelector(".div1");
div1.append(element);

// element = type référence
// c'est le même objet, il ne peut pas être à 2 endroits différents
// comme on n'a qu'une seule instance de cet objet, il va se déplacer dans la div2
const div2 = document.querySelector(".div2");
div2.append(element);

// append vs appendChild
// ajoute autant d'élément que l'on veut vs ajoute un seul élément à la fois
// remove vs removeChild
// enlève l'élément ciblé vs enlève l'élément ciblé de la balise parent
