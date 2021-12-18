function results() {
    var tempFirst = document.getElementById('tempInit').value
    var calorEspecifico = document.getElementById('calorEspecifico').value
    var tempSecondary = document.getElementById('tempFinal').value
    var massa = document.getElementById('massa').value

    var calor = parseFloat(massa) * parseFloat(calorEspecifico) * (parseFloat(tempSecondary) - parseFloat(tempFirst))
    var result = document.getElementById('result')
    result.value = calor
}