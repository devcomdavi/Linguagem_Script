const areaCirculo = (raio) => Math.PI*(raio**2);

const classTriangulo = (l1, l2, l3) => {
    if(l1+l2 <= l3 || l1+l3 <= l2 || l2+l3 <= l1) {
        return 'none';
    }
    
    if(l1===l2 && l1===l3) {
        return 'equilateral';
    }
    
    if((l1===l2 || l1===l3 || l2===l3)) {
        return 'isosceles';
    } 
    
    return 'scalene';
}

const fibonacci = (num) => {
    if(num === 0) {
        return '';
    }
    if(num === 1){
        return '0';
    }
    if(num === 2){
        return '0, 1';
    }
    if(num > 2){
        let lista = [0, 1];
        for(var flag = 1; flag <= (num-2); flag++) {
            let add = lista[flag] + lista[flag-1];
            lista.push(add)
        }
        return lista.join(", ")      
    }
}

export { areaCirculo, classTriangulo, fibonacci }