//DICHIARAZIONE
//generare numero a caso da 1 a 6 per giocatore
const numPlayer = Math.floor(Math.random() * 6) + 1;
console.log(numPlayer);
//generare numero a caso da 1 a 6 per computer
const numPc = Math.floor(Math.random() * 6) + 1;
console.log(numPc);

//ELABORAZIONE
//se giocatore  piu alto vince
//se computer e piu alto vince
//se giocatore e computer sono uguali pareggio
if (numPlayer > numPc ) {
    console.log('player vince');
} else if (numPc > numPlayer) {
    console.log('pc vince');
} else {
    console.log('pareggio');
}
