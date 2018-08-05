function reqListener () {
  var moedas = JSON.parse(this.responseText);  
  var table;
  var opcoes;
  
  moedas.forEach(function(moeda){
      table += `
            <tr>
                <th scope="row">${moeda.rank}</th>
                <td>${moeda.name}</td>
                <td>${moeda.symbol}</td>
                <td>${moeda.price_brl}</td>
                <td>${moeda.price_usd}</td>
            </tr>
            
            `
     return document.getElementById("tabela").innerHTML = table;
  })
};


var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "https://api.coinmarketcap.com/v1/ticker/?convert=brl&limit=10", true);
oReq.send();

