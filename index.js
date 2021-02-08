function add(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += Number(num);
    }
    return sum;
}

function subtract(a, b) {
    return (a - b);
}

function multiply(...nums) {
    let total = 1;
    for (let num of nums) {
        total *= Number(num);
    }
    return total;
}

function divide(a, b) {
    return (a / b);
}

let isNotEvaluated = true;
let numbersOp = "";
let result = "";

function changeDisplay(mathOp) {
    document.querySelector(".result").textContent = mathOp;
}

function displayOperation() {
    let symbols = document.querySelectorAll(".number, .operation, .dot");
    for(let i = 0; i < symbols.length; i++) {
        symbols[i].addEventListener("click", () => {
            numbersOp += symbols[i].textContent;
            changeDisplay(numbersOp);
        });
    }
}
displayOperation();

document.querySelector(".clear").addEventListener("click", () => {
    changeDisplay("");
    numbersOp = "";
    number1 = "";
    number2 = "";
});

const operations = document.querySelectorAll(".operation");
const digits = document.querySelectorAll(".number, .dot");
let number1 = "";
let number2 = "";
let getFirstNum = true;
let symbol = "";

function getNumbers() {
    if(getFirstNum) {
        operations.forEach(op => {
            op.addEventListener("click", () => {
                symbol = op.textContent;
                console.log(symbol);
                getFirstNum = false;
                console.log(`numb1=${number1}`);
                return Number(number1);
            });
        });
    }
    else {
        console.log(`numb2=${number2}`);
        return Number(number2);
    }
}

digits.forEach(key => {
    key.addEventListener("click", () => {
        if(getFirstNum){
            number1 += key.textContent;
        }
        else if(isNotEvaluated) {
            number2 += key.textContent;
        }
        getNumbers();
    })
})

function evaluateOperation() {
    isNotEvaluated = false;
    
    console.log(symbol);
    switch (symbol) {
        case "+":
            result += add(number1, number2).toFixed(2);
            number1 = Number(result);
            number2 = "";
            isNotEvaluated = true;
            changeDisplay(result);
            console.log(`addition = ${result}`);
            break;
        case "-":
            result = subtract(number1, number2).toFixed(2);
            number1 = Number(result);
            number2 = "";
            isNotEvaluated = true;
            changeDisplay(result);
            console.log(`subtraction = ${result}`);
            break;
        case "x":
            result = multiply(number1, number2).toFixed(2);
            number1 = Number(result);
            number2 = "";
            isNotEvaluated = true;
            changeDisplay(result);
            console.log(`multiplication = ${result}`);
            break;
        case "÷":
            result = divide(number1, number2).toFixed(2);
            number1 = Number(result);
            number2 = "";
            isNotEvaluated = true;
            changeDisplay(result);
            console.log(`division = ${result}`);
            break;
    }
    result = "";
    numbersOp = number1;
    return Number(result);
}

document.querySelector(".equal").addEventListener("click", () => {
    evaluateOperation();
});