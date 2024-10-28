const container = document.querySelector('#container');
// Basic math operations of a regular calculator
function add (first, second)
{
    return first + second;
}

function subtract (first, second)
{
    return first - second;
}

function multiply (first, second)
{
    return first * second;
}

function divide (first, second)
{
    return first / second;
}

let firstNumber;
let secondNumber;

const display = document.querySelector('#display');
function updateDisplay(text)
{
    display.innerText += text;
}

buttons = document.querySelectorAll('button');
const buttonsArray = Array.from(buttons);

buttonsArray.forEach((button) => 
    {
        button.addEventListener('click', () => {
        getButtonId(button)});
    })
    
function getButtonId(button)
{
    firstNumber = button.id;
    updateDisplay(firstNumber);
}