import * as fetch from "./functions/fetch.js"



const $ = q => {
    return document.querySelector(q);
};


//Altera o id confirmar para o correspondente do butao da pagina
$('#buttonConta').addEventListener('click', function () {
    saveData();
});


function saveData() {

    //So precisas de alterar os estes paramentros
    let dataFamily = {
        "email": $('#emailBox').value,
        "password": $('#thirteenBoxContaFamilias').value,
        "confirmPassword": $('#fourteenBoxContaFamilias').value,
        "name": $('#nameBox').value,
        "birthDate": $('#birthBox').value,
        "phoneNr": $('#phoneNumberBox').value,
        "city": $('#cityBox').value,
        "county": $('#country').value,
        "postalCode": $('#countyBox').value,
        "address": $('#adressBox').value,
        "role": { "idRole": 3 }
    }

    console.log(dataFamily);

    fetch.postData('family', dataFamily);
}




















