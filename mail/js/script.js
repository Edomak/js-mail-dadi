// 1- Chiedi all'utente la sua email.

// 2- Controlla che sia nella lista di chi può accedere.

// 3- Stampa un messaggio appropriato sull'esito del controllo.

var emailUtente = prompt("Ciao, mi serve la tua Email per farti accedere, scrivila quì sotto!");
console.log("l'email dell'utente è: " + emailUtente);

var listaEmail = ["lucia@gmail.com", "carlo@gmail.it", "francesca@hotmail.com", "giulia@gmail.it", "edoardo@gmail.com", "luca@yahoo.com", "alessio@gmail.it", "giorgio@yahoo.com", "maria@virgilio.it", "giorgino@gmail.it"];
// console.log(listaEmail);
// console.log(listaEmail.length);

// Soluzione con .includes

if (listaEmail.includes(emailUtente)) {
     document.getElementById("message").innerHTML = "L email " + emailUtente + " è presente nella lista, puoi accedere!";
    console.log(emailUtente + " è presente nella lista");
} 
else {
    document.getElementById("message").innerHTML = "L email " + emailUtente + " non è presente nella lista, mi dispiace!";
    console.log(emailUtente + " non è presente nella lista");
}

// Soluzione con ciclo





