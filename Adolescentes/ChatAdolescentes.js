const variavel=document.getElementById("firstGrayRectangleChatAdolescentes");
variavel.onclick=dadosfirstrectangle;

const variavelone=document.getElementById("secondGrayRectangleChatAdolescentes");
variavelone.onclick=dadossecondrectangle;

const variaveltwo = document.getElementById("buttonbackChatAdolescentes");
variaveltwo.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstrectangle(){
    window.location.href="BotAdolescentes.html" //ao carregar no botão vai para a página "BotCriancas.html"
    }

function dadossecondrectangle(){
    window.location.href="PsicologaAdolescentes.html" //ao carregar no botão vai para a página "PsicologaCriancas.html"
    }