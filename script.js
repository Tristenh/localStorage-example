const form = document.querySelector(".form");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const results = document.querySelector(".results");

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
