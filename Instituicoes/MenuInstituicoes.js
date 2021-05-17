const variavel = document.getElementById("buttonbackMenuInstituicoes");
variavel.onclick = goBack;

const variavelone = document.getElementById("rectangleContaMenuInstituicoes");
variavelone.onclick=dadosgreensquare;


function goBack() { //voltar para a página anterior
    window.history.back()
}

function dadosgreensquare(){
    window.location.href="ContaInstituicoes.html" //ao carregar no botão vai para a página "ContaAdolescentes.html"
}