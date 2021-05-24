const variavel=document.getElementById("firstGrayRectangleDireitosProChild");
variavel.onclick=dadosfirstbox;

const variavelone=document.getElementById("secondGrayRectangleDireitosProChild");
variavelone.onclick=dadossecondbox;

const variaveltwo = document.getElementById("buttonbackDireitosProChild");
variaveltwo.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstbox(){
    window.location.href="VideosProChild.html" //ao carregar no botão vai para a página "VideosCriancas.html"
}

function dadossecondbox(){
    window.location.href="ArtigosDireitosProChild.html" //ao carregar no botão vai para a página "ArtigosCriancas.html"
}