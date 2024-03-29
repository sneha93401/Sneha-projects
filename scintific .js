let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    display.value += value;
}

function calculateOperation(operation) {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSpecialFunction(func) {
    if (func === 'sin') {
        display.value = Math.round(Math.sin(parseFloat(display.value)) * 100000) / 100000;
    } else if (func === 'cos') {
        display.value = Math.round(Math.cos(parseFloat(display.value)) * 100000) / 100000;
    } else if (func === 'tan') {
        display.value = Math.round(Math.tan(parseFloat(display.value)) * 100000) / 100000;
    } else if (func === 'sqrt') {
        display.value = Math.sqrt(parseFloat(display.value));
    } else if (func === 'exp') {
        display.value = Math.exp(parseFloat(display.value));
    } else if (func === 'log') {
        display.value = Math.log(parseFloat(display.value));
    }
}
