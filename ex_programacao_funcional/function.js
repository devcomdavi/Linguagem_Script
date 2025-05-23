const sum = (array) => array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)

const product = (array) => array.reduce((acc, num) => acc * num, 1)

const sumOdds = (array) => array
.filter(num => num%2 !== 0)
.reduce((soma, num) => soma + num, 0)

//function sum(array) {
//    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
//}

//function product(array) {
//    const produto = array.reduce((acc, num) => acc * num, 1)
//    return produto
//}

//function sumOdds(array) {
//    const somaImpares = array
//        .filter(num => num%2 !== 0)
//        .reduce((soma, num) => soma + num, 0)
//    return somaImpares
//}

export { sum, product, sumOdds } 