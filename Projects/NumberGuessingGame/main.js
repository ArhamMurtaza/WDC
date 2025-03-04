const guessvalue = document.getElementById('guessField');
const guessRange = document.getElementById('guessRange');
const guessAttempts = document.getElementById('guessAttempts');
const guessSlot = document.getElementById('guessSlot');
const remaining = document.getElementById('remaining');
const result = document.getElementById('result');
const triesTaken = document.getElementById('triesTaken');

const guessCount = 10;
const maxNumber = 100;
const minNumber = 1;

let remainingGuesses = guessCount;
let userGuessHistory = [];
let correctNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

function resetGame() {
    remainingGuesses = guessCount;
    correctNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `You have ${remainingGuesses} guesses left`;
    result.innerHTML = '';
    guessvalue.value = '';
    triesTaken.innerHTML = '';
    userGuessHistory = [];
    guessvalue.focus();
}

function checkGuess(){

    if (remainingGuesses === 0) {
        result.innerHTML = "Game Over! You have no more guesses left.";
        setTimeout(() => {
            resetGame();
        }, 5000);
        
    }

    let userGuess = Number(guessvalue.value);
    if (userGuess < minNumber || userGuess > maxNumber) {
        result.innerHTML = "Please enter a number between 1 and 100.";
    }else{
        userGuessHistory.push(userGuess);
        remainingGuesses--;
        remaining.innerHTML = `You have ${remainingGuesses} guesses left`;
        guessSlot.innerHTML = `Your guess: ${userGuessHistory.join(', ')}`;
        guessvalue.value = '';

        if (userGuess === correctNumber) {
            result.innerHTML = `Congratulations! You guessed the correct number! It was ${correctNumber}`;
            triesTaken.innerHTML = `You took ${userGuessHistory.length} tries to guess the number`;
            setTimeout(() => {
                resetGame();
            }, 5000);
        }else if (userGuess < correctNumber) {
            result.innerHTML = "You guessed too low!";
        }else if (userGuess > correctNumber) {
            result.innerHTML = "You guessed too high!";
        }
    }

    guessvalue.focus();
}