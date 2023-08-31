const numeros = [10, 20, 30];
function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}
numeros.forEach(praCadaElemento);

numerosNew.forEach(function (elemento){
    console.log(elemento);
});

numerosNew.forEach(function(_, indice) {
    console.log(indice);
});