const variavel=document.getElementById("firstGraySquarePaginaInicialProChild");
variavel.onclick=dadosfirstsquare;

const variavelone=document.getElementById("secondGraySquarePaginaInicialProChild");
variavelone.onclick=dadossecondsquare;

const variaveltwo=document.getElementById("thirdGraySquarePaginaInicialProChild");
variaveltwo.onclick=dadosthirdsquare;

const variavelthree=document.getElementById("fourthGraySquarePaginaInicialProChild");
variavelthree.onclick=dadosfourthsquare;

const variavelsix=document.getElementById("iconmenuPaginaInicialProChild");
variavelsix.onclick=dadosmenu;


function dadosfirstsquare(){
    window.location.href="MateriaisProChild.html"
}

function dadossecondsquare(){
    window.location.href="DireitosProChild.html"
}

function dadosthirdsquare(){
    window.location.href="ContaProChild.html"
}

function dadosfourthsquare(){
    window.location.href="ForumProChild.html"
}

function dadosmenu(){
    window.location.href="MenuProChild.html"
}