// Global variables
const inputName = document.querySelector("#inputName");
const username = document.querySelector("#username");
const buttonSave = document.querySelector("#save");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const randomResult = document.querySelector("#random");
const usersChoiceResult = document.querySelector("#user-choice");
const message = document.querySelector("#message");
const userScores = document.querySelector("#user-scores");
const compScores = document.querySelector("#comp-scores");
const resetButton = document.querySelector("#reset");
const image = document.querySelector("img");
let randomNum = 0;
let name = "User";
let usersChoice = "";
let userScoresCounter = 0;
let compScoresCounter = 0;

// Event listener for save-button for saving username
buttonSave.addEventListener("click", function(){
    name = inputName.value;
    if (name == ""){
        alert("You have to enter your name!");
    }
    else {
        username.innerText = name;
        inputName.value = "";
        buttonSave.setAttribute("disabled", true);
        buttonSave.setAttribute("class", "disabled");
        buttonSave.setAttribute("class", "buttons");
    }
});

// Event listener for choice-button "rock" (user's choice)
rockButton.addEventListener("click", function(){
    randomNum = Math.floor(Math.random() * 3) + 1;
    usersChoice = "ROCK";
    usersChoiceResult.innerText = usersChoice;
    checkNumber(randomNum);
    compareResults(randomNum, usersChoice);
});

// Event listener for choice-button "paper" (user's choice)
paperButton.addEventListener("click", function(){
    randomNum = Math.floor(Math.random() * 3) + 1;
    usersChoice = "PAPER";
    usersChoiceResult.innerText = usersChoice;
    checkNumber(randomNum);
    compareResults(randomNum, usersChoice);
});

// Event listener for choice-button "scissors" (user's choice)
scissorsButton.addEventListener("click", function(){
    randomNum = Math.floor(Math.random() * 3) + 1;
    usersChoice = "SCISSORS";
    usersChoiceResult.innerText = usersChoice;
    checkNumber(randomNum);
    compareResults(randomNum, usersChoice);
});

// Function for checking random result and setting it in DOM
function checkNumber (number) {
    if (number == 1) {
        randomResult.innerText = "ROCK";
    }
    else if (number == 2) {
        randomResult.innerText = "PAPER";
    }
    else {
        randomResult.innerText = "SCISSORS";
    }
}

// Function for comparing user's and computer's result
function compareResults (number, choice){
    if (number == 1 && choice == "ROCK" || number == 2 && choice == "PAPER" || number == 3 && choice == "SCISSORS"){
        message.innerText = "It's a tie!";
    }
    else if (number == 1 && choice == "PAPER" || number == 2 && choice == "SCISSORS"|| number == 3 && choice == "ROCK"){
        message.innerText = `${name} wins!`;
        userScoresCounter++;
        userScores.innerText = `Scores: ${userScoresCounter}`;
        checkScores();
    }
    else if (number == 1 && choice == "SCISSORS" || number == 2 && choice == "ROCK" || number == 3 && choice == "PAPER"){
        message.innerText = "Computer wins!";
        compScoresCounter++;
        compScores.innerText = `Scores: ${compScoresCounter}`;
        checkScores();
    }
}

// Function for setting the winner and disabling choice-buttons
function checkScores (){
    if (userScoresCounter == 3){
        image.src = "img/celebration.gif";
        message.innerText = `${name} wan the game! Congratulations!`
        rockButton.setAttribute("disabled", true);
        rockButton.setAttribute("class", "disabled");
        rockButton.setAttribute("class", "buttons");
        paperButton.setAttribute("disabled", true);
        paperButton.setAttribute("class", "disabled");
        paperButton.setAttribute("class", "buttons");
        scissorsButton.setAttribute("disabled", true);
        scissorsButton.setAttribute("class", "disabled");
        scissorsButton.setAttribute("class", "buttons");
    }
    else if (compScoresCounter == 3){
        image.src = "img/celebration.gif";
        message.innerText = "Computer won the game!"
        rockButton.setAttribute("disabled", true);
        rockButton.setAttribute("class", "disabled");
        rockButton.setAttribute("class", "buttons");
        paperButton.setAttribute("disabled", true);
        paperButton.setAttribute("class", "disabled");
        paperButton.setAttribute("class", "buttons");
        scissorsButton.setAttribute("disabled", true);
        scissorsButton.setAttribute("class", "disabled");
        scissorsButton.setAttribute("class", "buttons");
    }
}

// Event listener for reset-button for reseting the game
resetButton.addEventListener("click", function(){
    image.src = "img/rps.gif";
    message.innerText = "Lets play!"
    usersChoiceResult.innerText = "";
    randomResult.innerText = "";
    userScoresCounter = 0;
    compScoresCounter = 0;
    userScores.innerText = "Scores: 0";
    compScores.innerText = "Scores: 0";
    username.innerText = "User";
    name = "User";
    usersChoice = "";
    randomNum = 0;
    inputName.value = "";
    rockButton.removeAttribute("disabled");
    rockButton.removeAttribute("class", "disabled");
    rockButton.setAttribute("class", "buttons");
    paperButton.removeAttribute("disabled");
    paperButton.removeAttribute("class", "disabled");
    paperButton.setAttribute("class", "buttons");
    scissorsButton.removeAttribute("disabled");
    scissorsButton.removeAttribute("class", "disabled");
    scissorsButton.setAttribute("class", "buttons");
    buttonSave.removeAttribute("disabled");
    buttonSave.removeAttribute("class", "disabled");
    buttonSave.setAttribute("class", "buttons");
})