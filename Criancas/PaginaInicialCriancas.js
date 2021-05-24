const variavel=document.getElementById("firstBlueSquarePaginaInicialCriancas");
variavel.onclick=dadosfirstsquare;

const variavelone=document.getElementById("secondBlueSquarePaginaInicialCriancas");
variavelone.onclick=dadossecondsquare;

const variaveltwo=document.getElementById("thirdBlueSquarePaginaInicialCriancas");
variaveltwo.onclick=dadosthirdsquare;

const variavelthree=document.getElementById("fourthBlueSquarePaginaInicialCriancas");
variavelthree.onclick=dadosfourthsquare;

const variavelfive=document.getElementById("sixthBlueSquarePaginaInicialCriancas");
variavelfive.onclick=dadossixthsquare;

const variavelsix=document.getElementById("iconmenuPaginaInicialCriancas");
variavelsix.onclick=dadosmenu;

const variavelseven=document.getElementById("buttonDenunciaPaginaInicialCriancas");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;

const variavelnine=document.getElementById("fifthBlueSquarePaginaInicialCriancas");
variavelnine.onclick=linhasapoio;

const variavelten=document.getElementById("closeXLinhasPsicologo");
variavelten.onclick=closelinhasapoio;



function dadosfirstsquare(){
    window.location.href="ChatCriancas.html" //ao carregar no botão vai para a página "ChatCriancas.html"
    }

function dadossecondsquare(){
    window.location.href="JogosCriancas.html" //ao carregar no botão vai para a página "JogosCriancas.html"
    }

function dadosthirdsquare(){
    window.location.href="ForumCriancas.html" //ao carregar no botão vai para a página "ForumCriancas.html"
    }

function dadosfourthsquare(){
    window.location.href="DireitosCriancas.html" //ao carregar no botão vai para a página "DireitosCriancas.html"
    }

function dadossixthsquare(){
    window.location.href="ContaCriancas.html" //ao carregar no botão vai para a página "ContaCriancas.html"
    }

function dadosmenu(){
    window.location.href="MenuCriancas.html" //ao carregar no botão vai para a página "ContaCriancas.html"
    }

function denuncia(){
    document.getElementById("bgmodalPaginaInicialCriancas").className = "bgmodalPaginaInicialCriancas"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalPaginaInicialCriancas").className="hidden" //carregar no X e fechar o aviso
}

function linhasapoio(){
    document.getElementById("bgmodalLinhasApoioPsicologo").className = "bgmodalLinhasApoioPsicologo"; 
    }

function closelinhasapoio() {
    document.getElementById("bgmodalLinhasApoioPsicologo").className="hidden" //carregar no X e fechar o aviso
}