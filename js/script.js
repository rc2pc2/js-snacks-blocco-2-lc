
// ? Crea un array vuoto
// ? e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


//  % creiamo un array vuoto
//  % inizializzo la somma a 0

//  % creo una condizione in cui si chiedono numeri fino a che ....
    //  % chiedo all'utente di inserire un numero
    //  % sommo il numero inserito alla somma totale se il numero non e' NaN
        //  % lo aggiungo all'array

// % scrivo la somma


const array = [];
let somma = 0;

while ( somma <= 50 ){
    const userNumber = parseInt( prompt('Type a new number') );

    if ( !isNaN(userNumber) ){
        somma += userNumber;
        array.push(userNumber);
    }
}

console.log(array, somma);