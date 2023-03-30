// IMPORTAÇÕES 
import * as conexoes from './conexao.js';
import * as modulos from './modulos.js';
 
//ELEMENTOS GLOBAIS

const inputJogador = document.querySelector('#input-jogador');
const btnStart = document.querySelector('#btn-Start');
const modal = document.querySelector('.modal');
const imgMario = document.querySelector('#imgMario');
const sleep = document.querySelector('.sleep');
const modalLogin = document.querySelector('.modal-login');
const txtNomeJogador = document.querySelector('#txtNomeJogador');
const txtSleep = document.querySelector('#txtSleep');
const cenario = document.querySelector('.cenario');
const txtTempo = document.querySelector('#txtTempo');
const imgTubo = document.querySelector('#imgTubo');
const imgBala = document.querySelector('#imgBala');
const imgMoedas = document.querySelectorAll('#imgMoeda');
const imgEstrelas = document.querySelectorAll('.img-estrela');
const txtMoedas = document.querySelector('#txtMoedas');
const txtEstrela = document.querySelector('#txtEstrelas');
const modalGameOver = document.querySelector('#modalGameOver');
const btnReiniciar = document.querySelectorAll('#btnReiniciar');
const modalRanking = document.querySelector('#modalRanking');
const btnRanking = document.querySelector('#btnRanking');
const tabela = document.querySelector('#tabela');

//console.log(imgBala)



// VARIAVEIS GLOBAIS
 let nomejogador;
 let moedasjogador= 0;
 let estrelasjogador=0;
 let tempojogador=0;
 let pontuacaojogador=0;

 let tempoSleep;
 let tempoTime;
 let tempoMoverElementos;
 let tempoPegarElementos;
 let loopControlePartida;



//FUNÇÕES
modulos.playSom('somAbertura');
const somInicial = ()=>{
modulos.playSom('somAbertura');
}






const validarJogador = (event) =>{
    
   
    if(event.target.value.length > 2  ) {
    
    nomejogador = event.target.value.trim().toUpperCase();
    btnStart.removeAttribute('disabled');

    btnStart.addEventListener('click', start);
    document.addEventListener('keypress', ({key})=>{
        if(key === "Enter" &&  inputJogador.value.length > 2 ){
            start();
        }
    })

   } else {
    btnStart.setAttribute('disabled', 'true');
   }
}




const start = () =>{
    inputJogador.value = '';
    modal.classList.remove('habilitar');
    modalLogin.classList.remove('active');
    modulos.stopSom('somAbertura');
    sleep.classList.add('active');
    txtNomeJogador.innerHTML= nomejogador;
    document.addEventListener('keydown', modulos.pular);
    document.addEventListener('keydown', modulos.voar);
    document.addEventListener('keydown', modulos.abaixar);
    document.addEventListener('keyup', modulos.levantar);
    modulos.playSom('somPrincipal');
    


    const tempoSleep = setInterval(()=>{

    let cont = txtSleep.innerHTML;
    cont--

    txtSleep.innerHTML= cont;
    }, 1000);

    setTimeout(()=>{
        sleep.classList.remove('active');
        cenario.classList.add('start');
        imgMario.src = 'img/mario.gif';
        clearInterval(tempoSleep);
        
       
        time();
        pegarElementos();
        moverElementos(imgBala, 1.8);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        moverElementos(imgTubo, 0);
    },5500 )
    
    
}
   const time = ()=>{
    tempoTime = setInterval(()=>{
    tempojogador = txtTempo.innerHTML;
    tempojogador++;
    txtTempo.innerHTML= tempojogador;
    },1000);
}

const moverElementos = (elemento, retardo) =>{
const tempoMoverElementos= setInterval(()=>{
        if(tempojogador <= 10){
            elemento.style.animation = `mover-elementos 3s infinite linear ${retardo}s`
       } /*else if (tempojogador <= 20){
            elemento.style.animation = `mover-elementos 2.5s infinite linear ${retardo}s`   
        }else if (tempojogador <= 30){
            elemento.style.animation = `mover-elementos 2s infinite linear ${retardo}s`
        }else if (tempojogador <= 40){
            elemento.style.animation =  `mover-elementos 1.5s infinite linear ${retardo}s`
        }else if (tempojogador > 40){
            elemento.style.animation = `mover-elementos 1.3s infinite linear ${retardo}s`
        }*/
    },1);


}


const IniciarJogo = () => {
    inputJogador.addEventListener('input', validarJogador);
    modal.addEventListener('mouseover', somInicial);
    
}

IniciarJogo();

const pegarElementos = ()=>{
  tempoPegarElementos = setInterval(()=>{

    let posicaoMarioEsquerda = imgMario.offsetLeft;
    let posicaoMarioTop = imgMario.offsetTop;
    let posicaoMarioBottom = window.getComputedStyle(imgMario).bottom.replace('px', '');


    
    imgMoedas.forEach((item, index)=>{
        let posicaoMoedaLeft = item.offsetLeft;
        
        if(posicaoMarioBottom >= 170 && posicaoMarioBottom<= 300  && posicaoMoedaLeft <= 150){
            moedasjogador++;
            txtMoedas.innerHTML = moedasjogador;
            item.style.display = 'none'
            modulos.playSom('somMoeda');
            setTimeout(()=>{
                item.style.display = 'block'
            },100);
        }
    })
   
    
    
    
    imgEstrelas.forEach((item, index)=>{
        const estrelaPositionTop = +window.getComputedStyle(imgEstrelas[index]).top.replace('px', ''); // Posição em relação ao top da tela;
        const posicaoEstrelaLeft = +window.getComputedStyle(imgEstrelas[index]).left.replace('px', ''); // Posição em relação ao left da tela;

        if(posicaoMarioTop <= 250 && posicaoMarioTop >= 120 && posicaoEstrelaLeft <= 350 
            && posicaoEstrelaLeft >= 200){
            item.style.display = 'none';
            estrelasjogador++;
            txtEstrela.innerHTML= estrelasjogador;
            
            console.log(item, index);
            console.log('mario',posicaoMarioTop );
            console.log(posicaoEstrelaLeft);
            
            modulos.playSom('somEstrela');

            setTimeout(()=>{
                item.style.display = 'block'
            },100 )
        }


    });

    },250);
}

const controlePartida = () =>{
    loopControlePartida = setInterval (()=>{
    const posicaoTuboLeft = imgTubo.offsetLeft;
    const posicaoBalaLeft = imgBala.offsetLeft;
    const alturaMario = imgMario.offsetHeight;
    const posicaoMarioBottom = window.getComputedStyle(imgMario).bottom.replace('px', '');

    if(posicaoTuboLeft <= 125 && posicaoTuboLeft >=50 && posicaoMarioBottom<= 100){
        imgTubo.style.animation= 'none';
        imgTubo.style.left = `${posicaoTuboLeft}px`;
        imgMario.style.animation = 'none';
        imgMario.style.bottom = `${posicaoMarioBottom}px`;
        imgMario.src= './img/mario-game-over.png';
        imgMario.style.width = '75px';
        imgMario.style.left= '60px';
        modulos.stopSom('somPrincipal');
        modulos.playSom('somPerdeu');
        

        clearInterval(loopControlePartida);

    document.removeEventListener('keydown', modulos.abaixar);
    document.removeEventListener('keydown', modulos.pular);
    document.removeEventListener('keyup', modulos.levantar);
    document.removeEventListener('keydown', modulos.voar);



        setTimeout(()=>{
            GameOver();
        }, 2000)
        
    }

    if(posicaoBalaLeft <= 110 && posicaoBalaLeft >= 50 && posicaoMarioBottom <= 180 
        && alturaMario >=100){
        imgBala.animation = 'none';
        imgBala.style.left = `${posicaoBalaLeft}px`;
        modulos.stopSom('somPrincipal');
        modulos.playSom('somPerdeu');
        
        imgMario.style.animation = 'none';
        if(posicaoMarioBottom <= 10){
            imgMario.style.bottom = '30px';
        }else{
            imgMario.style.bottom = `${posicaoMarioBottom}px`;
        };
        
        imgMario.src= './img/mario-game-over.png';
        imgMario.style.width = '75px';
        imgMario.style.left= '60px';
        
        
        clearInterval(loopControlePartida);

    document.removeEventListener('keydown', modulos.abaixar);
    document.removeEventListener('keydown', modulos.pular);
    document.removeEventListener('keyup', modulos.levantar);
    document.removeEventListener('keydown', modulos.voar);

        setTimeout(()=>{
        GameOver();
        }, 2000);
        
        
    }

    


    }, 1);
}

controlePartida();

const calcularPontuacao = (()=>{
    pontuacaojogador =   (moedasjogador *2) + (estrelasjogador *5) + tempojogador;
    

})

const GameOver = (()=>{

    modulos.stopSom('somPrincipal');
    modulos.playSom('somGameOver');
    

    clearInterval(tempoTime);
    clearInterval(tempoPegarElementos);
    clearInterval(loopControlePartida);

    calcularPontuacao();

    conexoes.bancotemp(nomejogador, moedasjogador, estrelasjogador, tempojogador, pontuacaojogador);
    modal.classList.add('habilitar');
    modalGameOver.classList.add('active');
});

const reiniciarPartida = (()=>{
    modulos.playSom('somAbertura');
    location.reload(true);
});

btnReiniciar.forEach((btn)=>{
  btn.addEventListener('click', reiniciarPartida);
});

const telaRanking = (()=>{
    modalGameOver.classList.remove('active');
    modalRanking.classList.add('active');
    modulos.stopSom('somGameOver');
    modulos.playSom('somRanking');

    tabelaRanking();
});

btnRanking.addEventListener('click', telaRanking);

const criarTabela = (posicao, nome, moedas, estrelas, tempo, pontuacao) =>{
    const elementoHTML = document.createElement('tr');
    elementoHTML.classList.add('linha');

    elementoHTML.innerHTML = `
    <td class="coluna">${posicao}</td>
    <td class="coluna">${nome}</td>
    <td class="coluna">${moedas}</td>
    <td class="coluna">${estrelas}</td>
    <td class="coluna">${tempo}</td>
    <td class="coluna">${pontuacao}</td>`;

    tabela.appendChild(elementoHTML);
}

const colocacao = (a, b) =>{
    if(a.pontuacaojogador > b.pontuacaojogador){
        return 1 ; 
    } else if (b.pontuacaojogador > a.pontuacaojogador){
        return -1
    }else {
        return 0;
    }
}

const tabelaRanking = (()=>{

const classificacao = conexoes.getbanco().sort(colocacao).reverse();

console.log(classificacao)




classificacao.forEach((item, index) => {
    let posicao = index +1;
    let nome = item.nomejogador;
    let moedas = item.moedasjogador;
    let estrelas = item.estrelasjogador;
    let tempo = item.tempojogador;
    let pontuacao = item.pontuacaojogador;

    criarTabela(posicao, nome, moedas, estrelas, tempo, pontuacao); 

});
});




