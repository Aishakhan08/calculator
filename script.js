let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent;
    
    if(value === 'AC') {
      display.value = ''; // Clear all
    }
    else if(value === 'DEL') {
      display.value = display.value.slice(0, -1); // Delete last digit
    }
    else if(value === '=') {
      try {
        display.value = eval(display.value); // Calculate result
      } catch {
        display.value = 'Error';
        setTimeout(() => display.value = '', 1500);
      }
    }
    else {
      display.value += value; // Add to display
    }
  });
});

// Keyboard support - Bonus
document.addEventListener('keydown', (e) => {
  if((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', '%'].includes(e.key)) {
    display.value += e.key;
  }
  if(e.key === 'Enter') {
    try { display.value = eval(display.value); } 
    catch { display.value = 'Error'; }
  }
  if(e.key === 'Backspace') display.value = display.value.slice(0, -1);
  if(e.key === 'Escape') display.value = '';
});