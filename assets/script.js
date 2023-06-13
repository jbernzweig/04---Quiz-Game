const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// event listener for Start Button
startButton.addEventListener('click', startGame)

// event listener for Next Button
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// function to start the game
function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
// function to set a question
function setNextQuestion(question) {
    resetState()
    showQuestion()
}

// function to show new question
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
        setStatusClass(button.dataset.correct)
    })
    if () // Needs work here
    nextButton.classList.remove('hide')
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
        question: 'Javascript is not the same as Java',
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: 'Javascript is great for beginners',
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: 'For Loops are important in Javascript',
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: 'If Statements are important in Javascript',
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: 'Javascript is a brand new language, created in 2009',
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true },
        ]
    }
]