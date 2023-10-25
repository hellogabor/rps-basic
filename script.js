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

let playerScore = 0;
let computerScore = 0;

const playerScoreTracker = document.querySelector('#playerScore');
const computerScoreTracker = document.querySelector('#computerScore');

function playRound(playerSelection, computerSelection) {
    const lostRoundMessage = `You lose, ${computerSelection} beats ${playerSelection}`
    const wonRoundMessage = `You win, ${playerSelection} beats ${computerSelection}`
    switch (playerSelection + "-" + computerSelection) {
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            return "Tie!";
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            playerScoreTracker.textContent = 'your score: ' + ++playerScore;
            scoreChecker();
            return roundResults.textContent = wonRoundMessage;
        default:
            computerScoreTracker.textContent = 'computer score: ' + ++computerScore;
            scoreChecker();
            return roundResults.textContent = lostRoundMessage;
    }
}

const roundResults = document.querySelector('#round h3');

const results = document.querySelector('#results');
let winner = document.createElement('h1');

const resetbtn = document.createElement('button');
resetbtn.textContent = 'reset game';

function scoreChecker() {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            winner.textContent = 'you won, noice';
        } else {
            winner.textContent = 'you lost :( sadness';
        }

        results.appendChild(winner);

        resetbtn.addEventListener('click', reset);
        results.appendChild(resetbtn);

    }
}

function reset() {
    playerScoreTracker.textContent = 'your score: 0';
    computerScoreTracker.textContent = 'computer score: 0';
    playerScore = 0;
    computerScore = 0;
    results.removeChild(winner);
    results.removeChild(resetbtn);
}

let btns = document.querySelector('#buttons');

btns.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
        case 'paper':
        case 'scissors':
            console.log(playRound(target.id, getComputerChoice()));
            break;
        }
    });
