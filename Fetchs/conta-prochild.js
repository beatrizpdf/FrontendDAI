import * as fetch from "./functions/fetch.js"



const $ = q => {
    return document.querySelector(q);
  };
  

//Altera o id confirmar para o correspondente do butao da pagina
$('#confirm').addEventListener('click', function(){
    saveData();
});


function saveData(){

    //So precisas de alterar os estes paramentros
    let prochild =  {
      "email": $('#emailBox').value,
      "password": $('#thirteenBoxContaFamilias').value,
      "confirmPassword": $('#fourteenBoxContaFamilias').value,
      "name": $('#nameBox').value,
      "birthDate": $('#birthBox').value,
      "phoneNr": $('#phoneNumberBox').value,
      "city": $('#cityBox').value,
      "county": $('#countyBox').value,
      "postalCode": $('#postalCodeBox').value,
      "address": $('#adressBox').value,
        "role": {"idRole": 5}
        }
      console.log(prochild);
   
      fetch.postData('prochilds', prochild);
}

