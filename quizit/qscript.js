function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
              &nbsp;&nbsp;
            </label>`
          );
        }
        output.push(
          `<div class="question" style= "font-weight: 700;"> ${currentQuestion.question}</div>
          <div class="answers"> ${answers.join('')} </div><br> `
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'green';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `<br>&nbsp;&nbsp;Score: ${numCorrect} / ${myQuestions.length}`;
    resultsContainer.style.fontWeight= "700";
    resultsContainer.style.fontSize= "1.2em";
  }
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  const myQuestions = [
    {
      question: "Question 1: 17 x 3 =",
      answers: {
        a: "173",
        b: "51",
        c: "85",
        d: "112"
      },
      correctAnswer: "b"
    },
    {
      question: "Question 2: 13 x 6 =",
      answers: {
        a: "78",
        b: "117",
        c: "51",
        d: "91"
      },
      correctAnswer: "a"
    },
    {
      question: "Question 3: 16 x 8 =",
      answers: {
        a: "102",
        b: "144",
        c: "104",
        d: "128"
      },
      correctAnswer: "d"
    },
    {
      question: "Question 4: Tom wants 7 pencils. Each pencil costs Rs. 5, what is the total cost?",
      answers: {
        a: "42",
        b: "35",
        c: "38",
        d: "63"
      },
      correctAnswer: "b"
    },
    {
      question: "Question 5: Jerry wants 17 apples. Each apple costs Rs. 6, what is the total cost?",
      answers: {
        a: "102",
        b: "176",
        c: "120",
        d: "112"
      },
      correctAnswer: "a"
    }
  ];

  buildQuiz();
  submitButton.addEventListener('click', showResults);
  