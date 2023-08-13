const pesoUsuario = document.getElementById('inputPeso')
const alturaUsuario = document.getElementById('inputAltura')

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

        let imc = parseFloat(pesoUsuario.value) / (parseFloat(alturaUsuario.value) * parseFloat(alturaUsuario.value))

        if (imc < 18.5) {
            alert(`Estado: Magreza seu resultado foi ${imc . toFixed(1)} `)
        } else if (imc >= 18.5 && imc <= 24.9) {
            alert(`Estado: Peso normal*seu resultado foi ${imc . toFixed(1)} `)
        } else if (imc >= 25 && imc <= 29.9) {
            alert(`Estado: Sobrepeso seu resultado foi ${imc . toFixed(1)} `)
        } else if (i >= 30 && imc <= 34.9) {
            alert(`Estado: Obesidade grau I seu resultado foi ${imc . toFixed(1)} `)
        } else if (imc >= 35 && imc <= 40) {
            alert(`Estado: Obesidade grau II seu resultado foi ${imc . toFixed(1)} `)
        } else if (imc > 40) {
            alert(`Estado: Obesidade grau III seu resultado foi ${imc . toFixed(1)} `)
        } else {
            alert('voce digitou um valor invalido')
        }

    }















