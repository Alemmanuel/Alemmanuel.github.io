function calcularTriangulo() {
    var lado1 = document.getElementById('lado1').value
    var lado2 = document.getElementById('lado2').value
    var base = document.getElementById('base').value
    var altura = document.getElementById('altura').value

    if (lado1 == 0 & lado2 == 0 & base == 0 & altura == 0 || lado1 == '' & lado2 == '' & base == '' & altura == '' || lado1 < 0 & lado2 < 0 & base < 0 & altura < 0 || lado1 == '' & lado2 == '' & base == '' || lado1 == '' & lado2 == '' & altura == '' || lado1 == '' & base == '' & altura == '' || lado2 == '' & base == '' & altura == '' || lado1 == '' & lado2 == '' || base == '' & altura == '' || lado1 == '' || lado2 == '' ||  base == '' ||  altura == '') {
        alert('No se puede hacer la operación.')
    } else {
        var resultadoPerimetroT = document.getElementById('resultadoPerimetroT')
        var resultadoAreaT = document.getElementById('resultadoAreaT')

        var perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(base)
        var area = (base * altura) / 2

        resultadoPerimetroT.innerHTML = `El perimetro de este triangulo es: ${perimetro}`
        resultadoAreaT.innerHTML = `El area de este triangulo es: ${area}`
    }
}