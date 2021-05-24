const variavel = document.getElementById("buttonbackMenuCriancas");
variavel.onclick = goBack;

const variavelone=document.getElementById("fifthGrayRectangle");
variavelone.onclick=terminarSessao;



function goBack() { //voltar para a página anterior
    window.history.back()
}

function terminarSessao(){
    window.location.href="../Inicio.html" //ao carregar no botão vai para a página "JogosCriancas.html"
    }