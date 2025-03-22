console.log("Hello World!");
function getComputerChoice()
{
    let num = Math.floor(Math.random()*3);
    if(num===0)
        return "rock";

    else if(num===1)
        return "paper";

    else
    return "scissors";
}

function getHumanChoice()
{
   let ans=  prompt("What do you pick?");
   return ans;
}

let humanScore=0;
let computerScore=0;
function Playround(humanSelection,computerSelection)
{
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
        return "tie";
    } 
    else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")
    ) {
        humanScore++;
        console.log("You win this round!");
        return "human";
    } 
    else {
        computerScore++;
        console.log("Computer wins this round!");
        return "computer";
    }  

}
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
for(let i=0;i<5;i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    Playround(humanSelection,computerSelection);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}
