let map = new Map([
  ["one", "un"],
  ["two", "deux"],
]);

for (let [key, value] of map) {
  console.log((key, value));
}

// destructuring d'objet
// destructuring de l'event PointerEvent
document.addEventListener("click", ({ currentTarget, type }) =>
  console.log(currentTarget, type)
);
