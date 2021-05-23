const variavel=document.getElementById("firstGrayRectangleChatCrianças");
variavel.onclick=dadosfirstrectangle;


const variaveltwo = document.getElementById("buttonbackChatCrianças");
variaveltwo.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstrectangle(){
    window.location.href="BotCrianças.html" //ao carregar no botão vai para a página "BotCrianças.html"
    }
