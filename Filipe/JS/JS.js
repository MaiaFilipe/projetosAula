function alterar(quem, oque){
    document.querySelector('.imagem').setAttribute('src', quem);
    if(oque == 'Doguin'){
        console.log("entrou sendo dog");
        document.querySelector('.imagem').setAttribute('title', 'Doguin');
    } else {
        console.log("entrou sendo cat");
        document.querySelector('.imagem').setAttribute('title', 'Gatin');
    }
}

function quemE(){
    let oque = document.querySelector('.imagem').getAttribute('title');
    document.querySelector('h1').innerHTML = oque;
}