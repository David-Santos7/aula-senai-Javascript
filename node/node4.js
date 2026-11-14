const prompt = require("prompt-sync")()
const preco = Number(prompt("Digite o valor: "))
const quantidade = Number(prompt("Digite a quantidade: "))
const subtotal = preco * quantidade
const frete = ( subtotal * 10) / 100

const total = subtotal + frete

console.log(`Sua compra ficará ${total.toFixed(2)}R$`)