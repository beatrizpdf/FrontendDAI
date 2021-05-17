const variavel=document.getElementById("firstGrayRectangleDireitosInstituicoes");
variavel.onclick=dadosfirstbox;

const variavelone=document.getElementById("secondGrayRectangleDireitosInstituicoes");
variavelone.onclick=dadossecondbox;

const variaveltwo = document.getElementById("buttonbackDireitosInstituicoes");
variaveltwo.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstbox(){
    window.location.href="VideosInstituicoes.html" //ao carregar no botão vai para a página "VideosCrianças.html"
}

function dadossecondbox(){
    window.location.href="ArtigosDireitosInstituicoes.html" //ao carregar no botão vai para a página "ArtigosCrianças.html"
}