let weapons = ['rock', 'paper', 'scissors'];
function computerPlay(){
    return weapons[Math.floor(Math.random()*3)];
}

function play(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    while(!weapons.includes(playerSelection)){
        console.log('Enter a valid choice!');
        playerSelection = prompt("Enter Rock, Paper or Scissors!").toLowerCase();
    }
    if(playerSelection==='rock' && computerSelection==='scissors')
    return "You Win! Rock beats Scissors!";
    if(playerSelection==='rock' && computerSelection==='paper')
    return "You Lose! Paper beats Rock!";
    if(playerSelection==='paper' && computerSelection==='scissors')
    return "You Lose! Scissors beats Paper!";
    if(playerSelection==='paper' && computerSelection==='rock')
    return "You Win! Paper beats Rock!";
    if(playerSelection==='scissors' && computerSelection==='paper')
    return "You Win! Scissors beats Paper!";
    if(playerSelection==='scissors' && computerSelection==='rock')
    return "You Lose! Rock beats Scissors!";
    if(playerSelection===computerSelection)
    return "Tie!";
}

function gamePlay(){
    let playerScore = 0, computerScore = 0, result;
    for(let i=0; i<5; i++){
        const playerSelection = prompt("Enter Rock, Paper or Scissors!");
        const computerSelection = computerPlay();
        result = play(playerSelection, computerSelection);
        if(result.includes('You Win!')) playerScore += 1;
        else if(result.includes('You Lose!')) computerScore += 1;
        console.log(`Round ${i+1}`);
        console.log(`Player: ${playerSelection} || Computer: ${computerSelection}`);
        console.log(result);
        console.log(`PlayerScore: ${playerScore} || ComputerScore: ${computerScore}`);
    }

    console.log('Game Over!');

    if(playerScore > computerScore) console.log('Player Wins!');
    else if(playerScore < computerScore) console.log('Computer Wins!');
    else console.log('Tie!');
}

gamePlay();


