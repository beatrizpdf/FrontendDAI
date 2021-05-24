const variavel = document.getElementById("buttonbackBotCriancas");
variavel.onclick = goBack;

function goBack() { //voltar para a página anterior
    window.history.back()
}