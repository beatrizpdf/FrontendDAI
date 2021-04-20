const variavel=document.getElementById("firstGraySquarePaginaInicialPsicologo");
variavel.onclick=dadosfirstsquare;

const variavelone=document.getElementById("secondGraySquarePaginaInicialPsicologo");
variavelone.onclick=dadossecondsquare;

const variaveltwo=document.getElementById("thirdGraySquarePaginaInicialPsicologo");
variaveltwo.onclick=dadosthirdsquare;

const variavelthree=document.getElementById("fourthGraySquarePaginaInicialPsicologo");
variavelthree.onclick=dadosfourthsquare;

const variavelsix=document.getElementById("iconmenuPaginaInicialPsicologo");
variavelsix.onclick=dadosmenu;


function dadosfirstsquare(){
    window.location.href="ChatPsicologo.html" //ao carregar no botão vai para a página "ChatFamilias.html"
}

function dadossecondsquare(){
    window.location.href="DireitosInstituicoes.html" //ao carregar no botão vai para a página "JogosFamilias.html"
}

function dadosthirdsquare(){
    window.location.href="ContaInstituicoes.html" //ao carregar no botão vai para a página "ForumFamilias.html"
}

function dadosfourthsquare(){
    window.location.href="ForumInstituicoes.html" //ao carregar no botão vai para a página "DireitosFamilias.html"
}

function dadosmenu(){
    window.location.href="MenuInstituicoes.html" //ao carregar no botão vai para a página "ContaFamilias.html"
}