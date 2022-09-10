const displayElement = document.getElementById('display')
const decimalKey = document.getElementById('decimal');
const deleteKey = document.getElementById('delete')
const clearKey = document.getElementById('clear')
const numberKeys = document.getElementsByClassName('num');

// operator functions 
function addition(num1, num2) {
    num1 + num2
}
function subtraction(num1, num2) {
    num1 - num2
}
function multiplication(num1, num2) {
    num1 * num2
}
function division(num1, num2) {
    num1 / num2
}

// operate function 
function operate(operator, num1, num2) {
    if (operator == 'addition') {
        addition(num1, num2);
    } else if (operator = 'subtraction') {
        subtraction(num1, num2);
    } else if (operator = 'multiplication') {
        multiplication(num1, num2);
    } else if (operator = 'division') {
        division(num1, num2);
    }
}

// code displays values on key presses
const numKeyArray = Array.from(numberKeys);
numKeyArray.forEach(key => {
    key.addEventListener('click', function () {
        if (displayElement.innerText.length < 15) {
            displayElement.innerText = displayElement.innerText + key.innerText;
        }
    });
})

// code makes sure decimals cannot be repeated
decimalKey.addEventListener('click', function () {
    let displayArray = displayElement.innerText.split('');
    var count = 0;
    for (i = 0; i < displayArray.length; i++) {
        if (displayArray[i] == '.') {
            count += 1
        }
    }
    if (count == 0 && displayElement.innerText.length < 15) {
        displayElement.innerText = displayElement.innerText + '.'
    }
})

// delete function 
deleteKey.addEventListener('click', deleteFunction);
function deleteFunction() {
    displayElement.innerText = displayElement.innerText.slice(0, -1)
}

// clear function
clearKey.addEventListener('click', clearFunction);
function clearFunction() {
    displayElement.innerText = ''
}

