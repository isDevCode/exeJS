function alertaNumero(numero){
//alert(isNaN(Number(numero))?'entrada invalida':numero);
if (!isNaN(parseInt(numero))) {
    alert(numero)
}
}
alertaNumero("ola mundo!");
alertaNumero(10);