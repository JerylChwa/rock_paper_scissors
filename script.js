


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
function playRound() {

    //assigns computer's choice to a variable
    let computerSelection = getComputerChoice()
    //to view what the computer's choice is
    console.log(computerSelection)
    //assigns player's choice to a variable
    let playerSelection = (prompt("What's your choice?")).toUpperCase();

    if (playerSelection == computerSelection) {
        var outcome = "It's a draw!"
    }
    //player chooses rock, computer chooses paper
    //player chooses rock, computer chooses scissors 
    else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            var outcome = "You lose! Paper beats rock"
        }
        else {
            var outcome = "You win! Rock beats scissors"
        }
    }
    //player chooses paper, computer chooses scissors
    //player chooses paper, computer chooses rock
    else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            var outcome = "You lose! Scissors beats paper"
        }
        else {
            var outcome = "You win! Paper beats rock"
        }

    }
    //player chooses scissors, computer chooses rock
    //player chooses scissors, computer chooses paper
    else if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            var outcome = "You lose! Rock beats scissors"
        }
        else {
            var outcome = "You win! Scissors beats paper"
        }

    }


    return outcome
}






//announces the winner in the console by passing in the player's and computer's choice into function playround
console.log(playRound())

