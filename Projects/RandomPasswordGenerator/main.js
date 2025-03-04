const passwordLength = document.getElementById("passwordLength");
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generatedPassword = document.getElementById("generatedPassword");

const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = "";

    if(!includeUppercase.checked && !includeLowercase.checked && !includeNumbers.checked && !includeSymbols.checked){
        alert("Please select at least one option");
        return;
    }

    if(includeUppercase.checked){
        characters += uppercase;
    }
    if(includeLowercase.checked){
        characters += lowercase;
    }
    if(includeNumbers.checked){
        characters += numbers;
    }
    if(includeSymbols.checked){
        characters += symbols;
    }

    let password = "";
    for(let i = 0; i < passwordLength.value; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    generatedPassword.value = password;
}

const copyPassword = () => {
    if(generatedPassword.value === ""){
        showAlert("Please generate a password first", "rgba(255, 75, 75, 1)", "bottom");
    }else if(generatedPassword.value !== ""){
        navigator.clipboard.writeText(generatedPassword.value);
        showAlert("Password copied to clipboard", "rgba(0, 0, 0, 0.8)", "top");
    }
}

const showAlert = (message, color, position) => {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.style.position = "fixed";
    alertBox.style[position] = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.backgroundColor = color;
    alertBox.style.color = "white";
    alertBox.style.padding = "10px 20px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.zIndex = "1000";
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.transition = "opacity 0.5s";
        alertBox.style.opacity = "0";
        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 100);
    }, 2000);
}