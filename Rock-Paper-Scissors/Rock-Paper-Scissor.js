//A basic Program of Rock-Paper-Scissors who throw the right guess he'll take the trophy and here also has a secret code "Smash"💥, when user throw smash there has no chance to win the game for the computer.

let userName = 'Koushik';
const getUserChoice = userInput => {

    userInput=userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'smash')
        return userInput;
}

const getComputerChoice = () =>{

    let computerInput = Math.floor(Math.random() *3);
    switch(computerInput)
    {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;        
    }
}

const determineWinner = (userChoice,computerChoice) =>{

    if(userChoice === computerChoice)
        return 'The game has been tied';
     
    if(userChoice === 'rock')
        {
            if(computerChoice === 'paper')
                return 'Computer Won🥇🥇'
            else
                return  ` ${userName} Have Won The Game🏆🏆`;
        }
      
    if(userChoice === 'scissors')    
        {
            if(computerChoice === 'rock')
                return 'Computer Won🥇🥇';
            else
                return `${userName} Have Won the Game🏆🏆`;
        }
    if(userChoice === 'paper')
        {
            if(computerChoice === 'rock')
                return `${userName} Have Won the Game🏆🏆`;
            else
                return 'Computer Won🥇🥇';
        }
    if(userChoice === 'smash')
    return `${userName} Have Won the Game🏆🏆`;    

    }
    const playGame = () => {
        let userChoice = getUserChoice('Smash');
        console.log(`${userName} has selected: `, userChoice);
        let computerChoice = getComputerChoice();
        console.log('Computer throw:', computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
 }

    playGame();