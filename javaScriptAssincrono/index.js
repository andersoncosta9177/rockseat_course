// function ImprimirDado(dado){
//     console.log(dado)

// }

// ImprimirDado("Anderson")
// ImprimirDado(1123)
// ImprimirDado(true)
// ImprimirDado([1,2,3,4])

// setTimeout(function(){
//     console.log("Iniciou")
// },3000)

// setTimeout(function(){
//     console.log("Iniciando")
// },2000)

// const https = require('https')
// const api = 'https://jsonplaceholder.typicode.com/users?_limit=2'

// https.get(api, res =>{
//     console.error(res.statusCode)

// })

// primisses

// let aceitar = true;
// console.log("Pedir uber");

// const promessa = new Promise((resolve, reject) => {
//   if (aceitar) {
//     return resolve("Pedido aceito");
//   } else {
//     return reject("Pedido negado");
//   }
// });

// console.log("Aguardando...");

// promessa
//   .then((result) => console.log(result))
//   .catch((erro) => console.log(erro))
//   .finally(() => console.log("Finalizado"));



// import axios  from 'axios'

// axios.get('https://api.github.com/users/andersoncosta')
// .then(response =>axios.get(response.data.repos_url))
// .then(repos =>console.log(repos.data))
// .catch( error => console.log(error))


// Promise.all([
// axios.get('https://api.github.com/users/andersoncosta'),
// axios.get('https://api.github.com/users/andersoncosta')

// ]).then( response =>{
//     console.log(response[0].data.login)
//     console.log(response[1].data.lenght)

// }).catch( err =>console.log(err.message))


// async await 

// async function start(){
//   try {
//     const result = await promessa 
//     console.log(result)
//   } catch (error) {
//     console.log(error)
//   }finally{
//     console.log('Codar sempre')
//   }
// }
// start()

