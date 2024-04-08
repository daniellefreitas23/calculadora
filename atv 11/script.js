let numero1 = document.querySelector("#num1")
let numero2 = document.querySelector("#num2")

const botao = document.querySelector("div button")
botao.addEventListener(`click`, calcular)

function calcular() {
    let p = document.querySelector(".resul")
    const n1 = Number(numero1.value)
    const n2 = Number(numero2.value)
    p.innerHTML = `a soma de ${n1} + ${n2} é ${n1+n2}`
}
