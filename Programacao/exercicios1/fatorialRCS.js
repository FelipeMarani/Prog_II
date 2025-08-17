function fatorialRCS(n) {
    while (n > 0) {
        if (n === 1 || n === 0) {
            return 1;
            n = 0;
        }
        else {
            return n * fatorialRCS(n - 1);
            n--;
        }
    }
    console.log("O fatorial de " + n + " é: " + fatorialRCS(n));
}
let n = parseInt(prompt("Informe o número a ser calculado o fatorial: "));
fatorialRCS(n);
