"use strict";

// closure qui va s'appeler tout de suite après

// une Promesse permet d'encapsuler et exécuter un traitement qui prend du temps sans arrêter le code et ses autres instructions
// = définir du traitement exécuté en parallèle tout en continuant le reste du code
// (() => {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(42);
//     }, 10000); // exécuté après 10s
//   }).then((data) => console.log(data));
//   console.log("Je continue à faire autre chose.");
// })();

// promesse : fonction qui retourne des données dans le temps sans bloquer le reste
// lorsque l'on attend la résolution, on dit que la promesse est en 'pending'
// then : fonction exécutée lorsque que la promesse est résolue et utiliser les données retournées par la promesse

/* ASYNC - AWAIT */
// fonction asynchrone
// (async () => {
//   const data = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(42);
//     }, 10000); // exécuté après 10s
//   });
//   console.log(data);
//   console.log("Je continue à faire autre chose.");
// })();

// fetch : fonction native de JS qui prend en param une url et permet de retourner les données venant de cette dernière
// cette promesse est en pending car elle attend une réponse du serveur
// API : Application Programming Interface : interface qui permet de dialoguer avec un autre programme = la fenêtre web
// on utilise .json() (JavaScript Object Notation) pour transformer les données reçues en objets JavaScript exploitables
(async () => {
  const getWeather = (lat, lng) => {
    return fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lng +
        "&appid=b7d1c7a99ee6309680f4c2869c26df20"
    ).then((data) => data.json());
  };

  const DOM = {
    divTemp: document.getElementById("temp"),
  };

  getWeather(50, 134).then((data) => {
    DOM.divTemp.textContent = data.main.feels_like; // affichage de la temp ressentie
  });
  DOM.divTemp.textContent = "Chargement en cours...";
})();
