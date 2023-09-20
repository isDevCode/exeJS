/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente  como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"

*/

function ano(mes) {

    switch (mes) {
         case 1:
            console.log("Mês de Janeiro");
            break;
         case 2:
            console.log("Mês de Fevereiro");
            break;
         case 3:
            console.log("Mês de Março");
            break;
         case 4:
            console.log("Mês de Abril");
            break;
         case 5:
            console.log("Mês de Maio");
            break;
         case 6:
            console.log("Mês de Junho");
            break;
         case 7:
            console.log("Mês de Julho");
            break;
         case 8:
            console.log("Mês de Agosto");
            break;
         case 9:
            console.log("Mês de Setembro");
            break;
         case 10:
            console.log("Mês de Outubro");
            break;
         case 11:
            console.log("Mês de Novembro");
            break;
         case 12:
            console.log("Mês de Dezembro");
            break;
         default:
            console.log("Mês Inválido!")
     }
}
ano(5);