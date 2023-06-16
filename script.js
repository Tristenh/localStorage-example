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
