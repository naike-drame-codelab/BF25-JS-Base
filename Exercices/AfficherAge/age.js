/*
1.
    - Créer une page avec un input qui permettra d'enregistrer sa date de naissance et un bouton
    - Afficher votre âge lorsque l'on cliquera sur le bouton
*/

// DOM Elements
// pour chaque element du DOM qui possède un id, le système crée une variable globale
// uniquement pour les id,on n'a pas besoin d'appeler getElementById()
//mais c'est une mauvaise pratique --> à éviter
// console.log(calculateButton); // button#calculateButton

const dateInput = document.getElementById("dateInput");
const calculateButton = document.getElementById("calculateButton");
const resultDiv = document.getElementById("result");

const calculateAge = () => {
  const bday = dateInput.valueAsDate;
  const today = new Date();
  const age = (today - bday) / (1000 * 60 * 60 * 24 * 365.25);
  resultDiv.textContent = `Vous avez ${Math.round(age)} ans.`;
};

calculateButton.addEventListener("click", calculateAge);
