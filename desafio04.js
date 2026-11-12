
function verificar() {
    var campo1 = document.getElementById("nota1");
    var campo2 = document.getElementById("nota2");

    if (campo1.value === "" || campo2.value === "") {
        document.getElementById("resultado").textContent =
            "Digite as duas notas.";
        return;
    }

    var nota1 = Number(campo1.value);
    var nota2 = Number(campo2.value);

    var media = (nota1 + nota2) / 2;

    if (media >= 10) {
        document.getElementById("resultado").textContent =
            "Aprovado! Média: " + media;
    } else if (media >= 4) {
        document.getElementById("resultado").textContent =
            "Recuperação! Média: " + media;
    } else {
        document.getElementById("resultado").textContent =
            "Reprovado! Média: " + media;
    }
}
