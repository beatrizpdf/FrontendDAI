const variavel = document.getElementById("buttonbackArtigosProChild");
variavel.onclick = goBack;

// const variavelseven=document.getElementById("buttonAdd");
// variavelseven.onclick=denuncia;

// const variaveleight=document.getElementById("closeX");
// variaveleight.onclick=fechardenuncia;




function goBack() { //voltar para a página anterior
    window.history.back()
}

// function denuncia(){
//     document.getElementById("bgmodalArtigosProChild").className = "bgmodalArtigosProChild"; 
//     }

// function fechardenuncia() {
//     document.getElementById("bgmodalArtigosProChild").className="hidden" //carregar no X e fechar o aviso
// }