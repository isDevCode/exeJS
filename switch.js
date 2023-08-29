let nota = 3.5;

switch (Math.ceil(nota)) {
    case 10: case 9: case 8: case 7:
        console.log('Aprovado!');
        break;
    case 5: case 4: case 3:
        console.log('Recuperação!');
        break;
    
    case 2: case 1: 
    console.log('Reprovado!');
    break;

    default:
        console.log('Nota Inválida');
}

console.log(nota);