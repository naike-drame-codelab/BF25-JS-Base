// setTimeout() : délai avant de s'exécuter
setTimeout(() => {
  console.log("Coucou");
}, 2000);

// va s'exécuter après chaque intervalle
// setInterval(() => {
//   console.log(43);
// }, 1000);

// clearInterval() : permet d'arrêter un setInterval après un certain moment
let id = setInterval(() => {
  console.log(44);
  id++;
  if (id === 10) clearInterval(id);
}, 1000);
