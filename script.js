// Function to append values to the display
function appendValue(value) {
    let display = document.getElementById("display");

    // If "Error" is currently displayed, clear it before appending new values
    if (display.value === "Error") {
        clearDisplay();
    }

    // Append the new value
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLast() {
    let display = document.getElementById("display").value;

    // If "Error" is displayed, clear the entire display
    if (display === "Error") {
        clearDisplay();
    } else {
        document.getElementById("display").value = display.substring(0, display.length - 1);
    }
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById("display").value;

    try {
        // Check if the display is empty
        if (display === "") {
            return;
        }

        // Use eval to calculate, but only if it's a valid expression
        let result = eval(display);

        // Check if result is undefined or NaN (Not a Number)
        if (result === undefined || isNaN(result)) {
            document.getElementById("display").value = "Error"; // Display "Error" if the calculation is invalid
        } else {
            document.getElementById("display").value = result;
        }
    } catch (e) {
        // If there’s an error in the expression, display "Error"
        document.getElementById("display").value = "Error";
    }
}

// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Allow only numbers, operators, Enter, Backspace, Escape, and decimal point
    if (!isNaN(key) || ['+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Escape'].includes(key)) {

        // If a number or operator key is pressed, append it
        if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
            appendValue(key);
        }

        // If Enter is pressed, calculate the result
        if (key === 'Enter') {
            event.preventDefault(); // Prevent form submission if there’s any form
            calculate();
        }

        // If Backspace is pressed, delete the last character
        if (key === 'Backspace') {
            deleteLast();
        }

        // If Escape is pressed, clear the display
        if (key === 'Escape') {
            clearDisplay();
        }

        // If '.' is pressed, add a decimal point
        if (key === '.') {
            appendValue('.');
        }

    } else {
        // Prevent any other key from being entered
        event.preventDefault();
    }
});
