const variavel = document.getElementById("buttonbackSugestoesInstituicoes");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalSugestoesInstituicoes").className = "bgmodalSugestoesInstituicoes"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalSugestoesInstituicoes").className="hidden" //carregar no X e fechar o aviso
}