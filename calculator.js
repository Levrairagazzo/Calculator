let firstOperand = '0';
let secondOperand = '0';
let operator = null;

function resetOperands(){
    firstOperand = '0';
    secondOperand = '0';
}

function appendDigit(digit, currentOperand){
    currentOperand = currentOperand + digit;
    return currentOperand; 
}


function add(numberOne, numberTwo){
    return numberOne + numberTwo
}
function divise(numberOne, numberTwo){
    return numberOne / numberTwo
}


function multiply(numberOne, numberTwo){
    return numberOne * numberTwo
}

function subtract(numberOne, numberTwo){
    return numberOne - numberTwo
}

function operate(numberOne, numberTwo, operator){
    switch(operator) {
        case "X":
          return multiply(numberOne,numberTwo);
          break;
        case "-":
          return subtract(numberOne,numberTwo);
          break;
        case "/":
          return divise(numberOne, numberTwo);
        break;
        case "+":
          return add(numberOne, numberTwo);
        break;
        
      }
}



///---------------------------------------------------

let input = '15+95';

function calculate(strInput){
    let operand1 = '',operand2 = '',operator = '';

    let pointer = 0;

    while(isDigit(strInput[pointer]) === true ){
        operand1 += strInput[pointer];
        pointer ++;
    }
    console.log(operand1);
    operator = strInput[pointer];
    pointer++;
    console.log(operator);

    while(isDigit(strInput[pointer]) === true ){
        operand2 += strInput[pointer];
        pointer ++;
    }
    console.log(operand2);
    
}

function isDigit(myChar){
    if (typeof myChar !== 'string') {
        return false;
      }
    
      if (myChar.trim() === '') {
        return false;
      }
    
      return !isNaN(myChar);
}

calculate(input);