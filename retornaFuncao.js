function retornarUmaFuncao() {
    function bomDia() {

    }

    return bomDia;
}

console.log(retornaUmaFuncao);
console.log(retornarUmaFuncao());
console.log(retornaUmaFuncao()());

const umaFuncao = retornarUmaFuncao();
console.log(umaFuncao());