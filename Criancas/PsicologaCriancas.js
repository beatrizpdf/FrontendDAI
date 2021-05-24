const variavel = document.getElementById("buttonbackPsicologaCriancas");
variavel.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}