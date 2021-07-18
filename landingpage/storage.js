
function verificar(){
    var cadastro = document.getElementById('email');


    var dados = JSON.parse(localStorage.getItem("dadosEmail"));

    if ( dados == null){
        localStorage.setItem("dadosEmail", "[]");
        dados = [];
    }
    
    var auxRegistro = {
        Email: cadastro.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosEmail", JSON.stringify(dados));
}