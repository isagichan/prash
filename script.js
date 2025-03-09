let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '') return;
  operator = op;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
}

function calculateResult() {
  if (currentInput === '' || previousInput === '') return;

  let result;
  let num1 = parseFloat(previousInput);
  let num2 = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    case '**':
      result = Math.pow(num1, num2);
      break;
    default:
      return;
  }

  currentInput = result.toString();
  previousInput = '';
  operator = '';
  updateDisplay();
}

function calculateSquareRoot() {
  if (currentInput === '') return;
  let result = Math.sqrt(parseFloat(currentInput));
  currentInput = result.toString();
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
