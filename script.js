

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber >= 33 && randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
} 

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors: ");
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log(`You: ${humanChoice}\n Computer: ${computerChoice}\n DRAW!`);
            return;
        } else if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock"
        ) {
            console.log(`You: ${humanChoice}\n Computer: ${computerChoice}\n You win!`);
            humanScore++;
            return;
        } else {
            console.log(`You: ${humanChoice}\n Computer: ${computerChoice}\n You lose!`);
            computerScore++;
            return;
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Score\n You: ${humanScore}\n Computer: ${computerScore}`);
    if (computerScore > humanScore) {
    console.log("You lost :(");
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("It's a DRAW!");
    }
}

playGame()


