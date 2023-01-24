const chk = document.querySelector('#chk');
const calculator = document.querySelector('#calculator');
const header = document.querySelector('header');
const Operation = document.querySelector('#operation');
const Keypad = document.querySelector('#keypad');
const button = document.querySelectorAll('#button');
const p = document.querySelector('p');

chk.addEventListener('change',() =>{
  calculator.classList.toggle('active');
  header.classList.toggle('active');
  Operation.classList.toggle('active');
  Keypad.classList.toggle('active');
  button.classList.toggle('active');
  p.classList.toggle('active');
})