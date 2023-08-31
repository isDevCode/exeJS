const data = {
    dia: 24,
    mes: 12,
    ano: 2023,
    exibir: function() {
         return `${this.dia} / ${this.mes} / ${this.ano}`;
    }

};

data.dia = 12;
console.log(data.exibir());