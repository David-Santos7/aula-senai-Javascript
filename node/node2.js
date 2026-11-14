const prompt = require("prompt-sync")()
const salario = Number(prompt("Salario mensal: "))
const tempo = Number(prompt("Tempo de serviço: "))
const quadrienio = Math.floor (tempo / 4)
const acrescimo = salario * quadrienio / 100

console.log(`Seu salário real é ${(salario+acrescimo).toFixed(2)}R$`)