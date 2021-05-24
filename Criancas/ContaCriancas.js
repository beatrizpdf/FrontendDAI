const checkbox = document.getElementById("checkboxContaCriancas");
checkbox.onclick = checkboxCheckedContaCriancas;

const variavel = document.getElementById("buttonbackContaCriancas");
variavel.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function checkboxCheckedContaCriancas() {
    if (document.getElementById("checkboxContaCriancas").checked)
        document.getElementById("twelfthBoxContaCriancas").className = "twelfthBoxContaCriancas";
        document.getElementById("textConfirmContaCriancas").className = "textConfirmContaCriancas";

        document.getElementById("thirteenBoxContaCriancas").className = "thirteenBoxContaCriancas";
        document.getElementById("textNewPasswordContaCriancas").className = "textNewPasswordContaCriancas";

        document.getElementById("fourteenBoxContaCriancas").className = "fourteenBoxContaCriancas";
        document.getElementById("textConfirmNewPasswordContaCriancas").className = "textConfirmNewPasswordContaCriancas";
        
        document.getElementById("passwordBoxContaCriancas").style.background = "#EFF0F6";
        document.getElementById("textChoosePasswordContaCriancas").style.color = "#4C4C4C";

        if ((document.getElementById("checkboxContaCriancas").checked==false)){
        document.getElementById("twelfthBoxContaCriancas").className = "hidden";
        document.getElementById("textConfirmContaCriancas").className = "hidden";

        document.getElementById("thirteenBoxContaCriancas").className = "hidden";
        document.getElementById("textNewPasswordContaCriancas").className = "hidden";

        document.getElementById("fourteenBoxContaCriancas").className = "hidden";
        document.getElementById("textConfirmNewPasswordContaCriancas").className = "hidden";
        
        document.getElementById("passwordBoxContaCriancas").style.background = "#D8D8D9";
        document.getElementById("textChoosePasswordContaCriancas").style.color = "#9e9e9e";    
        }
}