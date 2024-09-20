// Generate computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][choice];
}

// Get user choice
function getUserChoice() {
    let choice = prompt('Choose wisely: rock, paper, or scissors?');
    return choice.toLowerCase();
}

// Set first letter of string to uppercase
function toTitleCase(str) {
    let firstLetter = str.charAt(0).toUpperCase();
    return firstLetter + str.slice(1);
}

let userScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    let outcome = '';

    // Specify win/loss/tie conditions
    if(userChoice == 'rock') {
        switch(computerChoice) {
            case 'paper':
                outcome = 'loss';
                break;
            case 'scissors':
                outcome = 'win';
                break;
            case 'rock':
                outcome = 'tie';
                break;
        }
    } else if(userChoice == 'paper') {
        switch(computerChoice) {
            case 'scissors':
                outcome = 'loss';
                break;
            case 'rock':
                outcome = 'win';
                break;
            case 'paper':
                outcome = 'tie';
                break;
        }
    } else if(userChoice == 'scissors'){
        switch(computerChoice) {
            case 'rock':
                outcome = 'loss';
                break;
            case 'paper':
                outcome = 'win';
                break;
            case 'scissors':
                outcome = 'tie';
                break;
        }
    }

    // Print outcome to console and increment score
    if(outcome == 'win') {
        console.log(`You win! ${toTitleCase(userChoice)} beats ${computerChoice}.`);
        userScore++;
        outcome = '';
    } else if(outcome == 'loss') {
        console.log(`You lose! ${toTitleCase(computerChoice)} beats ${userChoice}.`);
        computerScore++;
        outcome = '';
    } else {
        console.log(`It's a tie! You both chose ${userChoice}.`)
    }
}

function playGame() {
    let userSelection;
    let computerSelection;

    for(let i = 0; i <= 4; i++) {
        userSelection = getUserChoice();
        computerSelection = getComputerChoice();

        playRound(userSelection, computerSelection);

        console.log(`Your score: ${userScore}/${i+1}        Computer score: ${computerScore}/${i+1}`)
    }
}

playGame();