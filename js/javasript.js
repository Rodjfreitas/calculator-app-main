const theme1 = document.querySelector('#chk1')
const theme2 = document.querySelector('#chk2')
const theme3 = document.querySelector('#chk3')
const html = document.querySelector('html');
const previousOperationtext = document.querySelector('#previous-operation');
const currentyOperationtext = document.querySelector('#currenty-operation');
const buttons = document.querySelectorAll('#numbers');


class Calculator{
  constructor(previousOperationtext,currentyOperationtext){
    this.previousOperationtext = previousOperationtext
    this.currentyOperationtext = currentyOperationtext
    this.currentyOperation = ""
  }

  addDigit(digit) {

    if(digit === "." && this.currentyOperationtext.innerText.includes(".")){
      return;
    }

    this.currentyOperation = digit;
    this.updateScreen()
  }

  //processando operações
  processOperation(operation){
    if(this.currentyOperationtext.innerText === "" & operation !== "RESET"){
      //change operation
      if(this.previousOperationtext.innerText !== ""){
        this.changeOperation(operation);

      }
      return;
    }
    
    let operationValue;
    const previous = +this.previousOperationtext.innerText.split(" ")[0];
    const current = +this.currentyOperationtext.innerText;

    switch(operation){
      case "+":
        operationValue = previous + current
        this.updateScreen(operationValue, operation,current,previous)
        break;
      case "-":
        operationValue = previous - current
        this.updateScreen(operationValue, operation,current,previous)
        break;
      case "/":
        operationValue = previous / current
        this.updateScreen(operationValue, operation,current,previous)
        break;
      case "*":
        operationValue = previous * current
        this.updateScreen(operationValue, operation,current,previous)
        break;
      case "DEL":
        this.processDelOperator();
        break;
      case "RESET":
        this.processResetOperator();
        break;
      case "=":
        this.processEqualOperator();
        default:
          return;
    }
  }

  //atualizando valores na tela operações
  updateScreen(
    operationValue = null, 
    operation = null, 
    current = null, 
    previous = null
    ){

      console.log(operationValue,operation,current,previous);

    if(operationValue === null) {
      this.currentyOperationtext.innerText += this.currentyOperation;
    } else{
      if(previous === 0){
        operationValue = current
      }

      this.previousOperationtext.innerText = `${operationValue} ${operation}`
      this.currentyOperationtext.innerText ="";
    }
  }

  //change operation
  changeOperation(operation){
    const mathOperations = ["*", "/", "+", "-"]

    if(!mathOperations.includes(operation)){
      return;
    }

    this.previousOperationtext.innerText = 
      this.previousOperationtext.innerText.slice(0,-1) + operation;
  }

  processDelOperator(){
    this.currentyOperationtext.innerText = 
      this.currentyOperationtext.innerText.slice(0,-1);
  }

  processResetOperator(){
    this.currentyOperationtext.innerText ="";
    this.previousOperationtext.innerText ="";
  }

  processEqualOperator(){
    const operation = previousOperationtext.innerText.split(" ")[1]


    this.processOperation(operation);
  }
}



const calc = new Calculator(previousOperationtext,currentyOperationtext);



/**criando evento para capturar valor da tecla */
buttons.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const value = e.target.innerText;
    /**realizando a distinção do que é número e do que é operador */
    if(+value >= 0 || value === "."){
      calc.addDigit(value);
    }else{
      calc.processOperation(value);
    }
  })
})




function theme1click(){
  html.classList.remove('theme2');
  html.classList.remove('theme3');
  const ball = document.querySelector('.ball');
  ball.style.transform = "translateX(0px)";
}


function theme2click(){  
  html.classList.remove('theme3');
  html.classList.add('theme2');
  const ball = document.querySelector('.ball');
  ball.style.transform = "translateX(26px)";
}

function theme3click(){  
  html.classList.remove('theme2');
  html.classList.add('theme3');
  const ball = document.querySelector('.ball');
  ball.style.transform = "translateX(50px)";
}

theme1.addEventListener('click',theme1click);
theme2.addEventListener('click',theme2click);
theme3.addEventListener('click',theme3click);
