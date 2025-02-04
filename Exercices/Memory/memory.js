const selectDifficulty = document.getElementById("select-form");
const gameGrid = document.querySelector(".game-grid");
const difficulty = document.querySelector("#difficulty");
const submitBtn = document.getElementById("submit-btn");

const easy = 6;
const medium = 8;
const hard = 11;

let fruitsList;
let selectedCards = [];
let matchedCards = [];

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
	matchedCards = [];
	selectedCards = [];

	fruitsList = await getFruitsData();
	const selectedFruits = fruitsList.slice(0, size);
	const pairedFruits = [...selectedFruits, ...selectedFruits];

	pairedFruits.forEach((fruit, index) => {
		const div = document.createElement("div");
		div.classList.add("card");
		div.dataset.index = index;

		const front = document.createElement("div");
		front.classList.add("front");
		front.textContent = "?";

		const back = document.createElement("div");
		back.classList.add("back");
		const img = document.createElement("img");
		img.src = fruit.filename;
		back.appendChild(img);

		div.appendChild(front);
		div.appendChild(back);

		div.addEventListener("click", () => flipCard(div));
		gameGrid.appendChild(div);
	});

	gameGrid.classList.remove("hidden");
};

const flipCard = (card) => {
	if (
		selectedCards.length < 2 &&
		!selectedCards.includes(card) &&
		!matchedCards.includes(card)
	) {
		card.classList.add("flipped");
		selectedCards.push(card);

		if (selectedCards.length === 2) {
			setTimeout(checkForMatch, 1000);
		}
	}
};

const checkForMatch = () => {
	const [card1, card2] = selectedCards;
	const img1 = card1.querySelector(".back img");
	const img2 = card2.querySelector(".back img");

	if (img1.src === img2.src) {
		matchedCards.push(card1, card2);
		if (matchedCards.length === gameGrid.children.length) {
			alert("Félicitations, vous avez gagné !");
		}
	} else {
		setTimeout(() => {
			card1.classList.remove("flipped");
			card2.classList.remove("flipped");
		}, 1000);
	}

	selectedCards = [];
};

const getFruitsData = async () => {
	const res = await fetch("https://api.api-onepiece.com/v2/fruits/en");
	const data = await res.json();

	const filteredFruits = data.filter(
		(url) => !/\/fruits\/$/.test(url.filename)
	);

	// Fisher-Yates shuffle algorithm
	for (let i = filteredFruits.length - 1; i >= 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = filteredFruits[i];
		filteredFruits[i] = filteredFruits[j];
		filteredFruits[j] = temp;
	}

	console.log("Shuffled:", filteredFruits);
	return filteredFruits;
};
