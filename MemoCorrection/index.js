"use strict";

const timer = setInterval(() => {
  console.log(42);
}, 1000);

// closure pour encapsuler et cacher le code et ses variables dans la window
// s'appelle à la fin
(() => {
  const BASE_IMG_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  const DOM = { cardsContainer: document.getElementById("cards-container") };

  const UTILS = {
    shuffle: (array) => {
      return array
        .map((item) => ({ item, seed: Math.random() })) // attribution d'un seed aléatoire
        .sort((a, b) => a.seed - b.seed) // tri selon ce seed
        .map((x) => x.item); // on retire le seed qui a fait son travail
    },
    range: (min, max) => {
      return [...Array(max - min + 1).keys()].map((v) => v + min); // definit range de nbs /e/ element min et element max
    },
  };

  // const t = [1, 2, 3, 4, 5, 6];
  // console.log(UTILS.shuffle(t));

  // sans map
  // console.log(UTILS.range(1, 17)); // [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  // avec map
  //console.log(UTILS.range(52, 75));
  // [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

  const GAME = {
    cards: null,
    selectedCard: null,
    canPlay: true,
    init: () => {
      let cards = UTILS.range(1, 150);
      cards = UTILS.shuffle(cards).slice(0, 10);
      cards = UTILS.shuffle([...cards, ...cards]); // double le range et remélange les cartes
      console.log(cards);
      GAME.cards = cards.map((i) => ({ url: BASE_IMG_URL + i + ".svg" })); // attribution d'une img à chaque card par rapport à l'index
    },
    showCard: (element, card) => {
      element.classList.add("show");
      element.querySelector("img").src = card.url;
    },
    hideCard: (element) => {
      element.classList.remove("show");
      element.querySelector("img").removeAttribute("src");
    },
  };

  const RENDER = {
    createCards: (c) => {
      const div = document.createElement("div");
      const divFront = document.createElement("div");
      const divBack = document.createElement("div");
      const img = document.createElement("img");
      // img.src = c.url; // déplacé dans le click event pour éviter la triche
      div.classList.add("card");
      divFront.classList.add("front");
      divBack.classList.add("back");
      div.append(divFront, divBack);
      divFront.append(img);
      div.addEventListener("click", HANDLERS.flip(div, c));
      return div;
    },
  };

  const HANDLERS = {
    flip: (element, card) => {
      // retourne un fonction
      return () => {
        if (!GAME.canPlay) return;
        GAME.showCard(element, card);
        if (!GAME.selectedCard) {
          GAME.selectedCard = { element, card };
        } else {
          if (GAME.selectedCard.card.url !== card.url) {
            GAME.canPlay = false;
            setTimeout(() => {
              GAME.hideCard(element);
              GAME.hideCard(GAME.selectedCard.element);
              GAME.selectedCard = null;
              GAME.canPlay = true;
            }, 1000);
          } else {
            GAME.selectedCard = null;
          }
        }
      };
    },
  };

  GAME.init();

  DOM.cardsContainer.append(...GAME.cards.map(RENDER.createCard));
})();
