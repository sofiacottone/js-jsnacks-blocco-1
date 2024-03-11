// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

const numbers = [];
let sum = 0;

for (i = 0; i < 5; i++) {

    // chiedo i numeri all'utente
    let userNumber = parseInt(prompt('Inserisci un numero'));
    console.log('user number', userNumber);

    // sommo i numeri
    sum += userNumber;
}
console.log('somma', sum);