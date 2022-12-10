"use strickt";
const categotiesEl = document.querySelector("ul#categories");

const itemEl = document.querySelectorAll("li.item");
console.log(`Number of categories:" ${itemEl.length}`);
// console.log(itemEl);
console.log("\n");

const liEl = document.querySelectorAll("#categories>li");
liEl.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
  console.log("\n");
});
