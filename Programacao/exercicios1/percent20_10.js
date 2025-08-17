let i = 0;
let sum = 0;
while (true) {
    let exit = 0;
    let n = parseInt(prompt("Informe um número: "));
    sum += n;
    if (n <= 0) {
        exit = sum / i;
        console.log("A média de número entre 10 e 20: " + exit + "%");
        break;
    }
    else {
        if (10 <= n && n <= 20) {
            i += 1;
        }
    }
}
