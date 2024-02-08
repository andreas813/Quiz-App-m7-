const questions = [
    // {
    //     "question": "Was ist die Hauptplatine eines Computers?",
    //     "answer_1": "RAM",
    //     "answer_2": "GPU",
    //     "answer_3": "Motherboard",
    //     "answer_4": "CPU",
    //     "correct_answer": 3
    // },
    // {
    //     "question": "Welches Element ist für die Übertragung von Daten über das Internet verantwortlich?",
    //     "answer_1": "Router",
    //     "answer_2": "Modem",
    //     "answer_3": "Switch",
    //     "answer_4": "Firewall",
    //     "correct_answer": 1
    // },
    // {
    //     "question": "Was ist die chemische Formel für Wasser?",
    //     "answer_1": "NaCl",
    //     "answer_2": "CO₂",
    //     "answer_3": "H₂O",
    //     "answer_4": "CH₄",
    //     "correct_answer": 3
    // },
    // {
    //     "question": "Wer hat die Relativitätstheorie entwickelt?",
    //     "answer_1": "Galileo Galilei",
    //     "answer_2": "Isaac Newton",
    //     "answer_3": "Albert Einstein",
    //     "answer_4": "Niels Bohr",
    //     "correct_answer": 3
    // },
    // {
    //     "question": "Welches der folgenden Spiele wurde von Bethesda Softworks entwickelt?",
    //     "answer_1": "Red Dead Redemption 2",
    //     "answer_2": "The Elder Scrolls V: Skyrim",
    //     "answer_3": "The Witcher 3: Wild Hunt",
    //     "answer_4": "Grand Theft Auto V",
    //     "correct_answer": 2
    // },
    // {
    //     "question": "Wer ist der Schöpfer des Spiels 'Minecraft'?",
    //     "answer_1": "Shigeru Miyamoto",
    //     "answer_2": "Markus Persson (Notch)",
    //     "answer_3": "Gabe Newell",
    //     "answer_4": "Hideo Kojima",
    //     "correct_answer": 2
    // },
    // {
    //     "question": "Was ist das kleinste Teilchen eines chemischen Elements?",
    //     "answer_1": "Elektron",
    //     "answer_2": "Molekül",
    //     "answer_3": "Proton",
    //     "answer_4": "Atom",
    //     "correct_answer": 1
    // },
    // {
    //     "question": "Welcher der folgenden Planeten ist der kleinste im Sonnensystem?",
    //     "answer_1": "Mars",
    //     "answer_2": "Venus",
    //     "answer_3": "Jupiter",
    //     "answer_4": "Merkur",
    //     "correct_answer": 4
    // },
    {
        "question": "Welches der folgenden Spiele wurde von CD Projekt RED entwickelt?",
        "answer_1": "Assassin's Creed Odyssey",
        "answer_2": "The Witcher 3: Wild Hunt",
        "answer_3": "Dark Souls III",
        "answer_4": "Final Fantasy XV",
        "correct_answer": 2
    }
]

let currentQuestionNumber = 0;

function init() {
    document.getElementById('questionsAmount').innerHTML = questions.length;
    document.getElementById('currentQuestion').innerHTML = currentQuestionNumber + 1;
    showQuestion();
}

function showQuestion() {
    if (currentQuestionNumber >= questions.length) {
        document.getElementById('cardArea').innerHTML = completionHtml();
    }
    else {
        let currentQuestion = questions[currentQuestionNumber];
        document.getElementById('question').innerHTML = `${currentQuestion.question}`;
        document.getElementById('answer_1').innerHTML = `${currentQuestion.answer_1}`;
        document.getElementById('answer_2').innerHTML = `${currentQuestion.answer_2}`;
        document.getElementById('answer_3').innerHTML = `${currentQuestion.answer_3}`;
        document.getElementById('answer_4').innerHTML = `${currentQuestion.answer_4}`;
    }
}

function answering(choice) {
    let currentQuestion = questions[currentQuestionNumber];
    if (currentQuestion.correct_answer == choice) {
        document.getElementById(`answer_${choice}`).parentElement.classList.add('bg-success', 'bg-gradient');
        document.getElementById('buttonNext').disabled = false;
        init();
    }
    else {
        // currentQuestionNumber = 1;
        document.getElementById(`answer_${choice}`).parentElement.classList.add('bg-danger', 'bg-gradient');
        document.getElementById(`answer_${currentQuestion.correct_answer}`).parentElement.classList.add('bg-success', 'bg-gradient');
        init();
    }

}

function nextQuestion() {
    currentQuestionNumber++;
    document.getElementById('buttonNext').disabled = true;
    for (i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentElement.classList.remove('bg-success', 'bg-danger', 'bg-gradient');
    }
    init();
}

function completionHtml() {
    return /*html*/`
        <div class="d-flex flex-column align-items-center gap-3">
            <img src="img/brain-result.png" alt="Ergebnis-Grafik, Kopf mit Zahnrädern">
            <p><b>QUIZ COMPLETE!</b></p>
            <div class="d-flex gap-3">
                <p><b>YOUR SCORE</b></p>
                <p><b>${questions.length}/${questions.length}</b></p>
            </div>
            <button class="btn btn-primary">SHARE</button>
            <a href="index.html" class="link-primary link-underline-opacity-0">REPLAY</a>
        </div>
        `
}