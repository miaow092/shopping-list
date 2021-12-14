const input = document.querySelector(".input");
const checkBtn = document.querySelector(".checkBtn");
const form = document.querySelector(".footer");
const items = document.querySelector(".items");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newValue = input.value;
  input.value = "";

  const item = document.createElement("il");
  const checkBtn = document.createElement("input");
  const shoppingItem = document.createElement("span");
  const trashcan = document.createElement("button");
  shoppingItem.innerHTML = newValue;
  checkBtn.type = "checkbox";
  trashcan.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  item.setAttribute("class", "item");
  checkBtn.setAttribute("class", "checkBtn");
  shoppingItem.setAttribute("class", "shoppingItem");
  trashcan.setAttribute("class", "trashcan");
  items.appendChild(item);
  item.append(checkBtn, shoppingItem, trashcan);
  item.scrollIntoView({ block: "center" }, { behavior: "smooth" });

  item.addEventListener("click", (event) => {
    if (checkBtn.checked) {
      event.currentTarget.style.textDecoration = "line-through";
    } else {
      event.currentTarget.style.textDecoration = "none";
    }
  });

  trashcan.addEventListener("click", () => {
    item.remove();
  });
});
