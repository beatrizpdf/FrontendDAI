import * as fetch from "./functions/fetch.js"

const $ = q => {
    return document.querySelector(q);
};


getMateriais()

function getMateriais() {
    fetch.getData('files').then(data => {
        console.log(data);
        let txt = ''
        for (let i = 0; i < data.length; i++) {
            console.log(data[i])
            console.log(addAPIToUrl(data[i]))
            let img = addAPIToUrl(data[i])

            txt += '<div class="col-md-6"><img width="200" style="margin:10px; border-radius:10px;" src="' + img + '"></div>'
        }
        console.log(txt)


        $('#divMateriaisFamilias').innerHTML = txt;
    });
}





$('#adicionarMaterial').addEventListener("change", function () {
    console.log($('#adicionarMaterial').files);
})




$('#buttonAdd').addEventListener("click", e => {

    e.preventDefault();

    const formData = new FormData();

    console.log($('#adicionarMaterial').files);

    formData.append("file", $('#adicionarMaterial').files[0]);

    fetch.postFile('upload', formData).then(response => {
        if (response.ok) {
            Swal.fire(
                'Material adicionado com sucesso',
                '',
                'success'
            ).then((result) => {
                if (result.value) {
                    getMateriais()
                }
            })

        } else {
            Swal.fire(
                'Não foi possível adicionar o material',
                '',
                'error'
            )
        }
    })
})



function addAPIToUrl(obj) {
    let url = obj.url;
    return url.substring(0, 22) + "api/" + url.substring(22,);
}