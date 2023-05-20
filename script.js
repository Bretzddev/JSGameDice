let nameJ1 = document.getElementById('name1')
let nameJ2 = document.getElementById('name2')
let nomJ1 = document.getElementById('nom1')
let nomJ2 = document.getElementById('nom2')
let imageDe = document.getElementById('imgDe')
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let score1 = document.getElementById('score1')
let score2 = document.getElementById('score2')
let curScore1 = document.getElementById('currentScore1')
let curScore2 = document.getElementById('currentScore2')

function name1() {
    nomJ1.innerText = nameJ1.value;
}
function name2() {
    nomJ2.innerText = nameJ2.value;
}

nameJ1.addEventListener('blur', () => {nomJ1.innerText = nameJ1.value})
nameJ2.addEventListener('blur', () => {nomJ2.innerText = nameJ2.value})


function newGame() {
    let nbreActivePlayer = (Math.floor(Math.random() * 2)) +1 ;
    score1.innerText = 0 ;
    score2.innerText = 0 ;
    curScore1.innerText = 0 ;
    curScore2.innerText = 0 ;
    borderPlayer(nbreActivePlayer);
}

function borderPlayer(n) {
    if (n === 1) {
        player1.setAttribute('class','player col active'); 
        player2.setAttribute('class','player col');
    }
    if (n === 2) {
        player1.setAttribute('class','player col');
        player2.setAttribute('class','player col active'); 
    }
}

function rollDice() {
    let nbreDice = (Math.floor(Math.random() * 6)) +1 ;
    imgDice(nbreDice);
    return nbreDice
}

function imgDice(n) {
    if (n === 1) {imageDe.setAttribute('src','Images/dice1.png')}
    if (n === 2) {imageDe.setAttribute('src','Images/dice2.png')}
    if (n === 3) {imageDe.setAttribute('src','Images/dice3.png')}
    if (n === 4) {imageDe.setAttribute('src','Images/dice4.png')}
    if (n === 5) {imageDe.setAttribute('src','Images/dice5.png')}
    if (n === 6) {imageDe.setAttribute('src','Images/dice6.png')}
  }




