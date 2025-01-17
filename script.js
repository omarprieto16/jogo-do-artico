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
    },
    {
        question: "¿Qué animal marino grande vive en el Ártico?",
        answers: ["Ballena", "Tiburón", "Delfín", "Pulpo"],
        correct: "Ballena"
    },
    {
        question: "¿Qué pueblo indígena vive en el Ártico?",
        answers: ["Inuit", "Mayas", "Incas", "Aztecas"],
        correct: "Inuit"
    },
    {
        question: "¿Qué significa 'Ártico' en griego?",
        answers: ["Oso", "Frío", "Norte", "Hielo"],
        correct: "Oso"
    },
    {
        question: "¿Qué animal del Ártico cambia de color en invierno?",
        answers: ["Zorro ártico", "Oso polar", "Foca", "Pingüino"],
        correct: "Zorro ártico"
    },
    {
        question: "¿Cuántos meses del año el sol no se pone en el Ártico?",
        answers: ["3 meses", "6 meses", "9 meses", "12 meses"],
        correct: "3 meses"
    },
    {
        question: "¿Qué animal del Ártico tiene colmillos largos?",
        answers: ["Morsa", "Foca", "Pingüino", "Ballena"],
        correct: "Morsa"
    },
    {
        question: "¿Qué tipo de hielo flota en el océano Ártico?",
        answers: ["Iceberg", "Glaciar", "Nieve", "Escarcha"],
        correct: "Iceberg"
    },
    {
        question: "¿Qué animal del Ártico puede nadar y caminar?",
        answers: ["Oso polar", "Ballena", "Pingüino", "Foca"],
        correct: "Oso polar"
    },
    {
        question: "¿Qué instrumento tradicional usan los Inuit para cazar?",
        answers: ["Arpón", "Arco y flecha", "Red", "Trampa"],
        correct: "Arpón"
    },
    {
        question: "¿Qué tipo de casa tradicional construyen los Inuit?",
        answers: ["Iglú", "Tipi", "Cabaña", "Yurta"],
        correct: "Iglú"
    },
    {
        question: "¿Qué tipo de hielo cubre la mayor parte del Ártico?",
        answers: ["Hielo marino", "Hielo terrestre", "Hielo glacial", "Hielo de agua dulce"],
        correct: "Hielo marino"
    },
    {
        question: "¿Cuál es el nombre del mar situado al norte de Alaska?",
        answers: ["Mar de Beaufort", "Mar del Norte", "Mar Báltico", "Mar Rojo"],
        correct: "Mar de Beaufort"
    },
    {
        question: "¿Qué país tiene la mayor parte del territorio dentro del Círculo Polar Ártico?",
        answers: ["Rusia", "Estados Unidos", "Dinamarca", "Suecia"],
        correct: "Rusia"
    },
    {
        question: "¿Qué tipo de aves migran al Ártico para anidar en verano?",
        answers: ["Gaviotas", "Pingüinos", "Aves marinas", "Patos"],
        correct: "Aves marinas"
    },
    {
        question: "¿Cuál es la capital de Groenlandia?",
        answers: ["Nuuk", "Reykjavik", "Oslo", "Helsinki"],
        correct: "Nuuk"
    },
    {
        question: "¿Qué es el permafrost?",
        answers: ["Una capa de suelo permanentemente congelada", "Un tipo de ave ártica", "Un fenómeno meteorológico", "Una planta ártica"],
        correct: "Una capa de suelo permanentemente congelada"
    },
    {
        question: "¿Qué explorador es famoso por llegar al Polo Norte en 1909?",
        answers: ["Robert Peary", "Christopher Columbus", "Marco Polo", "James Cook"],
        correct: "Robert Peary"
    },
    {
        question: "¿Qué planta puede encontrarse en el Ártico?",
        answers: ["Musgo", "Árboles de pino", "Orquídeas", "Cactus"],
        correct: "Musgo"
    },
    {
        question: "¿Qué es la 'Noche Polar'?",
        answers: ["Un período de oscuridad continua durante el invierno", "Un fenómeno de aurora boreal", "Un festival de invierno", "Un tipo de tormenta ártica"],
        correct: "Un período de oscuridad continua durante el invierno"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let time = 60;
let timer;
let usedQuestions = [];

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
    usedQuestions = [];
    updateScoreAndTime();
    setNextQuestion();
    timer = setInterval(updateTime, 1000);
}

function setNextQuestion() {
    resetState();
    if (usedQuestions.length === questions.length) {
        usedQuestions = []; // Reset if all questions have been used
    }
    let questionIndex;
    do {
        questionIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(questionIndex));
    
    usedQuestions.push(questionIndex);
    showQuestion(questions[questionIndex]);
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
