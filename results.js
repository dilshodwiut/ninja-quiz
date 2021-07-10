const answers = ["B", "B", "B", "B"];
const percents = [25, 50, 75, 100];

function getResults(checkedInputs) {
  const results = [];
  checkedInputs.forEach((input, index) => {
    results.push(input.value == answers[index]);
  });

  let score = results.filter((result) => {
    return result;
  });
  return percents[score.length - 1] || 0;
}

function animateResult(percentage) {
  const score = document.getElementById("score");
  score.textContent = 0;
  const progressInterval = setInterval(() => {
    score.textContent != percentage
      ? score.textContent++
      : clearInterval(progressInterval);
  }, 10);
}
