const theme1 = document.querySelector('#chk1')
const theme2 = document.querySelector('#chk2')
const theme3 = document.querySelector('#chk3')

function theme1click(){
  const ball = document.querySelector('.ball');
    ball.style.transform = "translateX(0px)";
  const calculator = document.querySelector('#calculator');
    calculator.classList.remove('active');
  const Keypad = document.querySelector('#keypad');
    Keypad.classList.remove('active');
  const result = document.querySelector('.result');
    result.classList.remove('active');
  const body = document.querySelector('body');
    body.classList.remove('active');
  const footer = document.querySelector('.attribution');
    footer.classList.remove('active');  
    calculator.classList.remove('active2');  
    Keypad.classList.remove('active2');  
    result.classList.remove('active2');  
    body.classList.remove('active2');  
    footer.classList.remove('active2');
  }






function theme2click(){
const ball = document.querySelector('.ball');
  ball.style.transform = "translateX(26px)";
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
  calculator.classList.remove('active2');
  Keypad.classList.remove('active2');
  result.classList.remove('active2');
  body.classList.remove('active2');
  footer.classList.remove('active2');
}



function theme3click(){
  const ball = document.querySelector('.ball');
    ball.style.transform = "translateX(50px)";
  const calculator = document.querySelector('#calculator');
    calculator.classList.toggle('active2');
  const Keypad = document.querySelector('#keypad');
    Keypad.classList.toggle('active2');
  const result = document.querySelector('.result');
    result.classList.toggle('active2');
  const body = document.querySelector('body');
    body.classList.toggle('active2');
  const footer = document.querySelector('.attribution');
    footer.classList.toggle('active2');
    calculator.classList.remove('active');
    Keypad.classList.remove('active');
    result.classList.remove('active');
    body.classList.remove('active');
    footer.classList.remove('active');
  }


theme1.addEventListener('click',theme1click);
theme2.addEventListener('click',theme2click);
theme3.addEventListener('click',theme3click);

