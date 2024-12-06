const quizQuestions = [
  {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      correct: 0
  },
  {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>"],
      correct: 0
  },
  {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
      correct: 0
  },
  {
      question: "What does JavaScript primarily add to web pages?",
      options: ["Structure", "Interactivity", "Styling"],
      correct: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to load a question
function loadQuestion() {
  const questionElement = document.getElementById("quiz-question");
  const optionsContainer = document.getElementById("quiz-options");

  // Clear old options
  optionsContainer.innerHTML = "";

  // Load the current question
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Load the options
  currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("quiz-option");
      button.addEventListener("click", () => checkAnswer(index));
      optionsContainer.appendChild(button);
  });
}

// Function to check the answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correct) {
      score++;
      alert("Correct!");
  } else {
      alert("Wrong!");
  }

  // Load the next question or finish the quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion();
  } else {
      finishQuiz();
  }
}

// Function to finish the quiz
function finishQuiz() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = `<h2>Quiz Completed!</h2>
      <p>Your score: ${score}/${quizQuestions.length}</p>`;
}
window.onload = () => {
  loadQuestion();
};
