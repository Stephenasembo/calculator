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
// Our calculator can only display a maximum of 13 digits
const displaySize = 13;
display.innerText = '';
function updateDisplay(text)
{
    if ((display.innerText).length < displaySize)
    {
        display.innerText += text;
    }
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
    if ((display.innerText).length < displaySize)
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
    }
    if (id == '=')
    {
        operate(firstNumber, operator, secondNumber);
    }

    if (id == 'clear')
    {
        resetCalculator();
    }

    if (id == 'backspace')
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
        result += '';
        if (result.length > displaySize)
        {
            if(isFloat(result))
            {
                let dotIndex = (Array.from(result)).findIndex((item) => item == '.');
                result = Number(result).toFixed(displaySize - (dotIndex + 1));
            }
            else
            {
                result = roundInteger(result);
            }
        }
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

function isFloat(number)
{
    let newString = number.toString();
    let newArray = Array.from(newString);
    let dotExist = newArray.includes('.');
    return dotExist;
}

function roundInteger(number)
{
    let newArray = Array.from(number.toString());
    let valueToRoundIndex = 12;
    let valueToLookIndex = 13;
    let numberOfDeletedValues = (newArray.length) - 12;
    let numberToRound = Number(newArray[valueToRoundIndex]);
    let numberToLook = Number(newArray[valueToLookIndex]);

    if (numberToLook >= 5)
    {
        numberToRound += 1;
        numberToRound += '';
    }
    else
    {
        numberToRound += '';
    }
    newArray.splice(valueToRoundIndex, numberOfDeletedValues, numberToRound);
    return newArray.join('');
}