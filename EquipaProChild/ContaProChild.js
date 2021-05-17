const checkbox = document.getElementById("checkboxContaProChild");
checkbox.onclick = checkboxCheckedContaProChild;

const variavel = document.getElementById("buttonbackContaProChild");
variavel.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function checkboxCheckedContaProChild() {
    if (document.getElementById("checkboxContaProChild").checked)
        document.getElementById("twelfthBoxContaProChild").className = "twelfthBoxContaProChild";
        document.getElementById("textConfirmContaProChild").className = "textConfirmContaProChild";

        document.getElementById("thirteenBoxContaProChild").className = "thirteenBoxContaProChild";
        document.getElementById("textNewPasswordContaProChild").className = "textNewPasswordContaProChild";

        document.getElementById("fourteenBoxContaProChild").className = "fourteenBoxContaProChild";
        document.getElementById("textConfirmNewPasswordContaProChild").className = "textConfirmNewPasswordContaProChild";
        
        document.getElementById("eleventhBoxContaProChild").style.background = "#EFF0F6";
        document.getElementById("textChoosePasswordContaProChild").style.color = "#4C4C4C";

        if ((document.getElementById("checkboxContaProChild").checked==false)){
        document.getElementById("twelfthBoxContaProChild").className = "hidden";
        document.getElementById("textConfirmContaProChild").className = "hidden";

        document.getElementById("thirteenBoxContaProChild").className = "hidden";
        document.getElementById("textNewPasswordContaProChild").className = "hidden";

        document.getElementById("fourteenBoxContaProChild").className = "hidden";
        document.getElementById("textConfirmNewPasswordContaProChild").className = "hidden";
        
        document.getElementById("eleventhBoxContaProChild").style.background = "#D8D8D9";
        document.getElementById("textChoosePasswordContaProChild").style.color = "#9e9e9e";    
        }
}