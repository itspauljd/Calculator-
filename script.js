const displayElement = document.getElementById('display')
const decimalKey = document.getElementById('decimal');
const deleteKey = document.getElementById('delete')
const clearKey = document.getElementById('clear')
const numberKeys = document.getElementsByClassName('num');
const operatorKeys = document.getElementsByClassName('operator')
const equalKey = document.getElementById('equal')



// displays values on key presses
var displayStatus = true
const numKeyArray = Array.from(numberKeys);
numKeyArray.forEach(key => {
    key.addEventListener('click', function () {
        if (displayElement.innerText.length < 15 && displayStatus === true) {
            displayElement.innerText = displayElement.innerText + key.innerText;
        } 
        if (displayElement.innerText.length < 15 && displayStatus === false) {
            displayElement.innerText = key.innerText;
            displayStatus = true 
        }
    });
})

// makes sure decimals cannot be repeated
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
    storage = {}
}

// operate function 
function operate(operator, num1, num2) {
    if (operator == '+') {
        return addition(num1, num2);
    } else if (operator == '-') {
        return subtraction(num1, num2);
    } else if (operator == '*') {
        return multiplication(num1, num2);
    } else if (operator == '÷') {
        return division(num1, num2);
    }
}

// operator functions 
function addition(num1, num2) {
    return (num1 + num2)
}
function subtraction(num1, num2) {
    return (num1 - num2)
}
function multiplication(num1, num2) {
    return (num1 * num2)
}
function division(num1, num2) {
    return (num1 / num2)
}

// storage things
let storage = {} 

const operatorKeyArray = Array.from(operatorKeys);
operatorKeyArray.forEach(key => {
    key.addEventListener('click', function () {
        storage.num1 = displayElement.innerText;
        storage.operator = key.innerText;
        displayStatus = false; 
    })
})

equalKey.addEventListener('click', function(){
    if (Boolean(storage.num1) && Boolean(storage.operator)){
        storage.num2 = displayElement.innerText;
        displayElement.innerText = operate(storage.operator, Number(storage.num1), Number(storage.num2));
        storage.num1 = displayElement.innerText;
    }
})

