var images1 = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];{
var player1 = Math.floor(Math.random() * images1.length);
document.getElementById("myImage").src = images1[player1];
}


var images2 = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];{
  var player2 = Math.floor(Math.random() * images2.length);// velger en tilfedlig string fra array over
  document.getElementById("myImage2").src = images2[player2];//gjør som bilde skifter seg, med å replasere stringen i (scr). og den gjør også sånn at player 2 har den samme verdien som images 2.

}
//Tar en tilfeldig string fra array. og replaserer bilde i html dokumente.
// og ([Player1/2]) gjør som at player 1 og 2 vil ha den samme verdien som den tilfeldige stringen av array.

if (player1 > player2) {
    document.getElementById("result").innerHTML = "Player 1 wins " + "!";
  } else if (player2 > player1) {
    document.getElementById("result").innerHTML = "Player 2 wins " + "!";
  } else {
    document.getElementById("result").innerHTML = "It's a tie" + "!";
  }
     

//Går inn til html dokumente og skifter teksten som at den viser vilken spiller som har vunnet. Vis player1 har en høyere verdi en player 2, så vis at player 1 har vunnet.
//Den gjør dette med Koden ((player1 > player2) {document.getElementById("result").innerHTML = "Player 1 wins " + "!";)
// bruker (else if) for å si at vis player2 har en høyere verdi en player 1 så vis at player 2 har vunnet. 
// og (else) viser at det er u av gjort.