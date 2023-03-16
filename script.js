



function getComputerChoice() {
    let choices = Array("rock", "paper", "scissors")

    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);

    // get random item
    const item = choices[randomIndex];

    return item

}



function playRound(playerSelection, computerSelection) {
    let outcome

    if (playerSelection == computerSelection) {
        outcome = "It's a draw!"
    }
    //player chooses rock, computer chooses paper
    //player chooses rock, computer chooses scissors 
    else if (playerSelection = "rock") {
        if (computerSelection == "paper") {
            outcome = "You lose! Paper beats rock"
        }
        else {
            outcome = "You win! Rock beats scissors"
        }
    }
    //player chooses paper, computer chooses scissors
    //player chooses paper, computer chooses rock
    else if (playerSelection = "paper") {
        if (computerSelection == "scissors") {
            outcome = "You lose! Scissors beats paper"
        }
        else {
            outcome = "You win! Paper beats rock"
        }

    }
    //player chooses scissors, computer chooses rock
    //player chooses scissors, computer chooses paper
    else if (playerSelection = "scissors") {
        if (computerSelection == "rock") {
            outcome = "You lose! Rock beats scissors"
        }
        else {
            outcome = "You win! Scissors beats paper"
        }

    }


    return outcome
}

let computer = getComputerChoice()
console.log(computer)
let playerChoice = prompt("What's your choice? Type in small casing")



console.log(playRound(playerChoice, computer))
