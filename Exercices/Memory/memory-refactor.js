// Configuration du jeu
const DIFFICULTY_LEVELS = {
	easy: 6, // 12 cartes (6 paires)
	medium: 8, // 16 cartes (8 paires)
	hard: 11, // 22 cartes (11 paires)
};

// Éléments du DOM
const selectDifficulty = document.getElementById("select-form");
const gameGrid = document.querySelector(".game-grid");
const difficulty = document.querySelector("#difficulty");

// État du jeu
let fruitsList = [];
let selectedCards = [];
let matchedCards = [];

// Écouteur d'événement pour le formulaire de difficulté
selectDifficulty.addEventListener("submit", (e) => {
	e.preventDefault();
	const size = DIFFICULTY_LEVELS[difficulty.value];
	if (size) createGrid(size);
});

// Fonction principale pour créer la grille
const createGrid = async (size) => {
	resetGameGrid();
	fruitsList = await getFruitsData();
	const pairedFruits = createPairedFruits(size);

	pairedFruits.forEach((fruit, index) => {
		const card = createCard(fruit, index);
		gameGrid.appendChild(card);
	});

	gameGrid.classList.remove("hidden");
};

// Réinitialise la grille et l'état du jeu
const resetGameGrid = () => {
	gameGrid.replaceChildren();
	selectedCards = [];
	matchedCards = [];
};

// Crée une paire de fruits mélangés
const createPairedFruits = (size) => {
	const selectedFruits = fruitsList.slice(0, size);
	return [...selectedFruits, ...selectedFruits].sort(
		() => Math.random() - 0.5
	);
};

// Crée une carte avec une face avant et une face arrière
const createCard = (fruit, index) => {
	const card = document.createElement("div");
	card.classList.add("card");
	card.dataset.index = index;

	const front = document.createElement("div");
	front.classList.add("front");
	front.textContent = "?";

	const back = document.createElement("div");
	back.classList.add("back");
	const img = document.createElement("img");
	img.src = fruit.filename;
	back.appendChild(img);

	card.appendChild(front);
	card.appendChild(back);
	card.addEventListener("click", () => handleCardClick(card));

	return card;
};

// Gère le clic sur une carte
const handleCardClick = (card) => {
	if (
		selectedCards.length < 2 &&
		!selectedCards.includes(card) &&
		!matchedCards.includes(card)
	) {
		flipCard(card);
		selectedCards.push(card);

		if (selectedCards.length === 2) {
			setTimeout(checkForMatch, 1000);
		}
	}
};

// Retourne une carte
const flipCard = (card) => {
	card.classList.add("flipped");
};

// Vérifie si les deux cartes sélectionnées correspondent
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

// Récupère les données des fruits depuis l'API
const getFruitsData = async () => {
	const res = await fetch("https://api.api-onepiece.com/v2/fruits/en");
	const data = await res.json();

	const filteredFruits = data.filter(
		(url) => !/\/fruits\/$/.test(url.filename)
	);
	return shuffleArray(filteredFruits);
};

// Mélange un tableau (algorithme de Fisher-Yates)
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
