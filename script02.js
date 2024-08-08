// conforme intensidade inserida , exibir palmas 

let intensidade = 13; // declaro variável com quantidades de palma que vou querer
let palmas = ""; //contador de palmas, partindo vazio
let festinha = 0; //contador do emoji novo

for (let i = 1; i <= intensidade; i++) { //declaro laço de repetição, com uma variável, 
    palmas = palmas + "👏" 
    festinha = festinha + 1   
    
    if (festinha % 5 == 0) { //se o resto da divisão do contador do emoji por 5 for 
        palmas = palmas + "🎉"                //igual a 0 e o valor do contador for diferente de 0
    };                          //e enquanto for menor a intensidade itera e adiciona uma palma
};                                      //e adiciono 1 no contador do emoji novo
              // eu concateno o ovo emoji
console.log(palmas) //exibo a quantidade de palmas