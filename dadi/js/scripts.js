// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const nomeGiocatore = prompt('inserisci nome giocatore');
const giocatore = document.getElementById('giocatore');


giocatore.addEventListener('click', function () {
    const punteggioGiocatore = Math.floor((Math.random() * 6) + 1);
    alert(nomeGiocatore + 'hai fatto' + punteggioGiocatore)

    const punteggioPc = Math.floor((Math.random() * 6) + 1);
    alert( 'Il pc ha fatto' + punteggioPc)


    if( punteggioGiocatore > punteggioPc){
        alert('Hai vinto');

    }
    else if(punteggioGiocatore == punteggioPc){
        alert("Pareggio")
    }
    else{
        alert("Loserrr")
    }
})