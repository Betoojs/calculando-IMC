const pesoUsuario = document.getElementById('inputPeso')
const alturaUsuario = document.getElementById('inputAltura')
let imc = 0;

function iniciarCalculo() {
    if (pesoUsuario.value === "") {
        document.getElementById("erroPeso").style.display = "block";
    } else if (alturaUsuario.value === "") {
        document.getElementById("erroAltura").style.display = "block";
    } else {
        calcularImc()
    }
}


function calcularImc() {
    imc = parseInt(pesoUsuario.value) / parseInt(alturaUsuario.value) * parseInt(alturaUsuario.value);
    exibirResultado()
}


console.log(imc)

function exibirResultado() {
    if (imc < 18.5) {
        alert(`Estado: Magreza seu resultado foi ${imc} `)
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert(`Estado: Peso normal*seu resultado foi ${imc} `)
    } else if (imc >= 25 && imc <= 29.9) {
        alert(`Estado: Sobrepeso seu resultado foi ${imc} `)
    } else if (i >= 30 && imc <= 34.9) {
        alert(`Estado: Obesidade grau I seu resultado foi ${imc} `)
    } else if (imc >= 35 && imc <= 40) {
        alert(`Estado: Obesidade grau II seu resultado foi ${peso, altura} `)
    } else if (imc > 40) {
        alert(`Estado: Obesidade grau III seu resultado foi ${peso, altura} `)
    } else {
        alert('voce digitou um valor invalido')
    }

}















