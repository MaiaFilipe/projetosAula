function menuLateral(){
    let valor = document.querySelector('#menuLateral').getAttribute('value');
    if(valor === "fechado"){
        document.querySelector('#menuLateral').style.display = 'block';
        document.querySelector('#menuLateral').setAttribute('value', 'aberto');
        console.log("estava "+valor+", eu abri.");
    } else {
        document.querySelector('#menuLateral').style.display = 'none';
        document.querySelector('#menuLateral').setAttribute('value', 'fechado');
        console.log("estava "+valor+", eu fechei.");
    }
}