const variavel = document.getElementById("buttonbackVideosDireitosFamilias");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;



function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalVideosDireitosFamilias").className = "bgmodalVideosDireitosFamilias"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalVideosDireitosFamilias").className="hidden" //carregar no X e fechar o aviso
}