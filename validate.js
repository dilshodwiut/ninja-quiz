function validate() {
  const error = document.querySelector(".error");
  const q1 = document.querySelectorAll(".q1");
  const q2 = document.querySelectorAll(".q2");
  const q3 = document.querySelectorAll(".q3");
  const q4 = document.querySelectorAll(".q4");

  const radioInputs = [q1, q2, q3, q4];

  const checkedInputs = [];
  radioInputs.forEach((pair) => {
    pair.forEach((radio) => {
      if (radio.checked) {
        checkedInputs.push(radio);
      }
    });
  });

  if (checkedInputs.length != radioInputs.length) {
    error.setAttribute("style", "display: block;");
  } else {
    notifier.setAttribute("style", "display: block");
    error.removeAttribute("style");
    animateResult(getResults(checkedInputs));
  }
}
