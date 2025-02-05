"use strict";

let index = 0;

const BASE_URL_IMG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

const DOM = {
  namesList: document.getElementById("names-list"),
  buttons: {
    previous: document.getElementById("previous"),
    next: document.getElementById("next"),
  },
  details: document.getElementById("pokemon-details"),
};

const RENDER = {
  createPokemonList: async (startIndex) => {
    const pokemonList = await fetchData(startIndex);
    DOM.namesList.innerHTML = "";

    pokemonList.forEach((pokemon) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = pokemon.name;
      li.append(p);
      DOM.namesList.append(li);

      li.addEventListener("click", () => {
        console.log(pokemon.id);
        const img = document.createElement("img");
        img.src = BASE_URL_IMG + pokemon.id + `.png`;
        DOM.details.append(img);
      });
    });
  },
};

DOM.buttons.previous.addEventListener("click", () => {
  if (index >= 20) {
    index -= 20;
    RENDER.createPokemonList(index);
  } else if (index <= 0) {
    DOM.buttons.previous.disabled = true;
  }
});

DOM.buttons.next.addEventListener("click", () => {
  index += 20;
  RENDER.createPokemonList(index);
  DOM.buttons.previous.disabled = false;
});

const fetchData = async (startIndex) => {
  const pokemonArray = [];
  for (let i = startIndex + 1; i <= startIndex + 20; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/` + i + `/`);
    const data = await res.json();
    pokemonArray.push(data);
  }
  return pokemonArray;
};

RENDER.createPokemonList(index);
