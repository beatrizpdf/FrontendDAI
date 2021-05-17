const variavel = document.getElementById("buttonbackVideosProChild");
variavel.onclick = goBack;

// const variavelseven=document.getElementById("buttonAdd");
// variavelseven.onclick=denuncia;

// const variaveleight=document.getElementById("closeX");
// variaveleight.onclick=fechardenuncia;



function goBack() { //voltar para a página anterior
    window.history.back()
}

// function denuncia(){
//     document.getElementById("bgmodalVideosProChild").className = "bgmodalVideosProChild"; 
//     }

// function fechardenuncia() {
//     document.getElementById("bgmodalVideosProChild").className="hidden" //carregar no X e fechar o aviso
// }