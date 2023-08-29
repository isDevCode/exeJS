const notas = [7, 8, 3, 5, 10, 9, 8, 8];

//foreach

for(let nota of notas) {
    console.log(nota);

}

// outro metodo 
// for of acessa os valores
let valores = '';
for(let nota of notas) {
    valores += nota + '';
    
}
console.log(valores);
//for in acessa os indices
let indices = '';

for(let indice in notas) {
    indices += indice + '';
}
console.log(indices);

