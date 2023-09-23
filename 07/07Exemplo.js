function clicou(){
  var num = Math.floor(Math.random() * 10);
  htmlFinal = '';
  while(num != 2){
    htmlFinal += num;
    num = Math.floor(Math.random() * 10);
}
document.getElementById('numeros').innerHTML = htmlFinal;
}