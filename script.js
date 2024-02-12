const questions = [
	{
		"Technology": [
			{
				"question": "Was ist die Hauptplatine eines Computers?",
				"answer_1": "RAM",
				"answer_2": "GPU",
				"answer_3": "Motherboard",
				"answer_4": "CPU",
				"correct_answer": 3
			},
			{
				"question": "Welches Element ist für die Übertragung von Daten über das Internet verantwortlich?",
				"answer_1": "Router",
				"answer_2": "Modem",
				"answer_3": "Switch",
				"answer_4": "Firewall",
				"correct_answer": 1
			},
			{
				"question": "Was ist ein 'BIOS'?",
				"answer_1": "Basic Input/Output System",
				"answer_2": "Binary Input/Output System",
				"answer_3": "Basic Internal Operating System",
				"answer_4": "Binary Internal Operating System",
				"correct_answer": 1
			},
			{
				"question": "In welchem Jahr wurde das erste iPhone veröffentlicht?",
				"answer_1": "2005",
				"answer_2": "2007",
				"answer_3": "2010",
				"answer_4": "2012",
				"correct_answer": 2
			},
			{
				"question": "Welches der folgenden ist ein Eingabegerät?",
				"answer_1": "Monitor",
				"answer_2": "Tastatur",
				"answer_3": "Drucker",
				"answer_4": "Lautsprecher",
				"correct_answer": 2
			},
			{
				"question": "Welche Dateiendung haben ausführbare Dateien unter Windows?",
				"answer_1": ".exe",
				"answer_2": ".docx",
				"answer_3": ".txt",
				"answer_4": ".mp3",
				"correct_answer": 1
			},
			{
				"question": "Was bedeutet 'CPU'?",
				"answer_1": "Computer Performance Unit",
				"answer_2": "Central Processing Unit",
				"answer_3": "Central Performance Unit",
				"answer_4": "Computer Processing Unit",
				"correct_answer": 2
			}
		]
	},
	{
		"Science": [
			{
				"question": "Was ist die chemische Formel für Wasser?",
				"answer_1": "NaCl",
				"answer_2": "CO₂",
				"answer_3": "H₂O",
				"answer_4": "CH₄",
				"correct_answer": 3
			},
			{
				"question": "Wer publizierte Werke zur Relativitätstheorie?",
				"answer_1": "Galileo Galilei",
				"answer_2": "Isaac Newton",
				"answer_3": "Albert Einstein",
				"answer_4": "Niels Bohr",
				"correct_answer": 3
			},
			{
				"question": "Welches der folgenden Planeten ist der kleinste im Sonnensystem?",
				"answer_1": "Mars",
				"answer_2": "Venus",
				"answer_3": "Jupiter",
				"answer_4": "Merkur",
				"correct_answer": 4
			},
			{
				"question": "Welches Element bildet die Grundlage für organische Chemie?",
				"answer_1": "Kohlenstoff",
				"answer_2": "Eisen",
				"answer_3": "Sauerstoff",
				"answer_4": "Gold",
				"correct_answer": 1
			},
			{
				"question": "Wer hat die Schwerkraftgesetze formuliert?",
				"answer_1": "Isaac Newton",
				"answer_2": "Galileo Galilei",
				"answer_3": "Albert Einstein",
				"answer_4": "Johannes Kepler",
				"correct_answer": 1
			},
			{
				"question": "Was ist das kleinste bekannte Teilchen?",
				"answer_1": "Atom",
				"answer_2": "Molekül",
				"answer_3": "String",
				"answer_4": "Quark",
				"correct_answer": 4
			},
			{
				"question": "Wie lautet die Formel für die Berechnung der Fläche eines Kreises?",
				"answer_1": "πr",
				"answer_2": "2πr",
				"answer_3": "πr²",
				"answer_4": "2πr²",
				"correct_answer": 3
			}
		]
	},
	{
		"Video Games": [
			{
				"question": "Welches der folgenden Spiele wurde von Nintendo entwickelt?",
				"answer_1": "Super Mario Bros",
				"answer_2": "The Witcher 3: Wild Hunt",
				"answer_3": "Final Fantasy VII",
				"answer_4": "Minecraft",
				"correct_answer": 1
			},
			{
				"question": "In welchem Jahr wurde das Spiel 'The Legend of Zelda: Ocarina of Time' veröffentlicht?",
				"answer_1": "1998",
				"answer_2": "2001",
				"answer_3": "1995",
				"answer_4": "2000",
				"correct_answer": 1
			},
			{
				"question": "Welches der folgenden Spiele wurde von Rockstar Games entwickelt?",
				"answer_1": "Red Dead Redemption 2",
				"answer_2": "Minecraft",
				"answer_3": "Final Fantasy VII",
				"answer_4": "Assassin's Creed Odyssey",
				"correct_answer": 1
			},
			{
				"question": "Wer ist der Hauptcharakter in 'The Witcher 3: Wild Hunt'?",
				"answer_1": "Geralt von Riva",
				"answer_2": "Nathan Drake",
				"answer_3": "Arthur Morgan",
				"answer_4": "Link",
				"correct_answer": 1
			},
			{
				"question": "In welchem Jahr wurde das Spiel 'Final Fantasy VII' veröffentlicht?",
				"answer_1": "1997",
				"answer_2": "2002",
				"answer_3": "1995",
				"answer_4": "2000",
				"correct_answer": 1
			},
			{
				"question": "Welches der folgenden Spiele wurde von Naughty Dog entwickelt?",
				"answer_1": "The Last of Us",
				"answer_2": "The Witcher 3: Wild Hunt",
				"answer_3": "Dark Souls III",
				"answer_4": "Super Mario Bros",
				"correct_answer": 1
			},
			{
				"question": "Wie viele Hauptcharaktere gibt es in 'Grand Theft Auto V'?",
				"answer_1": "1",
				"answer_2": "2",
				"answer_3": "3",
				"answer_4": "4",
				"correct_answer": 3
			},
			{
				"question": "In welchem Jahr wurde das Spiel 'Minecraft' veröffentlicht?",
				"answer_1": "2007",
				"answer_2": "2009",
				"answer_3": "2011",
				"answer_4": "2013",
				"correct_answer": 2
			}
		]
	},
	{
		"Programming": [
			{
				"question": "Was bedeutet 'HTML'?",
				"answer_1": "Hyper Text Markup Language",
				"answer_2": "Hyperlinks and Text Markup Language",
				"answer_3": "Home Tool Markup Language",
				"answer_4": "Hyper Text Markup Leveler",
				"correct_answer": 1
			},
			{
				"question": "Was ist ein 'Array' in der Programmierung?",
				"answer_1": "Eine Ansammlung von Daten",
				"answer_2": "Einzelne Daten",
				"answer_3": "Eine Variable",
				"answer_4": "Ein Objekt",
				"correct_answer": 1
			},
			{
				"question": "Was ist 'Python'?",
				"answer_1": "Eine Schlange",
				"answer_2": "Ein Autohersteller",
				"answer_3": "Eine Programmiersprache",
				"answer_4": "Ein Musikinstrument",
				"correct_answer": 3
			},
			{
				"question": "Was ist ein 'Loop' in der Programmierung?",
				"answer_1": "Eine Schleife",
				"answer_2": "Ein Link",
				"answer_3": "Eine Variable",
				"answer_4": "Ein Algorithmus",
				"correct_answer": 1
			},
			{
				"question": "Was ist die Aufgabe eines 'Compiler'?",
				"answer_1": "Er führt den geschriebenen Code aus",
				"answer_2": "Er übersetzt den Quellcode in Maschinencode",
				"answer_3": "Er testet den Code auf Fehler",
				"answer_4": "Er optimiert den Code",
				"correct_answer": 2
			},
			{
				"question": "Was ist 'JavaScript'?",
				"answer_1": "Eine Kaffeemaschine",
				"answer_2": "Eine Programmiersprache",
				"answer_3": "Ein Schiff",
				"answer_4": "Ein Sport",
				"correct_answer": 2
			},
			{
				"question": "Welche Funktion hat ein 'Debugger' in der Programmierung?",
				"answer_1": "Er schreibt den Code",
				"answer_2": "Er behebt Fehler im Code",
				"answer_3": "Er kompiliert den Code",
				"answer_4": "Er formatiert den Code",
				"correct_answer": 2
			}
		]
	},
	{
		"Cyber": [
			{
				"question": "Was bedeutet 'SSL'?",
				"answer_1": "Secure Socket Layer",
				"answer_2": "Server Software Language",
				"answer_3": "System Security Level",
				"answer_4": "Simple Service Locator",
				"correct_answer": 1
			},
			{
				"question": "Was ist ein 'Phishing-Angriff'?",
				"answer_1": "Ein Angriff durch gefälschte E-Mails oder Websites, um vertrauliche Informationen zu stehlen",
				"answer_2": "Ein Angriff durch Ransomware",
				"answer_3": "Ein Angriff durch Distributed Denial of Service (DDoS)",
				"answer_4": "Ein Angriff durch Malware",
				"correct_answer": 1
			},
			{
				"question": "Was ist ein 'VPN'?",
				"answer_1": "Ein Virtuelles Privates Netzwerk",
				"answer_2": "Ein Virtueller Prozessor-Node",
				"answer_3": "Ein Virtueller Personal Navigator",
				"answer_4": "Ein Virtuelles Phasennetzwerk",
				"correct_answer": 1
			},
			{
				"question": "Was ist 'Verschlüsselung'?",
				"answer_1": "Ein Prozess, bei dem Daten in ein unleserliches Format umgewandelt werden, um sie vor unbefugtem Zugriff zu schützen",
				"answer_2": "Ein Schutzmechanismus vor Viren",
				"answer_3": "Ein Prozess, bei dem Daten in verschiedene Formate konvertiert werden",
				"answer_4": "Ein physischer Schutzmechanismus für Hardware",
				"correct_answer": 1
			},
			{
				"question": "Was ist 'Zwei-Faktor-Authentifizierung'?",
				"answer_1": "Eine Sicherheitsmethode, bei der zwei separate Authentifizierungsfaktoren erforderlich sind, um auf ein Konto zuzugreifen",
				"answer_2": "Eine Methode zur Identifizierung von Netzwerkangriffen",
				"answer_3": "Eine Methode zur Verschlüsselung von Daten",
				"answer_4": "Eine Methode zur Sicherung von physischen Standorten",
				"correct_answer": 1
			},
			{
				"question": "Was ist 'Malware'?",
				"answer_1": "Schädliche Software, die entwickelt wurde, um Computer oder Daten zu stören, zu beschädigen oder auf sie zuzugreifen",
				"answer_2": "Ein Computersystem, das ungewöhnliches Verhalten aufweist",
				"answer_3": "Eine Methode zur Datenübertragung über Netzwerke",
				"answer_4": "Ein physischer Schutzmechanismus für Computer",
				"correct_answer": 1
			},
			{
				"question": "Was ist ein 'Zero-Day-Angriff'?",
				"answer_1": "Ein Angriff auf eine Sicherheitslücke, die bereits bekannt ist und gepatcht wurde",
				"answer_2": "Ein Angriff auf eine Sicherheitslücke, die erst am Tag des Angriffs bekannt wird",
				"answer_3": "Ein Angriff auf ein physisches Gebäude oder eine Einrichtung",
				"answer_4": "Ein Angriff auf ein drahtloses Netzwerk",
				"correct_answer": 2
			}
		]
	}
]

let currentCategory = -1;
let currentQuestionNumber = 0;
let correctAnswers = 0;
let audioSuccess = new Audio('audio/goodresult-82807.mp3');
let audioFail = new Audio('audio/invalid-selection-39351.mp3');

function init() {
    showCategories();
    showQuestion();
}

function showCategories() {
    document.getElementById('categories').innerHTML = '';
    for (i = 0; i < questions.length; i++) {
        document.getElementById('categories').innerHTML += /*html*/`
            <li class="nav-item justify-content-between">
                <a class="nav-link" aria-current="page" href="#" id="category${i}" onclick="startCategory(${i})">${Object.keys(questions[i])}</a>
            </li>
        `
    }
}

function startCategory(i) {
    currentCategory = i;
    for (j = 0; j < questions.length; j++) {
        document.getElementById(`category${j}`).classList.remove(`active`);
    }
    document.getElementById('questionsAmount').innerHTML = questions[currentCategory][`${Object.keys(questions[currentCategory])}`].length;
    showQuestion();
}

function showQuestion() {
    if (currentCategory == -1) {
        document.getElementById('answer-area').classList.add('d-none');
        document.getElementById('questionFooter').classList.add('d-none');
    }
    else {
        document.getElementById('answer-area').classList.remove('d-none');
        document.getElementById('questionFooter').classList.remove('d-none');
        document.getElementById(`category${currentCategory}`).classList.add(`active`);
        if (lastQuestion()) {
            completionHtml();
        }
        else {
            insertQuestion();
        }
    }
}

function lastQuestion() {
    if (currentQuestionNumber >= questions[currentCategory][`${Object.keys(questions[currentCategory])}`].length) {
        return true;
    }
}

function insertQuestion() {
    // const keyName = Object.keys(questions[currentCategory]);
    // currentQuestion = questions[currentCategory].keyName[currentQuestionNumber];
    // currentCategoryQuestions = questions[currentCategory];
    currentQuestion = questions[currentCategory][`${Object.keys(questions[currentCategory])}`][currentQuestionNumber];
    document.getElementById('question').innerHTML = `${currentQuestion.question}`;
    document.getElementById('answer_1').innerHTML = `${currentQuestion.answer_1}`;
    document.getElementById('answer_2').innerHTML = `${currentQuestion.answer_2}`;
    document.getElementById('answer_3').innerHTML = `${currentQuestion.answer_3}`;
    document.getElementById('answer_4').innerHTML = `${currentQuestion.answer_4}`;
    document.getElementById('currentQuestion').innerHTML = currentQuestionNumber + 1;
}

function answering(choice) {
    let currentQuestion = questions[currentCategory][`${Object.keys(questions[currentCategory])}`][currentQuestionNumber];
    if (currentQuestion.correct_answer == choice) {
        correctAnswer(choice);
    }
    else {
        wrongAnswer(choice);
    }
    init();
    document.getElementById('buttonNext').disabled = false;
}

function correctAnswer(choice) {
    document.getElementById(`answer_${choice}`).parentElement.classList.add('bg-success', 'bg-gradient');
    document.getElementById(`answer_${choice}`).parentElement.classList.remove('bg-transparent');
    audioSuccess.play();
    correctAnswers++;
}

function wrongAnswer(choice) {
    let currentQuestion = questions[currentCategory][`${Object.keys(questions[currentCategory])}`][currentQuestionNumber];
    document.getElementById(`answer_${choice}`).parentElement.classList.add('bg-danger', 'bg-gradient');
    document.getElementById(`answer_${choice}`).parentElement.classList.remove('bg-transparent');
    document.getElementById(`answer_${currentQuestion.correct_answer}`).parentElement.classList.add('bg-success', 'bg-gradient');
    document.getElementById(`answer_${currentQuestion.correct_answer}`).parentElement.classList.remove('bg-transparent');
    audioFail.play();
}

function nextQuestion() {
    currentQuestionNumber++;
    document.getElementById('buttonNext').disabled = true;
    for (i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentElement.classList.remove('bg-success', 'bg-danger', 'bg-gradient');
        document.getElementById(`answer_${i}`).parentElement.classList.add('bg-transparent');
    }
    progressBarUpdate();
    init();
}

function progressBarUpdate() {
    progressbar = document.getElementById('progressbar');
    progress = Number(currentQuestionNumber / questions[currentCategory][`${Object.keys(questions[currentCategory])}`].length * 100).toLocaleString("de-DE", { maximumFractionDigits: "0" });
    progressbar.innerHTML = `${progress} %`
    progressbar.style.width = `${progress.trim()}%`
}

function completionHtml() {
    document.getElementById('cardArea').innerHTML =  /*html*/`
        <div class="d-flex flex-column align-items-center gap-3">
            <img src="img/brain-result.png" alt="Ergebnis-Grafik, Kopf mit Zahnrädern">
            <p><b>QUIZ COMPLETE!</b></p>
            <div class="d-flex gap-3">
                <p><b>YOUR SCORE</b></p><p><b>${correctAnswers}/${questions[currentCategory][`${Object.keys(questions[currentCategory])}`].length}</b></p>
            </div>
            <button class="btn btn-primary">SHARE</button>
            <a href="index.html" class="link-primary link-underline-opacity-0">REPLAY</a>
        </div>
        `
}