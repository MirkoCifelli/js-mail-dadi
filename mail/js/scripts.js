// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.



const verifiedEmail = ['pippo'];
const provaEmail = prompt('Inserisci la tua email')
let email = false;

for(let i= 0; i < verifiedEmail.length; i++){

         if(provaEmail == verifiedEmail[i] ){
           email = true
           alert('evvai puoi entrare'); 
         }
         
         else{
           alert('ehhhhhh voooleeeviii')
    }
     }
    
     