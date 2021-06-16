var data = new Date();
document.querySelector('#horaAqui').innerHTML = data;

function hora(){
    let date = new Date();
    document.querySelector('#horaNow').innerHTML = 
    date.getHours()
    + (date.getMinutes() < 10 ? ':0' : ':') + date.getMinutes()
    + (date.getSeconds() < 10 ? ':0' : ':') + date.getSeconds()
    + ' ' + (date.getMonth() < 10 ? '0' : ':') +date.getMonth() 
    + '/'
    + date.getFullYear();
}

function validar(x, y){
    if(x == "" || x == 0 || x == " "){
        return 0;
        console.log(y);
    } else {
        console.log(y);
        console.log(typeof(y))
        return parseInt(document.querySelector(y).value);
    }
}

function somar(){
    let date = data;
    let ano = document.querySelector('#ano').value;
    let mes = document.querySelector('#mes').value;
    let dia = document.querySelector('#dia').value;
    let hora = document.querySelector('#hora').value;
    let minuto = document.querySelector('#minuto').value;
    let segundo = document.querySelector('#segundo').value;
    
    console.log("Ano: "+ano);
    console.log("Mês: "+mes);
    console.log("Dia: "+dia);
    console.log("Hora: "+hora);
    console.log("Minutos: "+minuto);
    console.log("Segundos: "+segundo);

    ano = validar(ano, '#ano');
    mes = validar(mes, '#mes');
    dia = validar(dia, '#dia');
    hora = validar(hora, '#hora');
    minuto = validar(minuto, '#minuto');
    segundo = validar(segundo, '#segundo');

    console.log(typeof(ano));
    console.log(typeof(mes));
    console.log(typeof(dia));
    console.log(typeof(hora));
    console.log(typeof(minuto));
    console.log(typeof(segundo));

    date.setFullYear(date.getFullYear()+ano);
    date.setMonth(date.getMonth()+mes);
    date.setDate(date.getDate()+dia);
    date.setHours(date.getHours()+hora);
    date.setMinutes(date.getMinutes()+minuto);
    date.setSeconds(date.getSeconds()+segundo);

    document.querySelector('#horaAqui').innerHTML = data;
}

hora();
setInterval(hora, 1000);