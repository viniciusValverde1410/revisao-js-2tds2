let massas = ["Tradicional", "Integral", "Pan"];
let molhos = ["Molho de Tomate", "Molho Branco", "Molho Pesto"];
let queijos = ["Mussarela", "Queijo Prato", "Provolone", "Gorgonzola"];
let carnes = ["Calabresa", "Pepperoni", "Frango", "Bacon"];
let vegetais = ["Tomate", "Cebola", "Pimentão", "Azeitona", "Manjericão"];

let pizza = []

pizza.push(massas[1]);
pizza.push(molhos[0]);
pizza.push(queijos[2]);
pizza.push(carnes[3]);
pizza.push(vegetais[4]);

console.log("Pizza montada:");

for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i])
}
