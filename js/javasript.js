const chk = document.querySelector('#chk');



chk.addEventListener('change',() =>{
  const calculator = document.querySelector('#calculator');
    calculator.classList.toggle('active');
  const header = document.querySelector('header');
    header.classList.toggle('active');
  const Operation = document.querySelector('#operation');
    Operation.classList.toggle('active');
  const Keypad = document.querySelector('#keypad');
    Keypad.classList.toggle('active');
  const p = document.querySelector('p');
  p.classList.toggle('active');
  const reset = document.querySelector('.reset');
    reset.classList.toggle('active');
  const del = document.querySelector('.del');
    del.classList.toggle('active');
  const result = document.querySelector('.result');
    result.classList.toggle('active');
  const label = document.querySelector('.label');
    label.classList.toggle('active');
  const ball = document.querySelector('.ball');
    ball.classList.toggle('active');
  const body = document.querySelector('body');
    body.classList.toggle('active');
  const btn_seven = document.querySelector('.seven');
  btn_seven.classList.toggle('active');
  const btn_eight = document.querySelector('.eight');
  btn_eight.classList.toggle('active');
  const btn_nine = document.querySelector('.nine');
  btn_nine.classList.toggle('active');
  const btn_four = document.querySelector('.four');
  btn_four.classList.toggle('active');
  const btn_five = document.querySelector('.five');
  btn_five.classList.toggle('active');
  const btn_six = document.querySelector('.six');
  btn_six.classList.toggle('active');
  const btn_adiction = document.querySelector('.adiction');
    btn_adiction.classList.toggle('active');
  const btn_one = document.querySelector('.one');
    btn_one.classList.toggle('active');
  const btn_two = document.querySelector('.two');
    btn_two.classList.toggle('active');
  const btn_trhee = document.querySelector('.three');
    btn_trhee.classList.toggle('active');
  const btn_sub = document.querySelector('.sub');
    btn_sub.classList.toggle('active');
  const btn_dot = document.querySelector('.dot');
    btn_dot.classList.toggle('active');
  const btn_zero = document.querySelector('.zero');
    btn_zero.classList.toggle('active');
  const btn_bar = document.querySelector('.bar');
    btn_bar.classList.toggle('active');
  const btn_mult = document.querySelector('.mult');
    btn_mult.classList.toggle('active');
})

