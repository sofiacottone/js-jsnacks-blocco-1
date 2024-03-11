// Dato un array contenente 10 numeri, stampare in console il numero più grande.

// creo un array con 10 numeri
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// calcolo la somma
let sum = 0;

for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

// calcolo la media
const average = sum / numbers.length;

console.log(average);
