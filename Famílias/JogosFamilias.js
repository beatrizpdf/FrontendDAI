const variavel=document.getElementById("firstGrayRectangleJogosFamilias");
variavel.onclick=dadosfirstrectangle;

const variavelthree = document.getElementById("buttonbackJogosFamilias");
variavelthree.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstrectangle(){
    window.location.href="AdivinhaPalavraFamilias.html" //ao carregar no botão vai para a página "CartazesAdolescentes.html"
    }
