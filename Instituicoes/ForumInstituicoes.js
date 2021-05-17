const variavel = document.getElementById("buttonbackForumInstituicoes");
variavel.onclick = goBack;

const variavelone=document.getElementById("firstGrayRectangleForumInstituicoes");
variavelone.onclick=dadosfirstsquare;

const variaveltwo=document.getElementById("secondGrayRectangleForumInstituicoes");
variaveltwo.onclick=dadossecondsquare;

const variavelthree=document.getElementById("thirdGrayRectangleForumInstituicoes");
variavelthree.onclick=dadosthirdsquare;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstsquare(){
    window.location.href="ArtigosInstituicoes.html" //ao carregar no botão vai para a página "ChatAdolescentes.html"
}

function dadossecondsquare(){
    window.location.href="SugestoesInstituicoes.html" //ao carregar no botão vai para a página "JogosAdolescentes.html"
}

function dadosthirdsquare(){
    window.location.href="CriticasInstituicoes.html" //ao carregar no botão vai para a página "ForumAdolescentes.html"
}
