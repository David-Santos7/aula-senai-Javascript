const prompt = require("prompt-sync")()
const pesoKg = Number(prompt("Peso da ração: "))
const consumoPorDia = Number(prompt("Consumo por dia: "))
const pesoGr = pesoKg * 1000
const duracao = Math.floor(pesoGr / consumoPorDia)
const sobra = pesoGr % consumoPorDia
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)