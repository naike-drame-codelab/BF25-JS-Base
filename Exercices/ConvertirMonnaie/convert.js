/*
2.
    - Créer une page avec un input qui contiendra un montant et bouton
    pour calculer la conversion de ce montant en Yen, Dollar et Rouble
*/

const euroInput = document.getElementById("euroInput");
const calculateButton = document.getElementById("calculateButton");
const resultInYen = document.getElementById("resultInYen");
const resultInDollar = document.getElementById("resultInDollar");
const resultInRouble = document.getElementById("resultInRouble");

// no API, date taux : 29-01-2025
calculateButton.addEventListener("click", () => {
  const euro = euroInput.valueAsNumber;
  const yen = (euro * 161.64).toFixed(2);
  const dollar = (euro * 1.04).toFixed(2);
  const rouble = (euro * 102.5).toFixed(2);

  // textContent : modifie contenu text d'un element
  // append : ajoute contenu text à l'element
  resultInYen.append(`Montant en yen : ${yen}  ¥`);
  resultInYen.append(document.createElement("br"));
  resultInDollar.append(`Moutant en dollar: ${dollar} $`);
  resultInDollar.append(document.createElement("br"));
  resultInRouble.append(`Montant en rouble : ${rouble} ₽`);
});
