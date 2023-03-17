


//function selects a random choice for the computer
function getComputerChoice() {
    let choices = Array("ROCK", "PAPER", "SCISSORS")

    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);

    // get random item
    const item = choices[randomIndex];

    return item

}


//function takes in players choice and computer's choice, compares the choices and announces the winner
function playRound(playerSelection, computerSelection) {
    let outcome

    if (playerSelection == computerSelection) {
        outcome = "It's a draw!"
    }
    //player chooses rock, computer chooses paper
    //player chooses rock, computer chooses scissors 
    else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            outcome = "You lose! Paper beats rock"
        }
        else {
            outcome = "You win! Rock beats scissors"
        }
    }
    //player chooses paper, computer chooses scissors
    //player chooses paper, computer chooses rock
    else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            outcome = "You lose! Scissors beats paper"
        }
        else {
            outcome = "You win! Paper beats rock"
        }

    }
    //player chooses scissors, computer chooses rock
    //player chooses scissors, computer chooses paper
    else if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            outcome = "You lose! Rock beats scissors"
        }
        else {
            outcome = "You win! Scissors beats paper"
        }

    }


    return outcome
}

//assigns computer's choice to a variable
let computer = getComputerChoice()
//to view what the computer's choice is
console.log(computer)
//assigns player's choice to a variable
let playerChoice = prompt("What's your choice?")
//announces the winner in the console by passing in the player's and computer's choice into function playround
console.log(playRound(playerChoice.toUpperCase(), computer))

