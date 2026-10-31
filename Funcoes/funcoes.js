// // // // // // // // // function nomeDaFuncao() {
// // // // // // // // //     console.log("Bom dia!")
// // // // // // // // //     console.log("Boa tarde!")
// // // // // // // // //     console.log("Boa noite")
// // // // // // // // //     console.log("_________")
// // // // // // // // // }

// // // // // // // // // nomeDaFuncao()

// // // // // // // // function boasVindas() {
// // // // // // // //     console.log("Seja bem-vindo ao JS")
// // // // // // // // }

// // // // // // // // boasVindas()

// // // // // // // // function dizerOla() {
// // // // // // // //     console.log("Olá!!")
// // // // // // // // }

// // // // // // // // dizerOla()

// // // // // // // function mostrarCurso() {
// // // // // // //     console.log("Curso: Desenvolvimento Web com JavaScript")
// // // // // // // }

// // // // // // // mostrarCurso()

// // // // // // function fazerSuco(sabor){
// // // // // //     console.log(`Fazendo suco de ${sabor}`)
// // // // // // }

// // // // // // fazerSuco("Laranja")
// // // // // // fazerSuco("Uva")
// // // // // // fazerSuco("Limão")

// // // // // function somar(n1, n2) {
// // // // //     let resultado = n1 + n2
// // // // //     console.log(`${n1} + ${n2} = ${resultado}`)
// // // // // }

// // // // // somar(10, 20)
// // // // // somar(50, 70)

// // // // // function saudarPessoa(nome) {
// // // // //     console.log(`Olá, ${nome}! Seja bem-vindo(a)!`)
// // // // // }

// // // // // saudarPessoa("David")

// // // // function  dobro(numero) {
// // // //     let num = numero * 2
// // // //     console.log(`O dobro de ${numero} é: ${num}`)
// // // // }
// // // // dobro(15, 30)

// // // function nomeDaFuncao(){
// // //     return result
// // // 

// // function dobrar(n){
// //    return n * 2
// // }

// // let result = dobrar(3)
// // console.log(result)



// // function quadrado(n) {
// //   return n ** 2;
// // }
// // console.log(quadrado(5));

// // function triplo(numero){
// //     // return numero * 3
// // }
// // console.log(`O triplo do valor é ${triplo(3)}`)

// function nomeCompleto(nome, sobrenome){
//         return nome + " " + sobrenome
// }

// let result = nomeCompleto("David","Santos")
// console.log(result)

function celciusParaFahrenheit(celsius) {
    let temperatura = celsius * 1.8 + 32;
    return temperatura;
}

let resultado = celciusParaFahrenheit(37)
console.log(resultado.toFixed(2))

