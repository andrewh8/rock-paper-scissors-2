let userChoice = "";
let computerChoice = "";
let result = "";
let userScore = 0;
let computerScore = 0;
let winner = "";

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

function getUserChoice() {
    userChoice = prompt("Rock, Paper, Scissors?");
    
    while (userChoice != "Rock" && userChoice != "Paper" && userChoice != "Scissors") {
        userChoice = prompt("Choose one of the following: Rock, Paper, Scissors?");
    }
    return userChoice;
}

function determineRoundWinner() {
    // User chooses Rock
    if (userChoice == "Rock") {
        if (computerChoice == "Rock") {
            result = "Tie!";
        } else if (computerChoice == "Scissors") {
            result = "You Win!";
            userScore++;
        } else if (computerChoice == "Paper") {
            result = "You Lose!";
            computerScore++;
        }
    } 
    // User chooses Paper
        else if (userChoice == "Paper") {
            if (computerChoice == "Paper") {
                result = "Tie!";
            } else if (computerChoice == "Rock") {
                result = "You Win!";
                userScore++;
            } else if (computerChoice == "Scissors") {
                result = "You Lose!";
                computerScore++;
            }
        }
    // User chooses Scissors
        else if (userChoice == "Scissors") {
            if (computerChoice == "Scissors") {
                result = "Tie!";
            } else if (computerChoice == "Paper") {
                result = "You Win!";
                userScore++;
            } else if (computerChoice == "Rock") {
                result = "You Lose!";
                computerScore++;
            }
        }
}

function playRound() {
    getComputerChoice();
    getUserChoice();
    determineRoundWinner();
    console.log(result);
    console.log(userScore);
    console.log(computerScore);
}

function playGame() {
    while (userScore < 5 && computerScore < 5) {
        playRound();
    }

    if (userScore == 5) {
        winner = "User";
    } else if (computerScore == 5) {
        winner = "Computer";
    }
    console.log(`The winner is ${winner}!`);
}
