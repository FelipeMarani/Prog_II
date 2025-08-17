const tipoPagamento = (tp, valor) =>{
    if (tp === 1) {
        let desconto = valor * 0.05;
        return valor - desconto;
        console.log("O valor à vista é: " + (valor - desconto));
    }
    else if (tp === 2){
        let juros = valor * 0.1;
        return valor + juros;
        console.log("O valor a prazo é: " + (valor + juros));
    }
}
let price = parseFloat(prompt("Informe o valor do produto: "));
let tp = parseInt(prompt("Informe o tipo de pagamento (1-a vista / 2-a prazo): "));
tipoPagamento(tp, price);
