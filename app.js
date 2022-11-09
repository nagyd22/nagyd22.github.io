let playerScore=0, computerScore=0, drawscore=0, playerChoice="", result="";

function rock() {
    playerChoice='rock';
    document.getElementById("which").innerText="You selected: rock";
}

function paper() {
    playerChoice='paper';
    document.getElementById("which").innerText="You selected: paper";
}

function scissors() {
    playerChoice='scissors';
    document.getElementById("which").innerText="You selected: scissors";
}

function computerSelect() {
    const computerChoice = ['rock','paper','scissors']
    return computerChoice[Math.floor(Math.random()*3)];
}

function winner() {
    var computerChoice = computerSelect();

    if(playerChoice === computerChoice){
        drawscore++;
        document.getElementById("result").innerText = "It's a tie"
    }else if(playerChoice == 'rock'){
        if(computerChoice == 'paper'){
            computerScore++;
            document.getElementById("result").innerText = "Computer won"
        }else{
            playerScore++;
            document.getElementById("result").innerText = "Player won"
        }
    }else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock'){
            computerScore++;
            document.getElementById("result").innerText = "Computer won"
        }else{
            playerScore++;
            document.getElementById("result").innerText = "Player won"
        }
    }else if(playerChoice == 'paper') {
        if(computerChoice == 'scissors'){
            computerScore++;
            document.getElementById("result").innerText = "Computer won"
        }else{
            playerScore++;
            document.getElementById("result").innerText = "Player won"
        }
    }

    document.getElementById("win").innerText = playerScore;
    document.getElementById("draw").innerText = drawscore;
    document.getElementById("lose").innerText = computerScore;
}