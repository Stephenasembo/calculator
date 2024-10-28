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

let id;
let firstNumber = '';
let operator;
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
        button.addEventListener('click', () =>
        {
            id = getButtonId(button);
            firstNumber += id;
            operator = getOperator(id);
        });
    })
    
function getButtonId(button)
{
    return button.id;
}

function getOperator(id)
{
    switch (id)
    {
        case '+':
            operator = '+';
            break;

        case '-':
            operator = '-';
            break;

        case '*':
            operator = '-';
            break;

        case '/':
            operator = '/';
            break;
    }
    return operator;
}
