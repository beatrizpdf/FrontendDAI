const variavel = document.getElementById("buttonbackArtigosDireitosProChild");
variavel.onclick = goBack;

// const variavelseven=document.getElementById("buttonAdd");
// variavelseven.onclick=denuncia;

// const variaveleight=document.getElementById("closeX");
// variaveleight.onclick=fechardenuncia;



function goBack() { //voltar para a página anterior
    window.history.back()
}

// function denuncia(){
//     document.getElementById("bgmodalArtigosDireitosProChild").className = "bgmodalArtigosDireitosProChild"; 
//     }

// function fechardenuncia() {
//     document.getElementById("bgmodalArtigosDireitosProChild").className="hidden" //carregar no X e fechar o aviso
// }