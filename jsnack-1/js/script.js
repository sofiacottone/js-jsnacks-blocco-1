// Chiedere all'utente 5 numeri. 
// Inserire i numeri nell'array ma senza creare duplicati(inserire il numero nell'array solo se non è già presente).

const numbers = [];

for (let i = 0; i < 5; i++) {
    // chiedo i 5 numeri all'utente 
    let userNumber = parseInt(prompt('Dimmi un numero'));
    console.log(userNumber);
    // verifico se il numero inserito dall'utente è presente nell'array
    let numberFound = numbers.includes(userNumber);
    // se non è presente allora lo inserisco
    if (numberFound === false) {
        numbers.push(userNumber);
    }
}
console.log(numbers);