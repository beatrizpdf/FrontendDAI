const variavel = document.getElementById("buttonbackArtigosCriancas");
variavel.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}