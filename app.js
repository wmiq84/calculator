
let firstNumber = null;
let operator = null;
let secondNumber = null;



const nums = document.querySelectorAll('.num');
const equal = document.querySelector('#equal');
const disp = document.querySelector('#display');

nums.forEach(() => {
    addEventListener('click', populateDisplay);
});

equal.addEventListener('click', operate);



function populateDisplay(event) {
    const clicked = event.target;
    
    disp_value = clicked.innerText;
    disp.append(disp_value);
    
    if (firstNumber === null) {
        firstNumber = disp_value;
        console.log(firstNumber);
    }
    else if (operator === null) {
        operator = disp_value;
        console.log(operatorNumber);
    }
    else if (secondNumber === null) {
        secondNumber = disp_value;
        console.log(secondNumber);
    }
}

function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
    }
}

