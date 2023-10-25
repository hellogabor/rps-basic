function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1 / 3) {
        return "rock";
    } else if (choice < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection + "-" + computerSelection) {
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            return "Tie!";
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            return `You win, ${playerSelection} beats ${computerSelection}`;
        default:
            return `You lose, ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase()
    const computerSelection = getComputerChoice()
    return playRound(playerSelection, computerSelection)
    return playRound(playerSelection, computerSelection)
}

/* console.log(game()); */

let btns = document.querySelector('#buttons');

btns.addEventListener('click', (event) => {
    let target = event.target;

    // console.log(target);

    switch(target.id) {
        case 'rock':
        case 'paper':
        case 'scissors':
            console.log(playRound(target.id, getComputerChoice()));
            break;

        }
    });

/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). */



/* Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step! */