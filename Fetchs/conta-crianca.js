import * as fetch from "./functions/fetch.js"



const $ = q => {
    return document.querySelector(q);
  };
  

  

fetch.getData('children/' + sessionStorage.getItem("id_user")).then(data => {
  console.log(data)
  $('#emailBox').value = data.login.email
  $('#thirteenBoxContaCriancas').value = data.password
  $('#fourteenBoxContaCriancas').value = data.confirmPassword
  $('#nameBox').value = data.name  
  $('#birthBox').value = getDateFormat(data.birthDate);
  $('#cityBox').value = data.city
  $('#countyBox').value = data.county
  $('#postalCodeBox').value = data.postalCode
  $('#adressBox').value = data.address
  $('#schoolBox').value = data.school
})


function getDateFormat(date){
  let a = new Date().toISOString();
  var index = a.indexOf("T");
  console.log(a);
  console.log(a.substring(0, index));
  return a.substring(0, index);
}

//Altera o id confirmar para o correspondente do botao da pagina
// $('#confirm').addEventListener('click', function(){
//     saveData();
// });


// function saveData(){

//     //So precisas de alterar os estes paramentros
    // let dataChild =  {
    //     "email": $('#email').value,
    //     "password":$('#pwd').value,
    //     "confirmPassword":$('#checkPwd').value,
    //     "name":$('#name').value,
    //     "birthDate":$('#birthDay').value,
    //     "city":$('#city').value,
    //     "county": $('#country').value,
    //     "postalCode":$('#postalCode').value,
    //     "address":$('#adress').value,
    //     "school":$('#school').value,
    //     "role": {"idRole": 1}
    //     }
//       console.log(dataChild);
   
//       fetch.postData('children', dataChild);
// }

  
  
  



















