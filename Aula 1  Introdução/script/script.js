// <------------- INICIO DAS ATRIUIÇÕES--------------->//

var nome
var sobrenome
var idade 
var ano

// <--------------FINAL DAS ATRIBUIÇÕES--------------->//

// <---------------INICIO DAS VARIAVEIS---------------------->//

var nome = "Caique";
var sobrenome = "Brito";
var idade = 26;
var ano = 2024;
var espaco="   ";

//<----------------FIM DAS VARIAVEIS------------------>//

//<-------------CONCATENAÇÃO----------------------->//

var  resultado1 = nome + espaco +sobrenome ;
var  resultado2 = idade + espaco + ano ; 
var  resultado3 = ano - idade ; 

//<-------------FIM DA CONCATENAÇÃO--------------->//

//<-------------- FUNÇÕES--------------->//
var numero1 = Number( window.prompt('digite um número')) // string
var numero2 = Number( window.prompt ('digite outro número')) // string
var resultado  = numero1 + numero2   
window.alert (`A soma entre ${numero1} e ${numero2} é igual ${resultado}`)

