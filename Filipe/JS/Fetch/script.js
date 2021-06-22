function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(resultado){
        return resultado.json();
    })
    .then(function(json){
        console.log(json);
    })
    .catch(function(error){
        console.log("Deu erro aí!");
    })
}