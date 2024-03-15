// console.log("ola! Bem vindos ao starter")

// Curso de javascript da rockseat school

// tipos de dados em javascript

// let nome = "Anderson"
// let sobrenome = ' miguel costa';
// let nomeCompleto = nome  +  sobrenome
// console.log(nomeCompleto)
// console.log(`Bem vindo,  ${nomeCompleto}`)

// numbers

// console.log(12.5 / 4)

// var NumberFloat = 12.45;
// var numerInt = 13;
// var numberNegative = - 232;

// undefined = indefinido;
// null => nulo , objeto que nao possui nada dentro
// diferente de indfefinido

// objeto em javascript

// let person = {
//     name: 'Anderson',
//     sobrenome: 'Costa',

//     andar: function(){
//         console.log('andar')
//     }
// }

// person.andar()

// let array = [1,2,3,4,5,6,7,8,9,10]
// let peoples =['anderson', 'Augusto', 'Marcos', 'Adriana']
// console.log(array)
// console.log(peoples)

// tipos primitivos em js
// String
// Number
// Boolean
// undefined
// Symbol
// BigInt

//  escopo  de variaves
// let x = 1
// {
//     let x = 0
//     console.log(x)
// }
// console.log(x)

// const x = 1
// {
//     const x = 0
//     console.log(x)
// }
// console.log(x)

// var x = 1
// {
//     var x = 0
//     console.log(x)
// }
// console.log(x)

// const x  = 12;
// x = 15
// console.log(x)  //nao é possivel declarar outro valor na mesma variavel const

// let varivel  = ""
// console.log(typeof varivel)

// let varivel  = false
// console.log(typeof varivel)

// let varivel  = 12
// console.log(typeof varivel)

// let varivel  = null
// console.log(typeof varivel)

// let varivel  = undefined
// console.log(typeof varivel)

// let name = "Anderson miguel costa"
// let age = 20;
// let isHuman = true;

// let name = "Anderson miguel costa"
// let age = 20;
// let isHuman = true;
// console.log(`O ${name} tem ${age} anos`)

// const person =  {
//     name: 'Anderson',
//     age: 23,
//     weight: 1.88,
//     isAdmim: true,

// }
// console.log(`${person.name} tem ${person.age} anos  e ${person.weight} de altura`)

// const animals = [
//     'lion',
//     'monkey',
//     'ox'
// ]

// console.log(animals[2])

//  let weight ;
//  console.log(typeof weight)

//  nome = 'Miguel'
//  age = 13
//  stars =  3.4
//  isSubscribed =  true

// function createphrases(){

//     console.log("A pressa e inimiga da perfeição")
//     console.log("Deus e meu pastor e nada me faltara")
// }

// createphrases()

// const sum = function (n1, n2, n3){
//     return n1 + n2 - n3
// }

// console.log(sum(12,12, 4))

// let  subject = 'createVideo'
// function createSuject(subject){
//     subject = 'study '
//     return subject
// }

// console.log(createSuject(subject))
// console.log(subject)

// sayMyName()

// console.log("ok")
// function sayMyName(){
//     console.log("anderson")
// // }

// sayMyName()

// console.log("ok")
// var  = function(){
//     console.log("anderson")
// }

// function sayMyName(name){
//     console.log(name)
// }

// sayMyName({name: 'anderson'})

// alert("ola mundo, estou vivendo, um dia de cada vez!!!")

//   let nome = prompt("Qual seu nome?")
// //   document.write(`seu nome é ${nome}`)
// alert(`Ola, ${nome}`)

// const n1 = parseInt(prompt('Digite o primeiro numero:'))
// const n2 = parseInt(prompt('Digite o segundo numero:'))

// const res = n1+n2;
// alert(res)

// let student = prompt("Nome do aluno:")
// let n1 = prompt("Nota 1:")
// let n2 = prompt("Nota 2:")
// let n3 = prompt("Nota 3:")

// let average = (Number(n1) + Number(n2)+ Number(n3))

// let result = average > 6

// if(result ){
//     alert("Parabens! " +  student +  " Sua media foi de " + average.toFixed(2))
// }else{
//     alert(student +  "Estude mais")
// }

// let itens = []
// for(let item =0; item < 10; item ++){
//      itemName =  prompt("Digite o item: " +( item  + 1))

//      itens[item - 1] = itemName
// }

// document.write("<hr>" +  itens)

// let result =
//   prompt("Adivinhe o numero que stou pensando: Esta entre 0 e e 10: ");
// let randomNumber = Math.ceil(Math.random() * 10);

// let XAttemps = 1;

// while (Number(result) != randomNumber) {
//   result = prompt(
//     `Errou, tente novamente!`
//   );
//   XAttemps++;
// }

// alert("Parabens, voçe acertou com" + XAttemps + " tentativa(s)!");

// let option = Number(
//   prompt(`OLa usuario, digite a opçao desejada:
//               1: Cadastrar item
//               2. Mostrar itens 
//               3. Sair do programa

// `)
// );

// let itens = [];

// if (option == 1) {
//   itens[0] = prompt("Digite o nome do item");
// } else if (option == 2) {
//   if (itens.length == 0) {
//     alert("Não existem itebns cadastrados!");
//   }else{
//     alert(itens)
//   }
// }else{
//     alert("Terminou o programa")
// }


