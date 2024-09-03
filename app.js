
let firstNumber = null;
let operator = null;
let secondNumber = null;



const nums = document.querySelectorAll('.num');
const equal = document.querySelector('#equal');
const disp = document.querySelector('#display');

nums.forEach((num) => {
    num.addEventListener('click', populateDisplay);
});

//updates displays and stores values
function populateDisplay(event) {
    const clicked = event.target;
    disp_value = clicked.innerText;
    if (event.target.innerText != 'Equals') disp.append(disp_value);
    
    if (event.target.innerText === 'Equals')
        operate(
            parseFloat(firstNumber), 
            parseFloat(secondNumber), 
            operator);
    else if (firstNumber === null) {
        firstNumber = disp_value;
        console.log(firstNumber);
    }
    else if (operator === null) {
        operator = disp_value;
        console.log(operator);
    }
    else if (secondNumber === null) {
        secondNumber = disp_value;
        console.log(secondNumber);
    }
}

function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function subtract(firstNumber, secondNumber) {
    console.log(firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
    console.log(firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
    console.log(firstNumber - secondNumber);
}

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            add(firstNumber, secondNumber);
        case '-':
        case '*':
        case '/':
    }
}

