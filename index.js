let numero = "";
let aux = '';

const prompt = require("prompt-sync")();

const ANAGRAMA = (data) => {
    data = data.split("");

    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data.length; j++) {
            if(data[i] > data[j]) {
                aux = data[i];
                data[i] = data[j];
                data[j] = aux;

            }
        }
    }
    data = data.join("")

    return data;
}

numero = prompt("Escreva um número: ");

numero = ANAGRAMA(numero);
console.log(numero);

