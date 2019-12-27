class Calculator {


    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined
    }

    delete() {
        /* take the last character of the string from the first to second or last number */
        // each time we click we take only one character
        this.currentOperand = this.currentOperand.toString().slice(0, -1);

    }

    /* update currentOperand object with number */
    appendNumber(number) {
        /* first we will check if the number is equal to . the if currentOperand has the . already on every second or next click it will return*/
        if (number === "." && this.currentOperand.includes(".")) return;
        /* toString() so we can save more numbers and avoid adding numbers together by JavaScript */
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    /* when the operator is pass empty space to currentOperand and then update previousOperand*/
    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        /* when operator is used we update the value */
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand + " " + operation;
        this.currentOperand = '';

    }

    compute() {

        let computation;
        // parseFloat because we use the toString function in appendNUmber
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        // if its not a number or if we don't have current value 
        if (isNaN(prev) || isNaN(current)) return;
        /*  */
        switch (this.operation) {
            case '+' :
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;

            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {

    }

    /* */

    /* update the div tag current */
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        /* at first its empty so no value will be displayed  */
        this.previousOperandTextElement.innerText = this.previousOperand;
    }
}

/* querySelectorAll includes all buttons with [data-number] */
const numbersButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
/* querySelector we have only one */
const allClearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous]');
const currentOperandTextElement = document.querySelector('[data-current]');

/* calculator allows access to the functions in the Calculator class with object previousOperandTextElement, currentOperandTextElement*/
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

/* Loop to all buttons [data-number] */
numbersButtons.forEach(button => {
    button.addEventListener('click', () => {
        /* eventListener checks which button is selected then the number is passed to the appenNumebr function */
        calculator.appendNumber(button.innerText);
        /* currentOperand is updating the div tag [data-current] */
        calculator.updateDisplay()
    })
});


/* Loop to all buttons [data-operator] */
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        /* as soon as one of the operators is selected then the function chooseOperation will be active*/
        calculator.chooseOperation(button.innerText);
        /* currentOperand is updating the div tag [data-current] */
        calculator.updateDisplay()
    })
});

// on clicked button activate the following functions 
equalsButton.addEventListener('click', button => {

    calculator.compute();
    calculator.updateDisplay();

});

// - || - 
allClearButton.addEventListener('click', button => {

    calculator.clear();
    calculator.updateDisplay();

});

// - || - 
deleteButton.addEventListener('click', button => {

    calculator.delete();
    calculator.updateDisplay();

});