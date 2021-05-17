const variavel=document.getElementById("firstGraySquarePaginaInicialInstituicoes");
variavel.onclick=dadosfirstsquare;

const variavelone=document.getElementById("secondGraySquarePaginaInicialInstituicoes");
variavelone.onclick=dadossecondsquare;

const variaveltwo=document.getElementById("thirdGraySquarePaginaInicialInstituicoes");
variaveltwo.onclick=dadosthirdsquare;

const variavelthree=document.getElementById("fourthGraySquarePaginaInicialInstituicoes");
variavelthree.onclick=dadosfourthsquare;

const variavelfive=document.getElementById("fifthGraySquarePaginaInicialInstituicoes");
variavelfive.onclick=dadossixthsquare;

const variavelsix=document.getElementById("iconmenuPaginaInicialInstituicoes");
variavelsix.onclick=dadosmenu;

//const variavelseven=document.getElementById("buttonDenunciaPaginaInicialInstituicoes");
//variavelseven.onclick=denuncia;

//const variaveleight=document.getElementById("closeX");
//variaveleight.onclick=fechardenuncia;



function dadosfirstsquare(){
    window.location.href="PaginaInicialInstituicoes.html" //ao carregar no botão vai para a página "ChatFamilias.html"
}

function dadossecondsquare(){
    window.location.href="BotInstituicoes.html" //ao carregar no botão vai para a página "JogosFamilias.html"
}

function dadosthirdsquare(){
    window.location.href="MateriaisInstituicoes.html" //ao carregar no botão vai para a página "ForumFamilias.html"
}

function dadosfourthsquare(){
    window.location.href="ForumInstituicoes.html" //ao carregar no botão vai para a página "DireitosFamilias.html"
}

function dadossixthsquare(){
    window.location.href="DireitosInstituicoes.html" //ao carregar no botão vai para a página "ContaFamilias.html"
}

function dadosmenu(){
    window.location.href="MenuInstituicoes.html" //ao carregar no botão vai para a página "ContaFamilias.html"
}

//function denuncia(){
    //document.getElementById("bgmodalPaginaIniciaInstituicoes").className = "bgmodalPaginaIniciaInstituicoes"; 
    //}

//function fechardenuncia() {
    //document.getElementById("bgmodalPaginaIniciaInstituicoes").className="hidden" //carregar no X e fechar o aviso
//}

