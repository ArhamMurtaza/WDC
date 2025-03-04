const userinput  = document.getElementById('inputValue');
const convertBtn = document.getElementById('convertBtn');
const outputValue = document.getElementById('outputValue');
const toCelsius = document.getElementById('toCelsius');
const toFahrenheit = document.getElementById('toFahrenheit');

function convertTemp() {
    if (toCelsius.checked) {
        const celsius = ((userinput.value - 32) * 5/9).toFixed(2);
        outputValue.textContent = `${userinput.value}°F = ${celsius}°C`;
    } else if (toFahrenheit.checked) {
        const fahrenheit = ((userinput.value * 9/5) + 32).toFixed(2);
        outputValue.textContent = `${userinput.value}°C = ${fahrenheit}°F`;
    } else {
        outputValue.textContent = 'Please select a conversion unit';
    }
}