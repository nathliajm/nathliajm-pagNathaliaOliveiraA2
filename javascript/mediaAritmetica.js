function calcularMediaAritmetica() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    let resultado;

    if (media>=6) {
        resultado = "Aprovado";
    } else if (media<4) {
        resultado = "Reprovado";
    } else{
        resultado = "IFA";
    }

    document.getElementById('resultado').value = media.toFixed(1) + " - " + resultado;
}