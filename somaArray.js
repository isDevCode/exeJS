const valoresProdutos = [10, 12, 8]; // array com o preço dos produtos
let somaTotal = 0; // valor total

for (let index = 0; index < valoresProdutos.length; index = index + 1) {
    somaTotal = somaTotal + valoresProdutos[index];
  }
  
  console.log(somaTotal);