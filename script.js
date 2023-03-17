


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
    let outcome
    //assigns computer's choice to a variable
    let computerSelection = getComputerChoice()
    //to view what the computer's choice is
    console.log(computerSelection)
    //assigns player's choice to a variable
    let playerSelection = (prompt("What's your choice?")).toUpperCase();

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







function game() {
    //Initialises the score variables to keep score
    let com_score = 0;
    let player_score = 0;
    //Makes the game go for 5 rounds
    for (let i = 0; i < 5; i++) {
        //stores the outcome of the game into the result variable
        result = playRound()
        //announces the winner of the round 
        console.log(result)
        //add 1 to the winner of the round, we identify the winner of the round by lookig at the outcome string of the game
        if (result.includes("You win!")) {
            player_score++
        } else if (result.includes("You lose!")) {
            com_score++
        }
    } //announces the winner at the end of the 5 rounds
    if (com_score > player_score) {
        console.log(`You lost with a score of ${player_score} against the computer which scored ${com_score}`)
    } else if (player_score > com_score) {
        console.log(`You won with a score of ${player_score} against the computer which scored ${com_score}`)
    } else {
        console.log(`It's a draw! You both scored ${player_score}`)
    }

}


console.log(game())