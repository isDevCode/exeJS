function multiplicaPar(x, y){
    if ( (x % 2) == 1 ) return 0;
    if ( (y % 2) == 1 ) return 0;
    return x * y;
}
console.log(multiplicaPar(1, 1));
console.log(multiplicaPar(1, 0));
console.log(multiplicaPar(2, 1));
console.log(multiplicaPar(2, 2));