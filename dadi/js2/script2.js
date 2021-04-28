// 1- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// 2- Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Dichiaro le variabili

var giocatore;
var computer;

//Creo 6 numeri random sia per il giocatore che per il computer

giocatore = Math.floor(Math.random() * 6 + 1);
console.log(giocatore);

computer = Math.floor(Math.random() * 6 + 1);
console.log(computer);

//Istruzioni condizionali

if (giocatore > computer) {
    console.log("Congratulazioni! Hai vinto!");
} else if (giocatore == computer) {
    console.log("Pareggio!");
} else {
    console.log("Mi dispiace, Hai perso!");
}

// Stampo su pagina:

document.getElementById("numero_giocatore").innerHTML = "Il tuo numero è: " + giocatore;

document.getElementById("numero_computer").innerHTML = "Il numero del computer è: " + computer;

if (giocatore > computer) {
    document.getElementById("message").innerHTML = "Congratulazioni! Hai vinto!!"
} else if (giocatore == computer) {
    document.getElementById("message").innerHTML = "Pareggio!!"
} else {
    document.getElementById("message").innerHTML = "Mi dispiace, hai perso!!"
}