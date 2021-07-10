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
