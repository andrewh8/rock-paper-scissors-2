let userChoice = "";
let computerChoice = "";
let roundResult = "";
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
            roundResult = "Tie!";
        } else if (computerChoice == "Scissors") {
            roundResult = "You Win!";
            userScore++;
        } else if (computerChoice == "Paper") {
            roundResult = "You Lose!";
            computerScore++;
        }
    } 
    // User chooses Paper
        else if (userChoice == "Paper") {
            if (computerChoice == "Paper") {
                roundResult = "Tie!";
            } else if (computerChoice == "Rock") {
                roundResult = "You Win!";
                userScore++;
            } else if (computerChoice == "Scissors") {
                roundResult = "You Lose!";
                computerScore++;
            }
        }
    // User chooses Scissors
        else if (userChoice == "Scissors") {
            if (computerChoice == "Scissors") {
                roundResult = "Tie!";
            } else if (computerChoice == "Paper") {
                roundResult = "You Win!";
                userScore++;
            } else if (computerChoice == "Rock") {
                roundResult = "You Lose!";
                computerScore++;
            }
        }
}

function playRound() {
    getComputerChoice();
    getUserChoice();
    determineRoundWinner();
    console.log(roundResult);
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
