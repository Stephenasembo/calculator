const container = document.querySelector('#container');
// Basic math operations of a regular calculator
function add (first, second)
{
    return Number(first) + Number(second);
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
let operator = '';
let secondNumber = '';
let result = '';

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
            firstNumber = getFirstNumber(id);
            operator = getOperator(id);
            secondNumber = getSecondNumber(id);
            operate (firstNumber, operator, secondNumber, id);
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

function getFirstNumber(id)
{
    if ((!(operator)) && isDigit(id))
    {
        firstNumber += id;
    }
    return firstNumber;
}

function getSecondNumber(id)
{
    if ((operator) && isDigit(id))
    {
        secondNumber += id;
    }
        return secondNumber;
}

function isDigit(id)
{
    if (id >= 0 && id <= 9)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function operate(first, operator, second, id)
{
    if (id == '=')
    {
        let result = '';
        let operation = operator
        switch (operation)
        {
            case '+':
                result = add(first, second)
                break;
            case '-':
                result = subtract(first, second)
                break;
            case '*':
                result = multiply(first, second)
                break;
            case '/':
                result = divide(first, second)
                break;                     
        }
        return result;    
    }
}