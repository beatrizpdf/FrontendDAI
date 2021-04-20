const variavel=document.getElementById("firstRoseRectangleJogosCrianças");
variavel.onclick=dadosfirstrectangle;

const variavelone=document.getElementById("secondRoseRectangleJogosCrianças");
variavelone.onclick=dadossecondrectangle;

const variaveltwo = document.getElementById("buttonbackJogosCrianças");
variaveltwo.onclick = goBack;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosfirstrectangle(){
    window.location.href="Cartazes.html" //ao carregar no botão vai para a página "Cartazes.html"
    }

function dadossecondrectangle(){
    window.location.href="SopaLetras.html" //ao carregar no botão vai para a página "SopaLetras.html"
    }