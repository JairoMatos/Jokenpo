//recupera elementos do HTML
const elementosJogador = document.querySelectorAll('.jogador > img');
const elementosOponente = document.querySelectorAll('.oponente > img');
const resultado = document.querySelector('.resultado');
//variaveis de controle
let cartaJogador;
let cartaOponente;
let gameouver;
let index;
//funcao limpar tela obs 'titulo e botao'
function limpar(){
    for(let i=0; i<elementosJogador.length; i++){
        elementosJogador[i].style.opacity = '0.3'
        elementosJogador[i].style.scale = 0.9
    }
    for(let i=0; i<elementosOponente.length; i++){
        elementosOponente[i].style.opacity = '0.3'
        elementosOponente[i].style.scale = 0.9
    }
    resultado.innerHTML = ''
}
//funcao roda os elementos, para deixar com opacidade 0.3, apos sselecao 
function opacity(){
    for(let i=0; i<elementosJogador.length; i++){
        elementosJogador[i].style.opacity = '0.3'
        elementosJogador[i].style.scale = 1
    }
    for(let i=0; i<elementosOponente.length; i++){
        elementosOponente[i].style.opacity = '0.3'
        elementosOponente[i].style.scale = 1
    }
}
//funcao de escolha aleatoria do oponente
function oponente(){   
    index = Math.floor(Math.random()*3)
    elementosOponente[index].style.opacity = '1'
    elementosOponente[index].style.scale = 1.3
    cartaOponente = elementosOponente[index].getAttribute('opt')
}
//funcao determina o resultado do jogo
function gameOuver(){
    //resultados positivos jogador
    if(cartaJogador == 'tesoura' && cartaOponente == 'papel'){
        gameouver = 'jogador ganhou '
        elementosOponente[index].style.scale = 0.5
    }
    else if(cartaJogador == 'papel' && cartaOponente == 'pedra'){
        gameouver = 'jogador ganhou '
        elementosOponente[index].style.scale = 0.5
    }
    else if(cartaJogador == 'pedra' && cartaOponente == 'tesoura'){
        gameouver = 'jogador ganhou '
        elementosOponente[index].style.scale = 0.5
    }
    //resultados positivos oponente
    if(cartaOponente == 'tesoura' && cartaJogador == 'papel'){
        gameouver = 'oponente ganhou '
        elementosJogador[index-1].style.scale = 0.5
    }
    else if(cartaOponente == 'papel' && cartaJogador == 'pedra'){
        gameouver = 'oponente ganhou '
        elementosJogador[index-1].style.scale = 0.5
    }
    else if(cartaOponente == 'pedra' && cartaJogador == 'tesoura'){
        gameouver = 'oponente ganhou '
        elementosJogador[index+2
        ].style.scale = 0.5
    }
    //empate
    else if(cartaJogador == cartaOponente)
        gameouver = 'empate'
    resultado.innerHTML = gameouver
}
//start, aqui inicia o jogo  com evento de click em qualque elemento do jogador
for(let i=0; i<elementosJogador.length; i++){
    elementosJogador[i].addEventListener('click', (e)=>{
        opacity()
        e.target.style.opacity = '1'
        e.target.style.scale = 1.3
        cartaJogador = e.target.getAttribute('opt')
        oponente()
        gameOuver()
        
    })
}
