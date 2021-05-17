import * as fetch from "./functions/fetch.js"


const $ = q => {
    return document.querySelector(q);
  };
  

//Altera o id confirmar para o correspondente do botao da pagina
$('#buttonConta').addEventListener('click', function(){
    saveData();
});


function saveData(){

    //So precisas de alterar os estes paramentros
    let psychologist =  {
        "email": $('#emailBox').value,
        "password":$('#thirteenBoxContaPsicologo').value,
        "confirmPassword":$('#fourteenBoxContaPsicologo').value,
        "name":$('#nameBox').value,
        "birthDate":$('#birthBox').value,
        "phoneNr": $('#phoneNumberBox').value,
        "city":$('#cityBox').value,
        "county": $('#countyBox').value,
        "postalCode":$('#postalCodeBox').value,
        "address":$('#adressBox').value,
        "role": {"idRole": 6}
        }
      console.log(psychologist);
   
      fetch.postData('teenagers', psychologist);
}

  
















