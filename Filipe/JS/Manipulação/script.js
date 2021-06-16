function busca(){
    let achou = "Não achou!";
    let value = document.querySelector('#inputNome input').value;
    let busquei = document.querySelector('#inputBusca input').value;
    
    let posicion = value.indexOf(busquei);
    if(posicion > -1){
        achou = "Achou na posição: "+(posicion+1);
    }

    document.querySelector('#boxText').innerHTML = 
    "Você buscou: "+busquei
    +"</br>"
    +"No texto: "+value
    +"</br>"
    +achou;
}

function sub(){
    let texto = document.querySelector('#inputNome input').value;
    let busca = document.querySelector('#inputBusca input').value;
    let sub = document.querySelector('#inputSub input').value;

    console.log(busca);
    console.log(sub);
    texto = texto.replace(busca, sub);
    console.log(texto);

    document.querySelector('#inputNome input').value = texto;

    document.querySelector('#boxText').innerHTML = 
    "Você alterou o texto para: "+texto;
}

function uper(x){
    let texto = document.querySelector('#inputNome input').value;
    let font = x;
    if(x === "up"){
        texto = texto.toUpperCase();

        document.querySelector('#inputNome input').value = texto;
        document.querySelector('#boxText').innerHTML = 
        "Você aplicou Upper Case no seu texto";

        document.querySelector('#buttonUpper').value = "low";
        document.querySelector('#buttonUpper').innerHTML = "Lower Case";
    } else {
        texto = texto.toLowerCase();

        document.querySelector('#inputNome input').value = texto;
        document.querySelector('#boxText').innerHTML = 
        "Você aplicou Lower Case no seu texto";

        document.querySelector('#buttonUpper').value = "up";
        document.querySelector('#buttonUpper').innerHTML = "Upper Case";
    }

    console.log(x);
}

function trim(){
    let texto = document.querySelector('#inputNome input').value;
    texto = texto.trim();
    document.querySelector('#inputNome input').value = texto;
    document.querySelector('#boxText').innerHTML = 
    "Você retirou os espaços do seu texto";
}