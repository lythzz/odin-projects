// capturar jogada do user
// gerar jogada do pc com math.random
// verificar o resultado
// adicionar pontuacao
// jogar novamente? s/n

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const roundtext = document.querySelector(".roundtxt")
const score = document.querySelector('.score')
const machineIcon = document.querySelector('#mIcon')
const userIcon = document.querySelector('#uIcon')
const ng = document.querySelector('.ng')
const ngPlay = document.querySelector('#pAgain')
const ngText = document.querySelector('#ngtext')

let upoints = 0
let mpoints = 0
let usermove;

const getMachineMove = ()=>{ //gera a jogada da maquina
    const moves = ['rock','paper','scissors']
    return moves[Math.floor(Math.random() * 3)]
}


const check = ()=>{ //verifica se a pont max foi atingida
    if(upoints<=4&&mpoints<=4){
        return
    }else{
        ng.style.display = "block";
        ngText.innerHTML = `Game Over! <br>Score:<br> ${upoints} - ${mpoints}`
        ngPlay.onclick = function() {
            ng.style.display = "none";
            upoints=0
            mpoints=0
            roundtext.innerHTML = ''
            machineIcon.src='./img/unk.png'
            userIcon.src = './img/unk.png'
            score.innerHTML = '0 - 0'
          }
          
    }
}
//opera os botoes
rock.addEventListener('click',()=>{
    usermove='rock'
    userIcon.src = './img/rock.png'
    round()})

paper.addEventListener('click',()=>{
    usermove='paper'
    userIcon.src = './img/paper.png'
    round()})

scissors.addEventListener('click',()=>{
    usermove='scissors'
    userIcon.src = './img/scissors.png'
    round()})


const round = ()=>{ //compara as jogadas e da os pontos
    const machineMove = getMachineMove()
    switch(machineMove){
        case 'rock':
            machineIcon.src = './img/rock.png'
            break
        case 'paper':
            machineIcon.src = './img/paper.png'
            break
        case 'scissors':
            machineIcon.src = './img/scissors.png'
            break
        default:
            machineIcon.src = './img/unk.png'
            break
    }
    if(usermove===machineMove){
        roundtext.innerHTML=`It's a tie!<br> Both chose ${usermove}`
    }else if((usermove==='rock'&&machineMove==='scissors')||(usermove==='paper'&&machineMove==='rock')||(usermove==='scissors'&&machineMove==='paper')){
        roundtext.innerHTML=`You've won!<br>
        ${usermove} beats ${machineMove}`
        upoints++
        score.innerHTML = `${upoints} - ${mpoints}`
    }else if((usermove==='paper'&&machineMove==='scissors')||(usermove==='scissors'&&machineMove==='rock')||(usermove==='rock'&&machineMove==='paper')){
        roundtext.innerHTML=`You've lost!<br>
         ${machineMove} beats ${usermove}`
        mpoints++
        score.innerHTML = `${upoints} - ${mpoints}`
    }
    check()
}
