const typedValue = "";
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const alphaIndex = []
let letter = ""
let position
const posIndex = [1, 2, 3, 4, 5]
//Increment the round number each turn and set timeOut for each round
let round = function () {
    for (round = 1, round <6, round++)
    {setTimeout(function(){ alert(`{$round}}`); }, 10000*(1/round));}
}


document.getElementById('start').addEventListener('click', () => {
    //Clear input letters
    typedValue = "";
    //Generate a random index from 0-25
    alphaIndex = Math.floor(Math.random() * alphabet.length-1);
    //Generate a random letter
    letter = alphabet[alphaIndex];
    //Select a random position 1-5 and create a string of the location
    position = "#pos" + String(Math.floor(Math.random() * posIndex.length));
    //Place letter at position????

