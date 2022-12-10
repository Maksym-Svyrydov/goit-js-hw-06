let lengthEl = document.querySelector("#font-size-control");
let txtEl = document.querySelector("#text");

txtEl.style.fontSize = "48px";

lengthEl.oninput = function () {
  txtEl.style.fontSize = lengthEl.value + "px";
};
// console.dir(lengthEl);
// console.log(txtEl.textContent);
