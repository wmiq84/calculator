let firstNumber = '';
let operator = null;
let secondNumber = '';
let opClicked = false;

const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const disp = document.querySelector('#display');


// display and stroe numerical values
nums.forEach((num) => {
    num.addEventListener('click', (event) => {
        const clickedNumber = event.target.innerText;
        if (!opClicked) {
            firstNumber += clickedNumber;
            disp.innerText += clickedNumber;
        } else {
            secondNumber += clickedNumber;
            disp.innerText = firstNumber + secondNumber;
        }
    });
});



operators.forEach((op) => {
    op.addEventListener('click', (event) => {
        //performs operation pre-adding two numbers if 3+ numbers are selected
        if (opClicked === true) {
            equal.dispatchEvent(new Event('click'));
            operator = event.target.innerText;
            disp.innerText += operator;
        }
        else{ 
            opClicked = true;
            operator = event.target.innerText;
        }
    });
});

equal.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '' && operator !== null) {
        const result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
        disp.innerText = result;

        //sets the first number to operation result
        firstNumber = result.toString();
        secondNumber = '';
        operator = null;
        opClicked = false;
    }
});

clear.addEventListener('click', () => {
    firstNumber = '';
    operator = null;
    secondNumber = '';
    disp.innerText = '';
    opClicked = false;
});

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default:
            console.log('Unknown operator');
            return null;
    }
}