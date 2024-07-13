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

const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const questionContainer = document.getElementById('question-container');
const buttons = document.querySelectorAll('.btn');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');
const loseSound = document.getElementById('lose-sound');
const timeoutSound = document.getElementById('timeout-sound');
const winSound = document.getElementById('win-sound');

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);

function startGame() {
    startButton.classList.add('hide');
    resetButton.classList.remove('hide');
    questionContainer.classList.remove('hide');
    scoreContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    scoreElement.innerText = `Puntuación: ${score}`;
    timeElement.innerText = `Tiempo: ${time}`;
    setNextQuestion();
    timer = setInterval(updateTime, 1000);
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.innerText = question.question;
    buttons.forEach((button, index) => {
        button.innerText = question.answers[index];
        button.onclick = () => selectAnswer(button.innerText, question.correct);
    });
}

function resetState() {
    buttons.forEach(button => {
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
    });
}

function selectAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        correctSound.play();
        scoreElement.innerText = `Puntuación: ${score}`;
        checkGameStatus();
    } else {
        score--;
        incorrectSound.play();
        scoreElement.innerText = `Puntuación: ${score}`;
        buttons.forEach(button => {
            if (button.innerText === correct) {
                button.classList.add('correct');
            } else if (button.innerText === selected) {
                button.classList.add('wrong');
            }
        });
        setTimeout(() => {
            checkGameStatus();
        }, 5000); // Espera de 5 segundos antes de la siguiente pregunta
    }
}

function checkGameStatus() {
    if (score >= 10) {
        clearInterval(timer);
        winSound.play();
        alert('¡Ganaste!');
        resetGame();
    } else if (score <= -10) {
        clearInterval(timer);
        loseSound.play();
        alert('Perdiste. Inténtalo de nuevo.');
        resetGame();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setNextQuestion();
        } else {
            alert('¡Terminaste el juego!');
            resetGame();
        }
    }
}

function updateTime() {
    time--;
    timeElement.innerText = `Tiempo: ${time}`;
    if (time <= 0) {
        clearInterval(timer);
        timeoutSound.play();
        alert('Se acabó el tiempo. Inténtalo de nuevo.');
        resetGame();
    }
}

function resetGame() {
    clearInterval(timer);
    startButton.innerText = 'Iniciar Juego';
    startButton.classList.remove('hide');
    resetButton.classList.add('hide');
    questionContainer.classList.add('hide');
    scoreContainer.classList.add('hide');
    currentQuestionIndex = 0;
    score = 0;
    time = 25;
    scoreElement.innerText = `Puntuación: ${score}`;
    timeElement.innerText = `Tiempo: ${time}`;
}
