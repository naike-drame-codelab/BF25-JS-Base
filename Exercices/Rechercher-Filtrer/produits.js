const searchForm = document.getElementById("search-form");
const inputName = document.getElementById("input-name");
const sortToggle = document.querySelector(".sort-toggle");
const inputMin = document.getElementById("input-min");
const inputMax = document.getElementById("input-max");
const tableProducts = document.querySelector("#table-products>tbody");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const products = await fetchProducts();

    searchForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = inputName.value?.trim().toLowerCase();
      const min = inputMin.valueAsNumber;
      const max = inputMax.valueAsNumber;

      const filteredProducts = products.filter((p) => {
        const nameMatch = p.nom.toLowerCase().includes(name);
        const descriptionMatch = p.description.toLowerCase().includes(name);
        const priceMatch = (!min || p.prix >= min) && (!max || p.prix <= max);

        return (nameMatch || descriptionMatch) && priceMatch;
      });

      displayProducts(filteredProducts);
      sortToggle.addEventListener("click", () => {
        const sortedProducts = sortProducts(filteredProducts);
        displayProducts(sortedProducts);
      });
    });
  } catch (error) {
    console.error("Erreur lors du chargement des données:", error);
  }
});

const fetchProducts = async () => {
  const response = await fetch("./produits.json");
  const products = await response.json();
  return products;
};

const displayProducts = (products) => {
  // vider les données
  // tableProducts.innerHTML = "";  -> pas la façon la plus propre
  //   for (let item of [...tableProducts.children]) {
  //     item.remove();
  //   }
  tableProducts.replaceChildren();

  products.forEach((p) => {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = p.nom;
    tr.appendChild(tdName);

    const tdDescription = document.createElement("td");
    tdDescription.textContent = p.description;
    tr.appendChild(tdDescription);

    const tdPrice = document.createElement("td");
    tdPrice.textContent = p.prix + " €";
    tr.appendChild(tdPrice);

    tableProducts.appendChild(tr);
  });
};

const sortProducts = (products) => {
  const sorted = products.sort((a, b) => (a.prix < b.prix ? -1 : 1));
  console.log(sorted);

  return sorted;
};
