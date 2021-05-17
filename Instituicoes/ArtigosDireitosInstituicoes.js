const variavel = document.getElementById("buttonbackArtigosDireitosInstituicoes");
variavel.onclick = goBack;

const variavelseven=document.getElementById("buttonAdd");
variavelseven.onclick=denuncia;

const variaveleight=document.getElementById("closeX");
variaveleight.onclick=fechardenuncia;



function goBack() { //voltar para a página anterior
    window.history.back()
}

function denuncia(){
    document.getElementById("bgmodalArtigosDireitosInstituicoes").className = "bgmodalArtigosDireitosInstituicoes"; 
    }

function fechardenuncia() {
    document.getElementById("bgmodalArtigosDireitosInstituicoes").className="hidden" //carregar no X e fechar o aviso
}