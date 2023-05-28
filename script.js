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


function regles() {
    var msg = ` Règles du jeu :

   1. Le joueur actif peut faire deux choix : lancer le dé ou enregister ses points. 

   2. Lors de chaque lancé, si le dé affiche un 1, le score du tour du joueur actif est remis à 0 et la main passe à l'adversaire.

   3. Tant que le dé n'affiche pas de 1 le joueur peut lancer le dé autant de fois qu'il le souhaite. Il augmente ainsi son score du tour. 

   4. Lorsque le joueur décide d'enregistrer ses points, le score du tour est tranféré dans le score total. Le score du tour est alors remis à 0 et la main passe à l'adversaire.

   5. Le joueur qui gagne est celui qui arrive à enregister 100 points dans son score total.
    `
    alert(msg)
}

function name1() {
    nomJ1.innerText = nameJ1.value
}

function name2() {
    nomJ2.innerText = nameJ2.value;
}

nameJ1.addEventListener('blur', () => {nomJ1.innerText = nameJ1.value})
nameJ2.addEventListener('blur', () => {nomJ2.innerText = nameJ2.value})
nameJ1.addEventListener('keydown', (e) => {
    if(e.code == "Enter") {
        nomJ1.innerText = nameJ1.value;
        e.preventDefault();
    }
    })
nameJ2.addEventListener('keydown', (e) => {
    if(e.code == "Enter") {
        nomJ2.innerText = nameJ2.value;
        e.preventDefault();
    }
    })

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
    else if (player2.getAttribute('class')==='player col active') { 
        if (nbreDice === 1) {changePlayer1()} else { cScore2 += nbreDice; curScore2.innerText = cScore2}}
    else {alert(`Pour commencer une nouvelle partie, veuillez appuyer sur le bouton "Nouveau jeu"`)}
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
    else if (player2.getAttribute('class')==='player col active') { 
        pScore2 += cScore2 ;
        score2.innerText = pScore2 ;
        changePlayer1();
        winGame2(pScore2);
    }
    else {alert(`Pour commencer une nouvelle partie, veuillez appuyer sur le bouton "Nouveau jeu"`)}
}

function winGame1(n) {
    if (n>=100) { 
        alert(` Bravo ${nameJ1.value}, tu as enregistré ${n} points.
        
        Tu as gagné la partie !`
        );
        newGame();
    } else {
        changePlayer2()
    }
}

function winGame2(n) {
    if (n>=100) {
        alert(` Bravo ${nameJ2.value}, tu as enregistré ${n} points.
        
        Tu as gagné la partie !`);
        newGame();
    } else {
        changePlayer1()
    }
}