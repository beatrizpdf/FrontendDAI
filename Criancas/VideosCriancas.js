const variavel = document.getElementById("buttonbackVideosCriancas");
variavel.onclick = goBack;

function goBack() { //voltar para a página anterior
    window.history.back()
}