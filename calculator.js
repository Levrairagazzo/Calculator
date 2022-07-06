let screenVal = "";
let operator = null;
let savedVal = "";


function resetValues(){
    // resetScreen();
     screenVal = "";
    operator = null;
    savedVal = "";

}

function resetScreen(){
    const container = document.getElementById('screen');
    container.innerHTML = '';
}

function add(numberOne, numberTwo){
    return numberOne + numberTwo;
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
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
    switch(operator) {
        case "*":
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


function isDigit(myChar){
    if (typeof myChar !== 'string') {
        return false;
      }
    
      if (myChar.trim() === '') {
        return false;
      }
    
      return !isNaN(myChar);
}


function addToScreen(input){
    const container = document.getElementById('screen');
    if(isDigit(input)){
    container.innerHTML += input;
    screenVal += input;
    } else {
        selectOperator(input);
    }

}

function selectOperator(newOperator){
    
        operator = newOperator;
        if(savedVal === '')
            savedVal = screenVal;
        screenVal = '';
        resetScreen();

}

function pressEqual(){
    console.log("hello");
    const container = document.getElementById('screen');
    let result = operate(savedVal,screenVal,operator);
    resetValues();
    console.log("hello");
    container.innerHTML = result;
    savedVal = result.toString();
    console.log("hello");
    console.log(savedVal);

}