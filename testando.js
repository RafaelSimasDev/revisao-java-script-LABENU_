//======================================================
//variaveis


//01

// let nome = prompt(`Digite seu nome:`)
// console.log(nome);

// let preco = Number(prompt(`Digite o valor:`))
// console.log(preco);

// let novoPreco = preco - 1
// console.log(novoPreco);





//======================================================
//operadores aritmeticos


//02

// let num1 = Number(prompt(`Digite um número`))

// let num2 = Number(prompt(`Digite um número`))

// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);





//======================================================
//comparadores

//03


// function sortearNumero () {
//     let min = 1
//     let max = 10
//     return Math.floor(Math.random() * 10 ) + 1
// }
// console.log(sortearNumero())

// let num = sortearNumero()


// let usuario = Number(prompt(`Digite um número`))

//     if(usuario === num){
//         console.log(`igual`);
//     }else if(usuario > num){
//         console.log(`maior`);
//     }else {
//         console.log(`menor`);
//     }      
    



//======================================================
//operadores logicos


//04

// let idade = 26
// let altura = 170
// let saudePositiva = true

// if(idade >= 18 && altura >= 160 && saudePositiva === true){
//     console.log(`Pode entrar no parque.`);
// }else {
//     console.log(`Infelizmente não pode entrar no parque.`);
// }




//======================================================
//strings


//05

// let frase = `   Hoje vou comer cenoura, ebaaa    `

// console.log(frase.length);

// console.log(frase.trim());

// console.log(frase.toLowerCase());

// console.log(frase.toUpperCase());

// console.log(frase.includes(`comer`));

// console.log(frase.includes(`batata`));

// let novaFrase = frase.replaceAll(`cenoura`, `batata`)
// console.log(novaFrase);

// console.log(novaFrase.includes(`comer`));

// console.log(novaFrase.includes(`batata`));




//======================================================
//arrays


//06

// let lista = [`batata`, `cenoura`, `beterraba`]

// console.log(lista[1]);
// console.log(lista.length);

// let adicionando = lista.push(`mandioca`)

// console.log(lista);

// console.log(lista.includes(`cenoura`));

// let removendo = lista.splice(1, 1)

// console.log(lista);




//======================================================
//funcoes


//07

// let colecao = [12, 2, 3, 4 ,5, 6, 7, 30]

// const revisao = (arrayDeFora) => {
//     let array = []
    
//         array.push((arrayDeFora[arrayDeFora.length-1] +  arrayDeFora[0])/2)
        
    
//    return array  
// }
// console.log(revisao(colecao))


//======================================================
//objetos



//08

// let robo = {
//     nome: `Zeta`,
//     idade: 26,
//     generoMusical: `rock nacional - clássico`
// }
// console.log(`O nome da pessoa é ${robo.nome}, ela(e) têm ${robo.idade} anos e gosta muito
// de ${robo.generoMusical}.`);


// let novoRobo = {
//     ...robo, nome: `Simas`, altura: `280 cm`
// }

// console.log(`O nome da pessoa é ${novoRobo.nome}, ela(e) têm ${novoRobo.idade} anos e gosta muito
// de ${novoRobo.generoMusical}. Sua altura agora é ${novoRobo.altura}.`);




//======================================================
//condicionais



//09


// let numeroDoUsuario = 12

// if(numeroDoUsuario % 2 === 0){
//     console.log(`O número ${numeroDoUsuario} é par.`);
// }else{
//     console.log(`O número ${numeroDoUsuario} é ímpar.`);
// }


//10



// let animal1 = `Cachorro`

// if(animal1 === `Gato`){
//    console.log(`Miau`)
// } else if (animal1 === `Vaca`){
//    console.log(`Muuu`)
// } else if (animal1 === `Cachorro`){
//    console.log(`Au au`)
// } else {
//    console.log(`Sem barulho reconhecido`)
// }

// //======

// let animal = `Zebra`

// switch(animal){
//     case `gato`:
//         console.log(`Miau`);
//         break
//     case `Vaca`:
//         console.log(`Muuu`);
//         break
//     case `Cachorro`:
//         console.log(`Au au`);
//         break
//     default:
//         console.log(`Sem barulho reconhecido`);
//         break
// }


















