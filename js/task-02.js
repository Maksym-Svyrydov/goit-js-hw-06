const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("ul#ingredients");
// console.log(ingredientsEl);
const elements = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  // console.log(element);
  element.classList.add("item");
  element.textContent = ingredient;
  return element;
});
ingredientsEl.append(...elements);
console.log(ingredientsEl);
