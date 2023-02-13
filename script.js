const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display p');
let operator = '';
let firstValue = '';
let secondValue = '';

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const target = e.target;
    const value = target.innerText;

    if (value === 'clear') {
      display.innerText = '';
      firstValue = '';
      secondValue = '';
      operator = '';
    } else if (value === '+' || value === '-' || value === 'x' || value === '/') {
      operator = value;
      firstValue = parseFloat(display.innerText);
      display.innerText = '';
    } else if (value === '=') {
      secondValue = parseFloat(display.innerText);
      switch (operator) {
        case '+':
          display.innerText = firstValue + secondValue;
          break;
        case '-':
          display.innerText = firstValue - secondValue;
          break;
        case 'x':
          display.innerText = firstValue * secondValue;
          break;
        case '/':
          if (secondValue === 0) {
            display.innerText = 'Error';
          } else {
            display.innerText = firstValue / secondValue;
          }
          break;
        default:
          display.innerText = 'Error';
      }
    } else {
      display.innerText += value;
    }
  });
});