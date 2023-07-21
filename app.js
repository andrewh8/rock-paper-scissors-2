function getComputerChoice() {
    const number = Math.random()*10;
    let choice = "";

    if (number< 3.33) {
        choice = "Rock";
    } else if (number >= 3.33 && number <= 6.66) {
        choice = "Scissors";
    } else {
        choice = "Paper";
    }

    return choice;
}

function getUserChoice() {
    let choice = prompt("Rock, Paper, Scissors?");
    
    while (choice != "Rock" && choice != "Paper" && choice != "Scissors") {
        choice = prompt("Choose one of the following: Rock, Paper, Scissors?");
    }
    return choice;
}

let userChoice = getComputerChoice();
let computerChoice = getComputerChoice();
let result = "";
let userScore = 0;
let computerScore = 0;

switch(userChoice = "Rock") {
    case computerChoice = "Rock":
        result = "Tie";
        break;
    case computerChoice = "Scissor":
        result = "You Win";
        userScore = userScore + 1;
        break    
}

// scissors < rock < paper 
// rock < paper < scissors
// paper < scissors < rock


console.log(getComputerChoice());
console.log(getUserChoice());
