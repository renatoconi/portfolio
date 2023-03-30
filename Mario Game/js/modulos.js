// ELEMENTOS GLOBAIS 

const imgMario = document.querySelector('#imgMario')

// VARIAVEIS GLOBAIS




// FUNÇOES 


                      // funcoes de som                

const playSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);
    element.play()
}

const stopSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);
    element.pause();
};
                     // controles do mario


 const pular = (event) => {
   
   if(event.key === 'ArrowUp'){
    playSom('somPulo');
    imgMario.classList.add('pular');
    setTimeout(() => {
    imgMario.classList.remove('pular');
    }, "1000")
  }};
   

const voar = (event) => {
    
    if(event.key === ' '){  
    imgMario.src = 'img/mario-voando.png'
    playSom('somVoar');
    imgMario.classList.add('voar');
    setTimeout(() => {
    imgMario.classList.remove('voar');
    imgMario.src = 'img/mario.gif'
    }, "1500")    
   }};

const abaixar = (event) =>{

    if(event.key === 'ArrowDown'){
     playSom('somAgachado');
     imgMario.classList.add('abaixar')
     imgMario.src = 'img/mario-agachado.png'
 }};

 const levantar = (event) => {

    if(event.key === 'ArrowDown'){
    imgMario.src = 'img/mario.gif'
    imgMario.classList.remove('abaixar')
 }};
   
    

//EVENTOS




export {playSom, stopSom, pular, voar, abaixar, levantar, };