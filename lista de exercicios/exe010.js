/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
 */
//let numero = 5;
//for(let n = 1; n <= numero; n++) {
              
  //  console.log(n);
//}

/*

function parametro(numero){
   let caracter = '+';
   let soma;
    for(let n = 1; n <= numero; n++) {
            soma += n;
            soma = caracter;
          
           console.log(`${soma}`);   
    //   return n;
}
}
console.log(parametro(8));

*/

function simboloMais(quantidade) {
    let resultado = '';
    for(let i = 0; i < quantidade; i++)
    resultado += '+';
    return resultado
    }
    console.log(simboloMais(5));