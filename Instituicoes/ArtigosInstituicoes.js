const variavel = document.getElementById("buttonbackArtigosInstituicoes");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;




function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalPaginaInicialInstituicoes").className = "bgmodalPaginaInicialInstituicoes"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalPaginaInicialInstituicoes").className="hidden" //carregar no X e fechar o aviso
}