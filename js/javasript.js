const chk = document.querySelector('#chk');



chk.addEventListener('change',() =>{
  const calculator = document.querySelector('#calculator');
    calculator.classList.toggle('active');
  const Keypad = document.querySelector('#keypad');
    Keypad.classList.toggle('active');
  const result = document.querySelector('.result');
    result.classList.toggle('active');
  const body = document.querySelector('body');
    body.classList.toggle('active');
  const footer = document.querySelector('.attribution');
    footer.classList.toggle('active');
})

