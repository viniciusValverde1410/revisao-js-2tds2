let armas = ["Laser depilador", "Fogos de orifício",
   "Cabeçada do Pedro", "Chute do Roberto Carlos",
   "Chicotada do beto carreiro"];

let ataques = [];

ataques.push("GabiEspancaCranio");
ataques.push(armas[0]);
ataques.push(armas[3]);
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[4]);
ataques.push(armas[1]);

//console.log("Nome do Robô: " + ataques[0]); nao será utilizado mas é uma forma.

for (let i = 0; i < ataques.length; i++) {
   if (i == 0) {            //se i estiver na posição 0 mostra o console do nome do robô
      console.log("Nome do robô: " + ataques[i]);
   } else {
      console.log("Ataque " + i + ": " + ataques[i]);
   }
}