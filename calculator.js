// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number2 === 0 ? "Cannot divide by zero" : number1 / number2;
}

// Function to get input numbers
function getNumbers() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    return { number1, number2 };
}

// Function to display result
function displayResult(result) {
    document.getElementById("calculation-result").textContent = result;
}

// Add event listeners to buttons
document.getElementById("add").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    displayResult(add(number1, number2));
});

document.getElementById("subtract").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    displayResult(subtract(number1, number2));
});

document.getElementById("multiply").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    displayResult(multiply(number1, number2));
});

document.getElementById("divide").addEventListener("click", function () {
    const { number1, number2 } = getNumbers();
    displayResult(divide(number1, number2));
});