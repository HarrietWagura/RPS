// Implementing a score counter
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// Targetting the button with id of rock, to add event listener
let rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    playRound('rock');
});


// Targetting the button with id of paper to add event listener
let paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    playRound('paper');
});

// Targetting the button with id of scissors to add event listener
let scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    playRound('scissors');
});


// Adding function
function playRound(playerChoice) {
    let choices = ['rock', 'paper', 'scissors'];

    let computerChoice = choices[Math.floor(Math.random() * choices.length)]; // generating a random computer choice
    let result = '';

    // Using if statement to do comparison
    if (playerChoice === computerChoice) {
        result = "It's a tie";
        tieScore++;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = 'You win';
        playerScore++;
    } else {
        result = 'You lose';
        computerScore++;
    }

    // Adding outcome to the div with result id
    let outcome = document.getElementById('result');
    outcome.innerText = `${result} \n (Player: ${playerScore}, Computer: ${computerScore}, Tie: ${tieScore})`;
}


//Resetting 
let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click',()=>{
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;

    let outcome = document.getElementById('result');
    outcome.innerText = '';
});