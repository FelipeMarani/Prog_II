const sumFat = (n) => {
    let x = 0;
    for(let i = 1; i <= n; i++){
        x += i;
    }
    return x;
    console.log("A soma dos números é: " + x);
}
let n = parseInt(prompt("Informe um número: "));
sumFat(n);
