/*
const  numerosApostados = [2, 5, 10, 22, 36, 43, 49, 55];

const numerosPremiados = [3, 7, 20, 22, 36, 49];

for (let indexApostados = 0; indexApostados < numerosApostados.length; indexApostados += 1){
    for (let indexPremiado = 0; indexPremiado < numerosPremiados.length; indexPremiado +=1) {
        if (numerosApostados[indexApostados] === numerosPremiados[indexPremiado]){
            console.log(numerosApostados[indexApostados]);
        }
    }
}
*/

const numerosPremiados = [5, 7, 8, 10, 11, 22, 9, 33];
const numerosApostados = [2, 22, 8, 9, 100, 25, 4, 12];

for (let indexNumerosPremiados = 0; indexNumerosPremiados < numerosPremiados.length; indexNumerosPremiados++){
    for (let indexNumerosApostados = 0; indexNumerosApostados < numerosApostados.length; indexNumerosApostados++){
        if (numerosPremiados[indexNumerosPremiados] === numerosApostados[indexNumerosApostados]) {
            console.log('Os números premiados são: ' + numerosApostados[indexNumerosApostados]);
        }
    }
}