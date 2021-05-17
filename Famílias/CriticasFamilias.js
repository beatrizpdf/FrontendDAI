const variavel = document.getElementById("buttonbackCriticasFamilias");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalCriticasFamilias").className = "bgmodalCriticasFamilias"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalCriticasFamilias").className="hidden" //carregar no X e fechar o aviso
}