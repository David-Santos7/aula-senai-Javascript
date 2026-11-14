const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = frm.inNome.value


const nota01 = Number(frm.nota1.value)
const nota02 = Number(frm.nota2.value)
const media = (nota01 + nota02) / 2
resp1.innerText = `Média das notas ${media.toFixed(2)}`

if (media >= 7) {
    resp2.innerText = `Parabéns${nome}! Você foi aprovado(a)`
    resp2.style.color = "blue"
} else if (media >= 4){
    resp2.innerText = `Atenção ${nome}! Você está de recuperação`
    resp2;style.colo = "yellow"
    } else {
    resp2.innerText = `Ops ${nome}... Você foi reprovado(a).`
    resp2.style.color = "red"
}
})