const variavel=document.getElementById("firstGrayRectangleChatCriancas");
variavel.onclick=dadosfirstrectangle;


const variaveltwo = document.getElementById("buttonbackChatCriancas");
variaveltwo.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstrectangle(){
    window.location.href="BotCriancas.html" //ao carregar no botão vai para a página "BotCriancas.html"
    }
