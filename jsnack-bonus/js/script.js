// Dato un array contenente 10 numeri, stampare in console il numero più grande.

// creo un array con 10 numeri
const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 101];
console.log(numbers)

// trovo il numero più grande
let largestNumber = Math.max(...numbers);

// lo stampo in console
console.log(largestNumber);