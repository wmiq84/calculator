
let firstNumber = 1;
let secondNumber = 2;
let operator = '+';


const btns = document.querySelectorAll('button');
const disp = document.querySelector('#display')

btns.forEach(() => {
    addEventListener('click', populateDisplay);
});

function populateDisplay(event) {
    const clicked = event.target;
    console.log(clicked.innerText);
}

function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

// function operator(firstNumber, secondNumber, operator) {
//     switch (operator) {
//     }
// } 