const form = document.querySelector(".form");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const results = document.querySelector(".results");
const reset = document.querySelector(".reset");

let inputArray = [];

function JSONParse() {
  let inputJSON = localStorage.getItem("inputValue");
  if (inputJSON) {
    inputArray = JSON.parse(inputJSON);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputValue = input.value;
  inputArray.push(inputValue);
  inputValue = "";
  displayResult();
  saveScore();
});

function displayResult() {
  results.innerHTML = "";
  for (let i = 0; i < inputArray.length; i++) {
    const displayInput = inputArray[i];
    const createEl = document.createElement("div");
    createEl.innerHTML = displayInput;
    results.appendChild(createEl);
  }
}

function saveScore() {
  localStorage.setItem("inputValue", JSON.stringify(inputArray));
}
reset.addEventListener("click", function () {
  inputArray = [];
  input.value = "";
  saveScore();
  displayResult();
});
JSONParse();
displayResult();
