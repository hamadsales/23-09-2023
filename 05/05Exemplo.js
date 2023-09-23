/*
Faça um Programa que leia três números e mostre o maior e o menor deles.
*/
var resposta = document.querySelector("#paragrafo").innerHTML;

var num1 = Number(prompt('Digite um numero: ')); 
var num2 = Number(prompt('Digite um numero: ')); 
var num3 = Number(prompt('Digite um numero: '));

if(num1 > num2){
  if(num1 > num3){
    resposta = "O número 1 é o maior número";
  }else{
    resposta = "O número 3 é o maior número";
  }
}else{
  if(num2 > num3){
    resposta = "O número 2 é o maior"
  }else{
    resposta = "O número 3 é o maior número"
  }
}