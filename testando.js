Tem 2 vscode aberto.

1- para servir de visualizacao


2- para codar



const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


//questao 1

const caixaAlta = (objeto) => {
    let novoObjeto = {}
    for (let i in objeto){      // o "i" é o índice do objeto
        novoObjeto[i] = objeto[i].toUpperCase()

        //eu acesso o novo objeto na posicao inicial = transformo a 
        //posicao inicial do meu objeto antigo em CAIXA ALTA
    }
    return novoObjeto
}   
console.log(caixaAlta(infosPessoa))


//questao 2

//Saída esperada:

//`O valor da propriedade ${propriedade} é ${valor}.`

const questaoDois = (objeto) => {
    let textoCorrido = `` 
      //transformo a variavel em uma string
    for( let i in objeto){  //for in percorre toda a propriedade do objeto

        let valor = objeto[i]  //crio uma variavel para armazenar as informacoes
        let propriedade = [i]  //"i" = propriedade, ou parte inicial && objeto[i] = valor, vem depois da propriedade.
        textoCorrido += `O valor da propriedade ${propriedade} é ${valor}.`
    }
    return textoCorrido
}
console.log(questaoDois(infosPessoa));



//ou assim

// const questaoDois = (objeto) => {
//     let textoCorrido = `` 
//       //transformo a variavel em uma string
//     for( let i in objeto){  //for in percorre toda a propriedade do objeto
        
//         textoCorrido += `O valor da propriedade ${i} é ${objeto[i]}.`
//     }
//     return textoCorrido
// }
// console.log(questaoDois(infosPessoa));



//Questao 3
//3. Agora, crie uma funcão que recebe um objeto e uma callback
//como parâmetros. A funcão principal deve passar o objeto como 
//argumento da funcão de callback, e em seguida imprimir o valor retornado.

const funcaoCall = () => {
    let timesRj = {
    time1 : `Flamengo`,
    time2 : `Vasco`,
    time3 : `Fluminense`,
    time4 : `Botafogo`
    }
    return timesRj
}

// console.log(funcaoCall(novoObjeto))



const exercicio3 = (novoObjeto, callbackFake) => {

    const gaveta = callbackFake(novoObjeto)
    return gaveta
}
console.log(exercicio3(infosPessoa, funcaoCall))
console.log(exercicio3(infosPessoa, caixaAlta))
console.log(exercicio3(infosPessoa, questaoDois))