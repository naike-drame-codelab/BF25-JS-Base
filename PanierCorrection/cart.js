// DOM
const tableCart = document.querySelector("#table-cart>tbody");
const inputName = document.getElementById("input-name");
const inputImportant = document.getElementById("input-important");
const buttonAdd = document.getElementById("button-add");

// events
buttonAdd.addEventListener("click", () => {
  const name = inputName.value?.trim();
  if (!name) {
    return;
  }
  // <tr>
  // <td>Pommes</td>
  // <td><button>X</button></td>
  // </tr>
  // créer le DOM
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  tdName.textContent = name + (inputImportant.checked ? "🏴" : "");
  const tdActions = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "&times;";
  tdActions.append(deleteButton);
  tr.append(tdName, tdActions);
  tableCart.append(tr);

  // add event on deleteButton
  deleteButton.addEventListener("click", () => {
    const ok = confirm("Êtes vous sûr ?");
    if (ok) {
      tr.remove();
    }
  });

  // vider les inputs
  inputName.value = null;
  inputImportant.checked = false;
});
