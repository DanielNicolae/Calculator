function add(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

function subtract(a, b) {
    return (a - b);
}

function multiply(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

function divide(a, b) {
    return (a / b);
}

function changeDisplay(result) {
    document.querySelector(".result").textContent = result;
}



function displayOperation() {
    let numbersOp = "";
    document.querySelector(".clear").addEventListener("click", () => {
        changeDisplay("");
        numbersOp = "";
    });
    let digits = document.querySelectorAll(".number, .operation, .dot");
    for(let i = 0; i < digits.length; i++) {
        digits[i].addEventListener("click", () => {
            numbersOp += digits[i].textContent;
            changeDisplay(numbersOp);
        });
    }
}
displayOperation();

const operations = document.querySelectorAll(".operation");
const digits = document.querySelectorAll(".number, .dot");
let number1 = "";
let number2 = "";
let getFirstNum = true;

function getNumbers() {

    if(getFirstNum) {
        operations.forEach(op => {
            op.addEventListener("click", () => {
                getFirstNum = false;
                console.log(`numb1=${Number(number1)}`);
                return Number(number1);
            });
        });
    }
    else {
        document.querySelector(".equal").addEventListener("click", () => {
            console.log(`numb2=${Number(number2)}`);
            return Number(number2);
        });
    }
   
}


function getOperationSymbol() {
    operations.forEach(op => {
        op.addEventListener("click", () => {
            console.log(op.textContent);
            return op.textContent;
        });
    });
}

digits.forEach(key => {
    key.addEventListener("click", () => {
        if(getFirstNum){
            number1 += key.textContent;
        }
        else {
            number2 += key.textContent;
        }
        getNumbers();
    })
})

function evaluateOperation() {
    document.querySelector(".equal").addEventListener("click", () => {
        let result = 0;
        switch (getOperationSymbol()) {
            case "+":
                console.log("+")
                if(number2){
                    result += add(number1, number2);
                    console.log(`result= ${result}`);
                }
                break;
            case "-":
                result = subtract(number1, number2);
                break;
            case "x":
                result = multiply(number1, number2);
                break;
            case "&#247;":
                result = divide(number1, number2);
                break;
        }
        console.log(`${number1}  ${number2} = ${result}`);
        return result;
    });
}
evaluateOperation();

