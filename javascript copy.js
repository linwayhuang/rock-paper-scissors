//Assign variables
const firstContainer = document.querySelector("#firstContainer");
const secondContainer = document.querySelector("#secondContainer");
const thirdContainer = document.querySelector("#thirdContainer");
const fourthContainer = document.querySelector("#fourthContainer");
const menu = document.querySelector('#menu');

//Display game selections
const rock = document.createElement('button');
rock.id = 'rock';
rock.textContent = 'Rock';
menu.appendChild(rock);

const paper = document.createElement('button');
paper.id = 'paper';
paper.textContent = 'Paper';
menu.appendChild(paper);

const scissors = document.createElement('button');
scissors.id = 'scissors';
scissors.textContent = 'Scissors';
menu.appendChild(scissors);

//Add event listeners

let roundNumber = 0
let humanScore = 0;
let computerScore = 0;
let winner;

//javascipt won't regconize the event listener. When you run the code and you have additional codes after
//the event listener, it will execute that code first and ignore your event listener. And if you have it 
//inside a loop, it will keep looping in there without regconizing the event listener. If you want your
//event listener executed first, you have to make Javascript regconizes it.
let x = '';

menu.addEventListener('click', (event) => {
    roundNumber++;
    //you place textContent to display the updated value in the html body
    round.textContent = `Round: ${roundNumber}`;

    const computerSelection = getComputerChoice();
    // console.log(`computer ${computerSelection}`);
    
    let target = event.target;

    //with my current knowledge, switch can only work with id elements. 'rock', 'paper', 'scissors' 
    //have to id. If it's class tag then it won't work
    switch(target.id) { 
        case 'rock':
            console.log(`You chose rock ${x}`);
            x = playRound('rock',computerSelection);
            break;
        case 'paper':
            console.log(`You chose paper ${x}`);
            x = playRound('paper',computerSelection);
            break;
        case 'scissors':
            console.log(`You chose scissor ${x}`);
            x = playRound('scissors',computerSelection);
            break;
    }
    if (x === "human") {
        humanScore++;
        //you place textContent to display the updated value in the html body
        humanSco.textContent = `Your Score: ${humanScore}`;
        console.log(`human score: ${humanScore}`);
        console.log(`computer score: ${computerScore}`);
        winner = 'You win!';
        //you place textContent to display the updated value in the html body
        immeResult.textContent = `Result: ${winner}`;
    } else if (x === "computer") {
        computerScore++;
        computerSco.textContent = `Computer Score: ${computerScore}`;
        console.log(`human score: ${humanScore}`);
        console.log(`computer score: ${computerScore}`);
        winner = 'Computer win!';
        //you place textContent to display the updated value in the html body
        immeResult.textContent = `Result: ${winner}`;
    } else {}

    if (humanScore === 5) {
        alert("You win!");
        humanScore = 0;
        computerScore = 0;
        roundNumber = 0;
        //disable buttons
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if (computerScore === 5) {
        alert("You lose");
        humanScore = 0;
        computerScore = 0;
        roundNumber = 0;
        //disable buttons
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else {}
});

//Display rounds
const round = document.createElement('p');
round.classList.add('round');
//you can have the textContent here to display as the intial value and as a place holder
round.textContent = `Round: ${roundNumber}`;
firstContainer.appendChild(round);

//display humanScore and computerScore
const humanSco = document.createElement('p');
humanSco.classList.add('score');
//you can have the textContent here to display as the intial value and as a place holder
humanSco.textContent = `Your Score: ${humanScore}`;
secondContainer.appendChild(humanSco);

const computerSco = document.createElement('p');
computerSco.classList.add('score');
//you can have the textContent here to display as the intial value and as a place holder
computerSco.textContent = `Computer Score: ${computerScore}`;
secondContainer.appendChild(computerSco);

const immeResult = document.createElement('p');
immeResult.classList.add('immeResult');
//you can have the textContent here to display as the intial value and as a place holder
immeResult.textContent = `Result: TBD`;
secondContainer.appendChild(immeResult);
    
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            return "human";
        } else {
            console.log("You lose. Paper beats Rock");
            return "computer";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            return "human";
        } else {
            console.log("You lose. Scissors beats Paper");
            return "computer";
        }
    } else {
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            return "human";
        } else {
            console.log("You lose. Rock beats Scissors");
            return "computer";
        }
    }
}

function getComputerChoice() {
    let x = Math.random() * 100
    
    if (x <= 33) return "rock";
    else if (x > 33 && x <= 66) return "paper";
    else return "scissors";
}