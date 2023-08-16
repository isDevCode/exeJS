const hora = 12;

//const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
const saudacao = hora < 12 ? "Bom dia" : (hora < 18 ? "Boa tarde" : "Boa noite");
console.log(saudacao);