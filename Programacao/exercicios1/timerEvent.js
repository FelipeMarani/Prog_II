function eventDuration(initial, final){
    let duration = 0;
    if (initial > final) {
        let x = initial - final;
        duration = 24 - x;
        return duration;
    }
    else{
        duration = final - initial;
        return duration;
    }
    console.log("A duração: " + duration + "horas");
}
let ini = parseInt(prompt("Inicio: "));
let fnl = parseInt(prompt("Fim: "));
eventDuration(ini, fnl);
