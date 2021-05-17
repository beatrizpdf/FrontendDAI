const variavel = document.getElementById("buttonbackArtigosDireitosFamilias");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;



function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalArtigosDireitosFamilias").className = "bgmodalArtigosDireitosFamilias"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalArtigosDireitosFamilias").className="hidden" //carregar no X e fechar o aviso
}