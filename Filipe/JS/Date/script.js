var data = new Date();
document.querySelector('#horaAqui').innerHTML = data;
document.querySelector("#horaGerada").innerHTML = "01:01:01 01/01/01";

function hora(hash){
    console.log("Atualizando a hora!");
    
    let date = new Date();
    document.querySelector('#horaNow').innerHTML = 
    (date.getHours() < 10 ? '0' : '') + date.getHours()
    + (date.getMinutes() < 10 ? ':0' : ':') + date.getMinutes()
    + (date.getSeconds() < 10 ? ':0' : ':') + date.getSeconds()
    + ' ' 
    + (date.getDate() < 10 ? '0' : '') + date.getDate()
    + (date.getMonth() < 10 ? '/0' : '/') + (date.getMonth()) 
    + '/'
    + (date.getFullYear() < 10 ? '0' : '') + (date.getFullYear()) ;
    console.log(hash);
}

function validar(x, y){
    if(x == "" || x == " "){
        console.log(y+" deu ruim");
        return 0;
    } else {
        /*
        console.log("Valor de "+y+" é: "+(document.querySelector(y).value));
        console.log("O type de "+y+" é: "+typeof(document.querySelector(y).value));
        */

        let h = parseInt(document.querySelector(y).value);
        /*
        console.log("Valor de "+y+" é: "+(h));
        console.log("O type de "+y+" é: "+typeof(h));
        console.log("");
        */
        return h;
    }
}

function gerar(){
    var date = data;
    console.log("gerando");
    console.log(date);

    let ano =  data.setFullYear(document.querySelector('#gerarAno').value);
    let mes = data.setMonth(document.querySelector('#gerarMes').value);
    let dia = data.setDate(document.querySelector('#gerarDia').value);
    let hora = data.setHours(document.querySelector('#gerarHora').value);
    let minuto = data.setMinutes(document.querySelector('#gerarMinuto').value);
    let segundo = data.setSeconds(document.querySelector('#gerarSegundo').value);

    ano = validar(ano, '#gerarAno');
    mes = validar(mes, '#gerarMes');
    dia = validar(dia, '#gerarDia');
    hora = validar(hora, '#gerarHora');
    minuto = validar(minuto, '#gerarMinuto');
    segundo = validar(segundo, '#gerarSegundo');

    date.setFullYear(ano);
    date.setMonth(mes);
    date.setDate(dia);
    date.setHours(hora);
    date.setMinutes(minuto);
    date.setSeconds(segundo);

    document.querySelector('#horaGerada').innerHTML = 
    (date.getHours() < 10 ? '0' : '') + date.getHours()
    + (date.getMinutes() < 10 ? ':0' : ':') + date.getMinutes()
    + (date.getSeconds() < 10 ? ':0' : ':') + date.getSeconds()
    + ' ' 
    + (date.getDate() < 10 ? '0' : '') + date.getDate()
    + (date.getMonth() < 10 ? '/0' : '/') + (date.getMonth()) 
    + '/'
    + (date.getFullYear() < 10 ? '0' : '') + (date.getFullYear()) ;

    console.log(date)
    return date;
}

function somar(op){
    let date = gerar();
    console.log("somando");
    console.log(date);
    let ano = date.getFullYear();
    let mes = date.getMonth();
    let dia = date.getDate();
    let hora = date.getHours();
    let minuto = date.getMinutes();
    let segundo = date.getSeconds();
    
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

    if(op == "+"){
        date.setFullYear(date.getFullYear()+ano);
        date.setMonth(date.getMonth()+mes);
        date.setDate(date.getDate()+dia);
        date.setHours(date.getHours()+hora);
        date.setMinutes(date.getMinutes()+minuto);
        date.setSeconds(date.getSeconds()+segundo);

        document.querySelector('#gerarAno').value = data.getFullYear();
        document.querySelector('#gerarMes').value = data.getMonth();
        document.querySelector('#gerarDia').value = data.getDate();
        document.querySelector('#gerarHora').value = data.getHours();
        document.querySelector('#gerarMinuto').value = data.getMinutes();
        document.querySelector('#gerarSegundo').value = data.getSeconds();
    } else {
        date.setFullYear(date.getFullYear()-ano);
        date.setMonth(date.getMonth()-mes);
        date.setDate(date.getDate()-dia);
        date.setHours(date.getHours()-hora);
        date.setMinutes(date.getMinutes()-minuto);
        date.setSeconds(date.getSeconds()-segundo);

        document.querySelector('#gerarAno').value = data.getFullYear();
        document.querySelector('#gerarMes').value = data.getMonth();
        document.querySelector('#gerarDia').value = data.getDate();
        document.querySelector('#gerarHora').value = data.getHours();
        document.querySelector('#gerarMinuto').value = data.getMinutes();
        document.querySelector('#gerarSegundo').value = data.getSeconds();
    }

    document.querySelector('#horaGerada').innerHTML = data;
}

function zerar(){
    document.querySelector('#gerarAno').value = 1;
    document.querySelector('#gerarMes').value = 1;
    document.querySelector('#gerarDia').value = 1;
    document.querySelector('#gerarHora').value = 1;
    document.querySelector('#gerarMinuto').value = 1;
    document.querySelector('#gerarSegundo').value = 1;
    document.querySelector("#horaGerada").innerHTML = "01:01:01 01/01/01";
}


hora();
setInterval(hora, 1000);