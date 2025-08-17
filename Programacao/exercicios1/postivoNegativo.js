let n = 1;
let pos = 0;
let neg = 0;
while (n <= 4){
    let num = parseInt(prompt("Informe o n" + n + "°"));
    if (num >= 0) {
        pos++;
    } else {
        neg++;
    }
    n++;
}
console.log("Quantidade de números positivos: " + pos);
console.log("Quantidade de números negativos: " + neg);
