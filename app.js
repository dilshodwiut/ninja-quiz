const correctAnswers = ["B", "B", "B", "B"];
const form = document.getElementById("form");
const notifier = document.querySelector(".notifier");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  if (userAnswers.includes("")) {
    error.setAttribute("style", "display: block;");
    notifier.setAttribute("style", "display: none;");
  } else {
    error.setAttribute("style", "display: none;");
    notifier.setAttribute("style", "display: block;");

    userAnswers.forEach((answer, index) => {
      answer == correctAnswers[index] ? (score += 25) : score;
    });

    let output = 0;
    const timer = setInterval(() => {
      notifier.querySelector("span").textContent = `${output}%`;
      if (output == score) {
        clearInterval(timer);
      } else {
        output++;
      }
    }, 10);
  }

  const interval = setInterval(() => {
    if (scrollX == 0 && scrollY == 0) {
      clearInterval(interval);
    } else {
      scrollBy(-50, -50);
    }
  }, 10);
});
