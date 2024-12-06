const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High-Level Text Machine Learning",
        "Hyper Tool Multi-Language",
        "None of the above"
      ],
      correct: 0
    },
    {
      question: "Which tag is used to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correct: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("quiz-question");
    const optionsContainer = document.getElementById("quiz-options");
  
    // Clear previous options
    optionsContainer.innerHTML = "";
  
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
  
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
  
    if (selectedIndex === question.correct) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  
    // Move to the next question
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert("Quiz completed!");
    }
  }
  
  // Load the first question on page load
  window.onload = loadQuestion;