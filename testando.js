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





//======================================================
//lacos



//11



//while

let numeros1 = [11, 15, 18, 14, 12, 13]

let i = 0
let maiorNumero = numeros1[0]

while( i < numeros1.length){
    if(numeros1[i]> maiorNumero){
        maiorNumero = numeros1[i]
    }
    i++
}
// console.log(`O maior número é: ${maiorNumero}.`);



//for 

let numeros2 = [11, 15, 18, 14, 12, 13]
let maiorNumero2 = numeros2[0]

for(let i = 0; i< numeros2.length; i++){
    if( numeros2[i] > maiorNumero2){
        maiorNumero2 = numeros2[i]
    }
}
// console.log(`O maior número é: ${maiorNumero2}.`);




//for of

let numeros3 = [11, 15, 18, 14, 12, 13, 309]
let maiorNumero3 = numeros3[0]

for(let i of numeros3){
    if(i > maiorNumero3){
        maiorNumero3 = i
    }
}
// console.log(`O maior número é: ${maiorNumero3}.`);



//12


const prof = {
    nome: `Leticia Chijo`,
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: [`opcao1`, `opcao2`, `opcao3`],
    // contaPiada: () => console.log(`É pave ou pacume?`),

    //acrescentei o return
    contaPiada: () => {return `É pave ou pacume?`},


    pet: {
        nome: `Polly`,
        especie: `cachorrinha`, 
        raca: `pitbull`,
        comidasFavoritas: [`biscoito`, `maçã`, `frango`]
    }
}

//forma1 de fazer a funcao

// let aulasBack = prof.aulasBack
// let aulasFront = prof.aulasFront

// if(aulasBack){
//     aulasBack = `Dou`
// }else{
//     aulasBack = `Não dou`
// }


// if(aulasFront){
//     aulasFront = `Dou`
// }else{
//     aulasFront = `Não dou`
// }



//forma2 de fazer a funcao

const verifica = (aula) => {
    if(aula){
        return `Dou`
    }else{
        return `Não dou`
    }
}
let aulasBack = verifica(prof.aulasBack)
let aulasFront = verifica(prof.aulasFront)


//outra questao

const jogos = []

for( let i = 0; i<prof.jogosFavoritos.length; i++){
    jogos.push (`${i+1} ${prof.jogosFavoritos[i]}\n`)
}
// console.log(jogos);

//----------------------


// console.log(`Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.\n
// ${aulasFront} aula de front e ${aulasBack} aula de back.\n

// Meus jogos favoritos são:\n

// ${jogos.join(`\n`)}

// Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.comidasFavoritas[1]}.`);

// console.log(`Uma piada para vocês já que estão insistindo muito. ${prof.contaPiada()}`);



//======================================================
//map() && filter()



//13

const pokemons = [
    {nome: `Bulbasaur`, tipo: `grama`},
    {nome: `Bellsprout`, tipo: `grama`},
    {nome: `Charmander`, tipo: `fogo`},
    {nome: `Vulpix`, tipo: `fogo`},
    {nome: `Squirtle`, tipo: `água`},
    {nome: `Psyduck`, tipo: `água`},
]

const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
    return pokemon.nome
})

const apenasPokemonsDeGrama = pokemons.filter((pokemon, indice, array) => {
    return pokemon.tipo === `grama`
})


// console.log(nomeDosPokemons);
// console.log(apenasPokemonsDeGrama);




//Questao de hoje

const produtos = [
    { nome: `Alface Lavada`, categoria: `Hortifruti`, preco: 2.5},
    { nome: `Guaraná 2L`, categoria: `Bebidas`, preco: 7.8},
    { nome: `Veja multiuso`, categoria: `Limpeza`, preco: 5.7},
    { nome: `Banana`, categoria: `Hortifruti`, preco: 3.5},
    { nome: `Guaravita`, categoria: `Bebidas`, preco: 4},
    { nome: `Cloro 2L`, categoria: `Limpeza`, preco: 6.5}

]


//01
//retorne um novo array com todos os produtos porém com 10% de desconto no preço
const questaoUm = produtos.map((desconto) => {
    return { ...desconto, preco: (desconto.preco - ( desconto.preco * 0.1))}
 }
)
// console.log(questaoUm);




//02
//retorne um novo array apenas com os itens da categoria hortifruti
const questaoDois = produtos.filter((horti) => {
    return horti.categoria === `Hortifruti`
 }
)
// console.log(questaoDois);




//03
//retorne um array apenas com os itens de hortifruti e com 10% de desconto no preço




const questaoQuatro = produtos.filter((horti) => {
    return horti.categoria === `Hortifruti` 
}).map((horti) => {
    return { ...horti, preco: (horti.preco - (horti.preco * 0.1))}
})
// console.log(questaoQuatro);
