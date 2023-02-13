const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display p');
let operator = '';
let firstValue = '';
let secondValue = '';
let thirdValue = '';

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const target = e.target;
    const value = target.innerText;

    if (value === 'clear') {
      display.innerText = '';
      firstValue = '';
      secondValue = '';
      thirdValue = '';
      operator = '';
    } else if (value === '+' || value === '-' || value === 'x' || value === '/') {
      if (!operator) {
        operator = value;
        firstValue = parseFloat(display.innerText);
        display.innerText = '';
      } else {
        secondValue = parseFloat(display.innerText);
        switch (operator) {
          case '+':
            thirdValue = firstValue + secondValue;
            break;
          case '-':
            thirdValue = firstValue - secondValue;
            break;
          case 'x':
            thirdValue = firstValue * secondValue;
            break;
          case '/':
            if (secondValue === 0) {
              display.innerText = 'Error';
            } else {
              thirdValue = firstValue / secondValue;
            }
            break;
          default:
            display.innerText = 'Error';
        }
        operator = value;
        firstValue = thirdValue;
        display.innerText = '';
        secondValue = '';
      }
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
