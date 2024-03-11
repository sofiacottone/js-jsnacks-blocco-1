// Chiedere all'utente 5 numeri. 
// Inserire i numeri nell'array ma senza creare duplicati(inserire il numero nell'array solo se non è già presente).

// chiedo i 5 numeri all'utente 
const numbers = [];

for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('Dimmi un numero'));
    console.log(userNumber);

    let numberFound = numbers.includes(userNumber);

    if (numberFound === false) {
        numbers.push(userNumber);
    }
}
console.log(numbers);