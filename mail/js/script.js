//DICHIARAZIONE
//chiedere mail all utente
const addMail = prompt('inserire la sua mail:');
console.log(addMail);

//ESECUZIONE
//controllo che la mail e presente nella lista
//lista
const listMail = ['mariorossi@gmail.com','gabrielebianchi@gmail.com','topolino@gmail.com','pincopallo@gmail.com'];

//controllo
let control = false;

for(let i = 0; i < listMail.length; i++){
    let list = listMail[i];
    if (addMail === list) {
        control = true;
        console.log(control);
    }
}

//OUTPUT
//stampare messaggio secondo esito del controllo
if (control ===  true) {
    console.log('Bentornato amico!');
} else{
    alert('L\'account selezionato non è presente sul nostro sistema');
}