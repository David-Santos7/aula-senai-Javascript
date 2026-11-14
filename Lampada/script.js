
const ligar = document.getElementById("lampadaLigada");
const desligar = document.getElementById("lampadaDesligada");
const lampada = document.getElementById("lampada");

function lampadaQuebrada() {
    return lampada.src.indexOf("quebrada") > -1; //é usado para encontrar a primeira posição (índice)
                                                // de um valor específico dentro de um Array (vetor) 
                                                // ou de uma String (texto).
}

function lampadaLigada() {
    if (!lampadaQuebrada()) {
        lampada.src = "./imagens/ligada.jpg";
    }
}

function lampadaDesligada() {
    if (!lampadaQuebrada()) {
        lampada.src = "./imagens/desligada.jpg";
    }
}

function lampadaQuebrada1() {
    lampada.src = "./imagens/quebrada.jpg";
}

ligar.addEventListener("click", lampadaLigada);
desligar.addEventListener("click", lampadaDesligada);
lampada.addEventListener("dblclick", lampadaQuebrada1);
