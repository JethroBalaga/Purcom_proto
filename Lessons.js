

const lessons = [
    {
      title: "Introduction to HTML",
      content: "HTML is the building block of the web. It defines the structure of web pages.",
      example: "<h1>Hello, World!</h1>"
    },
    {
      title: "CSS Basics",
      content: "CSS styles HTML elements to make them visually appealing.",
      example: "h1 { color: blue; }"
    },
    {
      title: "Getting Started with JavaScript",
      content: "JavaScript adds interactivity to websites.",
      example: "console.log('Hello, World!');"
    }
  ];
  
  function loadLesson(index) {
    const lessonTitle = document.getElementById("lesson-title");
    const lessonContent = document.getElementById("lesson-content");
    const codeEditor = document.getElementById("code-editor");
  
    lessonTitle.textContent = lessons[index].title;
    lessonContent.textContent = lessons[index].content;
    codeEditor.value = lessons[index].example; // Load example code into the textarea
  
    document.getElementById("lesson").style.display = "block"; // Show lesson section
  }
  
  function runCode() {
    const code = document.getElementById("code-editor").value;
    const iframe = document.getElementById("output");
    iframe.contentDocument.open();
    iframe.contentDocument.write(code);
    iframe.contentDocument.close();
  }
  

  