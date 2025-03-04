const numberOfDice = document.getElementById('inputValue');
const rollBtn = document.getElementById('rollBtn');
const clearBtn = document.getElementById('clearBtn');
const diceValues = document.getElementById('diceValues');
const diceImages = document.getElementById('diceImages');

let rollHistory = [];


const validateInput = () => {
    if (numberOfDice.value === '') {
        diceValues.innerHTML = 'Please enter the number of dice';
        diceImages.innerHTML = '';
    } else if (numberOfDice.value < 1) {
        diceValues.innerHTML = 'Please enter a number greater than 0';
        diceImages.innerHTML = '';
    } else {
        return true;
    }
}

const rollDice = () => {
    if (validateInput()) {
        rollHistory = [];
        diceImages.innerHTML = '';
        let totalRoll = 0;
        for (let i = 0; i < numberOfDice.value; i++) {
            const diceRoll = Math.floor(Math.random() * 6) + 1;
            rollHistory.push(diceRoll);
            diceImages.innerHTML += `<img src="images/${diceRoll}.png" alt="${diceRoll} dice" class="dice-image">`;
            totalRoll += diceRoll;
        }
        if (numberOfDice.value > 30) {
            document.body.style.height = 'max-content';
        }
        diceValues.innerHTML = `Rolled ${numberOfDice.value} dice: ${rollHistory.join(', ')}`;
        document.getElementById('totalRoll').innerHTML = `Total Roll: ${totalRoll}`;
        numberOfDice.value = '';
        numberOfDice.focus();
        
    }
}

const clearDice = () => {
    numberOfDice.value = '';
    diceValues.innerHTML = 'Results will appear here';
    diceImages.innerHTML = '';
    document.getElementById('totalRoll').innerHTML = '';
}
