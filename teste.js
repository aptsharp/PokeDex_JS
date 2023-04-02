const people = [
  { nome: "qualquer1", idade: 31 },
  { nome: "qualquer2", idade: 32 },
  { nome: "qualquer4", idade: 33 },
  { nome: "qualquer6", idade: 34 },
  { nome: "qualquer8", idade: 35 },
  { nome: "qualquer100", idade: 36 },
];

const exibierMap = people.map((exb) => exb.nome);

const exbibeIdade = people.map((exbI) => exbI.idade);

console.log(exibierMap);
console.log(exbibeIdade);

// JS é fracamente tipado, e é case sentive
// Hoisting

imprime(); // Hoisting

function imprime() {
  console.log("Hoisting");
}

// nesse caso quando se é utilizado o var é permitido vazar o escopo.
var var1;

if (true) {
  var1 = 10;
}

console.log(var1);

// para isolar o contesto do var

// let e const tem o escopo de bloco || var somente escopo de função, se não estiver dentro de uma função o Hoisting é global

// convenções e não padrões. 
// variável restrita aquele bloco é recomendável começar com "_" exemplo var _teste
// ser for uma classe ou função construtura é recomendável começar com letra Maiúscula exemplo function Teste()
// para const é recomendável tudo maiúsculo exemplo: const TESTE = 10;


// PRIMITIVOS -> tipos de dados são: 

// Boolean
// null
// undefined : valor atribuído a uma variável que ainda não foi definida.
// number 
// string 
// symbol : um valor único e imutável que pode ser usado como chave de uma propriedade de objeto.

// não primitivos -> tipos de dados são:

// Object: coleção de dados e/ou funcionalidades relacionadas, podendo ser criado com a sintaxe de objeto literal ({ }) ou com o operador new.
// Function: objeto especial que pode ser invocado para realizar uma ação ou retornar um valor.
// Array: objeto especial que pode armazenar vários valores em uma única variável, com a sintaxe de colchetes ([ ]).
// Date: objeto que representa uma data e hora.
// RegExp: objeto que representa uma expressão regular, usada para buscar ou substituir padrões de caracteres em strings.
// Map: objeto que permite armazenar pares de chave-valor, onde as chaves podem ser de qualquer tipo.
// Set: objeto que permite armazenar valores únicos de qualquer tipo.

// objetos 

