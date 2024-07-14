const questions = [
    {
        question: "¿Cuáles son los tres tipos de animales más comunes del Ártico?",
        answers: ["Osos polares, focas, zorros árticos", "Tigres, elefantes, leones", "Pandas, pingüinos, canguros", "Gatos, perros, conejos"],
        correct: "Osos polares, focas, zorros árticos"
    },
    {
        question: "¿Cuál es la temperatura promedio del Ártico en invierno?",
        answers: ["-40°C", "0°C", "25°C", "-10°C"],
        correct: "-40°C"
    },
    {
        question: "¿Qué océano rodea el Ártico?",
        answers: ["Océano Atlántico", "Océano Pacífico", "Océano Índico", "Océano Ártico"],
        correct: "Océano Ártico"
    },
    {
        question: "¿Qué fenómeno natural se puede ver en el Ártico?",
        answers: ["Aurora Boreal", "Eclipse solar", "Lluvia de meteoritos", "Volcanes"],
        correct: "Aurora Boreal"
    },
    {
        question: "¿Cuál es el principal medio de transporte en el Ártico?",
        answers: ["Tren", "Trineo de perros", "Bicicleta", "Avión"],
        correct: "Trineo de perros"
    },
    {
        question: "¿Cuál es el punto más alto del Ártico?",
        answers: ["Monte McKinley", "Monte Everest", "Monte Fuji", "Monte Gunnbjørn"],
        correct: "Monte Gunnbjørn"
    },
    {
        question: "¿Qué recurso natural se extrae del Ártico?",
        answers: ["Oro", "Petróleo", "Diamantes", "Carbón"],
        correct: "Petróleo"
    },
    {
        question: "¿Cuál es el país más cercano al Ártico?",
        answers: ["Rusia", "Canadá", "Noruega", "Groenlandia"],
        correct: "Groenlandia"
    },
    {
        question: "¿Qué tipo de vegetación es común en el Ártico?",
        answers: ["Bosques densos", "Tundra", "Desierto", "Selvas tropicales"],
        correct: "Tundra"
    },
    {
        question: "¿Qué especie de oso vive en el Ártico?",
        answers: ["Oso panda", "Oso pardo", "Oso polar", "Oso negro"],
        correct: "Oso polar"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let time = 60;
let timer;

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startButton = document.getElementById('start-btn');
const playAgainButton = document.getElementById('play-again-btn');
const questionContainer = document.getElementById('question-container');
const buttons = document.querySelectorAll('.btn');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const finalScoreElement = document.getElementById('final-score');
const congratulationsElement = document.getElementById('congratulations');
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');
const timeoutSound = document.getElementById('timeout-sound');

startButton.addEventListener('click', startGame);
playAgainButton.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('hide');
    endScreen.classList.add('hide');
    gameScreen.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    time = 60;
    updateScoreAndTime();
    setNextQuestion();
    timer = setInterval(updateTime, 1000);
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[Math.floor(Math.random() * questions.length)]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.innerText = question.question;
    buttons.forEach((button, index) => {
        button.innerText = question.answers[index];
        button.onclick = () => selectAnswer(button, question.correct);
    });
}

function resetState() {
    buttons.forEach(button => {
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
    });
}

function selectAnswer(selectedButton, correct) {
    const isCorrect = selectedButton.innerText === correct;
    if (isCorrect) {
        score = Math.max(0, score + 1);
        correctSound.play();
    } else {
        score = Math.max(0, score - 1);
        incorrectSound.play();
    }
    updateScoreAndTime();
    buttons.forEach(button => {
        button.disabled = true;
        if (button.innerText === correct) {
            button.classList.add('correct');
        } else if (button === selectedButton) {
            button.classList.add('wrong');
        }
    });
    setTimeout(setNextQuestion, 1000);
}

function updateTime() {
    time--;
    updateScoreAndTime();
    if (time <= 0) {
        endGame();
    }
}

function updateScoreAndTime() {
    scoreElement.innerText = `Puntuación: ${score}`;
    timeElement.innerText = `Tiempo: ${time}`;
}

function endGame() {
    clearInterval(timer);
    timeoutSound.play();
    gameScreen.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScoreElement.innerText = `Tu puntuación final es: ${score}`;
    congratulationsElement.innerText = getCongratulatoryMessage(score);
}

function getCongratulatoryMessage(score) {
    if (score >= 15) {
        return "¡Excelente! Eres un experto en el Ártico.";
    } else if (score >= 10) {
        return "¡Muy bien! Tienes un buen conocimiento del Ártico.";
    } else if (score >= 5) {
        return "Buen intento. Sigue aprendiendo sobre el Ártico.";
    } else {
        return "No te desanimes. ¡Inténtalo de nuevo para mejorar tu puntuación!";
    }
}
