

CSS Código anterior

```.seven.active,.eight.active,.nine.active,.four.active,.five.active,.six.active,
.adiction.active,.one.active,.two.active,.three.active,.sub.active,.dot.active,
.zero.active,.bar.active,.mult.active{
  box-shadow:inset 0 -5px 0 0 var(--theme2-Mainkey_shadow-color);
  color: var(--theme2-Maintext-color);
  background-color: var(--theme2-MainKey_back-color);
  }```

  CSS Código posterior

  ```#keypad.active button{
      box-shadow:inset 0 -5px 0 0 var(--theme2-Mainkey_shadow-color);
      color: var(--theme2-Maintext-color);
      background-color: var(--theme2-MainKey_back-color);
  }```

  HTML código anterior

  ``` <div id="keypad">
          <div id="numbers">
            <button class="btn-number seven">7</button>
            <button class="btn-number eight">8</button>
            <button class="btn-number nine">9</button>
            <button class="btn-text del">DEL</button>
            <button class="btn-number four">4</button>
            <button class="btn-number five">5</button>
            <button class="btn-number six">6</button>
            <button class="btn-text adiction">+</button>
            <button class="btn-number one">1</button>
            <button class="btn-number two">2</button>
            <button class="btn-number three">3</button>
            <button class="btn-text sub">-</button>
            <button class="btn-text dot">.</button>
            <button class="btn-number zero">0</button>
            <button class="btn-text bar">/</button>
            <button class="btn-text mult">X</button>
          </div>
          <div id="result">
            <button class="btn-text reset">RESET</button>
            <button class="btn-text result">=</button>
          </div> ```

HTML código posterior

  ```<div id="keypad">
          <div id="numbers">
            <button class="btn-number">7</button>
            <button class="btn-number">8</button>
            <button class="btn-number">9</button>
            <button class="btn-text">DEL</button>
            <button class="btn-number">4</button>
            <button class="btn-number">5</button>
            <button class="btn-number">6</button>
            <button class="btn-op">+</button>
            <button class="btn-number">1</button>
            <button class="btn-number">2</button>
            <button class="btn-number">3</button>
            <button class="btn-op">-</button>
            <button class="btn-op">.</button>
            <button class="btn-number">0</button>
            <button class="btn-op">/</button>
            <button class="btn-op">X</button>
          </div>
          <div id="result">
            <button class="btn-text">RESET</button>
            <button class="btn-text result">=</button>
          </div> ```


Javascript código anterior

   ```    Operation.classList.toggle('active');
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
    btn_mult.classList.toggle('active'); ```

Javascript código posterior

   ``` Operation.classList.toggle('active');
  const Keypad = document.querySelector('#keypad');
    Keypad.classList.toggle('active');
  const result = document.querySelector('.result');
    result.classList.toggle('active');
  const body = document.querySelector('body');
    body.classList.toggle('active');
  const footer = document.querySelector('.attribution');
    footer.classList.toggle('active');```