const variavel=document.getElementById("buttonMateriaisPaginaInicialFamilias");
variavel.onclick=dadosfirstsquare;

const variavelone=document.getElementById("secondGraySquarePaginaInicialFamilias");
variavelone.onclick=dadossecondsquare;

const variaveltwo=document.getElementById("thirdGraySquarePaginaInicialFamilias");
variaveltwo.onclick=dadosthirdsquare;

const variavelthree=document.getElementById("fourthGraySquarePaginaInicialFamilias");
variavelthree.onclick=dadosfourthsquare;

const variavelfive=document.getElementById("fifthGraySquarePaginaInicialFamilias");
variavelfive.onclick=dadossixthsquare;

const variavelsix=document.getElementById("iconmenuPaginaInicialFamilias");
variavelsix.onclick=dadosmenu;

const variavelseven=document.getElementById("roseRectanglePaginaInicialFamilias");
variavelseven.onclick=roserectangle;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;

const variavelnine=document.getElementById("buttonDenunciaPaginaInicialFamilias");
variavelnine.onclick=denuncia;




function dadosfirstsquare(){
    window.location.href="MateriaisFamilias.html" //ao carregar no botão vai para a página "ChatFamilias.html"
    }

function dadossecondsquare(){
    window.location.href="BotFamilias.html" //ao carregar no botão vai para a página "JogosFamilias.html"
    }

function dadosthirdsquare(){
    window.location.href="JogosFamilias.html" //ao carregar no botão vai para a página "ForumFamilias.html"
    }

function dadosfourthsquare(){
    window.location.href="ForumFamilias.html" //ao carregar no botão vai para a página "DireitosFamilias.html"
    }

function dadossixthsquare(){
    window.location.href="DireitosFamilias.html" //ao carregar no botão vai para a página "ContaFamilias.html"
    }

function dadosmenu(){
    window.location.href="MenuFamilias.html" //ao carregar no botão vai para a página "ContaFamilias.html"
    }

function roserectangle(){
    window.location.href="MateriaisFamilias.html" //ao carregar no botão vai para a página "MateriaisFamilias.html"
    }

function fechardenuncia() {
    document.getElementById("bgmodalPaginaInicialFamilias").className="hidden" //carregar no X e fechar o aviso
}

function denuncia(){
    document.getElementById("bgmodalPaginaInicialFamilias").className = "bgmodalPaginaInicialFamilias"; 
    }