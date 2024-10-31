# Calculator

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Extra Features](#extra-features)
- [Lessons Learned](#lessons-learned)
- [Acknowldgements](#acknowledgements)

---

## Introduction
This project is a browser-based calculator aimed at replicating a standard calculator. It is a part of my web development learning journey, where I focused on practising event handling, performing arithmetics in JavaScript and using the flexbox.

The application gets user input through both mouse clicks and keyboard entries and performs the user's desired arithmetic and displays the result on the display of the calculator.

## Features

- Input Support: Accepts input through both mouse clicks on calculator buttons and keyboard presses.
- Basic Arithmetic Operations: Handles addition, subtraction, multiplication, and division.
- Floating-Point Calculations: Supports decimal numbers for more precise arithmetic.
- Backspace Functionality: Allows deleting the last input via a "Del" button or by pressing the backspace key.
- Clear Functionality: Resets the calculator through an "AC" button or by pressing the Escape key.
- Rounding Logic: Results are rounded to fit within 13 digits to prevent display overflow.

## How to Use
1. Open the calculator webpage in your browser.
2. Enter numbers and select operators to perform calculations:
- Example: 5 + 3 or 10 / 2.
3. Use the equal button (=) or Enter key to display results.
4. Use the Del button or Backspace key to delete the last input one character at a time.
5. Use the AC button or Escape key to clear all inputs and reset the calculator for a new calculation.

## Project Structure
The project is organized as follows:
- Docs:
    - Flowchart: Contains a visual flowchart explaining the calculator's operation.
    - Pseudocode: Holds pseudocode files detailing the logic behind different features.

- HTML: Defines the calculator's structure and elements.
- CSS: Styles and positions elements, leveraging Flexbox for layout control.
- JavaScript: Manages DOM manipulation, event handling, and arithmetic calculations.

## Technologies Used
- **HTML**: Structure of the webpage.
- **CSS**: Styling and layout using Flexbox;
- **JavaScript**:  Manages user input, updates display content, and executes calculations.

## Extra Features
- Keyboard Input: Supports full keyboard usage for operations, numbers, and navigation.
- Negation Button: Allows toggling the sign of numbers for easier calculations with negative values.
- Result Persistence: Enables using the result of a calculation as the input for a new calculation without clearing.

## Lessons Learned

- Flexbox Layouts: Positioned and styled calculator elements with Flexbox for a responsive layout.
- Event Handling: Set up mouse and keyboard event listeners to handle various input types.
- DOM Manipulation: Updated display content dynamically based on user inputs.
- Conditional Logic: Controlled calculator flow using if statements and boolean flags.
- String & Array Methods: Used for handling number inputs, backspacing, and rounding results.
- Error Handling: Implemented special case handling for division by zero and large results.

## Acknowledgements
This project is part of The Odin Project curriculum. It allowed me to solidify my understanding and application of both string and array methods, dom manipulation and arithmetic operations in JavaScript.

Additional resources: MDN Web Docs and W3Schools website