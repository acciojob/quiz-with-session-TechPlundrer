//your JS code here.
const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

// MUST match name used in renderQuestions()
let userAnswers = JSON.parse(sessionStorage.getItem("progress")) || [];

// Restore saved score if exists
const savedScore = localStorage.getItem("score");
if (savedScore) {
  scoreElement.textContent = savedScore;
}

// Save progress to sessionStorage
questionsElement.addEventListener("change", function (event) {
  if (event.target.type === "radio") {
    const questionIndex = event.target.name.split("-")[1];
    userAnswers[questionIndex] = event.target.value;

    sessionStorage.setItem("progress", JSON.stringify(userAnswers));
  }
});

// Submit logic
submitButton.addEventListener("click", function () {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  const resultText = "Your score is " + score + " out of 5.";
  scoreElement.textContent = resultText;

  localStorage.setItem("score", resultText);
});