function resposta () {
    var valor = document.getElementById("valor").value;
    var resposta = this.responseText;
    var moedas = JSON.parse(resposta);
    var conta = parseFloat(moedas[0].price_brl) / parseFloat(valor);
    document.getElementById("resposta").innerHTML = `Resultado: ${conta}`;
    

};


var opcao = document.getElementById("opcoes").value;
var xhr = new XMLHttpRequest();
xhr.onload = resposta;
xhr.open("get", "https://api.coinmarketcap.com/v1/ticker/"+opcao+"?convert=brl&limit=10", true);
xhr.send();