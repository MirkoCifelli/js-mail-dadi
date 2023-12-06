// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


// const verifiedEmail = ['email@gmail.com'];
//     const emailScritta = document.getElementById('email');


// for(let i= 0; i < verifiedEmail.length; i++){

//     let email = verifiedEmail[i];
//     if(email == emailScritta )
//     email = true;
// }

// if (email== true){
//     alert('evvai puoi entrare');
// }
// else{
//     alert('voooleeeviii')
// }
const verifiedEmail = ['pippo'];
const provaEmail = prompt('Inserisci la tua email')
let email;

for(let i= 0; i < verifiedEmail.length; i++){

         let email = verifiedEmail[i];
         if(email == provaEmail )
         email = true;
     }
    
     if (email == true){
         alert('evvai puoi entrare');
     }
     else{
         alert('voooleeeviii')
     }