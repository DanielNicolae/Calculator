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
    document.getElementById("result").textContent(result);
}

document.getElementsByClassName("clear")[0].addEventListener("click", () => {
    changeDisplay("");
});