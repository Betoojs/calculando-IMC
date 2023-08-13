const pesoUsuario = document.getElementById('inputPeso')
const alturaUsuario = document.getElementById('inputAltura')
const exibir = document.getElementById('resultado')
const exibirNumero = document.getElementById('numerosImc')

function iniciarCalculo() {
    if (pesoUsuario.value === "" && alturaUsuario.value === "") {
        document.getElementById("erroPeso").style.display = "block";
        document.getElementById("erroAltura").style.display = "block";
    } else if (alturaUsuario === "") {
        document.getElementById("erroAltura").style.display = "none";
    } else if (pesoUsuario.value === "") {
        document.getElementById("erroPeso").style.display = "none";
    } else if (pesoUsuario.value !== "" && pesoUsuario.value !== "") {
        exibirResultado()
    }
}

function exibirResultado() {

    let imc = parseFloat(pesoUsuario.value.replace(",", ".")) / (parseFloat(alturaUsuario.value.replace(",", ".")) * parseFloat(alturaUsuario.value.replace(",", ".")))

    if (imc < 18.5) {
        exibir.innerHTML = `Estado: magreza seu resultado foi`
        exibirNumero.innerHTML = imc.toFixed(1)
    } else if (imc >= 18.5 && imc <= 24.9) {
        exibir.innerHTML = `Estado: normal seu resultado foi`
        exibirNumero.innerHTML = imc.toFixed(1)
    } else if (imc >= 25 && imc <= 29.9) {
        exibir.innerHTML = `Estado: Sobrepeso seu resultado foi`
        exibirNumero.innerHTML = imc.toFixed(1)
    } else if (i >= 30 && imc <= 34.9) {
        exibir.innerHTML = `Estado: Obesidade grau I seu resultado foi`
        exibirNumero.innerHTML = imc.toFixed(1)
    } else if (imc >= 35 && imc <= 40) {
        exibir.innerHTML = `Estado: Obesidade grau II seu resultado foi`
        exibirNumero.innerHTML = imc.toFixed(1)
    } else if (imc > 40) {
        exibir.innerHTML = `Estado: Obesidade grau III seu resultado foi `
        exibirNumero.innerHTML = imc.toFixed(1)
    } else {
        exibir.innerHTML = 'voce digitou um valor invalido'
    }

}


const btnLimpar = document.getElementById('btnLimpar')
btnLimpar.addEventListener('click', function limpar () {
    pesoUsuario.value = ""
    alturaUsuario.value = ""
    exibir.innerHTML = ""
    exibirNumero.innerHTML = ""
})















