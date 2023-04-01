let num1 = prompt("Enter your first number");
let num2 = prompt("Enter your second number");


document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let total = document.getElementById("sum-el");


function add() {
    let sum = Number(num1) + Number(num2);
    total.textContent = "Result: " + sum;
}

function subtract() {
    let sum = num1 - num2;
    total.textContent = "Result: " + sum;
}

function divide() {
    let sum = num1 / num2;
    total.textContent = "Result: " + sum;
}

function multiply() {
    let sum = num1 * num2;
    total.textContent = "Result: " + sum;
}


























