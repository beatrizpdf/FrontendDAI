const variavel = document.getElementById("buttonRegisto");
variavel.onclick = enviardados;

// const checkbox = document.getElementById("anotherCombobox");
// checkbox.onclick = combobox;



// function combobox() {
//     console.log(document.getElementById("anotherCombobox").value)
//     if (document.getElementById("anotherCombobox").value == "criancas") { 
//         document.getElementById("nameBox").className = "nameBox"; 
//         document.getElementById("textName").className = "textName";

//         document.getElementById("emailBox").className = "emailBox";
//         document.getElementById("textEmail").className = "textEmail";

//         document.getElementById("birthBox").className = "birthBox";
//         document.getElementById("textBirthday").className = "textBirthday";
        
//         document.getElementById("cityBox").className = "cityBox";
//         document.getElementById("textCity").className = "textCity";

//         document.getElementById("countyBox").className = "countyBox";
//         document.getElementById("textCounty").className = "textCounty";

//         document.getElementById("postalCodeBox").className = "postalCodeBox";
//         document.getElementById("textPostalCode").className = "textPostalCode";

//         document.getElementById("addressBox").className = "addressBox";
//         document.getElementById("textAddress").className = "textAddress";

//         document.getElementById("schoolBox").style.visibility="visible";
//         document.getElementById("textSchool").style.visibility="visible";

//         document.getElementById("passwordBox").className = "passwordBox";
//         document.getElementById("textChoosePassword").className = "textChoosePassword";

//         document.getElementById("confirmPasswordBox").className = "confirmPasswordBox";
//         document.getElementById("textConfirm").className = "textConfirm";

//         document.getElementById("phoneNumberBox").style.visibility = "hidden";
//         document.getElementById("textPhoneNumber").style.visibility = "hidden"; 
//     }
//     if (document.getElementById("anotherCombobox").value == "adolescentes"){
//         document.getElementById("nameBox").className = "nameBox";
//         document.getElementById("textName").className = "textName";

//         document.getElementById("emailBox").className = "emailBox";
//         document.getElementById("textEmail").className = "textEmail";

//         document.getElementById("birthBox").className = "birthBox";
//         document.getElementById("textBirthday").className = "textBirthday";
        
//         document.getElementById("cityBox").className = "cityBox";
//         document.getElementById("textCity").className = "textCity";

//         document.getElementById("countyBox").className = "countyBox";
//         document.getElementById("textCounty").className = "textCounty";

//         document.getElementById("postalCodeBox").className = "postalCodeBox";
//         document.getElementById("textPostalCode").className = "textPostalCode";

//         document.getElementById("addressBox").className = "addressBox";
//         document.getElementById("textAddress").className = "textAddress";

//         document.getElementById("schoolBox").style.visibility="visible";
//         document.getElementById("textSchool").style.visibility="visible";

//         document.getElementById("passwordBox").className = "passwordBox";
//         document.getElementById("textChoosePassword").className = "textChoosePassword";

//         document.getElementById("confirmPasswordBox").className = "confirmPasswordBox";
//         document.getElementById("textConfirm").className = "textConfirm";

//         document.getElementById("phoneNumberBox").style.visibility= "hidden";
//         document.getElementById("textPhoneNumber").style.visibility= "hidden"; 
//     }   
//     if (document.getElementById("anotherCombobox").value == "familias"){
//         document.getElementById("nameBox").className = "nameBox";
//         document.getElementById("textName").className = "textName";

//         document.getElementById("emailBox").className = "emailBox";
//         document.getElementById("textEmail").className = "textEmail";

//         document.getElementById("birthBox").className = "birthBox";
//         document.getElementById("textBirthday").className = "textBirthday";
        
//         document.getElementById("cityBox").className = "cityBox";
//         document.getElementById("textCity").className = "textCity";

//         document.getElementById("countyBox").className = "countyBox";
//         document.getElementById("textCounty").className = "textCounty";

//         document.getElementById("postalCodeBox").className = "postalCodeBox";
//         document.getElementById("textPostalCode").className = "textPostalCode";

//         document.getElementById("addressBox").className = "addressBox";
//         document.getElementById("textAddress").className = "textAddress";

//         document.getElementById("schoolBox").style.visibility= "hidden";
//         document.getElementById("textSchool").style.visibility= "hidden";

//         document.getElementById("passwordBox").className = "passwordBox";
//         document.getElementById("textChoosePassword").className = "textChoosePassword";

//         document.getElementById("confirmPasswordBox").className = "confirmPasswordBox";
//         document.getElementById("textConfirm").className = "textConfirm";

//         document.getElementById("phoneNumberBox").style.visibility="visible";
//         document.getElementById("textPhoneNumber").style.visibility="visible";     
//         }
//     if (document.getElementById("anotherCombobox").value == "psicologo"){
//         document.getElementById("nameBox").className = "nameBox";
//         document.getElementById("textName").className = "textName";
    
//         document.getElementById("emailBox").className = "emailBox";
//         document.getElementById("textEmail").className = "textEmail";
    
//         document.getElementById("birthBox").className = "birthBox";
//         document.getElementById("textBirthday").className = "textBirthday";
            
//         document.getElementById("cityBox").className = "cityBox";
//         document.getElementById("textCity").className = "textCity";
    
//         document.getElementById("countyBox").className = "countyBox";
//         document.getElementById("textCounty").className = "textCounty";
    
//         document.getElementById("postalCodeBox").className = "postalCodeBox";
//         document.getElementById("textPostalCode").className = "textPostalCode";
    
//         document.getElementById("addressBox").className = "addressBox";
//         document.getElementById("textAddress").className = "textAddress";
    
//         document.getElementById("schoolBox").style.visibility="hidden";
//         document.getElementById("textSchool").style.visibility="hidden";
    
//         document.getElementById("passwordBox").className = "passwordBox";
//         document.getElementById("textChoosePassword").className = "textChoosePassword";
    
//         document.getElementById("confirmPasswordBox").className = "confirmPasswordBox";
//         document.getElementById("textConfirm").className = "textConfirm";
    
//         document.getElementById("phoneNumberBox").style.visibility="visible";
//         document.getElementById("textPhoneNumber").style.visibility="visible";     
//         }
//     if (document.getElementById("anotherCombobox").value == "equipaProchild"){
//         document.getElementById("nameBox").className = "nameBox";
//         document.getElementById("textName").className = "textName";
    
//         document.getElementById("emailBox").className = "emailBox";
//         document.getElementById("textEmail").className = "textEmail";
    
//         document.getElementById("birthBox").className = "birthBox";
//         document.getElementById("textBirthday").className = "textBirthday";
            
//         document.getElementById("cityBox").className = "cityBox";
//         document.getElementById("textCity").className = "textCity";
    
//         document.getElementById("countyBox").className = "countyBox";
//         document.getElementById("textCounty").className = "textCounty";
    
//         document.getElementById("postalCodeBox").className = "postalCodeBox";
//         document.getElementById("textPostalCode").className = "textPostalCode";
    
//         document.getElementById("addressBox").className = "addressBox";
//         document.getElementById("textAddress").className = "textAddress";
    
//         document.getElementById("schoolBox").style.visibility="hidden";
//         document.getElementById("textSchool").style.visibility="hidden";
    
//         document.getElementById("passwordBox").className = "passwordBox";
//         document.getElementById("textChoosePassword").className = "textChoosePassword";
    
//         document.getElementById("confirmPasswordBox").className = "confirmPasswordBox";
//         document.getElementById("textConfirm").className = "textConfirm";
    
//         document.getElementById("phoneNumberBox").style.visibility="visible";
//         document.getElementById("textPhoneNumber").style.visibility="visible";     
//         }
// }

function enviardados() {

    //preenchimento do campo Nome obrigatório
    if (document.getElementById("nameBox").value == "") {
        alert("Preencha o campo Nome!");
        document.getElementById("passwordBox").focus();
    }
    else {

        //ao preencher o email ter obrigatoriamente "@" e "." (preenchimento obrigatório)
        if (document.getElementById("emailBox").value == "" ||
        document.getElementById("emailBox").value.indexOf('@') == -1 ||
        document.getElementById("emailBox").value.indexOf('.') == -1) {
        alert("Preencha campo email corretamente!");
        document.getElementById("emailBox").focus();
    }
    else {

        // preenchimento do campo concelho obrigatório
        if (document.getElementById("countyBox").value == "") {
            alert("Preencha o campo concelho!");
            document.getElementById("countyBox").focus();
        }
        else {

            // preenchimento do campo código de postal obrigatório
            if (document.getElementById("postalCodeBox").value == "") {
                alert("Preencha o campo concelho!");
                document.getElementById("postalCodeBox").focus();
            }
            else {

                // preenchimento do campo morada obrigatório
                if (document.getElementById("addressBox").value == "") {
                    alert("Preencha o campo morada!");
                    document.getElementById("addressBox").focus();
                }
                else {

                    // preenchimento do campo cidade obrigatório
                    if (document.getElementById("cityBox").value == "") {
                        alert("Preencha o campo cidade!");
                        document.getElementById("cityBox").focus();
                    }
                    else {
                        
                        // preenchimento do campo cidade obrigatório
                        if (document.getElementById("cityBox").value == "") {
                            alert("Preencha o campo cidade!");
                            document.getElementById("cityBox").focus();
                        }
                        else {

                                //preenchimento da Password, não pode estar vazia (campo obrigatório)
                                if (document.getElementById("passwordBox").value == "") {
                                    alert("Preencha o campo Password!");
                                    document.getElementById("passwordBox").focus();
                                }
                                else {

                                    //preenchimento da Password, não pode estar vazia (campo obrigatório)
                                    if (document.getElementById("confirmPasswordBox").value == "") {
                                        alert("Preencha o campo Confirmar Password!");
                                        document.getElementById("confirmPasswordBox").focus();
                                    }
                                    else {

                                        //caso as passwords não coincidirem (preenchimento de ambas obrigatórias)
                                        if (document.getElementById("passwordBox").value != document.getElementById("confirmPasswordBox").value) {
                                            alert("As passwords não coincidem!");
                                            document.getElementById("passwordBox").focus();
                                        }
                                        else {
                            
                                            //preenchimento do campo Telemovel obrigatório
                                            if (document.getElementById("phoneNumberBox").value == "") {
                                                alert("Preencha o campo Telemovel!");
                                                document.getElementById("phoneNumberBox").focus();
                                            }
                                            else {
                                            document.getElementById("bgmodalRegisto").className = "bgmodal"; //Aparece o aviso
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}