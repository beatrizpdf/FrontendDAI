const variavel = document.getElementById("buttonbackVideosInstituicoes");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;



function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalVideosInstituicoes").className = "bgmodalVideosInstituicoes"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalVideosInstituicoes").className="hidden" //carregar no X e fechar o aviso
}