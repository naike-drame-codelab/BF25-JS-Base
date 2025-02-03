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
      sortHeaders: document.querySelectorAll("[data-sortfield]"),
    },
  },
  p: {
    averagePrice: document.getElementById("averagePrice"),
  },
};

// FUNCTIONS
// fonctions réutilisables qui vont calculer qqch
const UTILS = {
  normalize: (string) =>
    string
      .toUpperCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, ""),
  avg: (array, selectorCb) =>
    array.reduce(
      (previous, current) => previous + selectorCb(current.prix) / array.length,
      0
    ),
  applySortAndFilters: () => {
    DATA
      // destructuring, ajout 2 nvles colonnes & accents retirés via .map()
      .map((d) => ({
        ...d,
        normalizedName: UTILS.normalize(d.nom),
        normalizedDescription: UTILS.normalize(d.description),
      }))
      // pas besoin de filtrer si aucun input indiqué, la 2e condition ne sera jamais exécutée -> !value || (cond)
      .filter(
        (d) =>
          (!filterOptions.search ||
            d.normalizedName.includes(filterOptions.search) ||
            d.normalizedDescription.includes(filterOptions.search)) &&
          (!filterOptions.min || d.prix >= min) &&
          (!filterOptions.max || d.prix <= max)
      )
      .toSorted((a, b) => {
        switch (sortOptions.type) {
          case "number":
            return (
              (a[sortOptions.sortField] - b[sortOptions.sortField]) *
              sortOptions.sortOrder
            );
          case "string":
            return (
              a[sortOptions.sortField].localeCompare(b[sortOptions.sortField]) *
              sortOptions.sortOrder
            );
          default:
            return 1;
        }
      });
  },
};

// fonctions qui vont être liéées aux événements
const HANDLERS = {
  onSearch: () => {
    filterOptions.search = UTILS.normalize(DOM.inputs.search.value);
    filterOptions.min = DOM.inputs.min.valueAsNumber;
    filterOptions.max = DOM.inputs.max.valueAsNumber;
    // afficher les articles
    applySortAndFilters();
    RENDER.displayArticles();
    RENDER.displayAveragePrice();
  },
  onSortHeader: (th) => {
    sortOptions.sortOrder =
      sortOptions.sortField !== th.dataset.sortfield // dataset : permet de récupérer les metadonnées/attributs custom (data-) // DOM.p.dataset.gender = "Male"
        ? sortOptions.sortOrder
        : sortOptions.sortOrder * -1;
    sortOptions.sortField = th.dataset.sortfield;
    sortOptions.type = typeof articlesToDisplay[0][sortOptions.sortField];
    // trier
    // if (!articlesToDisplay?.length) return;

    // afficher les articles
    articlesToDisplay = UTILS.applySortAndFilters();
    RENDER.displayArticles();
  },
};

// fonctions qui vont être liées à l'affichage
const RENDER = {
  createArticleRow: (article) => {
    const tr = document.createElement("tr");
    const tdNom = document.createElement("td");
    const tdDescription = document.createElement("td");
    const tdPrix = document.createElement("td");

    tr.append(tdNom, tdDescription, tdPrix);

    tdNom.textContent = article.nom;
    tdDescription.textContent = article.description;
    tdPrix.textContent = article.prix + "€";
    return tr;
  },
  displayArticles: () => {
    DOM.table.articles.tbody.replaceChildren();
    DOM.table.articles.tbody.append(
      ...articlesToDisplay.map(RENDER.createArticleRow)
    );
  },
  displayAveragePrice: () => {
    const m = UTILS.avg(articlesToDisplay, (a) => a.prix);
    DOM.p.averagePrice.textContent = m.toFixed(2) + "€";
  },
};

// VARIABLES
const sortOptions = {
  sortField: null,
  sortOrder: 1, // -1 DESC 1 ASC
  type: null,
};
const filterOptions = {
  search: null,
  min: null,
  max: null,
};
let articlesToDisplay;

// EVENTS
DOM.buttons.search.addEventListener("click", HANDLERS.onSearch);

DOM.table.articles.sortHeaders.forEach((th) => {
  th.addEventListener("click", () => HANDLERS.onSortHeader(th));
});
