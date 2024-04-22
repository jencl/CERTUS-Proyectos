function addToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var displayValue = document.getElementById('display').value;
  document.getElementById('display').value = eval(displayValue);
}

function operate(operation) {
  var currentDisplayValue = document.getElementById('display').value;
  addToDisplay(operation);
  document.getElementById('display').value = currentDisplayValue;
}