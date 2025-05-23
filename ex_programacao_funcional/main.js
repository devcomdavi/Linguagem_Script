import { sum, product, sumOdds } from './function.js';

let valores = [1, 2, 3];
let valores2 = [2, 2, 2];
let valores3 = [1, 2, 3, 4, 5, 6];
console.log('sum');
console.log('Valores: [1, 2, 3] -> ', sum(valores));
console.log('Valores: [2, 2, 2] -> ', sum(valores2));
console.log('Valores: [1, 2, 3, 4, 5, 6] -> ', sum(valores3));

console.log('\nsumOdds');
console.log('Valores: [1, 2, 3] -> ', sumOdds(valores));
console.log('Valores: [2, 2, 2] -> ', sumOdds(valores2));
console.log('Valores: [1, 2, 3, 4, 5, 6] -> ', sumOdds(valores3));

console.log('\nproduct');
console.log('Valores: [1, 2, 3] -> ', product(valores));
console.log('Valores: [2, 2, 2] -> ', product(valores2));
console.log('Valores: [1, 2, 3, 4, 5, 6] -> ', product(valores3));