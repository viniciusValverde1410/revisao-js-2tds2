let carro1 = "Fuscão"; //declaro nomes de carro
let carro2 = "Paraty";
let carro3 = "Fiesta";

const carro = []; //array que se inicia vazio
carro[0] = "Celta";
carro[1] = "Corsa";//adiciono  tal carro no array

console.log(carro);//exibo o que tem no array
console.log(carro.length);//exibo o tamanho do array
console.table(carro);//exibo o array em tabela!
console.clear();//limpa o console

let carroCopia1 = [...carro];//declaro uma variável copiando o array (os 3 pontos)
console.log(carro);
console.log(carroCopia1);//teste da cópia
console.log(carro == carroCopia1);//falso, pois são duas coisas distintas, não estão na mesma memoria

let carroCopia2 = carro.slice();
let carroCopia3 = [].concat(carro);
let carroCopia4 = Array.from(carro);

console.log(carroCopia2);
console.log(carroCopia3);
console.log(carroCopia4);

//todas as formas de copiar um array


