
let humanScore=0;
let computerScore=0;
const buttons = document.querySelectorAll("input");
const resultDisplay = document.getElementById("result");
function computerPlay()
{
    let choices=["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function disableButtons()
{
    buttons.forEach(button=>{button.disabled=true});
}

function playRound(humanSelection) {
        let computerSelection= computerPlay();
        let result = "";
        
        if (humanSelection === computerSelection) {
            result = `It's a tie. You both chose ${humanSelection}.
            \n\nPlayer score: ${humanScore} \nComputer score: ${computerScore}`;
        } 
        else if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "scissors" && computerSelection === "paper") ||
            (humanSelection === "paper" && computerSelection === "rock")
        ) {
            humanScore++;
            result = `You win! ${humanSelection} beats ${computerSelection}.
            \n\nPlayer score: ${humanScore} \nComputer score: ${computerScore}`;
            
            if (humanScore === 5) {
                result += `\n\n🎉 You won the game! Reload the page to play again.`;
            disableButtons();
            }
        } 
        else {
            computerScore++;
            result = `You lose! ${computerSelection} beats ${humanSelection}.
            \n\nPlayer score: ${humanScore} \nComputer score: ${computerScore}`;
            
            if (computerScore === 5) {
                result += `\n\n😢 I won the game! Reload the page to play again.`;
                disableButtons();
            }
        } 
        resultDisplay.innerText = `${result} \n\nPlayer: ${humanScore} | Computer: ${computerScore}`;
        if (humanScore === 5) {
            resultDisplay.innerText += "\n🎉 You won the game! Reload the page to play again.";
            disableButtons();
        } else if (computerScore === 5) {
            resultDisplay.innerText += "\n😢 Computer won! Reload the page to play again.";
            disableButtons();
        }
}
buttons.forEach(button =>{
    button.addEventListener("click", function(){
        playRound(button.value)
    })
})
