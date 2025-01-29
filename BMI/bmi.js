// DOM Elements
// pour récupérer les valeurs
const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
// pour récupérer un événement click
const calculateButton = document.getElementById("calculateButton");
// pour afficher le résultat
const resultDiv = document.getElementById("result");

const fn = () => {
  // poids / (tailleEnMetre * tailleEnMetre)
  const w = weightInput.valueAsNumber;
  const h = heightInput.valueAsNumber / 100;
  const bmi = w / h ** 2;
  console.log(bmi);

  resultDiv.textContent = `Votre BMI est de ${bmi.toFixed(2)}.`;
};

// fonction qui sera exécutée au click
calculateButton.addEventListener("click", fn);
