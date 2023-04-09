/*
 Title: taplin-number-game.js
 Author: Danielle Taplin
 Date: 4/05/2023
 Description: JavaScript code to make a number guessing game, randomizing a number
*/

const rnd = Math.floor(Math.random() * 10) + 1; //random number generator
function chkGuess(){ //a function to check the guess on input and see if it matches the random number that was generated

    const guess = document.getElementById('guess').value; //a variable that is going to hold the guess on input
    const msgGreaterThan = "The number is greater than"; //declare if guess is too low on input
    const msgLessThan = "The number is less than"; //declare if guess is too high on input
    const msgCongrats = "Congratulations! You picked the correct number!"; //declare the correct guess on input

    if (rnd < guess){ //this if is based on the number that is being randomly generated
        document.getElementById("results").innerHTML = msgLessThan + " " + guess; //this message states the guess was higher than the random number generated
    } else if (rnd > guess){ //anything but if happens, do this else
        document.getElementById("results").innerHTML = msgGreaterThan + " " + guess; //this message states the guess was lower than the random number generated
    } else {
        document.getElementById("results").innerHTML = msgCongrats; //this message states the guess was correct
    }
}
