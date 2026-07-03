const notas = ["10", "6.5", "8", "7.5"];

console.log("Nota no índice 2:", notas[2]);

console.log("Tamanho da lista:", notas.length);

const notasProfessor = [10, 6, 8];
notasProfessor.push(7);
console.log("Após o push:", notasProfessor);
notasProfessor.pop();
console.log("Após o pop:", notasProfessor);

const media = (notasProfessor[0] + notasProfessor[1] + notasProfessor[2]) / notasProfessor.length;
console.log("Média final:", media);

const alunos = ["Ana", "Bia", "Carlos", "Diego", "Edu", "Fabio", "Gabi", "Igor", "Julia", "Leo"];
const sala1 = alunos.slice(0, 5); 
const sala2 = alunos.slice(5);

console.log("Sala 1:", sala1);
console.log("Sala 2:", sala2);

const listaNomes = ["João", "Ana", "Caio", "Lara"];

listaNomes.splice(1, 2, "Rodrigo");
console.log("Lista atualizada:", listaNomes); 

const salaJS = ["Alana", "Bruno", "Cíntia"];
const salaPython = ["Daniel", "Elena", "Fabrício"];

const salasUnificadas = salaJS.concat(salaPython, "Gisele");

console.log("Salas Unificadas:", salasUnificadas);

const alunosTurma = ["João", "Juliana", "Caio", "Ana"];
const mediasTurma = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunosTurma, mediasTurma];

console.log(`Aluno: ${listaDeAlunosEMedias[0][1]}`); 
console.log(`Nota: ${listaDeAlunosEMedias[1][1]}`);

const listaAlunos = ["João", "Juliana", "Caio", "Ana"];
const listaMedias = [10, 8, 7.5, 9];

const listaBusca = [listaAlunos, listaMedias];

function buscaAluno(nomeDoAluno) {
    if (listaBusca[0].includes(nomeDoAluno)) {
        const indice = listaBusca[0].indexOf(nomeDoAluno);
        const nota = listaBusca[1][indice];
        return `${nomeDoAluno} tem a média ${nota}.`;
    } else {
        return "Aluno não encontrado.";
    }
}

console.log(buscaAluno("Juliana")); 
console.log(buscaAluno("Marcos"));

const numeros = [100, 200, 300, 400];

console.log("--- For Clássico ---");
for (let i = 0; i < numeros.length; i++) {
    console.log(`Índice ${i} -> Valor: ${numeros[i]}`);
}

console.log("--- For Of ---");
const notasRepeticao = [10, 8, 6, 8];
let somaDasNotas = 0;

for (let nota of notasRepeticao) {
    somaDasNotas += nota;
}
const mediaForOf = somaDasNotas / notasRepeticao.length;
console.log(`A média das notas é: ${mediaForOf}`);

console.log("--- For Invertido ---");
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(`Índice ${i} -> Valor: ${numeros[i]}`);
}

const alunosFiltragem = ["Ricardo", "Ana", "Caio", "Lara"];
const mediasFiltragem = [6, 8.5, 5.5, 7];

const reprovados = alunosFiltragem.filter((aluno, indice) => {
    return mediasFiltragem[indice] < 7;
});

console.log("Alunos reprovados:", reprovados); 