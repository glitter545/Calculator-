function add(a,b) {
    return a + b;
};

function substract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
};

function operate(operator,a,b) {
    if(operator === "x") {
        return multiply(a,b);
    } else if(operator === "+") {
        return add(a,b);
    } else if(operator === "-") {
        return substract(a,b);
    } else if(operator === "/") {
        return divide(a,b);
    } else {
        return "ERROR";
    }
}
let display = "";
let displayValue = "";
let firstNumber = 0;
let secondNumber = 0;
let thirdNumber = 0;

let result = 0;



const numbers = document.getElementsByClassName("number");

for(let i=0;i<numbers.length;i++) {
    numbers[i].addEventListener("click",populate);
}

const operators = document.getElementsByClassName("operator");
let p = document.querySelector('p');

for(let i=0;i<operators.length;i++){
    operators[i].addEventListener("click",firstInput);
}

function populate(e) {
    p.textContent += e.target.textContent;
    display = p.textContent;

}

function firstInput(e) {
    firstNumber = +display;
    display = "";
    p.textContent = "";
    console.log("first " +firstNumber);
    for(let i=0;i<operators.length;i++){
        operators[i].removeEventListener("click",firstInput);
        operators[i].addEventListener("click",secondInput);
        
    }
    if(e.target.textContent === "+") {
        result += add(firstNumber,secondNumber);
    
    }
    console.log(result);
    
}




function secondInput(e) {
    secondNumber = +display;
    p.textContent = "";
    console.log("second " +secondNumber);
    
    for(let i=0;i<operators.length;i++){
        operators[i].removeEventListener("click",secondInput);
        operators[i].addEventListener("click",thirdInput);
        
    }

    if(e.target.textContent === "+") {
        let res = add(result,secondNumber);
        result = res;
    }
 console.log(result);

} 

function thirdInput(e) {
    thirdNumber = +display;
    p.textContent = "";
    console.log("third " +thirdNumber);

    for(let i=0;i<operators.length;i++){
        operators[i].removeEventListener("click",thirdInput);
    }

    if(e.target.textContent === "+") {
        let res = add(result,thirdNumber);
        result = res;
    }
    console.log(result);
} 

const equal = document.getElementById("equal");

equal.addEventListener("click", () => {
    p.textContent = result;
})















