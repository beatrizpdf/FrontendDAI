const variavel = document.getElementById("buttonbackSugestoesAdolescentes");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalSugestoesAdolescentes").className = "bgmodalSugestoesAdolescentes"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalSugestoesAdolescentes").className="hidden" //carregar no X e fechar o aviso
}