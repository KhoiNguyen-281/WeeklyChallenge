const invalid = document.querySelector("#invalid");
const input = document.querySelector("#email");
const button = document.querySelector("#submit");

const form = document.querySelector("#form");
const thanks = document.querySelector("#thanks");

function validateEmail() {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(input.value);
}

function validateInput() {
  if (input.value === "") {
    invalid.style.display = "none";
    input.style.cssText = "";
    button.style.cssText = "";
    button.disabled = true;
  } else if (validateEmail()) {
    invalid.style.display = "none";
    input.style.cssText = "";
    button.style.cssText =
      "background-image: linear-gradient(to right,rgba(234, 99, 109, 1),rgba(253, 97, 77, 1));box-shadow: 0px 20px 20px rgba(234, 99, 109, 0.5);";
    button.disabled = false;
  } else {
    invalid.style.display = "flex";
    input.style.cssText =
      "border: 1px solid rgba(237, 108, 91, 1); background-color: rgba(252, 233, 231, 1);color: rgba(237, 108, 91, 1);";
    button.style.cssText = "";
    button.disabled = true;
  }
}
input.addEventListener("input", validateInput);

function subscribe() {
  form.style.display = "none";
  thanks.style.display = "flex";
}

function dismiss() {
  form.style.display = "flex";
  thanks.style.display = "none";
}
