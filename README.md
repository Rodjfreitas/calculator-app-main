<h1>Aplicativo Calculadora</h1>

<h2>Objetivo</h2>

<p>Escolhi este projeto por ter uma complexidade maior no que tange a utilização de conhecimentos do JavaScript. Além disso, esse projeto permitirá trabalhar a propriedade grid do CSSe a criação de variáveis dentro do css.</p>

<p> Outro conteúdo novo que executarei neste projeto é a criação de uma chave para alterar o tema de exibição da tela e do seu conteúdo.</p>

<h2>Desafios</h2>

<p> Este projeto é desafiador porque possui diversas tarefas que serão inéditas para mim. A criação da calculadora, sua funcionalidade, alteração de temas em tela a partir de seleção de um botão, criação de variáveis de css, execução de conventional commits, utilização de funções IIFE no javascript, entre outros.</p>

<h2>Aprendizados</h2>

🕮 <p>Criar menu toggle;</p>
🕮 <p>Declarar variáveis no css;</p>
🕮 <p>Aplicabilidade do input e seus tipos;</p>
🕮 <p>Transição de temas de página</p>

<h2>O Desenvolvimento</h2>

<h3>Dia 1: Primeiros Passos.</h3>

  <li> Pesquisar a respeito do funcionamento de uma calculadora em tela;</li>
  <li> Pesquisar sobre como definir variáveis em CSS.</li>
  <li> Pesquisar a respeito de alteração de temas na tela.</li>
  <p></p>

<p> Iniciei o projeto dando total atenção a criação e estilização da calculadora, levando como base o tema principal. Como de praxes nos últimos projetos, estou fazendo toda a estilização inicial pelo método "first mobile".</p> 
<p> Já realizei a inclusão das variáveis no css, e por mais que não haja muita repetição de cores no código, essa prática é muito bem-vinda, e também me habituarei a utilizá-la daqui pra frente. Facilita demais na inserção de informações dentro do css, e na necessidade de mudar alguma propriedade, falo-ei apenas na declaração, o que economiza muito  tempo pra mudanças futuras de estilização. Este foi um novo aprendizado para este projeto, e fico muito feliz de tê-lo aprendido e colocado em prática.</p>

<h3> Dia 2</h3>

<p> Nesta etapa do projeto, já configurei o layout da calculadora, apliquei as estilizações, posicionamento, etc. O foco agora é fazer com que as alterações de tema funcione. Para isso, estou aplicando o `(variavel).classList.toggle('active')` no java. O primeiro problema que me deparei é que ao declarar a variável para o objeto button, esta função não esta aplicando o active para todos os botões, senão, somente para o primeiro botão da lista.</p>

<p> Em um primeiro momento, a solução encontrada foi criar uma classe especifica para cada botão e aplicar a estilização e o código javascript para essas classes individualmente: Sugestões são sempre bem-vindas.</p>

<p> HTML:</p>

        div id="keypad">
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
         </div>

<p> CSS:</p>

    .seven.active,.eight.active,.nine.active,.four.active,.five.active,.six.active,
    .adiction.active,.one.active,.two.active,.three.active,.sub.active,.dot.active,
    .zero.active,.bar.active,.mult.active{
      box-shadow:inset 0 -5px 0 0 var(--theme2-Mainkey_shadow-color);
      color: var(--theme2-Maintext-color);
      background-color: var(--theme2-MainKey_back-color);
    }

<p> JavaScript:</p>

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

<p> Meu próximo passo, antes de criar a funcionalidade da calculadora, é criar o mecanismo para o terceiro tema. Ainda não consegui identificar a forma de criar essa funcionalidade.</p>

<p> Me deparando com a linha de códigos para transição de tela no javascript, me senti incomodado com a quantidade de variáveis que estava declarando dentro das funções, principalmente dos botões numericos e operadores. Comecei a realizar vários testes, até descobrir que eu precisaria apontar um toggle ativo apenas para a caixa principal de cada elemento, e que a partir daí, eu poderia simplesmente alterar as propriedades no css para que o código funcionasse perfeitamente e limpo. Mais um aprendizado na utilização do javascript.</p>

  <ul><li> CSS Código posterior</li>

    #keypad.active button{
      box-shadow:inset 0 -5px 0 0 var(--theme2-Mainkey_shadow-color);
      color: var(--theme2-Maintext-color);
      background-color: var(--theme2-MainKey_back-color);
    }

  <li> Javascript código posterior</li></ul>

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
        const result = document.querySelector('.result');
          result.classList.toggle('active');
        const body = document.querySelector('body');
          body.classList.toggle('active');
        const footer = document.querySelector('.attribution');
          footer.classList.toggle('active');
    })


<h3> Dia 3 </h3>

    

  <p>Hoje a principal tarefa do dia era finalizar a transição de temas com três opções. A dificuldade maior era realizar a animação da bolinha nas posições. O principal erro era que eu havia criado apenas um botão do tipo checkbox e uma label, e a animação ocorria apenas da direta para esquerda, sem a posição central habilitada.</p>

  <p> Após algumas pesquisas e estudos, consegui entender melhor o funcionamento do input. Como mencionado, o input estava configurado do tipo "checkbox", porém este tipo permite que fossem selecionadas mais de uma opção ao mesmo tempo, o que invalidava a proposição do código. Mediante as minhas pesquisas e estudos, realizei a alteração do tipo de input para "radio", e incluí a mesma nomeação para os três. Com isso, ao selecionar um input, ele automaticamente desmarca outro que possívelmente havia sido selecionado. Isso solucionou o problema, e ao aplicar o javascript, o código ja exerce a função de alteração de tema corretamente.</p>

        <input type="radio"  id="chk1" class="checkbox" name="theme">
        <input type="radio"  id="chk2" class="checkbox" name="theme">
        <input type="radio"  id="chk3" class="checkbox" name="theme">


  <p>Mesmo com todas essas alterações, e com a funcionalidade do tema se aplicando corretamente, aprendi uma maneira mais eficaz de simplificar o código de transição de tema, utilizando as variáveis de css. Declarando as variáveis, separando-as por classes inseridas no html, pude enxugar as linhas de código do css e também do java script. Reorganizei todo o código em cima desse conceito, e estou maravilhado com o poder que a declaração de variáveis dentro do css tem.</p>

        :root{
      --theme-back_main-color:hsl(222, 26%, 31%);
      --theme-back_keypad-color: hsl(223, 31%, 20%);
      --theme-operation_screen-color:hsl(224, 36%, 15%);
      --theme-Resetkey_back-color:hsl(225, 21%, 49%);
      --theme-Resetkey_shadow-color:hsl(224, 28%, 35%);
      --theme-Resultkey_back-color:hsl(6, 63%, 50%);
      --theme-Resultkey_shadow-color:hsl(6, 70%, 34%);
      --theme-MainKey_back-color:hsl(30, 25%, 89%);
      --theme-Mainkey_shadow-color:hsl(28, 16%, 65%);
      --theme-Maintext-color:hsl(221, 14%, 31%);
      --theme-Operation-color:hsl(30, 25%, 89%);

      --global-Sectext-color:hsl(0, 0%, 100%);
      --global-size-space: 20px;
      --global-type-display: flex;
      --global-position-content: center;
      --global-font-family: font-family: 'League Spartan', sans-serif;
      --global-font-weight: 700;
      --global-border-radius: 10px;
      --global-numb-size:32px;
      --global-font-size:20px
    }

    .theme2:root{
      --theme-back_main-color:hsl(0, 0%, 90%);
      --theme-back_keypad-color: hsl(0, 5%, 81%);
      --theme-operation_screen-color:hsl(0, 0%, 93%);
      --theme-Resetkey_back-color:hsl(185, 42%, 37%);
      --theme-Resetkey_shadow-color:hsl(185, 58%, 25%);
      --theme-Resultkey_back-color:hsl(25, 98%, 40%);
      --theme-Resultkey_shadow-color:hsl(25, 99%, 27%);
      --theme-MainKey_back-color:hsl(45, 7%, 89%);
      --theme-Mainkey_shadow-color:hsl(35, 11%, 61%);
      --theme-Maintext-color:hsl(60, 10%, 19%);
      --theme-Operation-color:hsl(60, 10%, 19%);
    }

    .theme3:root{
      --theme-back_main-color:hsl(268, 75%, 9%);
      --theme-back_keypad-color: hsl(268, 71%, 12%);
      --theme-operation_screen-color:hsl(268, 71%, 12%);
      --theme-Resetkey_back-color:hsl(281, 89%, 26%);
      --theme-Resetkey_shadow-color:hsl(285, 91%, 52%);
      --theme-Resultkey_back-color:hsl(176, 100%, 44%);
      --theme-Resultkey_shadow-color:hsl(177, 92%, 70%);
      --theme-MainKey_back-color:hsl(268, 47%, 21%);
      --theme-Mainkey_shadow-color:hsl(290, 70%, 36%);
      --theme-Maintext-color:hsl(52, 100%, 62%);
      --theme-Operation-color:hsl(52, 100%, 62%);
    }
