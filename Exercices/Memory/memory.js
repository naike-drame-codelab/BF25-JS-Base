const selectDifficulty = document.getElementById("select-form");
const gameGrid = document.querySelector(".game-grid");
const difficulty = document.querySelector("#difficulty");
const submitBtn = document.getElementById("submit-btn");

const easy = 12;
const medium = 16;
const hard = 22;

let fruitsList;

selectDifficulty.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(difficulty.value);

  switch (difficulty.value) {
    case "easy":
      createGrid(easy);
      break;
    case "medium":
      createGrid(medium);
      break;
    case "hard":
      createGrid(hard);
      break;
    default:
      break;
  }
});

const createGrid = async (size) => {
  gameGrid.replaceChildren();

  fruitsList = await getFruitsData();

  //   const randomFruits = fruitsList.map(f => Math.R()
  //   })

  for (let i = 1; i <= size; i++) {
    const div = document.createElement("div");
    div.classList.add("card");
    const img = document.createElement("img");
    // img.src = fruitsList.forEach((f) => {
    //   f.filename;
    // });
    div.append(img);
    gameGrid.append(div);
  }
  gameGrid.classList.remove("hidden");
};

const getFruitsData = async () => {
  const res = await fetch("https://api.api-onepiece.com/v2/fruits/en");
  const data = await res.json();

  const filteredFruits = data.filter(
    (url) => !/\/fruits\/$/.test(url.filename)
  );

  for (let i = filteredFruits.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = filteredFruits[i];
    filteredFruits[i] = filteredFruits[j];
    filteredFruits[j] = temp;
  }

  console.log("Shuffled:", filteredFruits);
  return filteredFruits;
};

const displayCards = async () => {
  //   fruitsList.forEach((f) => {
  //     // render cards
  //     console.log(f.filename);
  //   });
};
const resetGame = () => {
  if (submitBtn.textContent === "Réessayer") {
    submitBtn.textContent = "Commencer";
  }
};
