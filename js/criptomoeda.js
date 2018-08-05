var apiBitcoin = function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhr.response);
            doTable(response);
        }
    }
    xhr.open("GET", "https://api.coinmarketcap.com/v1/ticker/?convert=brl&limit=10", true);
    xhr.send();
}

var doTable = function(resposta) {
    var table = "";
    resposta.forEach(function(moeda) {
        table+= `
            <tr>
                <th scope="row">${moeda.rank}</th>
                <td>${moeda.name}</td>
                <td>${moeda.symbol}</td>
                <td>${moeda.price_brl}</td>
                <td>${moeda.price_usd}</td>
            </tr>
            
            `
    });

    var tabela = document.getElementById("tabela");
    tabela.innerHTML = table;
}

apiBitcoin();

var acharMoeda = function() {
    var xhr2 = new XMLHttpRequest();
    var valor = document.getElementById("opcoes").value;
    xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = JSON.parse(xhr2.response);
            resposta = parseFloat(resposta[0].price_brl);
            calcValor(resposta);
        }
    }
    xhr2.open("GET", "https://api.coinmarketcap.com/v1/ticker/" + valor + "/?convert=brl", true);
    xhr2.send();
}

var calcValor = function(valor) {
    var convertido = 0.0;
    var valorDivisao = document.getElementById("valor-converter").value;
    var valorSelecionado = document.getElementById("opcoes").value;

    convertido = valor / parseFloat(valorDivisao);
    document.getElementById("resultado").textContent = convertido.toFixed(4) + " " + valorSelecionado;
}
