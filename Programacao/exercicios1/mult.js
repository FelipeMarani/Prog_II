function multSum(a, b){
    for(let i = 1; i <= b; i++){
        a += a;
    }
    return a;
    console.log("O resultado é: " + a);
}
let a = parseInt(prompt("Informe o primeiro número: "));
let b = parseInt(prompt("Informe o segundo número: "));
multSum(a, b);
