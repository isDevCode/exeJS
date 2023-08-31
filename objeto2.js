const produtos = {
    nome: 'ipad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto);
    }

};

console.log(produto.nome);
console.log(produto.precoComDesconto());


const data = {
    dia: 1,
    mes: 10,
    ano: 2021,
};

data.dia = 24;
data.mes = 12;

console.log(`${data.dia}/${data.mes}/${data.ano}`);


const usurio = {
   email:'aluno@cod3r.com.br'
};

usuario.nome = 'Aluno';
usuario.senha = '123456';

console.log(usuario.email);
console.log(usuario.nome);
console.log(usuario);

const cliente = {
    codigo: 123,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'apto 101 Bloco B',
        pontosRef: [
            { nome: 'Hospital X', mutoproximo: true },
            { nome: 'Shopping Y', muitoproximo: false },
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0].muitoProximo);