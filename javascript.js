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
    if (second == 0)
    {
        return 'WOAH!'
    }
    return first / second;
}

let id;
let firstNumber = '';
let operator = '';
let isOperatorPresent = false;
let secondNumber = '';
let result = '';
let isDotPresent = false;

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

    document.addEventListener('keydown', (event) =>
        {
            if (isDigit(event.key))
            {
                id = event.key;
                calculate();
            }
            else if (isOperator(event.key))
            {
                id = event.key;
                calculate();
            }
            else if (event.key == 'Enter' || event.key == '=')
            {
                id = '=';
                calculate();
            }
            else if (event.key == 'Escape')
            {
                id = 'clear';
                calculate();
            }
            else if (event.key == '.')
            {
                id = '.';
                calculate();
            }
            else if (event.key == 'Backspace')
            {
                id = 'backspace';
                calculate();
            }
        })
    
function calculate()
{
    if (isDigit(id) || (id == '.'))
    {
        firstNumber = getFirstNumber(id);
        secondNumber = getSecondNumber(id);
    }

    if (isOperator(id))
    {
        {
            if ((secondNumber))
            {
                operate(firstNumber, operator, secondNumber);
            }
            if (result)
            {
                firstNumber = result;
            }
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

    if (id == "backspace")
    {
        if (secondNumber)
        {
            deleteSecondNumber();
            let newInput = backspace(display.innerText);
            display.innerText = newInput;
            return;
        }
        if (isOperatorPresent)
        {
            deleteOperator();
            let newInput = backspace(display.innerText);
            display.innerText = newInput;
            return;
        }
        if (firstNumber)
        {
            deleteFirstNumber();
            let newInput = backspace(display.innerText);
            display.innerText = newInput;
            return
        }
        if (result)
        {
            resetCalculator();
        }
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
        isDotPresent = false;
        updateDisplay(operator)
    }
    if (id == 'backspace')
    {

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
    if ((isOperatorPresent == false) && id == '.' && (!(isDotPresent)) && (!(result)))
    {
        firstNumber += id;
        updateDisplay(id);
        isDotPresent = true;
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
    if ((isOperatorPresent == true) && id == '.' && (!(isDotPresent)))
    {
        secondNumber += id;
        updateDisplay(id);
        isDotPresent = true;
    }
    if ((id == 'backspace') && isOperatorPresent)
    {
        secondNumber = backspace(secondNumber);
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
        let operation = operator;
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
        isDotPresent = false;
    }
}

function resetCalculator()
{
    firstNumber = '';
    operator = '';
    secondNumber = '';
    display.innerText = '';
    isOperatorPresent = false;
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

function backspace (userInput)
{
    if (userInput != '')
    {
        let arrayInput = Array.from(userInput);
        let lastInput = (arrayInput.length) - 1;
        arrayInput.splice(lastInput, 1);
        let stringInput = arrayInput.join('');
        return stringInput;
    }
}

function deleteFirstNumber()
{
    if ((!secondNumber) && (!isOperatorPresent) && firstNumber)
    {
        firstNumber = backspace(firstNumber);
    }
}

function deleteSecondNumber()
{
    if (secondNumber && isOperatorPresent)
    {
        secondNumber = backspace(secondNumber);
    }
}

function deleteOperator()
{
    if ((!secondNumber) && isOperatorPresent && firstNumber)
    {
        operator = backspace(operator);
        isOperatorPresent = false;
    }
}
