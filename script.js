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

function operate(operator, num1, num2) {
    if (operator == 'addition') {
        addition(num1, num2);
    } else if (operator = 'subtraction') {
        subtraction(num1, num2);
    } else if (operator = 'multiplication') {
        multiplication(num1, num2);
    } else if (operator = 'division') {
        division (num1, num2);
    }
}

