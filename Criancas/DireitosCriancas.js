const variavel=document.getElementById("firstYellowBoxDireitosCriancas");
variavel.onclick=dadosfirstbox;

const variavelone=document.getElementById("secondYellowBoxDireitosCriancas");
variavelone.onclick=dadossecondbox;

const variaveltwo = document.getElementById("buttonbackDireitosCriancas");
variaveltwo.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstbox(){
    window.location.href="VideosCriancas.html" //ao carregar no botão vai para a página "VideosCriancas.html"
    }

function dadossecondbox(){
    window.location.href="ArtigosCriancas.html" //ao carregar no botão vai para a página "ArtigosCriancas.html"
    }