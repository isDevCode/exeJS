const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function mediaDuasMaiores(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));

    if(menorNota === n1) {
        return (n2 + n3) /2

    } else if(menorNota === n2) {
        return (n1 + n3) / 2;
    }
        return (n1 + n2) / 2;
}




function mediaParaStatus(media) {
    if(media >= 7) {
        return "Aprovado";
    } else if(media >= 4) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

const mediaFinal = mediaDuasMaiores(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado final da é: ${statusFinal}`);