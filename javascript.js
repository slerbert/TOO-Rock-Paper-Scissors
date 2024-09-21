const scoreboardUser = document.querySelector('.user .score');
const scoreboardComputer = document.querySelector('.computer .score');
const resultsContainer = document.querySelector('.results-container');
const resultsList = document.querySelector('.results-container ol');
const buttonContainer = document.querySelector('.button-container');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let userScore = 0;
let computerScore = 0;

buttonContainer.addEventListener('click', (event) => {
    let computerSelection = getComputerChoice();
    let userSelection = event.target.id;

    switch (event.target.id) {
        case 'rock':
        case 'paper':
        case 'scissors':
            playRound(userSelection, computerSelection);
    }
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][choice];
}

function getUserChoice() {
    let choice = prompt('Choose wisely: rock, paper, or scissors?');
    return choice.toLowerCase();
}

// Set first letter of string to uppercase
function toTitleCase(str) {
    let firstLetter = str.charAt(0).toUpperCase();
    return firstLetter + str.slice(1);
}

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

    updateResults(outcome, [userChoice, computerChoice]);
    outcome = '';

    checkGameEnd();
}

function playGame() {
    let userSelection;
    let computerSelection;


    // for(let i = 0; i <= 4; i++) {
    //     userSelection = getUserChoice();
    //     computerSelection = getComputerChoice();

    //     playRound(userSelection, computerSelection);

    //     console.log(`Your score: ${userScore}/${i+1}        Computer score: ${computerScore}/${i+1}`)
    // }
}

function updateResults(outcome, choices) {
    resultString = '';
    const userChoice = choices[0];
    const computerChoice = choices[1];

    switch (outcome) {
        case 'win':
            resultString = `You win! ${toTitleCase(userChoice)} beats ${computerChoice}.`;
            userScore++;
            break;
        case 'loss':
            resultString = `You lose! ${toTitleCase(computerChoice)} beats ${userChoice}.`;
            computerScore++;
            break;
        case 'tie':
            resultString = `It's a tie! You both chose ${userChoice}.`;
            break;
    }

    updateScoreboard();

    const listItem = document.createElement('li');
    listItem.textContent = resultString;
    resultsList.appendChild(listItem);
}

function updateScoreboard() {
    scoreboardUser.textContent = userScore;
    scoreboardComputer.textContent = computerScore;
}

function checkGameEnd() {
    if (userScore === 5 || computerScore === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        if (userScore === 5) {
            alert('You win!!!!');
        } else {
            alert(`You lost... that's kinda awkward...`);
        }
    }
}