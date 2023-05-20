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
let cScore1 = 0
let cScore2 = 0
let pScore1 = 0
let pScore2 = 0
let activePlayer

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
    let aPlayer = "";
    if (nbreActivePlayer === 1) {aPlayer="player1"} else {aPlayer="player2"};
    pScore1=0;
    pScore2=0;
    cScore1=0;
    cScore2=0;
    score1.innerText = pScore1 ;
    score2.innerText = pScore2 ;
    curScore1.innerText = cScore1 ;
    curScore2.innerText = cScore2 ;
    borderPlayer(aPlayer);
}

function borderPlayer(player) {
    if (player === "player1") {
        player1.setAttribute('class','player col active'); 
        player2.setAttribute('class','player col');
    }
    if (player === "player2") {
        player1.setAttribute('class','player col');
        player2.setAttribute('class','player col active'); 
    }
}

function rollDice() {
    let nbreDice = (Math.floor(Math.random() * 6)) +1 ;
    imgDice(nbreDice);
    if (player1.getAttribute('class')==='player col active') {
        if (nbreDice === 1) {changePlayer2()} else { cScore1 += nbreDice ; curScore1.innerText = cScore1}} 
    else { if (nbreDice === 1) {changePlayer1()} else { cScore2 += nbreDice; curScore2.innerText = cScore2}}
}

function imgDice(n) {
    if (n === 1) {imageDe.setAttribute('src','Images/dice1.png')}
    if (n === 2) {imageDe.setAttribute('src','Images/dice2.png')}
    if (n === 3) {imageDe.setAttribute('src','Images/dice3.png')}
    if (n === 4) {imageDe.setAttribute('src','Images/dice4.png')}
    if (n === 5) {imageDe.setAttribute('src','Images/dice5.png')}
    if (n === 6) {imageDe.setAttribute('src','Images/dice6.png')}
  }

function changePlayer1() {
    cScore2= 0 ;
    curScore2.innerText = cScore2 ;
    player1.setAttribute('class','player col active'); 
    player2.setAttribute('class','player col');
}

function changePlayer2() {
    cScore1= 0 ;
    curScore1.innerText = cScore1 ;
    player1.setAttribute('class','player col');
    player2.setAttribute('class','player col active'); 
}

function addScore() {
    if (player1.getAttribute('class')==='player col active') { 
        pScore1 += cScore1 ;
        score1.innerText = pScore1 ;
        winGame1(pScore1);
    }
    else { 
        pScore2 += cScore2 ;
        score2.innerText = pScore2 ;
        changePlayer1();
        winGame2(pScore2);
    }
}

function winGame1(n) {
    if (n>=100) { 
        alert('Player1 gagne');
        newGame();
    } else {
        changePlayer2()
    }
}

function winGame2(n) {
    if (n>=100) {
        alert('Player2 gagne');
        newGame();
    } else {
        changePlayer1()
    }
}