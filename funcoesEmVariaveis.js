const x = 123;
let y = 321;

const somar = function (a, b) {
    return a + b;
    }

    console.log(somar(x, y));


    
    function subtrair(a, b) {
        return a - b;
    }

    const subtracao = subtrair;

    console.log(subtrair(5, 2));
    console.log(subtracao(5, 2));