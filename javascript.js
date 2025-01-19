//get human choice
//get computer choice
//compare the choices
//assign the winner for that round
//increase the round until 5 rounds played
//annouce the final winner in the final round


function playGame () {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

playRound(humanSelection, computerSelection);

function playRound (getHumanChoice, getComputerChoice) {
    if (getHumanChoice === getComputerChoice) {
        console.log("It's a draw!");
    } else if (getHumanChoice === "rock") {
        if (getComputerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            return "human";
        } else {
            console.log("You lose. Paper beats Rock");
            return "computer";
        }
    } else if (getHumanChoice === "paper") {
        if (getComputerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            return "human";
        } else {
            console.log("You lose. Scissors beats Paper");
            return "computer";
        }
    } else {
        if (getComputerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            return "human";
        } else {
            console.log("You lose. Rock beats Scissors");
            return "computer";
        }
    }
}
console.log(playRound());

console.log(humanScore);
console.log(computerScore);


function getComputerChoice() {
    let x = Math.random() * 100

    if (x <= 33) {
        console.log("rock");
        return "rock";
    } else if (x > 33 && x <= 66) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
}

function getHumanChoice () {
    let y = prompt("Choose Your Move (rock, paper, scissors) ").toLowerCase();

    if (y === "rock") {
        console.log("rock");
        return "rock";
    } else if (y === "paper") {
        console.log("paper");
        return "paper";
    } else if (y === "scissors") {
        console.log("scissors");
        return "scissors";
    } else {
        console.log("Input is invalid!");
        getHumanChoice();
    }
}

    
     