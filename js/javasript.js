const theme1 = document.querySelector('#chk1')
const theme2 = document.querySelector('#chk2')
const theme3 = document.querySelector('#chk3')
const html = document.querySelector('html');
const previousOperationtext = document.querySelector('#previous-operation');
const currentyOperationtext = document.querySelector('#currenty-operation');
const buttons = document.querySelectorAll('#numbers');


buttons.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    const value = e.target.innerText;
    console.log(value);
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
