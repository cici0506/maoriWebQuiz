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

beginner.addEventListener("click", startBeginnerQuiz);
intermediate.addEventListener("click", startIntermediateQuiz);
advanced.addEventListener("click", startAdvancedQuiz);

let iterationNumber, lastQuestion;
lastQuestion = lastQuestion - 1;
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
        question: "Question 1/15:What is the color of an apple in Māori?",
        option1: "Kōwhai",
        option2: "Kikorangi",
        option3: "Whero",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 2/15: What is 'hello' in Māori?",
        option1: "Kia ora",
        option2: "Ka pai",
        option3: "Mōrena",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 3/15: What is 'New Zealand' in Māori?",
        option1: "Kiwi",
        option2: "Aotearoa",
        option3: "Tāmaki-makaurau",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 4/15: What is 'sea' in Māori?",
        option1: "Moana",
        option2: "Wai",
        option3: "Kirikiri",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 5/15: What is 'family' in Māori?",
        option1: "Tuāhine",
        option2: "Whānau",
        option3: "Tēina",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 6/15: What is 'love' in Māori?",
        option1: "Te aroha",
        option2: "Pai",
        option3: "Aroha",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 7/15: What is 'tribe' in Māori?",
        option1: "Mātāwaka",
        option2: "Iwi",
        option3: "Whare wānanga",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 8/15: What is 'see you later' in Māori?",
        option1: "Ka kite anō",
        option2: "Poroporoaki",
        option3: "Kia roa",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 9/15: What is 'door' in Māori?",
        option1: "Whatitoka",
        option2: "Kūwaha",
        option3: "Tatau",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 10/15: What is 'welcome' in Māori ?",
        option1: "Nau mai",
        option2: "Tēnā koutou",
        option3: "Whakaaetanga",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 11/15: What is 'food' in Māori?",
        option1: "Kai",
        option2: "Whāngai ",
        option3: "Tunu kai",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 12/15: What is 'canoe' in Māori?",
        option1: "Wāka",
        option2: "Poti",
        option3: "Wāka ama",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 13/15: What is 'mountain' in Māori?",
        option1: "Teitei",
        option2: "tīhi",
        option3: "Maunga",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 14/15: What is 'good morning' in Māori?",
        option1: "Ata",
        option2: "Mōrena",
        option3: "Awatea",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 15/15: What is 'ten' in Māori?",
        option1: "Tekau mā toru",
        option2: "Whakatekau",
        option3: "Ono",
        option4: "None of the above",
        correct: "option4"
    },
    // Intermediate questions
    {
        question: "Question 1/15: What is'chief' in Māori?",
        option1: "Tumuaki",
        option2: "Rangatira",
        option3: "Kāpene",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 2/15: What is'sacred' in Māori?",
        option1: "Manaakitia",
        option2: "Tapu",
        option3: "Puaroa",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 3/15: What is 'land' in Māori  in Māori?",
        option1: "Rohe",
        option2: "Whenua",
        option3: "Eka",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 4/15: What is 'greenstone' in Māori?",
        option1: "Kākāriki",
        option2: "Kōhatu",
        option3: "Pounamu",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 5/15: What is 'ancestor' in Māori?",
        option1: "Tūpuna",
        option2: "Atua",
        option3: "Kaihanga",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 6/15: What is 'children' in Māori?",
        option1: "Uri",
        option2: "Tamaiti",
        option3: "Iti",
        option4: "None of the above",
        correct: "option4"
    },{
        question: "Question 7/15: What is 'elder' in Māori?",
        option1: "Kaumātua",
        option2: "Kauheke",
        option3: "Tūpuna",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 8/15: What is 'prayer' in Māori?",
        option1: "Wawao",
        option2: "Inoi",
        option3: "Karakia ",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 9/15: What is 'work' in Māori?",
        option1: "Mahi",
        option2: "Ratonga",
        option3: "Whakamahi",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 10/15: What is 'stomach' in Māori?",
        option1: "Whēkau",
        option2: "Puku",
        option3: "Tia",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 11/15: What is 'water' in Māori?",
        option1: "Mākū",
        option2: "Inu",
        option3: "Wai",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 12/15: What is 'saturday' in Māori?",
        option1: "Okiokinga",
        option2: "Wiki",
        option3: "Rāhoroi",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 13/15: What is 'listen' in Māori?",
        option1: "Whakarongo",
        option2: "Rongo",
        option3: "Whakapaepae",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 14/15: What is 'thank you' in Māori?",
        option1: "Whakaae",
        option2: "Ngā mihi",
        option3: "Maioha",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 15/15: What is 'talk' in Māori?",
        option1: "Kōrerorero",
        option2: "Kohukohu",
        option3: "Kōrero",
        option4: "None of the above",
        correct: "option3"
    },
    // Advanced questions
    {
        question: "Question 1/15: What is 'genealogy' in Māori?",
        option1: "Takenga",
        option2: "Taotahi",
        option3: "Whakapapa",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 2/15: What is 'aeroplane' in Māori?",
        option1: "Rereangi",
        option2: "Hau",
        option3: "Tere",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 3/15: What is 'birthday' in Māori?",
        option1: "Whānautanga",
        option2: "Huritau",
        option3: "Whakanui",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 4/15: What is 'thunderstorm' in Māori?",
        option1: "Rautupu",
        option2: "āwhā",
        option3: "Ua",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 5/15: What is 'sincerity' in Māori?",
        option1: "Ngākau pono",
        option2: "Pono",
        option3: "Houtupu",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 6/15: What is 'november' in Māori?",
        option1: "Maramataka",
        option2: "Marama",
        option3: "Whiringa-ā-rangi",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 7/15: What is 'west' in Māori?",
        option1: "Tohutohu",
        option2: "Raki",
        option3: "Kāpehu",
        option4: "None of the above",
        correct: "option4"
    },{
        question: "Question 8/15: What is 'earth' in Māori?",
        option1: "Papatūānuku",
        option2: "Aorangi",
        option3: "Ao",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 9/15: What is 'handkerchief' in Māori?",
        option1: "Ringa",
        option2: "Aikiha",
        option3: "Tauera",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 10/15: What is 'star' in Māori?",
        option1: "Whetū",
        option2: "Rā",
        option3: "Maramara",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 11/15: What is 'dance' in Māori?",
        option1: "Kanikani",
        option2: "Hari",
        option3: "Haka",
        option4: "None of the above",
        correct: "option2"
    },{
        question: "Question 12/15: What is 'authority' in Māori?",
        option1: "Kāwanatanga",
        option2: "Pūkōrero",
        option3: "Mana",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 13/15: What is 'treasure' in Māori?",
        option1: "Puipuiaki",
        option2: "Kaingākau",
        option3: "Puiaki",
        option4: "None of the above",
        correct: "option1"
    },{
        question: "Question 14/15: What is 'confiscate' in Māori?",
        option1: "Raupatu",
        option2: "Muru",
        option3: "Murunga",
        option4: "None of the above",
        correct: "option3"
    },{
        question: "Question 15/15: What is 'guests' in Māori?",
        option1: "Kaihoko",
        option2: "Manuhiri",
        option3: "Kiritaki",
        option4: "None of the above",
        correct: "option2"
    }];