const form = document.querySelector("#new-item-form");
const input = document.querySelector("#new-item-input");
const itemsList = document.querySelector("#items");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const itemText = input.value.trim();
  if (itemText !== "") {
    const item = createItem(input.value);
    itemsList.append(item);
    input.value = "";
  }
});

const createItem = (itemText) => {
  const item = document.createElement("div");
  item.classList.add("item");

  const itemContent = document.createElement("div");
  itemContent.classList.add("content");

  const itemInput = createInput(itemText);
  itemContent.append(itemInput);

  const itemActions = createActions(item, itemInput);
  item.append(itemContent);
  item.append(itemActions);

  return item;
};

const createInput = (itemText) => {
  const itemInput = document.createElement("input");
  itemInput.classList.add("text");
  itemInput.type = "text";
  itemInput.value = itemText;
  itemInput.setAttribute("readonly", "readonly");
  return itemInput;
};

const createActions = (item, itemInput) => {
  const itemActions = document.createElement("div");
  itemActions.classList.add("actions");

  const itemDelete = createButton("-", () => {
    item.parentNode.removeChild(item);
  });

  itemActions.append(itemDelete);

  return itemActions;
};

const createButton = (text, onClick) => {
  const button = document.createElement("button");
  button.classList.add(text.toLowerCase());
  button.innerText = text;
  button.addEventListener("click", onClick);
  return button;
};
