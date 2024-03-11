// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero
// se è dispari inseriscilo nell’array.

// creo un array vuoto
const oddNumbers = [];

for (i = 0; i < 6; i++) {

    // chiedo per 6 volte all’utente di inserire un numero
    let userNumber = parseInt(prompt('Inserisci un numero'));
    console.log('user number', userNumber);

    // se è dispari lo inserisco nell'array
    if (userNumber % 2 !== 0) {
        oddNumbers.push(userNumber);
    }

    console.log('final', oddNumbers);
}