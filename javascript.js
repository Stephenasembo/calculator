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
let isOperatorPresent = false;
let secondNumber = '';
let result = '';

const display = document.querySelector('#display');
display.innerText = '';
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
            calculate();
        });
    })
    
function calculate()
{
    if (isDigit(id))
    {
        firstNumber = getFirstNumber(id);
        secondNumber = getSecondNumber(id);
    }

    else if (isOperator(id))
    {
        if ((secondNumber))
        {
            result = operate(firstNumber, operator, secondNumber);
        }
        if (result)
        {
            firstNumber = result;
        }
        operator = getOperator(id);
    }

    else if (id == '=')
    {
        operate(firstNumber, operator, secondNumber);
    }

    else if (id == 'clear')
    {
        resetCalculator();
    }
}
function getButtonId(button)
{
    return button.id;
}

function getOperator(id)
{
    if (!(isDigit(id)) && isOperator(id))
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
                operator = '*';
                break;

            case '/':
                operator = '/';
                break;
        }
        isOperatorPresent = true;
        updateDisplay(operator)
    }
    return operator;    
}

function getFirstNumber(id)
{
    if ((result))
    {
        if (isDigit(id) && (isOperatorPresent == false))
        {
            resetCalculator();
            result = '';
        }
    }

    if ((isOperatorPresent == false) && isDigit(id))
    {
        firstNumber += id;
        updateDisplay(id);
    }
    return firstNumber;
}

function getSecondNumber(id)
{
    if ((isOperatorPresent == true) && isDigit(id))
    {
        secondNumber += id;
        updateDisplay(id);
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

function operate(first, operator, second)
{
    {
        display.innerText = '';
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
        resetCalculator();
        updateDisplay(result);
    }
    return result;    
}

function resetCalculator()
{
    firstNumber = '';
    operator = '';
    secondNumber = '';
    display.innerText = '';
    isOperatorPresent = false;
}

function continueCalculation(id)
{
    if ((result) && isOperator(id))
    {
        operate(result, operator, second, id);
    }
}

function isOperator(id)
{
    if (id == '+' || id == '-' || id == '*' || id == '/')
    {
        return true;
    }
    else
    {
        return false;
    }
}