// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

let arrayNumeroUm = [1, 2, 3, 4, 5]
function retornaTamanhoArray(array) {
   return array.length
}
retornaTamanhoArray(arrayNumeroUm)



// EXERCÍCIO 02

let arrayNumeroDois = [1, 2, 3, 4, 5]

function retornaArrayInvertido(array) {
  return array.reverse()
}
retornaArrayInvertido(arrayNumeroDois)





// EXERCÍCIO 03

// let arrayNumeroTres = [1, 2, 3, 4, 5, 23, 38, 12, 7, 21]

function retornaArrayOrdenado(array) {

        return array.sort((a, b) => a-b)
    // return array.slice().sort(function(a, b) {
    //     return a - b;
    //   });
}
// retornaArrayOrdenado(arrayNumeroTres)






// EXERCÍCIO 04

let arrayNumeroQuatro = [1, 2, 3, 4, 5, 23, 38, 12, 7, 21]

function retornaNumerosPares(array) {
    let novoArray = []
  for(let i = 0; i< array.length; i++){
    if(array[i] % 2 === 0){
        novoArray.push(array[i])
        
    }
  }
  return novoArray
}
retornaNumerosPares(arrayNumeroQuatro)






// EXERCÍCIO 05

let arrayNumeroCinco = [1, 2, 3, 4, 5, 23, 38, 12, 7, 21]

function retornaNumerosParesElevadosADois(array) {
    let novoArray = []
    for(let i = 0; i< array.length; i++){
    if(array[i] % 2 === 0){
         novoArray.push(array[i] ** 2)
            
    }
  }
    return novoArray
}
retornaNumerosPares(arrayNumeroCinco)








// EXERCÍCIO 06

let arrayNumeroSeis= [1, 2, 3, 4, 5, 23, 38, 12, 7, 21]

function retornaMaiorNumero(array) {
  return Math.max(...array)

}
retornaMaiorNumero(arrayNumeroSeis)




// EXERCÍCIO 07

function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objeto = {
        maiorNumero: undefined, 
        maiorDivisivelPorMenor:undefined,
        diferenca:undefined
    }
        
    
    
    if(num1 > num2){
        objeto.maiorNumero = num1
        if(num1 % num2 === 0){
            objeto.maiorDivisivelPorMenor = true
            
            objeto.diferenca = num1 - num2
            
        }else{
            objeto.maiorDivisivelPorMenor = false
            
            objeto.diferenca = num1 - num2
            
        }
    }else if (num2 > num1){
        objeto.maiorNumero = num2
        if(num2 % num1 === 0){
            objeto.maiorDivisivelPorMenor = true
            
            objeto.diferenca = num2 - num1
            
        }else{
            objeto.maiorDivisivelPorMenor = false
            
            objeto.diferenca = num2 - num1
            
        }
    }else {
        objeto.maiorNumero = num1 || num2
        objeto.maiorDivisivelPorMenor = true
        objeto.diferenca = 0
    }
    return objeto


}



// EXERCÍCIO 08

function retornaNPrimeirosPares(n) {   // n = quantidade de numeros pares
    let pares = [];
    let i = 0;
  
    while (pares.length < n) {
      if (i % 2 === 0) {
        pares.push(i);
      }
      i++;
    }
  
    return pares;

}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC && ladoC ===ladoA){
        return `Equilátero`
    } else if(ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return `Escaleno`
    } else{
        return `Isósceles`
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 
    let arrayEmOrdemCrescente = array.sort((a, b) => a-b)
    
    let penultimo = arrayEmOrdemCrescente[arrayEmOrdemCrescente.length -2] //segundo maior
    let segundo = arrayEmOrdemCrescente[1]  //segundo menor
    let novoArray = []

    // let penultimo = array.length -2
    // let segundo = array[1]

 novoArray.push(penultimo, segundo)
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    // let filme = {
    //     nome: 'O Diabo Veste Prada',
    //     ano: 2006,
    //     diretor: 'David Frankel',
    //     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    //  }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
    

}

// EXERCÍCIO 12

// //entrada
// {
// 	nome: "Astrodev",
// 	idade: 25,
// 	email: "astrodev@labenu.com.br",
// 	endereco: "Rua do Futuro, 4"
// }

// // saída
// {
// 	nome: "ANÔNIMO",
// 	idade: 25,
// 	email: "astrodev@labenu.com.br",
// 	endereco: "Rua do Futuro, 4"
// }

function retornaPessoaAnonimizada(pessoa) {
     
    const nova = {...pessoa, nome : `ANÔNIMO` }
    return nova

}
// retornaPessoaAnonimizada(pessoa)

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    

    const teste = pessoas.filter((filtro)=>{return filtro.altura > 1.5 && (filtro.idade > 14 && filtro.idade < 60) })
    
    return teste

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
    const testando = pessoas.filter((filtrando)=>{return filtrando.altura <= 1.5 || filtrando.idade <= 14 || filtrando.idade >= 60 })
    
    return testando



}

// EXERCÍCIO 14

contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },  
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },   
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] }, 
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function retornaContasComSaldoAtualizado(contas) {
    
    for(let i = 0; i < contas.length; i++){
        let somaCompras = 0
    for(let j = 0; j< contas[i].compras.length; j++){
        somaCompras += contas[i].compras[j]
    }
    contas[i].saldoTotal -= somaCompras 
    
    contas[i].compras = []

   }
   
   return contas
   
}
// console.log(retornaContasComSaldoAtualizado(contas))











// EXERCÍCIO 15A


// / EXERCÍCIO 03

// // let arrayNumeroTres = [1, 2, 3, 4, 5, 23, 38, 12, 7, 21]

// function retornaArrayOrdenado(array) {

//         return array.sort((a, b) => a-b)
//     
// }
// // retornaArrayOrdenado(arrayNumeroTres)

consultas = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" }
  ]

function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
    // for(let i=0; i< consultas.length; i++){

    // }
    // return consultas.nome[i].sort((a, b) => a-b)

    return consultas.sort((a, b) => a.nome.localeCompare(b.nome))

}
console.log(retornaArrayOrdenadoAlfabeticamente(consultas))

// EXERCÍCIO 15B



// const consultas = [
//     { nome: "João", dataDaConsulta: "01/10/2021" },
//     { nome: "Pedro", dataDaConsulta: "02/07/2021" },
//     { nome: "Paula", dataDaConsulta: "03/11/2021" },
//     { nome: "Márcia", dataDaConsulta: "04/05/2021" }
//   ];
  
  function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((a, b) => {
      const [diaA, mesA, anoA] = a.dataDaConsulta.split('/');
      const [diaB, mesB, anoB] = b.dataDaConsulta.split('/');
      const dataA = new Date(anoA, mesA - 1, diaA);
      const dataB = new Date(anoB, mesB - 1, diaB);
      return dataA - dataB;
    });
  }
  
//   console.log(retornaArrayOrdenadoPorData(consultas));
  