

import * as fetch from "./functions/fetch.js"


const $ = q => {
  return document.querySelector(q);
};

// const show = q => {
//   $(q).style.display = 'block';
// };

// const hide = q => {
//   $(q).style.display = 'none';
// };

document.querySelector('#anotherCombobox').addEventListener('change', (event) => {
  console.log(event.target.value)
  // getParamsUsers(event.target.value)
  sessionStorage.setItem('type', event.target.value)
})



$('#buttonRegisto').addEventListener('click', function(){
  let type = sessionStorage.getItem('type'); 
  let userRoute = getTypeUser(type)
  let userData = getDataParms(type);
  console.log(userRoute)
  console.log(userData)
  fetch.postData(userRoute, userData).then(response=>{
    console.log(response)
  });
})


function getDataParms(type){
  let d = new Date();
  // let dataChild =  {
  //   "email": $('#emailBox').value,
  //   "password":$('#passwordBox').value,
  //   "confirmPassword":$('#confirmPasswordBox').value,
  //   "name":$('#nameBox').value,
  //   "birthDate": d ,
  //   "city":$('#cityBox').value,
  //   "county": $('#countyBox').value,
  //   "postalCode":$('#postalCodeBox').value,
  //   "address":$('#addressBox').value,
  //   "school":$('#schoolBox').value,
  //   "role": {"idRole": 1}
  //   }

  let dataChild =  {
      "email": "crianca2@gmail.cpom",
      "password": "123456",
      "confirmPassword": "123456",
      "name": "Beatriz",
      "birthDate": "2001-02-21 00:00:00",
      "city": "Braga",
      "county": "Braga",
      "postalCode": "4700-558",
      "address": "Rua rua",
      "school": "Escola escola",
      "role": {"idRole": 1}
      }

    let dataTeenager =  {
      "email": $('#emailBox').value,
      "password":$('#passwordBox').value,
      "confirmPassword":$('#confirmPasswordBox').value,
      "name":$('#nameBox').value,
      "birthDate":$('#birthBox').value + " 00:00:00",
      "phoneNr": $('#phoneNumberBox').value,
      "city":$('#cityBox').value,
      "county": $('#countyBox').value,
      "postalCode":$('#postalCodeBox').value,
      "address":$('#addressBox').value,
      "school":$('#schoolBox').value,
      "role": {"idRole": 2}
      }

      let dataFamily = {
        "email": $('#emailBox').value,
        "password":$('#passwordBox').value,
        "confirmPassword":$('#confirmPasswordBox').value,
        "name":$('#nameBox').value,
        "birthDate":$('#birthBox').value + " 00:00:00",
        "phoneNr": $('#phoneNumberBox').value,
        "city":$('#cityBox').value,
        "county": $('#countyBox').value,
        "postalCode":$('#postalCodeBox').value,
        "address":$('#addressBox').value,
        "role": { "idRole": 3 }
    }

      let dataProchild =  {
        "email": $('#emailBox').value,
        "password":$('#passwordBox').value,
        "confirmPassword":$('#confirmPasswordBox').value,
        "name":$('#nameBox').value,
        "birthDate":$('#birthBox').value + " 00:00:00",
        "phoneNr": $('#phoneNumberBox').value,
        "city":$('#cityBox').value,
        "county": $('#countyBox').value,
        "postalCode":$('#postalCodeBox').value,
        "address":$('#addressBox').value,
        "role": {"idRole": 5}
        }

        let psychologist =  {
          "email": $('#emailBox').value,
          "password":$('#passwordBox').value,
          "confirmPassword":$('#confirmPasswordBox').value,
          "name":$('#nameBox').value,
          "birthDate":$('#birthBox').value + " 00:00:00",
          "phoneNr": $('#phoneNumberBox').value,
          "city":$('#cityBox').value,
          "county": $('#countyBox').value,
          "postalCode":$('#postalCodeBox').value,
          "address":$('#addressBox').value,
          "role": {"idRole": 6}
          }


        switch (type) {
          case '1': return dataChild
            break;
          case '2': return dataTeenager
            break;
          case '3': return dataFamily
            break;
          case '4': return psychologist
            break;
          case '5': return dataProchild
            break;
        }

}

function getTypeUser(type){
  switch (type) {
    case '1': return "children"
      break;
    case '2': return "teenagers"
      break;
    case '3': return "family"
      break;
    case '4': return "psychologists"
      break;
    case '5': return "prochilds"
      break;
  }
}




// function getParamsUsers(type) {
//   console.log(type)
//   getNoneParms()

//   switch (type) {
//     case '1': getChildParms()
//       break;
//     case '2': getTeenagerParms()
//       break;
//     case '3': getAdultsParms()
//       break;
//     case '4': getAdultsParms()
//       break;
//     case '5': getAdultsParms()
//       break;
//   }
// }


// function getNoneParms() {
//   hide("#name")
//   hide("#birthDay")
//   hide("#email")
//   hide("#postalCode")
//   hide("#city")
//   hide("#country")
//   hide("#adress")
//   hide("#phoneNr")
//   hide("#school")
//   hide("#pwd")
//   hide("#checkPwd")
// };

// function getTeenagerParms() {
//   show("#name")
//   show("#birthDay")
//   show("#email")
//   show("#postalCode")
//   show("#city")
//   show("#country")
//   show("#adress")
//   show("#phoneNr")
//   show("#school")
//   show("#pwd")
//   show("#checkPwd")
// }


// function getAdultsParms() {
//   show("#name")
//   show("#birthDay")
//   show("#email")
//   show("#postalCode")
//   show("#city")
//   show("#country")
//   show("#adress")
//   show("#phoneNr")
//   show("#pwd")
//   show("#checkPwd")
// }

// function getChildParms() {
//   show("#name")
//   show("#birthDay")
//   show("#email")
//   show("#postalCode")
//   show("#city")
//   show("#country")
//   show("#adress")
//   show("#school")
//   show("#pwd")
//   show("#checkPwd")
// }




// //Altera o id confirmar para o correspondente do butao da pagina
// $('#confirm').addEventListener('click', function(){
//     saveData();
// });


// function saveData(){

//     //So precisas de alterar os estes paramentros
//     let teenager =  {
//         "email": $('#email').value,
//         "password":$('#pwd').value,
//         "confirmPassword":$('#checkPwd').value,
//         "name":$('#name').value,
//         "birthDate":$('#birthDay').value,
//         "phoneNr": $('#phoneNr').value,
//         "city":$('#city').value,
//         "county": $('#country').value,
//         "postalCode":$('#postalCode').value,
//         "address":$('#adress').value,
//         "school":$('#school').value,
//         "role": {"idRole": 2}
//         }
//       console.log(teenager);

//       fetch.postData('teenagers', teenager);
// }







// $('#typeUser').addEventListener("change", function() {
//     if($('#typeUser').value == "addNew")
//     {
//         addActivityItem();
//     }
// });

// function addActivityItem() {
//     // ... Code to add item here
// }

































































