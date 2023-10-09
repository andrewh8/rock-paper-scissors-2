let userChoice = "";
let computerChoice = "";
let roundResult = "";
let userScore = 0;
let computerScore = 0;
let winner = "";
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let user = document.querySelector('.user');
let computer = document.querySelector('.computer');
let userContainer = document.querySelector('.userContainer');
let computerContainer = document.querySelector('.computerContainer');
let userScoreDisplay = document.createElement('div');
let computerScoreDisplay = document.createElement('div');
updateDOM();

rock.addEventListener('click', () => {
    userChoice = 'Rock';
    getComputerChoice();
    determineRoundWinner();
    updateDOM();
    checkGameStatus();
})

paper.addEventListener('click', () => {
    userChoice = 'Paper';
    getComputerChoice();
    determineRoundWinner();
    updateDOM();
    checkGameStatus();
})

scissors.addEventListener('click', () => {
    userChoice = 'Scissors';
    getComputerChoice();
    determineRoundWinner();
    updateDOM();
    checkGameStatus();
})

function getComputerChoice() {
    const number = Math.random()*10;

    if (number< 3.33) {
        computerChoice = "Rock";
    } else if (number >= 3.33 && number <= 6.66) {
        computerChoice = "Scissors";
    } else {
        computerChoice = "Paper";
    }

    return computerChoice;
}

function determineRoundWinner() {
    if (userChoice == "Rock") {
        if (computerChoice == "Rock") {
        } else if (computerChoice == "Scissors") {
            userScore++;
        } else if (computerChoice == "Paper") {
            computerScore++;
        }
    } 
        else if (userChoice == "Paper") {
            if (computerChoice == "Paper") {
            } else if (computerChoice == "Rock") {
                userScore++;
            } else if (computerChoice == "Scissors") {
                computerScore++;
            }
        }
        else if (userChoice == "Scissors") {
            if (computerChoice == "Scissors") {
            } else if (computerChoice == "Paper") {
                userScore++;
            } else if (computerChoice == "Rock") {
                computerScore++;
            }
        }
}

function updateDOM() {
    userScoreDisplay.textContent = userScore;
    userContainer.appendChild(userScoreDisplay);
    computerScoreDisplay.textContent = computerScore;
    computerContainer.appendChild(computerScoreDisplay);
}

function checkGameStatus() {
    user.classList.remove('win')
    computer.classList.remove('win')
    if (userScore >= 5 || computerScore >= 5) {
        if (userScore == 5) {
            user.classList.add('win')
            winner = "User";
        } else if (computerScore == 5) {
            winner = "Computer";
            computer.classList.add('win')
        }
        console.log(`The winner is ${winner}!`);
        userScore = 0;
        computerScore = 0;
    }
}
