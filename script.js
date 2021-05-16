const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let letter = ""
let position = ""
const posIndex = [1, 2, 3, 4, 5]
let score = 0;
let roundNumber = 1;
let gameRunning = false;
//Increment the round number each turn and set timeOut for each round
document.getElementById('start').addEventListener('click', () => {
    //Button does nothing if the game is already running
    if (gameRunning) {
        return false;
    }
    //Change gameRunning to true
    gameRunning = true;
    //Clear input letters and reset score and roundNumber
    if (position !== ""){
        document.querySelector(position).innerHTML = "";
        score = 0;
        roundNumber = 1;
    }
    generateLetter();
    beginRound(roundNumber);
})

document.addEventListener("keypress", (e) => {
    //If gameRunning is false, return so key press doesn't do anything
    if (!gameRunning) {
        return;
    }
    if(e.key === letter){
        //Increment score
        score++;
        document.querySelector("#scoreNum").innerHTML = score;
        //Increment round
        roundNumber++;
        //Clear the letter and positioning
        letter = "";
        document.querySelector(position).innerHTML = "";
        //Clear timer
        clearTimeout(roundTimer);
        //Generate a new letter
        generateLetter();
        //Reset timer and begin next round
        beginRound(roundNumber);
    } else {
        //Alert "Game over!" and reset timer
        gameOver();
        clearTimeout(roundTimer);
    }
})

function gameOver() {
    gameRunning = false;
    alert("Game over!");
}

function generateLetter(){
    //Generate a random index from 0-25
    let alphaIndex = Math.ceil(Math.random() * alphabet.length-1);
    //Generate a random letter
    letter = alphabet[alphaIndex];
    //Select a random position 1-5 and create a string of the location
    position = "#pos" + String(Math.ceil(Math.random() * posIndex.length));
    //Place letter at position
    document.querySelector(position).innerHTML = letter;
}
//Create a timer
let roundTimer = null;
function beginRound(roundNumber){
    roundTimer = setTimeout(
        function(){gameOver();}, 
        10000*(1/roundNumber)
    );
}