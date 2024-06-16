const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion() 
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0 
 questionContainerElement.classList.remove('hide')
 setNextQuestion() 
}

function setNextQuestion() {
   resetState() 
   showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
const questions = [
  {
    question: '2 + 2 = ?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Paris là thủ đô nước nào?',
    answers: [
      { text: 'Nga', correct: false },
      { text: 'Phap', correct: true  },
      { text: 'My', correct:false  },
      { text: 'Thailand', correct: false }
    ]
  },
  {
    question: 'Đội Tuyển  nào đã vô địch word cup năm 2022',
    answers: [
      { text: 'Nga', correct:false  },
      { text: 'Argentina', correct:true  },
      { text: 'Thailand', correct: false },
      { text: 'Phap', correct: false }
    ]
  },
  {
    question: 'Leonardo ra vinci là người Italia?',
    answers: [
      { text: 'Đúng ', correct: true},
      { text: 'Sai', correct: false}
    ]
  },
]