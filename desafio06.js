
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Selecionando os elementos do HTML
var palpites = document.querySelector(".palpites");
var ultimoResultado = document.querySelector(".ultimoResultado");
var dica = document.querySelector(".dica");

var enviarPalpite = document.querySelector(".enviarPalpite");
var campoPalpite = document.querySelector(".campoPalpite");

// Variáveis de controle do jogo
var contadorPalpites = 1;
var botaoReiniciar;

// Função responsável por verificar o palpite
function verificarPalpite() {

    var palpiteUsuario = Number(campoPalpite.value);

    // Verifica se o número digitado é válido
    if (
        !Number.isInteger(palpiteUsuario) ||
        palpiteUsuario < 1 ||
        palpiteUsuario > 100
    ) {
        alert("Digite um número inteiro entre 1 e 100.");
        campoPalpite.focus();
        return;
    }

    // Exibe o título na primeira tentativa
    if (contadorPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }

    // Adiciona o palpite à lista
    palpites.textContent += palpiteUsuario + " ";

    // Verifica se o jogador acertou
    if (palpiteUsuario === numeroAleatorio) {

        ultimoResultado.textContent = "Parabéns! Você acertou!";
        ultimoResultado.style.backgroundColor = "green";

        dica.textContent = "";

        encerrarJogo();

    } else if (contadorPalpites === 10) {

        // Encerra o jogo após 10 tentativas
        ultimoResultado.textContent = "Fim de jogo!";
        dica.textContent = "";

        encerrarJogo();

    } else {

        // Informa que o jogador errou
        ultimoResultado.textContent = "Errado!";
        ultimoResultado.style.backgroundColor = "red";

        // Verifica se o palpite é baixo ou alto
        if (palpiteUsuario < numeroAleatorio) {
            dica.textContent = "Seu palpite é muito baixo!";
        } else if (palpiteUsuario > numeroAleatorio) {
            dica.textContent = "Seu palpite é muito alto!";
        }
    }

    // Atualiza o número de tentativas
    contadorPalpites++;

    // Limpa o campo de entrada
    campoPalpite.value = "";

    // Posiciona o cursor no campo
    campoPalpite.focus();
}

// Evento de clique no botão
enviarPalpite.addEventListener("click", verificarPalpite);

// Função que encerra o jogo
function encerrarJogo() {

    campoPalpite.disabled = true;
    enviarPalpite.disabled = true;

    // Cria o botão para reiniciar o jogo
    botaoReiniciar = document.createElement("button");

    botaoReiniciar.textContent = "Iniciar novo jogo";

    document.body.appendChild(botaoReiniciar);

    botaoReiniciar.addEventListener("click", reiniciarJogo);
}

// Função que reinicia o jogo
function reiniciarJogo() {

    contadorPalpites = 1;

    // Seleciona todos os parágrafos de resultado
    var paragrafos = document.querySelectorAll(
        ".paragrafosResultado p"
    );

    // Limpa os resultados anteriores
    for (var i = 0; i < paragrafos.length; i++) {
        paragrafos[i].textContent = "";
    }

    // Remove o botão de reiniciar
    botaoReiniciar.parentNode.removeChild(botaoReiniciar);

    // Habilita novamente os campos
    campoPalpite.disabled = false;
    enviarPalpite.disabled = false;

    campoPalpite.value = "";
    campoPalpite.focus();

    // Restaura a cor do resultado
    ultimoResultado.style.backgroundColor = "white";

    // Sorteia um novo número
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
