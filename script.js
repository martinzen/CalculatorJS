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

    }

    /* update currentOperand object with number */
    appendNumber(number) {
        this.currentOperand = number;
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    getDisplayNumber(number) {

    }
    
    /* */

    /* update the div tag current */
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

/* querySelectorAll includes all buttons with [data-number] */
const numbersButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
/* querySelector we have only one */
const allClearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous]');
const currentOperandTextElement = document.querySelector('[data-current]');


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
