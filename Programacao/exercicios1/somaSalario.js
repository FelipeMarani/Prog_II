function somaSalario(time, cash){
    if(time > 200){
        let bonus = (time * cash) * 0.05;
        return (time *cash) + bonus;
    }
    else{
        return (time * cash);
    }
}

let time = parseInt(prompt("Informe o número de horas trabalhadas: "));
let cash = parseFloat(prompt("Informe o valor da hora trabalhada: "));

let payday = somaSalario(time, cash);
console.log("O salário a receber é: " + payday);
