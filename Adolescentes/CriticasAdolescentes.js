const variavel = document.getElementById("buttonbackCriticasAdolescentes");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalCriticasAdolescentes").className = "bgmodalCriticasAdolescentes"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalCriticasAdolescentes").className="hidden" //carregar no X e fechar o aviso
}