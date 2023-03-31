const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const winner = document.querySelector('#result')
const score = document.querySelector('#score')

let com_score = 0;
let player_score=0;
let player_choice
let outcome

winner.textContent = "Select your choice!"
score.setAttribute('style', 'white-space: pre;');
score.textContent = "Com vs Player \r\n"  
score.textContent +=com_score + ":"+ player_score


rock.addEventListener('click', function(){
    player_choice = "ROCK"
    //winner.textContent = player_choice
    game("ROCK")
});
paper.addEventListener('click', function(){
    player_choice = "PAPER"
    //winner.textContent = player_choice
    game("PAPER")
});
scissors.addEventListener('click', function(){
    player_choice = "SCISSORS"
    //winner.textContent = player_choice
    game("SCISSORS")
});




function game(select) {
    console.log(select)
    let computerSelection = getComputerChoice()
    console.log(`Computer chose ${computerSelection}`)


    if (select == computerSelection) {
        outcome = "It's a draw!"
    }
    //player chooses rock, computer chooses paper
    //player chooses rock, computer chooses scissors 
    else if (select == "ROCK") {
        if (computerSelection == "PAPER") {
            outcome = "You lose! Paper beats rock"
            com_score++

        }
        else {
            outcome = "You win! Rock beats scissors"
            player_score++

        }
    }
    //player chooses paper, computer chooses scissors
    //player chooses paper, computer chooses rock
    else if (select == "PAPER") {
        if (computerSelection == "SCISSORS") {
            outcome = "You lose! Scissors beats paper"
            com_score++

        }
        else {
            outcome = "You win! Paper beats rock"
            player_score++

        }

    }
    //player chooses scissors, computer chooses rock
    //player chooses scissors, computer chooses paper
    else if (select == "SCISSORS") {
        if (computerSelection == "ROCK") {
            outcome = "You lose! Rock beats scissors"
            com_score++

        }
        else {
            outcome = "You win! Scissors beats paper"
            player_score++

        }
    }
    console.log(outcome)
    
    if (com_score <5 && player_score<5){
        winner.textContent = outcome 
        score.textContent = "Com vs Player \r\n"  
        score.textContent +=com_score + ":"+ player_score
    }else if (com_score ==5){
        winner.textContent = "Computer Won!" + "with a score of  "+ com_score +" vs "+ player_score +  ", Click to play again!"
        score.textContent = "Com vs Player \r\n"  
        score.textContent +=com_score + ":"+ player_score
        com_score = 0;
        player_score = 0;
        //var z = document.createElement('p'); //is a node
        //z.textContent = "Computer Won"; //stores text in node
        //winner.appendChild(z) //appends z which is a p node to winner as the parent node

    }else if (player_score==5){
        winner.textContent = "You Won!" + "with a score of  "+ com_score +" vs "+ player_score + ", Click to play again!"
        score.textContent = "Com vs Player \r\n"  
        score.textContent +=com_score + ":"+ player_score
        com_score = 0;
        player_score = 0;
        //var z = document.createElement('p'); //is a node
        //z.textContent = "Computer Won"; //stores text in node
        //winner.appendChild(z) //appends z which is a p node to winner as the parent node
    }
    
}






//function that selects a random choice for the computer
function getComputerChoice() {
    let choices = Array("ROCK", "PAPER", "SCISSORS")

    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);

    // get random item
    const item = choices[randomIndex];

    return item
}
