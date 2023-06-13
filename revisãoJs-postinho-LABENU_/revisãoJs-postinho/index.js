
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
// console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return  `No comparador de igualdade  ${a}===${b} é ${a === b}`
}
// console.log(checarIgualdade(1, 2));

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {
    return `No comparador de maior igual ${b} > ${a} é ${b > a}`
}


// console.log(verificaSeEMaior(321, 2156));



















// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=
// b-) 1=='1'=
// c-) 'a'==='b'=
// d-) 'b'>'a'=
// e-) 0!==null=

// console.log(`resposta da A: ${1==='1'} false\n
// B: ${ 1=='1'} true\n
// C: ${'a'==='b'} false\n
// D: ${'b'>'a'} false - Não faz sentido, não tem valores declarados.\n
// E: ${0!==null} true`);



























// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------


// Escreva uma função que receba do usuário **nomeDoUsario**, **anoDeNascimento**,
// **senhaDoUsuario** e **nacionalidade** e ****guarde essas informações dentro de
// um array `usuarios`. Porém só poderão se cadastrar:

// - Usuários maiores de 18 anos
// - A senha deve ter no mínimo 6 caracteres
// - E que a nacionalidade seja brasileira.


    
    

// const cadastro = () => {

//     let usuario = `Rafael`
//     let nascimento = 1997
//     let senha = `Rafael1997`
//     let nacionalidade = `Brasileiro`
//     let idade = 2023 - nascimento


//     const usuarioNovo = []

//     if(idade >= 18 && senha.length > 6 && nacionalidade === `Brasileiro`){
//         usuarioNovo.push(usuario, nascimento, senha, nacionalidade)
//         return `Pode se cadastrar`
        
//     }
//         return `Não pode se cadastrar, faltando dados.`   
// }
// // console.log(cadastro())
// cadastro()


//outraForma

    
// let usuario = `Rafael`
// let nascimento = 1997
// let senha = `0Rafael`
// let nacionalidade = `Brasileiro`
// let idade = 2023 - nascimento

// const arrayDeFora = [usuario, nascimento, senha, nacionalidade, idade]



// const cadastro = () => {
// const usuarioNovo = []

// if(arrayDeFora[4] >= 18 && arrayDeFora[2].length > 6 && arrayDeFora[3] === `Brasileiro`){
//     usuarioNovo.push(arrayDeFora[0], arrayDeFora[1], arrayDeFora[2], arrayDeFora[3], arrayDeFora[4])
//     console.log(`Pode se cadastrar`);
// }else{
//     console.log(`Não pode se cadastrar, faltando dados.`);
// }  
// }
// cadastro()



























// Exercício 4-----------------------------------------------------------------------------------------------

// let senhaDeFora = `Labenu`

// const login = (senhaUsuario) => {
//     const login = `Labenu`
//     if (senhaUsuario  === login){
//         return `Usúario logado`
//     }else{
//         return `Senha inválida`
//     }
// }

// console.log(login(senhaDeFora));

































// Exercício 5----------------------------------------------------------------------------------------------------


// - Coronavac = 28 dias
// - Astrazenica = 90 dias
// - Pfizer = 90 dias

// let nomeUsuarioDeFora = `Yasmim`
// let nomeDaVacina1 = `Coronavac`
// let nomeDaVacina2 = `Astrazenica`
// let nomeDaVacina3 = `Pfizer`


// const primeiraDose = (nomeUsuario, vacinaQueTomou) => {
    
//     if(vacinaQueTomou === `Coronavac`){
//         let dataFixa = 1
//         let tempo = 28
//         let data = `${dataFixa + tempo} / 04 /2023`
//         return `Data de hoje: 01/04/2023.\n Olá ${nomeUsuario}! A próxima dose 
// da ${vacinaQueTomou} é daqui a ${tempo} dias.\n 
// Compareça no posto na data ${data}.`

//     } else if(vacinaQueTomou === `Astrazenica`){
//         let dataFixa = 1
//         let tempo = 90
//         let data = `${Math.floor((dataFixa + tempo) / 3)}/07/2023`
//         return `Data de hoje: 01/04/2023.\n Olá ${nomeUsuario}! A próxima dose 
// da ${vacinaQueTomou} é daqui a ${tempo} dias.\n 
// Compareça no posto na data ${data}.` 

//     }else if(vacinaQueTomou === `Pfizer`){
//         let dataFixa = 1
//         let tempo = 90
//         let data = `${Math.floor((dataFixa + tempo) / 3)}/07/2023`
//         return `Data de hoje: 01/04/2023.\n Olá ${nomeUsuario}! A próxima dose 
// da ${vacinaQueTomou} é daqui a ${tempo} dias.\n 
// Compareça no posto na data ${data}.` 

//     } else{ 
//         //criei essa condicao para simular uma pessoa que digite o nome ou a vacina de forma incorreta.
//         return `Infelizente não identificamos seu nome ${nomeUsuario} ou sua vacina ${vacinaQueTomou} no nosso sistema de cadastro`

//     }
    


// }
// console.log(primeiraDose(nomeUsuarioDeFora, nomeDaVacina3))





































// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
// const filter = usuarios.filter((imunizado)=>{ 
//     return imunizado.nome === nomeDoUsuario && imunizado.imunizacao === `incompleta`

// }).map((imunizado)=>{
//     return {...imunizado, imunizacao: `completa`}
// })
// return filter
    


// }
// console.log(segundaDose("Barbara"));








































// Exercício 7 --------------------------------------------------------------------------------------



//forma 1


// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     for( let i of usuarios){
//         if( i.imunizacao === `incompleta`){
//             console.log(`Olá ${i.nome}! Sua imunização está ${i.imunizacao}, 
// por favor volte ao postinho para tomar a segunda dose.`)
//         } else{
//             console.log(`Olá ${i.nome}! Sua imunização está ${i.imunizacao},
// muito obrigado por ajudar a si mesmo e a todos.`)
//         }
//     }
  
// }
// avisoAosAtrasados()








//forma 2


// const avisoAosAtrasados1 = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     for(let i = 0; i< usuarios.length; i++){
//         if(usuarios[i].imunizacao === `incompleta`){
       
//             console.log(`Olá ${usuarios[i].nome}! Sua imunização está
// ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
    
//         }else{

//             console.log(`Olá ${usuarios[i].nome}! Sua imunização está
//     ${usuarios[i].imunizacao}, muito obrigado por ajudar a si mesmo e a todos.`)

//         }
//     }
  
// }
// avisoAosAtrasados1()


//forma 3


// const avisoAosAtrasados1 = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ];

//     let i = 0
//     while( i < usuarios.length){
//         if(usuarios[i].imunizacao === `incompleta`){
//            console.log(`Olá ${usuarios[i].nome}! Sua imunização está
// ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`);     
//         }else{
//             console.log(`Olá ${usuarios[i].nome}! Sua imunização está
// ${usuarios[i].imunizacao}, muito obrigado por ajudar a si mesmo e a todos.`)
//         }
//     i++
//     }
// }
// avisoAosAtrasados1()








































// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "Pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "Astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "Coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    
    let usuario = `Rafael`
    let nascimento = 1997
    let senha = `Rafael1997`
    let nacionalidade = `Brasileiro`
    let idade = 2023 - nascimento


    // const usuarioNovo = []

    if(idade >= 18 && senha.length > 6 && nacionalidade === `Brasileiro`){
        usuarios.push({nome: usuario, ano: nascimento, senha: senha, nacionalidade: nacionalidade})
        return `Pode se cadastrar`
        
    }
        return `Não pode se cadastrar, faltando dados.` 

}
// console.log(cadastro());
// console.log(usuarios)



//===================================================================


// let senhaDeFora = `labenu`

const login = (senhaArmazenada) => {
    
        const loginSenhaCorreta = `labenu`
        if (senhaArmazenada === loginSenhaCorreta){
            return `Usúario logado`
        }else{
            return `Senha inválida`
        }
    
    
    // console.log(login(senhaDeFora));
}
// console.log(login(usuarios[0].senha));
// console.log(login(usuarios[1].senha));
// console.log(login(usuarios[2].senha));


//===================================================================


    usuarios.map((mudando) => { mudando.imunizacao = `incompleta`; return mudando})

    const primeiraDose = (nomeUsuario, vacinaQueTomou, imunizacaoTotal) => {
    
        if(vacinaQueTomou === `Coronavac`){
            let dataFixa = 1
            let tempo = 28
            let data = `${dataFixa + tempo}/04/2023`
            return `Data de hoje: 01/04/2023.\n Olá ${nomeUsuario}! A próxima dose 
    da ${vacinaQueTomou} é daqui a ${tempo} dias.\n 
    Compareça no posto na data ${data}. A sua imunização se encontra ${imunizacaoTotal}`
    
        } else if(vacinaQueTomou === `Astrazenica`){
            // usuarios.map((mudando) => { mudando.imunizacao = `incompleta`; return mudando})
            let dataFixa = 1
            let tempo = 90
            let data = `${Math.floor((dataFixa + tempo) / 3)}/07/2023`
            return `Data de hoje: 01/04/2023.\n Olá ${nomeUsuario}! A próxima dose 
    da ${vacinaQueTomou} é daqui a ${tempo} dias.\n 
    Compareça no posto na data ${data}.  A sua imunização se encontra ${imunizacaoTotal}` 
    
        }else if(vacinaQueTomou === `Pfizer`){
            let dataFixa = 1
            let tempo = 90
            let data = `${Math.floor((dataFixa + tempo) / 3)}/07/2023`
            return `Data de hoje: 01/04/2023.\n Olá ${nomeUsuario}! A próxima dose 
    da ${vacinaQueTomou} é daqui a ${tempo} dias.\n 
    Compareça no posto na data ${data}.  A sua imunização se encontra ${imunizacaoTotal}` 
    
        } else{ 
            //criei essa condicao para simular uma pessoa que digite o nome ou a vacina de forma incorreta.
            return `Infelizente não identificamos seu cadastro ${nomeUsuario} ou sua vacina ${vacinaQueTomou} no nosso sistema de cadastro`
    
        }
        
    
    
    }
    // console.log(primeiraDose(usuarios[0].nome, usuarios[0].vacina, usuarios[0].imunizacao))
    // console.log(primeiraDose(usuarios[1].nome, usuarios[1].vacina, usuarios[1].imunizacao))
    // console.log(primeiraDose(usuarios[2].nome, usuarios[2].vacina, usuarios[2].imunizacao))






//===================================================================





    const segundaDose = (nomeDoUsuario) => {
        
    const filter = usuarios.filter((imunizado)=>{ 
        return imunizado.nome === nomeDoUsuario && imunizado.imunizacao === `incompleta`
    
    }).map((imunizado)=>{
        return {...imunizado, imunizacao: `completa`}
    })
    return filter
        
    
    
    }
    
// console.log(segundaDose(usuarios.nome = `Artur`));
// console.log(segundaDose(usuarios.nome = `Rafael`));
// console.log(segundaDose(usuarios.nome = `Carlos`));
// console.log(segundaDose(usuarios.nome = `Bárbara`));
// console.log(segundaDose(usuarios[1].nome));










//===================================================================




const avisoAosAtrasados = (facilitando) => {

      

        for(let i = 0; i< usuarios.length; i++){
            if(facilitando.imunizacao === `incompleta`){
           
                return `Olá ${facilitando.nome}! Sua imunização está
    ${facilitando.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
        
            }else{
    
                return `Olá ${facilitando.nome}! Sua imunização está
        ${facilitando.imunizacao}, muito obrigado por ajudar a si mesmo e a todos.`
    
            }
        }
      
}
console.log(avisoAosAtrasados(usuarios[0]));
console.log(avisoAosAtrasados(usuarios[1]));
console.log(avisoAosAtrasados(usuarios[2]));

// console.log(avisoAosAtrasados())