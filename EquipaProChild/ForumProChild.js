const variavel = document.getElementById("buttonbackForumProChild");
variavel.onclick = goBack;

const variavelone=document.getElementById("firstGrayRectangleForumProChild");
variavelone.onclick=dadosfirstsquare;

const variaveltwo=document.getElementById("secondGrayRectangleForumProChild");
variaveltwo.onclick=dadossecondsquare;

const variavelthree=document.getElementById("thirdGrayRectangleForumProChild");
variavelthree.onclick=dadosthirdsquare;



function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstsquare(){
    window.location.href="ArtigosProChild.html" //ao carregar no botão vai para a página "ChatAdolescentes.html"
}

function dadossecondsquare(){
    window.location.href="SugestoesProChild.html" //ao carregar no botão vai para a página "JogosAdolescentes.html"
}

function dadosthirdsquare(){
    window.location.href="CriticasProChild.html" //ao carregar no botão vai para a página "ForumAdolescentes.html"
}