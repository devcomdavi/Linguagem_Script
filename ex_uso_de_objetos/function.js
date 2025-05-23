class Exams {   
    constructor(respostas_corretas, peso) {
        this.respostas_corretas = respostas_corretas;
        this.peso = peso;
        this.respostas_alunos = [];
    }

    add(exame) {
        this.respostas_alunos.push(exame);
        let nota = 0
        for(let i=0;i<exame.length;i++) {
            if(exame[i] == this.respostas_corretas[i]) {
                nota += this.peso[i];
            } 
        }
        this.respostas_alunos.push(nota)
    }

    avg() {
        let soma = 0
        for(let i=1;i<this.respostas_alunos.length;i+=2) {
            soma += this.respostas_alunos[i];
        }
        let media = soma/(this.respostas_alunos.length/2);
        return media
    }

    min(count = 1) {
        let len_notas = this.respostas_alunos.length;
        let notas = [];
        for(let i=1;i<len_notas;i+=2) {
            notas.push(this.respostas_alunos[i]);
        }
        
        let ordenado = notas.sort((a, b) => a - b);
        let min = []
        for(let i=0;i<count;i++) {
            min.push(ordenado[i])
        }
        return min
    }

    max(count = 1) {
        let len_notas = this.respostas_alunos.length;
        let notas = [];
        for(let i=1;i<len_notas;i+=2) {
            notas.push(this.respostas_alunos[i]);
        }
        
        let ordenado = notas.sort((a, b) => a - b);
        let max = []
        for(let i=(notas.length-count);i<notas.length;i++) {
            max.push(ordenado[i])
        }
        return max
    }

    lt(limit) {
        let len_notas = this.respostas_alunos.length;
        let menor_que = []
        for(let i=1;i<len_notas;i+=2) {
            if(this.respostas_alunos[i]<limit) {
                menor_que.push(this.respostas_alunos[i])
            }
        }
        return menor_que
    }

    gt(limit) {
        let len_notas = this.respostas_alunos.length;
        let maior_que = []
        for(let i=1;i<len_notas;i+=2) {
            if(this.respostas_alunos[i]>limit) {
               maior_que.push(this.respostas_alunos[i])
            }
        }
        return maior_que
    }
}

export { Exams }