// variaveis => um espaço na memoria do computador que quardamos algo = um numero ,um texto uma imagen
// função => um trecho de codigo que  só é executado quando é chamado 

let chave = "b6b8265e8a146f845c8def135ee9f1b4"
// minha chave =b6b8265e8a146f845c8def135ee9f1b4

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidades").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descric").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade do Ar " + (dados.main.humidity) + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}
 async function buscarCidade(cidades){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
         cidades +
         "&appid=" +
         chave +
         "&lang=pt_br" +
         "&units=metric")
          .then(resposta => resposta.json())

          colocarNaTela(dados)
        

}


function ClikNoBotao(){
    let cidades = document.querySelector(".inputCidades").value 

    buscarCidade(cidades)
}