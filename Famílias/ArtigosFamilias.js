const variavel = document.getElementById("buttonbackArtigosFamilias");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;




function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalPaginaInicialFamilias").className = "bgmodalPaginaInicialFamilias"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalPaginaInicialFamilias").className="hidden" //carregar no X e fechar o aviso
}