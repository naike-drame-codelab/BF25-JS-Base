"use strict";

// DATA
const DATA = [
  {
    id: 1,
    nom: "Ordinateur Portable",
    description: "Ordinateur portable 15 pouces avec processeur i7",
    prix: 999.99,
  },
  {
    id: 2,
    nom: "Smartphone",
    description: "Smartphone 5G avec caméra 48MP",
    prix: 799.99,
  },
  {
    id: 3,
    nom: "Casque Bluetooth",
    description: "Casque sans fil avec réduction de bruit active",
    prix: 120.5,
  },
  {
    id: 4,
    nom: "Montre Connectée",
    description: "Montre intelligente avec suivi de la santé et notifications",
    prix: 149.99,
  },
  {
    id: 5,
    nom: "Tablette 10 pouces",
    description: "Tablette Android avec écran HD",
    prix: 299.99,
  },
  {
    id: 6,
    nom: "Enceinte Bluetooth",
    description: "Enceinte portable résistante à l'eau",
    prix: 55.0,
  },
  {
    id: 7,
    nom: "Imprimante 3D",
    description: "Imprimante 3D avec plateau chauffant et résine",
    prix: 499.99,
  },
  {
    id: 8,
    nom: "Appareil Photo Reflex",
    description: "Appareil photo numérique avec objectif 18-55mm",
    prix: 450.0,
  },
  {
    id: 9,
    nom: "Clé USB 64 Go",
    description: "Clé USB haute vitesse avec protection des données",
    prix: 15.99,
  },
  {
    id: 10,
    nom: "Disque Dur Externe 1 To",
    description: "Disque dur externe portable avec port USB 3.0",
    prix: 79.99,
  },
  {
    id: 11,
    nom: "Raspberry Pi",
    description: "Mini ordinateur Raspberry Pi 4B 4Go de RAM",
    prix: 60.0,
  },
  {
    id: 12,
    nom: "Télévision 4K",
    description: "Télévision LED 55 pouces avec résolution 4K",
    prix: 649.99,
  },
  {
    id: 13,
    nom: "Batterie Externe",
    description: "Batterie externe 10000mAh avec ports USB-C et USB-A",
    prix: 25.0,
  },
  {
    id: 14,
    nom: "Robot Aspirateur",
    description: "Robot aspirateur intelligent avec navigation laser",
    prix: 300.0,
  },
  {
    id: 15,
    nom: "Station Météo",
    description: "Station météo avec capteurs de température et humidité",
    prix: 40.99,
  },
  {
    id: 16,
    nom: "Chaise de Bureau Ergonomique",
    description: "Chaise ergonomique avec réglage en hauteur et accoudoirs",
    prix: 199.99,
  },
  {
    id: 17,
    nom: "Lunettes de Réalité Virtuelle",
    description: "Casque VR compatible avec PC et consoles",
    prix: 249.99,
  },
  {
    id: 18,
    nom: "Clavier Mécanique",
    description: "Clavier mécanique RGB avec switches Cherry MX",
    prix: 89.99,
  },
  {
    id: 19,
    nom: "Souris Gamer",
    description: "Souris gaming avec 16000 DPI et rétroéclairage RGB",
    prix: 45.99,
  },
  {
    id: 20,
    nom: "Écouteurs Sans Fil",
    description: "Écouteurs Bluetooth avec réduction de bruit",
    prix: 65.5,
  },
  {
    id: 21,
    nom: "Microphone USB",
    description: "Microphone USB pour enregistrement audio et streaming",
    prix: 55.0,
  },
  {
    id: 22,
    nom: "Tapis de Souris XXL",
    description: "Tapis de souris extra large avec surface en tissu",
    prix: 20.99,
  },
  {
    id: 23,
    nom: "Caméra de Sécurité",
    description: "Caméra de sécurité Wi-Fi avec vision nocturne",
    prix: 120.0,
  },
  {
    id: 24,
    nom: "Table de Jardin",
    description: "Table de jardin en bois pour 6 personnes",
    prix: 150.0,
  },
  {
    id: 25,
    nom: "Haut-Parleur Portable",
    description: "Haut-parleur portable Bluetooth avec batterie longue durée",
    prix: 85.0,
  },
  {
    id: 26,
    nom: "Coffre-Fort",
    description: "Coffre-fort électronique avec serrure à code",
    prix: 250.0,
  },
  {
    id: 27,
    nom: "Brosse Lissante",
    description: "Brosse lissante électrique pour cheveux",
    prix: 35.99,
  },
  {
    id: 28,
    nom: "Vélo Électrique",
    description: "Vélo électrique pliable avec moteur 250W",
    prix: 799.99,
  },
  {
    id: 29,
    nom: "Écran PC 27 pouces",
    description: "Écran Full HD 27 pouces avec technologie IPS",
    prix: 199.99,
  },
  {
    id: 30,
    nom: "Lampe de Bureau LED",
    description: "Lampe de bureau LED avec réglage de luminosité tactile",
    prix: 29.99,
  },
];

// DOM
const DOM = {
  inputs: {
    search: document.getElementById("search-input"),
    min: document.getElementById("min-input"),
    max: document.getElementById("max-input"),
  },
  buttons: {
    search: document.getElementById("search-button"),
  },
  table: {
    articles: {
      tbody: document.querySelector("#articles-table > tbody"),
    },
  },
};

// VARIABLES
let articlesToDisplay;

// EVENTS
DOM.buttons.search.addEventListener("click", () => {
  const search = DOM.inputs.search.value
    .toUpperCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
  const min = DOM.inputs.min.value;
  const max = DOM.inputs.max.value;

  articlesToDisplay = DATA
    // destructuring, ajout 2 nvles colonnes & accents retirés via .map()
    .map((d) => ({
      ...d,
      normalizedName: d.nom
        .toUpperCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, ""),
      normalizedDescription: d.description
        .toLocaleUpperCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, ""),
    }))
    // pas besoin de filtrer si aucun input indiqué, la 2e condition ne sera jamais exécutée -> !value || (cond)
    .filter(
      (d) =>
        (!search ||
          d.normalizedName.includes(search) ||
          d.normalizedDescription.includes(search)) &&
        (!min || d.prix >= min) &&
        (!max || d.prix <= max)
    );

  // vider la table des articles
  DOM.table.articles.tbody.replaceChildren();

  for (let article of articlesToDisplay) {
    const tr = document.createElement("tr");
    const tdNom = document.createElement("td");
    const tdDescription = document.createElement("td");
    const tdPrix = document.createElement("td");
    DOM.table.articles.tbody.append(tr);
    tr.append(tdNom, tdDescription, tdPrix);

    tdNom.textContent = article.nom;
    tdDescription.textContent = article.description;
    tdPrix.textContent = article.prix + "€";
  }
});
