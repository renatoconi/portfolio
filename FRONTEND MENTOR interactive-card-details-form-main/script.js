//Elementos

const inputName = document.querySelector('#input-name');
const inputCardNumber = document.querySelector('#input-card-number');
const inputMes = document.querySelector('#input-mes');
const inputAno = document.querySelector('#input-ano');
const inputCVC = document.querySelector('#input-cvc');
const erroName = document.querySelector('#erroName');
const erroCard = document.querySelector('#erroCard');
const erroMesLetters = document.querySelector('#erroMesLetters');
const erroMesNull = document.querySelector('#erroMesNull');
const erroAnoLetters = document.querySelector('#erroAnoLetters');
const erroAnoNull = document.querySelector('#erroAnoNull');
const numberFrontCard = document.querySelector('#numberFrontCard');
const nameFrontCard = document.querySelector('#nameFrontCard');
const validFrontCard = document.querySelector('#validFrontCard');
const cvcCardBack = document.querySelector('#cvcCardBack');
const erroCvcLetters = document.querySelector('#erroCvcLetters');
const erroCvcNull = document.querySelector('#erroCvcNull');
const btn = document.querySelector('#btn');
const btnFinish = document.querySelector('#btnFinish');
const containerForm = document.querySelector('.container-form');
const containerFinish = document.querySelector('.container-finish');
// Vaiaveis Globais

let mes = 00;
let ano= 00;
let cvc = 123;

//Funcoes

const verificarCvc = (e)=>{
    const textoDigitado = inputCVC.value;
    const regExp1 = /[a-z]/gi;
    erroCvcLetters.style.display= 'none';
    erroCvcNull.style.display= 'none';
    inputCVC.style.border= '1px solid hsl(270, 3%, 87%)';
    if(regExp1.test(textoDigitado)== true){
        erroCvcLetters.style.display = 'block'
        inputCVC.style.border= '1px solid hsl(0, 100%, 66%)'
    }else if(textoDigitado == ''){
        erroCvcLetters.style.display= 'none';
        erroCvcNull.style.display= 'block';
        inputCVC.style.border= '1px solid hsl(0, 100%, 66%)';
    }else{
         cvc = textoDigitado;
        
        redenizarDate();
    }
}





const verificarAno = (e)=>{
    const textoDigitado = inputAno.value;
    const regExp1 = /[a-z]/gi;
    erroAnoLetters.style.display= 'none';
    erroAnoNull.style.display= 'none';
    inputAno.style.border= '1px solid hsl(270, 3%, 87%)';
    if(regExp1.test(textoDigitado)== true){
        erroAnoLetters.style.display = 'block'
        inputAno.style.border= '1px solid hsl(0, 100%, 66%)';
    }else if(textoDigitado == ''){
        erroAnoLetters.style.display= 'none';
        erroAnoNull.style.display= 'block';
        inputAno.style.border= '1px solid hsl(0, 100%, 66%)';
    }else{
        ano = textoDigitado;
        
        redenizarDate();
    }
}




const verificarMes = (e)=>{
    const textoDigitado = inputMes.value;
    const regExp1 = /[a-z]/gi;
    erroMesLetters.style.display= 'none';
    erroMesNull.style.display= 'none';
    inputMes.style.border= '1px solid hsl(270, 3%, 87%)'
    if(regExp1.test(textoDigitado)== true){
        erroMesLetters.style.display = 'block'
        inputMes.style.border= '1px solid hsl(0, 100%, 66%)'
    }else if(textoDigitado == ''){
        erroMesLetters.style.display= 'none';
        erroMesNull.style.display= 'block';
        inputMes.style.border= '1px solid hsl(0, 100%, 66%)'
    }else {
        mes = inputMes.value;
        redenizarDate();
    }
}

const redenizarDate = ()=>{
    validFrontCard.innerHTML = `${mes}/${ano}`;
    cvcCardBack.innerHTML = cvc;
}


const verificarName = (e)=>{
   const textoDigitado = inputName.value;
   const regExp1 = /[0-9]/gi;
   inputName.style.border= '1px solid hsl(270, 3%, 87%)'
   if(regExp1.test(textoDigitado) == true){
    inputName.style.border= '1px solid hsl(0, 100%, 66%)'
    erroName.style.display= 'block';
}else{
    erroName.style.display= 'none';
    nameFrontCard.innerHTML= textoDigitado;
}
}

const mascaraCartao = ()=>{
    if(inputCardNumber.value.length == 4|inputCardNumber.value.length == 9
       |inputCardNumber.value.length == 14  ){
        inputCardNumber.value += ' ';
    }
}

const verificarCard = ()=>{
    const textoDigitado = inputCardNumber.value;
    const regExp1 = /[a-z]/gi;
    inputCardNumber.style.border= '1px solid hsl(270, 3%, 87%))'
    if(regExp1.test(textoDigitado) == true){
        erroCard.style.display= 'block';
        inputCardNumber.style.border= '1px solid hsl(0, 100%, 66%)'
    }else{
        erroCard.style.display= 'none';
        numberFrontCard.innerHTML= textoDigitado;
    }
}


const finish = ()=>{
    
   containerForm.classList.toggle('active');
   containerFinish.classList.toggle('active');}


// eventos
inputName.addEventListener('keyup', verificarName );

inputCardNumber.addEventListener('keyup', verificarCard);

inputCardNumber.addEventListener('keyup', mascaraCartao);


inputMes.addEventListener('keyup', verificarMes);

inputAno.addEventListener('keyup', verificarAno);

inputCVC.addEventListener('keyup', verificarCvc);

btn.addEventListener('click', finish );

btnFinish.addEventListener('click', finish );
