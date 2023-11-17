
// ? Crea un array vuoto
// ? e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


//  % creiamo un array vuoto
//  % inizializzo la somma a 0

//  % creo una condizione in cui si chiedono numeri fino a che ....
    //  % chiedo all'utente di inserire un numero
    //  % sommo il numero inserito alla somma totale se il numero non e' NaN
        //  % lo aggiungo all'array

// % scrivo la somma


// const array = [];
// let somma = 0;

// while ( somma <= 50 ){
//     const userNumber = parseInt( prompt('Type a new number') );

//     if ( !isNaN(userNumber) ){
//         somma += userNumber;
//         array.push(userNumber);
//     }
// }

// console.log(array, somma);



// Generatore di "nomi cognomi" casuali:
//  il Grande Gatsby ha una lista di nomi
//  e una lista di cognomi,
//   e da queste vuole generare una falsa lista di invitati con nome e cognome.
const fistNames = ["Gigino", "Franco", "Pippo", "Topolino",];
const lastNames = ["Pomodoro", "Cornetto", "Nutella", "Crema", 'Giannini', 'Rossi'];

const numberOfRandomNames = 13;

// % creiamo un array
const resultingArray = [];

// // ? per la lunghezza del primo array
// for (let i=0 ; i < numberOfRandomNames ; i++){
//     // % un elemento dal primo array
//     let firstNameGen = fistNames[ Math.floor( Math.random() * fistNames.length)] ;

//     //  % un elemento del secondo array
//     let lastNameGen = lastNames[ Math.floor( Math.random() * lastNames.length)];

//     // % genero il nome cognome casuale
//     let completeNameGen = firstNameGen + ' ' + lastNameGen;

//     // % inseriemo completeNameGen in questo array
//     resultingArray.push(completeNameGen);

//     console.log(firstNameGen, lastNameGen);
// }

// console.log(resultingArray);

while ( resultingArray.length < numberOfRandomNames ){
    // % un elemento dal primo array
    let firstNameGen = fistNames[ Math.floor( Math.random() * fistNames.length)] ;

    //  % un elemento del secondo array
    let lastNameGen = lastNames[ Math.floor( Math.random() * lastNames.length)];

    // % genero il nome cognome casuale
    let completeNameGen = firstNameGen + ' ' + lastNameGen;

    // % inseriemo completeNameGen in questo array
    resultingArray.push(completeNameGen);

    console.log(firstNameGen, lastNameGen);
}

console.log(resultingArray);
