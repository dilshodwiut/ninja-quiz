const form = document.getElementById("form");
const notifier = document.querySelector(".notifier");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  animateScrolling(window.scrollX, window.scrollY);
});

function animateScrolling(X, Y) {
  const interval = setInterval(() => {
    if (window.scrollX == 0 && window.scrollY == 0) {
      clearInterval(interval);
    } else {
      window.scrollTo(window.scrollX - 10, window.scrollY - 10);
    }
  }, 1);
}

function validate() {
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
  } else {
    notifier.setAttribute("style", "display: block");
  }
}

// window.scrollTo(0, 0);
// const currentX = window.scrollX;
// const currentY = window.scrollY;
