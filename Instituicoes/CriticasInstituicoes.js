const variavel = document.getElementById("buttonbackCriticasInstituicoes");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalCriticasInstituicoes").className = "bgmodalCriticasInstituicoes"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalCriticasInstituicoes").className="hidden" //carregar no X e fechar o aviso
}