function calcularCuadrado() {
    var numeroCuadrado = document.getElementById('numeroCuadrado').value
    var resultadoPerimetro = document.getElementById('resultadoPerimetro')
    var resultadoArea = document.getElementById('resultadoArea')

    if (numeroCuadrado == '' || numeroCuadrado == 0 || numeroCuadrado < 0) {
        alert('No se puede hacer la operación.')
    } else {

        var perimetro = numeroCuadrado * 4;
        var area = numeroCuadrado * numeroCuadrado;

        resultadoPerimetro.innerHTML = `El perimetro de este cuadrado es: ${perimetro}`
        resultadoArea.innerHTML = `El area de este cuadrado es: ${area}`
    }
}
