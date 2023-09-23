var numero = parseFloat(window.prompt('Digite um número: '))

if (numero>0) {
    window.document.getElementById('paragrafo').innerHTML = `O número ${numero} é positivo!`;
    //Bloco caso a condição seja verdade
  } else { 
    window.document.getElementById('paragrafo').innerHTML = `O número é Negativo!`;
    //Bloco caso a condição seja falsa
  }
  /**/
  