function clicou(){
  var qtdInput = document.getElementById('qtd').value;
    var htmlFinal = '';
    for(var i = 0; i < qtdInput; i++) {
        htmlFinal += 'Nome: <input> <br><br>';
    }
    document.getElementById('nomes').innerHTML = htmlFinal;

    
}
