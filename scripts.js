
// Getting choice by computer
function computerPlay(){
    const weapons = ['rock', 'paper', 'scissors'];
    return weapons[Math.floor(Math.random()*3)];
}

// Called when one of the players get score:5
function gameEnd(resultText){
    playerChoices.forEach(choice => choice.classList.remove('playerChoice:hover'));
    finalResultText.textContent = resultText;
    finalResult.classList.add('showResult');
    playAgainBtn.addEventListener('click', restart);

}


// Called everytime a weapon is chosen by user
function play(e, playerSelection){
    
    if(!gameWon){
        let computerSelection = computerPlay();

        playerChoices.forEach(choice => choice.classList.remove('selected'));
        compChoices.forEach(choice => choice.classList.remove('selected'));

        document.querySelector(`.playerChoice#${playerSelection}`).classList.add('selected');
        document.querySelector(`.compChoice#${computerSelection}`).classList.add('selected');
        
        console.log(playerSelection, computerSelection)
        if(playerSelection==='rock' && computerSelection==='scissors')
        result.textContent = "You Win! Rock beats Scissors!";
        if(playerSelection==='rock' && computerSelection==='paper')
        result.textContent = "You Lose! Paper beats Rock!";
        if(playerSelection==='paper' && computerSelection==='scissors')
        result.textContent = "You Lose! Scissors beats Paper!";
        if(playerSelection==='paper' && computerSelection==='rock')
        result.textContent = "You Win! Paper beats Rock!";
        if(playerSelection==='scissors' && computerSelection==='paper')
        result.textContent = "You Win! Scissors beats Paper!";
        if(playerSelection==='scissors' && computerSelection==='rock')
        result.textContent = "You Lose! Rock beats Scissors!";
        if(playerSelection===computerSelection)
        result.textContent = "Tie!";
        
        if(result.textContent.includes('You Win!')) playerScore += 1;
        else if(result.textContent.includes('You Lose!')) computerScore += 1;
        score.textContent = `${playerScore} - ${computerScore}`;
        
        if(playerScore === 5 || computerScore === 5){
            gameWon = true;
            gameEnd(result.textContent.match(/(You Win!|You Lose!)/g));
        }
        
    }
    else gameEnd(result.textContent.match(/(You Win!|You Lose!)/g));

}

// Called to restart the game
function restart(){
    playerScore = 0;
    computerScore = 0;
    score.textContent = '0 - 0';
    result.textContent = 'Play!';
    finalResult.classList.remove('showResult');
    gameWon = false;
    playerChoices.forEach(choice => choice.classList.remove('selected'));
    compChoices.forEach(choice => choice.classList.remove('selected'));
}

// Basic initialisation
let playerScore = 0, computerScore = 0, gameWon = false;
const result = document.querySelector('.result');
const score = document.querySelector('.score');
const selection = document.querySelector('.selection');
const finalResult = document.querySelector('.finalResult');
const playAgainBtn = document.querySelector('.playAgainBtn');
const finalResultText = document.querySelector('.finalResultText');
score.textContent = '0 - 0';
result.textContent = 'Play!';
const playerChoices = document.querySelectorAll('.playerChoice');
const compChoices = document.querySelectorAll('.compChoice')
playerChoices.forEach(button => button.addEventListener('click', (e) => play(e,button.textContent.toLowerCase())))




