function calcularCirculo() {
    var numeroCirculo = document.getElementById('numeroCirculo').value
    var resultadoDiametro = document.getElementById('resultadoDiametro')
    var resultadoPerimetro = document.getElementById('resultadoPerimetro')
    var resultadoArea = document.getElementById('resultadoArea')
    var diametroCirculo = numeroCirculo * 2
    var PI = Math.PI
    PI = PI.toFixed(2)
    if (numeroCirculo == '' || numeroCirculo == 0 || numeroCirculo < 0) {
        alert('No se puede hacer la operación.')
    } else {
        var perimetro = diametroCirculo * PI
        var areaCirculo = Math.pow(numeroCirculo, 2) * PI

        resultadoDiametro.innerHTML = `El Diametro de este circulo es: ${diametroCirculo}`
        resultadoPerimetro.innerHTML = `El perimetro de este circulo es: ${perimetro}`
        resultadoArea.innerHTML = `El area de este circulo es: ${areaCirculo}`
    }
}
    
