const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);

    return choices[index];
}

function getRoundResult(playerSelection, computerSelection) {
    playerIND = choices.indexOf(playerSelection)
    computerIND = choices.indexOf(computerSelection)

    if (playerIND === computerIND) {
        return "Draw!";
    }
    else if ((computerIND === playerIND-1) || (playerIND-1 === -1)) {
        return `You win! ${choices[playerIND]} beats ${choices[computerIND]}`;
    }
    else {
        return `You lose! ${choices[computerIND]} beats ${choices[playerIND]}`;
    }
}

const buttons = document.querySelectorAll('.buttons button');
const result = document.querySelector('.result');
const win_counter = document.querySelector('.win_counter');

const resultDisplay = document.createElement('div');
resultDisplay.classList.add('result_display');
result.appendChild(resultDisplay);

let playerWins = 0;
let computerWins = 0;

win_counter.firstChild.textContent = `Player Wins: ${playerWins}`;
win_counter.lastChild.textContent = `Computer Wins: ${computerWins}`;


function playRound(e) {
    let playerSelection = (e.target.classList.value);
    let result = getRoundResult(playerSelection, getComputerChoice());

    resultDisplay.textContent = result
    resultDisplay.setAttribute('style', 'border: 3px solid black; padding: 20px');

    if (result.includes('You win!')) {
        playerWins++;
        win_counter.firstChild.textContent = `Player Wins: ${playerWins}`;
    }
    else if (result.includes('You lose!')) {
        computerWins++;
        win_counter.lastChild.textContent = `Computer Wins: ${computerWins}`;
    }

    if (playerWins === 5) {
        playerWins = 0;
        computerWins = 0;

        alert("You Won the Game!");

        win_counter.firstChild.textContent = `Player Wins: ${playerWins}`;
        win_counter.lastChild.textContent = `Computer Wins: ${computerWins}`;
    }
    else if (computerWins === 5) {
        playerWins = 0;
        computerWins = 0;

        alert("You Lost the Game! Better luck next time!");

        win_counter.firstChild.textContent = `Player Wins: ${playerWins}`;
        win_counter.lastChild.textContent = `Computer Wins: ${computerWins}`;
    }
}

buttons.forEach(button => button.addEventListener('click', playRound));
