// import * as fetch from "./functions/fetch.js"
const urlBase = "http://127.0.0.1:8080/api/"


const $ = q => {
    return document.querySelector(q);
};


//Altera o id confirmar para o correspondente do butao da pagina
$('#buttonIniciar').addEventListener('click', function () {
    saveData();
});


function saveData() {

    // So precisas de alterar os estes paramentros
    let credenciais = {
        "email": $('#emailBox').value,
        "password": $('#passwordBox').value,
    }

    
    console.log(credenciais);

    (async () => {
        const settings = {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(credenciais),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        };
        try {
            const fetchResponse = await fetch(`http://127.0.0.1:8080/api/auth/signin`, settings);
            const data = await fetchResponse.json();
            console.log(data)
            console.log(data.role)
            console.log(data.userId)
            sessionStorage.setItem('id_user', data.userId);
            sessionStorage.setItem('role', data.role);
            TypeOfUserPage(data.role)
        } catch (e) {
            return e;
        }

    })()


}

function TypeOfUserPage(type) {
    switch (type) {
        case "ROLE_CHILD": window.location = "../Criancas/PaginaInicialCriancas.html"
            break;
        case "ROLE_TEENAGER": window.location = "PaginaInicialAdolescentes.html"
            break;
        case "ROLE_FAMILY": window.location = "PaginaInicialFamilias.html"
            break;
        case "ROLE_PROCHILDCOLLAB": window.location = "PaginaInicialProChild.html"
            break;
        case "ROLE_PSYCHOLOGIST": window.location = "PaginaInicialPsicologo.html"
            break;
        default:
            break;
    }
}























