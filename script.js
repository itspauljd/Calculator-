const displayElement = document.getElementById('display')
const deleteKey = document.getElementById('delete')
const clearKey = document.getElementById('clear')
const numberKeys = document.getElementsByClassName('num');
const decimalKey = document.getElementsByClassName('decimal');

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

// Code displays values on key presses
const numKeyArray = Array.from(numberKeys);
numKeyArray.forEach(key => {
    key.addEventListener('click', function () {
        if (displayElement.innerText.length < 15) {
            displayElement.innerText = displayElement.innerText + key.innerText;
        }
    });
})



// delete function 
deleteKey.addEventListener('click', deleteFunction)  
function deleteFunction() {
    displayElement.innerText = displayElement.innerText.slice(0,-1)
}

// clear function
clearKey.addEventListener('click', clearFunction) 
function clearFunction() {
    displayElement.innerText = ''
}

