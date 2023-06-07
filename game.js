const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);

    return choices[index];
}

function playRound(playerSelection, computerSelection) {
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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your choice:");
        playerSelection = capitalizeFirstLetter(playerSelection);

        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();