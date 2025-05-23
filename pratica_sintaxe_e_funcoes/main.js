import { areaCirculo, classTriangulo, fibonacci } from "./function.js"

console.log('Aréa dos círculos:')
console.log(areaCirculo(10))
console.log(areaCirculo(1))

console.log('\nClassificação de triângulos:')
console.log(classTriangulo(2,2,2))
console.log(classTriangulo(10,10,10))
console.log(classTriangulo(3,4,4))
console.log(classTriangulo(4,3,4))
console.log(classTriangulo(3,4,5))
console.log(classTriangulo(3,4,-5))

console.log('\nSequência de Fibonacci:')
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(8));