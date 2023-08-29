function executar(parametro){
    if(typeof parametro === "function") {
        console.log(parametro());
    }
}

function bomDia(){
    return "Bom dia";
}

executar(3);
executar(bomDia); // adicionar a funcao bomDia sem os parenteses