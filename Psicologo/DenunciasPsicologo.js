const variavel=document.getElementById("firstGrayRectangleDenunciasPsicologo");
variavel.onclick=dadosfirstrectangle;

const variavelone=document.getElementById("secondGrayRectangleDenunciasPsicologo");
variavelone.onclick=dadossecondrectangle;

const variaveltwo = document.getElementById("buttonbackDenunciasPsicologo");
variaveltwo.onclick = goBack;

const variavelseven=document.getElementById("firstGrayRectangleDenunciasPsicologo");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeXDenunciasPsicologo");
variaveleight.onclick=fechardenuncia;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstrectangle(){
    window.location.href="BotCriancas.html" //ao carregar no botão vai para a página "BotCriancas.html"
    }

function dadossecondrectangle(){
    window.location.href="PsicologaCriancas.html" //ao carregar no botão vai para a página "PsicologaCriancas.html"
    }

function denuncia(){
    document.getElementById("bgmodalDenunciasPsicologo").className = "bgmodalDenunciasPsicologo"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalDenunciasPsicologo").className="hidden" //carregar no X e fechar o aviso
    }