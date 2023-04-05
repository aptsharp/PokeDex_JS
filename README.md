# PokeDex_JS

### ¬¬ PROJETO AINDA ESTA EM DESENVOLVIMENTO ¬¬

o projeto inclui os seguintes tecnologias
normalize. -> CDN normalize.css

https://necolas.github.io/normalize.css/

https://cdnjs.com/libraries/normalize

tecnologia usada 
http-server 
para instalar npm http-server
para excutar na pasta local http-server ./ 
com esse servidor, todo mundo da mesma rede tem acesso.

a api utilizada é 
https://pokeapi.co/
repositorio gratuito onde estão todos os pokemons utilizados no projeto.


### anotações: 
organizar depois ¬¬

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

O método JSON.stringify() em JavaScript é usado para converter um objeto JavaScript em uma string JSON. Ele é usado para serializar dados estruturados em um formato que pode ser transmitido através de uma rede, armazenado em um arquivo ou utilizado em qualquer outra forma que exija uma representação textual dos dados.

Ao converter um objeto JavaScript em uma string JSON, o método JSON.stringify() realiza o seguinte:

Converte valores booleanos, numéricos e nulos em suas representações JSON correspondentes.
Converte strings em suas representações JSON correspondentes, com caracteres especiais escapados.
Converte arrays em uma lista de valores JSON.
Converte objetos em um conjunto de pares chave/valor JSON, onde as chaves são strings.
Ignora propriedades com valores indefinidos (undefined).
Exemplo:

const obj = { name: "João", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // {"name":"João","age":30}


Essa string JSON pode então ser transmitida através de uma rede ou armazenada em um arquivo. Para reverter o processo e obter novamente um objeto JavaScript a partir da string JSON, pode-se usar o método JSON.parse().

Em JavaScript, as aspas duplas ("") e as aspas simples ('') são usadas para delimitar strings. Já as crases ( ) são usadas para delimitar template literals.

os template literals são strings que permitem a interpolação de variáveis e expressões dentro delas usando a sintaxe ${}. Por exemplo:

let nome = "Maria";
let idade = 30;

let mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;

além consegue fazer quebras de linha apenas dando o enter. 

const id = 20

console.log('<div: id='' '+ id +' " >testes <div>');

console.log(`<div: id='${id}'>
testes
 <div>`
 );


## orientação a prototipo, funções construturas. 
 
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.cumprimentar = function() {
  console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
};

const pessoa1 = new Pessoa('João', 30);
pessoa1.cumprimentar(); // output: Olá, meu nome é João e eu tenho 30 anos.


exemplo, criamos uma função construtora Pessoa que recebe um nome e uma idade e cria um objeto pessoa com essas propriedades. Em seguida, adicionamos um método cumprimentar() ao protótipo da função construtora Pessoa, que imprime uma mensagem de saudação na tela. Finalmente, criamos um novo objeto pessoa1 usando a função construtora Pessoa e chamamos o método cumprimentar() no objeto pessoa1.


#anotações

Funções em JavaScript são tratadas como cidadãos de primeira classe (ou First Class Citizens), o que significa que elas podem ser armazenadas em variáveis, passadas como argumentos para outras funções e retornadas como valores de outras funções.

Uma função que recebe outra função como argumento ou retorna uma função é chamada de Higher Order Function (HOF). HOFs são uma parte importante da programação funcional em JavaScript e são usados ​​para simplificar o código, torná-lo mais legível e reutilizável.

Existem duas formas principais de definir funções em JavaScript: Function Declaration e Function Expression. Function Declaration define uma função como uma declaração separada e pode ser chamada antes da sua declaração no código. Function Expression define uma função como uma expressão dentro de outra instrução, como uma atribuição de variável.

A manipulação de listas em JavaScript pode ser feita usando funções de array de ordem superior, como map, filter e reduce. O método map percorre uma lista e cria uma nova lista transformando cada elemento com uma função passada como argumento. O método filter cria uma nova lista de elementos que atendem a uma determinada condição especificada por uma função. O método reduce combina todos os elementos de uma lista em um único valor, geralmente com uma função que acumula os resultados.

Em resumo, funções de ordem superior e manipulação de listas com funções são recursos poderosos do JavaScript que ajudam a tornar o código mais legível, reutilizável e expressivo.


``` Enjoy!®️ ```

<img src="https://cameronmcefee.com/img/work/the-octocat/walk-1.gif" width="50"><img src="https://cameronmcefee.com/img/work/the-octocat/walk-2.gif" width="50"><img src="https://cameronmcefee.com/img/work/the-octocat/walk-3.gif" width="50">