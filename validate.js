// const radioInputs = document.querySelectorAll('input[type="radio"]');
const error = document.querySelector(".error");
const q1 = document.querySelectorAll(".q1");
const q2 = document.querySelectorAll(".q2");
const q3 = document.querySelectorAll(".q3");
const q4 = document.querySelectorAll(".q4");

const radioInputs = [q1, q2, q3, q4];

const isChecked = [];
radioInputs.forEach((pair) => {
  pair.forEach((radio) => {
    if (radio.checked) {
      isChecked.push(radio.checked);
    }
  });
});

if (isChecked.length != radioInputs.length) {
  error.setAttribute("style", "display: block;");
}
