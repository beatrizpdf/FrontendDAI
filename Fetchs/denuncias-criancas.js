import * as fetch from "./functions/fetch.js"



const $ = q => {
    return document.querySelector(q);
};


//Altera o id confirmar para o correspondente do botao da pagina
$('#buttonDenunciar').addEventListener('click', function () {
    saveData();
});


function saveData() {

    //So precisas de alterar os estes paramentros
    let denounce = {
        "title":$('textareaTitulo'),
        "description":$('textareaAssunto')
    }

    console.log(denounce);
    fetch.postData('reports', denounce);
}

