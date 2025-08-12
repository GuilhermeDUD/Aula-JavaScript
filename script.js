console.log("Olá, mundo");
//alert("Olá");

//let nome = window.prompt("Nome: ");
//console.log("Nome: " + nome);

//document.writeln("Escrever HTML");

//variáveis
var animal = "cachorro";
console.log(animal);
let nomeCompleto = "Fulano da Silva";
console.log(nomeCompleto);
const valor = 10;
console.log(valor);

//valor = 20;
console.log(valor);

var status = true;

//verificar o tipo da variável
console.log(typeof valor);
console.log(typeof nomeCompleto);
console.log(status);

//operadores aritméticos
var num1 = 10;
var num2 = 20;
var soma = num1 + num2;
console.log(soma);

//operadores de comparação
console.log(5 == "5"); //igualdade (valor = true)
console.log(5 === "5"); //estritamente igual o (valor é tipo = false)

console.log(10 != "10"); // desigualdade
console.log(10 !== "10"); //estritamente desigual

//dados de entrada (input)
var idade = parseInt(window.prompt("Idade: "));
console.log(typeof idade);

var resultado = idade + 10;
console.log(`Olá ${nomeCompleto} você possui ${idade}`); //template literal

