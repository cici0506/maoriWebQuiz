// Class variables
const greetingInput = document.querySelector("#greetingInput");
const homepage = document.getElementById("homepage");
const questionsPage = document.getElementById("questionsPage");
const question = document.getElementById("question");
const beginner = document.getElementById("beginner");
const intermediate = document.getElementById("intermediate");
const advanced = document.getElementById("advanced");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const nextBtn = document.getElementById("nextBtn");
const answers = document.getElementById("answers");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");
const endScreen = document.getElementById("endPage");
const answerOptions = document.getElementById("answerOptions");
const restartBtn = document.getElementById("restartBtn");
var elem = document.getElementById("myBar");
var width = 1;
var id = null;
var click = false;
const maxQuestions = 15;

// Difficulty buttons
beginner.addEventListener("click", startBeginnerQuiz);
intermediate.addEventListener("click", startIntermediateQuiz);
advanced.addEventListener("click", startAdvancedQuiz);

// Question number and score
let iterationNumber;
let score = 0;

// Greet user with user input
function greeting() {
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + "," + " welcome to my Quiz!"
    greetingInput.style.display = "none"
    beginner.classList.remove('hide');
    intermediate.classList.remove('hide');
    advanced.classList.remove('hide');
    restartBtn.classList.add('hide');
    w3Container.classList.add('hide');
}

// Start Quiz
function startBeginnerQuiz() {
    console.log('yes');
    iterationNumber = 0;
    
    homepage.classList.add('hide');
    questionsPage.classList.remove('hide');
    difficulty.classList.add('hide');
    container.classList.remove('hide');
    restartBtn.classList.remove('hide');
    w3Container.classList.remove('hide');
    showQuestions();
}

function startIntermediateQuiz() {
    iterationNumber = 15;
    homepage.classList.add('hide');
    questionsPage.classList.remove('hide');
    difficulty.classList.add('hide');
    container.classList.remove('hide');
    restartBtn.classList.remove('hide');
    w3Container.classList.remove('hide');
    showQuestions();
}

function startAdvancedQuiz() {
    iterationNumber = 30;
    homepage.classList.add('hide');
    questionsPage.classList.remove('hide');
    difficulty.classList.add('hide');
    container.classList.remove('hide');
    restartBtn.classList.remove('hide');
    w3Container.classList.remove('hide');
    showQuestions();
}

// Display questions
function showQuestions() {
   let q = quizQuestions[iterationNumber];

   question.innerHTML = q.question;
   option1.innerHTML = q.option1;
   option2.innerHTML = q.option2;
   option3.innerHTML = q.option3;
   option4.innerHTML = q.option4;
};

function checkAnswer(answers){
    if(answers == quizQuestions[iterationNumber].correct) {
        console.log("correct");
        correctAnswer();
    } else {
        console.log("incorrect");
        incorrectAnswer();
    }

    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;
    document.getElementById("option4").disabled = true;

    nextBtn.classList.remove('hide');
};

    function correctAnswer(){
        correct.classList.remove('hide');
        score++;
    };
    
    function incorrectAnswer(){
        incorrect.classList.remove('hide');
    };

    function nextQuestion() {
        document.getElementById("option1").disabled = false;
        document.getElementById("option2").disabled = false;
        document.getElementById("option3").disabled = false;
        document.getElementById("option4").disabled = false;
    
        console.log('uh yea');
        iterationNumber++;
        nextBtn.classList.add('hide');
        incorrect.classList.add('hide');
        correct.classList.add('hide');
        if(iterationNumber == 15 || iterationNumber == 30 || iterationNumber == 45) {
            finishQuiz();
        }
        
        showQuestions();
    };

    // Progress
    function move() {
        if(!click){
        click = true;
        id = setInterval(function() {
        width++;
        if (width > 200) width = 10;
        if (width % 10 === 0){
        clearInterval(id);
        click = false;
        }
        elem.style.width = width + "%" + " / " + "150%";
        elem.innerHTML = width * 1  +"%" + " / " + "150%";
    }, 30);
    }
    };
    
    function finishQuiz() {
        console.log(score);
        console.log(iterationNumber);
        questionsPage.classList.add('hide');
        endScreen.classList.remove('hide');
        document.getElementById('score').innerHTML = score + "/15"; 
        endMsg();   
    };

    function endMsg() {
        container.classList.add('hide');
        if (score<=3) { 
            document.getElementById('endMsg').innerHTML = "Better luck next time!"
     } 
     
     else if (score <=7) {
         document.getElementById('endMsg').innerHTML = "GOOD TRY! Keep practicing!"
     } 
     
     else if (score <=11) { 
         document.getElementById('endMsg').innerHTML = "SO CLOSE! Don't give up!"
     }
     
     else { 
         document.getElementById('endMsg').innerHTML = "WELL DONE! You did amazing!"
     
     }
    };

    // Restart or reload the page
    restartBtn.addEventListener("click", function () {
        window.location.reload();
    });

    let quizQuestions = [
    // Beginner questions
    {
        question: "Question 1/15:What is the color of an apple in M??ori?",
        option1: "K??whai",
        option2: "Kikorangi",
        option3: "Whero",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 2/15: What is 'hello' in M??ori?",
        option1: "Kia ora",
        option2: "Ka pai",
        option3: "M??rena",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 3/15: What is 'New Zealand' in M??ori?",
        option1: "Kiwi",
        option2: "Aotearoa",
        option3: "T??maki-makaurau",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 4/15: What is 'sea' in M??ori?",
        option1: "Moana",
        option2: "Wai",
        option3: "Kirikiri",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 5/15: What is 'family' in M??ori?",
        option1: "Tu??hine",
        option2: "Wh??nau",
        option3: "T??ina",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 6/15: What is 'love' in M??ori?",
        option1: "Te aroha",
        option2: "Pai",
        option3: "Aroha",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 7/15: What is 'tribe' in M??ori?",
        option1: "M??t??waka",
        option2: "Iwi",
        option3: "Whare w??nanga",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 8/15: What is 'see you later' in M??ori?",
        option1: "Ka kite an??",
        option2: "Poroporoaki",
        option3: "Kia roa",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 9/15: What is 'door' in M??ori?",
        option1: "Whatitoka",
        option2: "K??waha",
        option3: "Tatau",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 10/15: What is 'welcome' in M??ori ?",
        option1: "Nau mai",
        option2: "T??n?? koutou",
        option3: "Whakaaetanga",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 11/15: What is 'food' in M??ori?",
        option1: "Kai",
        option2: "Wh??ngai ",
        option3: "Tunu kai",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 12/15: What is 'canoe' in M??ori?",
        option1: "W??ka",
        option2: "Poti",
        option3: "W??ka ama",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 13/15: What is 'mountain' in M??ori?",
        option1: "Teitei",
        option2: "t??hi",
        option3: "Maunga",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 14/15: What is 'good morning' in M??ori?",
        option1: "Ata",
        option2: "M??rena",
        option3: "Awatea",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 15/15: What is 'ten' in M??ori?",
        option1: "Tekau m?? toru",
        option2: "Whakatekau",
        option3: "Ono",
        option4: "None of the above",
        correct: "option4"
    },
    // Intermediate questions
    {
        question: "Question 1/15: What is'chief' in M??ori?",
        option1: "Tumuaki",
        option2: "Rangatira",
        option3: "K??pene",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 2/15: What is'sacred' in M??ori?",
        option1: "Manaakitia",
        option2: "Tapu",
        option3: "Puaroa",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 3/15: What is 'land' in M??ori  in M??ori?",
        option1: "Rohe",
        option2: "Whenua",
        option3: "Eka",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 4/15: What is 'greenstone' in M??ori?",
        option1: "K??k??riki",
        option2: "K??hatu",
        option3: "Pounamu",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 5/15: What is 'ancestor' in M??ori?",
        option1: "T??puna",
        option2: "Atua",
        option3: "Kaihanga",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 6/15: What is 'children' in M??ori?",
        option1: "Uri",
        option2: "Tamaiti",
        option3: "Iti",
        option4: "None of the above",
        correct: "option4"
    },{
        question: "Question 7/15: What is 'elder' in M??ori?",
        option1: "Kaum??tua",
        option2: "Kauheke",
        option3: "T??puna",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 8/15: What is 'prayer' in M??ori?",
        option1: "Wawao",
        option2: "Inoi",
        option3: "Karakia ",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 9/15: What is 'work' in M??ori?",
        option1: "Mahi",
        option2: "Ratonga",
        option3: "Whakamahi",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 10/15: What is 'stomach' in M??ori?",
        option1: "Wh??kau",
        option2: "Puku",
        option3: "Tia",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 11/15: What is 'water' in M??ori?",
        option1: "M??k??",
        option2: "Inu",
        option3: "Wai",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 12/15: What is 'saturday' in M??ori?",
        option1: "Okiokinga",
        option2: "Wiki",
        option3: "R??horoi",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 13/15: What is 'listen' in M??ori?",
        option1: "Whakarongo",
        option2: "Rongo",
        option3: "Whakapaepae",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 14/15: What is 'thank you' in M??ori?",
        option1: "Whakaae",
        option2: "Ng?? mihi",
        option3: "Maioha",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 15/15: What is 'talk' in M??ori?",
        option1: "K??rerorero",
        option2: "Kohukohu",
        option3: "K??rero",
        option4: "None of the above",
        correct: "option3"
    },
    // Advanced questions
    {
        question: "Question 1/15: What is 'genealogy' in M??ori?",
        option1: "Takenga",
        option2: "Taotahi",
        option3: "Whakapapa",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 2/15: What is 'aeroplane' in M??ori?",
        option1: "Rereangi",
        option2: "Hau",
        option3: "Tere",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 3/15: What is 'birthday' in M??ori?",
        option1: "Wh??nautanga",
        option2: "Huritau",
        option3: "Whakanui",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 4/15: What is 'thunderstorm' in M??ori?",
        option1: "Rautupu",
        option2: "??wh??",
        option3: "Ua",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 5/15: What is 'sincerity' in M??ori?",
        option1: "Ng??kau pono",
        option2: "Pono",
        option3: "Houtupu",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 6/15: What is 'november' in M??ori?",
        option1: "Maramataka",
        option2: "Marama",
        option3: "Whiringa-??-rangi",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 7/15: What is 'west' in M??ori?",
        option1: "Tohutohu",
        option2: "Raki",
        option3: "K??pehu",
        option4: "None of the above",
        correct: "option4"
    },{
        question: "Question 8/15: What is 'earth' in M??ori?",
        option1: "Papat????nuku",
        option2: "Aorangi",
        option3: "Ao",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 9/15: What is 'handkerchief' in M??ori?",
        option1: "Ringa",
        option2: "Aikiha",
        option3: "Tauera",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 10/15: What is 'star' in M??ori?",
        option1: "Whet??",
        option2: "R??",
        option3: "Maramara",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 11/15: What is 'dance' in M??ori?",
        option1: "Kanikani",
        option2: "Hari",
        option3: "Haka",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 12/15: What is 'authority' in M??ori?",
        option1: "K??wanatanga",
        option2: "P??k??rero",
        option3: "Mana",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 13/15: What is 'treasure' in M??ori?",
        option1: "Puipuiaki",
        option2: "Kaing??kau",
        option3: "Puiaki",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 14/15: What is 'confiscate' in M??ori?",
        option1: "Raupatu",
        option2: "Muru",
        option3: "Murunga",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 15/15: What is 'guests' in M??ori?",
        option1: "Kaihoko",
        option2: "Manuhiri",
        option3: "Kiritaki",
        option4: "None of the above",
        correct: "option2"
    }];