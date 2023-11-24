
// // ? Crea un array vuoto
// // ? e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


// //  % creiamo un array vuoto
// //  % inizializzo la somma a 0

// //  % creo una condizione in cui si chiedono numeri fino a che ....
//     //  % chiedo all'utente di inserire un numero
//     //  % sommo il numero inserito alla somma totale se il numero non e' NaN
//         //  % lo aggiungo all'array

// // % scrivo la somma


// // const array = [];
// // let somma = 0;

// // while ( somma <= 50 ){
// //     const userNumber = parseInt( prompt('Type a new number') );

// //     if ( !isNaN(userNumber) ){
// //         somma += userNumber;
// //         array.push(userNumber);
// //     }
// // }

// // console.log(array, somma);



// // Generatore di "nomi cognomi" casuali:
// //  il Grande Gatsby ha una lista di nomi
// //  e una lista di cognomi,
// //   e da queste vuole generare una falsa lista di invitati con nome e cognome.
// const fistNames = ["Gigino", "Franco", "Pippo", "Topolino",];
// const lastNames = ["Pomodoro", "Cornetto", "Nutella", "Crema", 'Giannini', 'Rossi'];

// const numberOfRandomNames = 13;

// // % creiamo un array
// const resultingArray = [];

// // // ? per la length del primo array
// // for (let i=0 ; i < numberOfRandomNames ; i++){
// //     // % un elemento dal primo array
// //     let firstNameGen = fistNames[ Math.floor( Math.random() * fistNames.length)] ;

// //     //  % un elemento del secondo array
// //     let lastNameGen = lastNames[ Math.floor( Math.random() * lastNames.length)];

// //     // % genero il nome cognome casuale
// //     let completeNameGen = firstNameGen + ' ' + lastNameGen;

// //     // % inseriemo completeNameGen in questo array
// //     resultingArray.push(completeNameGen);

// //     console.log(firstNameGen, lastNameGen);
// // }

// // console.log(resultingArray);

// while ( resultingArray.length < numberOfRandomNames ){
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


const zucchiniList = [
    {kind: 'Kind 1', weight: 10, length: 4},
    {kind: 'Kind 6', weight: 13, length: 16},
    {kind: 'Kind 2', weight: 4, length: 23},
    {kind: 'Kind 6', weight: 11, length: 6},
    {kind: 'Kind 1', weight: 2, length: 17},
    {kind: 'Kind 3', weight: 5, length: 10},
    {kind: 'Kind 3', weight: 7, length: 9},
    {kind: 'Kind 4', weight: 3, length: 8},
    {kind: 'Kind 5', weight: 6, length: 27},
    {kind: 'Kind 5', weight: 14, length: 4},
    {kind: 'Kind 5', weight: 20, length: 20},

];

let totalSum = 0;

for (let i = 0 ; i < zucchiniList.length ; i++){
    const currentZucchini = zucchiniList[i];

    totalSum = totalSum + zucchiniList[i].weight;

    console.log(currentZucchini);
}

console.log(totalSum);