let fechaActual = new Date(),
    diaNum = fechaActual.getDate(),
    diaSemana = fechaActual.getDay(),
    mes = fechaActual.getMonth(),
    anio = fechaActual.getFullYear(),
    hs = fechaActual.getHours(),
    min = fechaActual.getMinutes(),
    seg = fechaActual.getSeconds(),
    siglas = "AM";
const nombresDias= ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let textoFecha = document.getElementById("textoFecha"),
    textoHs = document.getElementById("horas"),
    textoMin = document.getElementById("minutos"),
    textoSeg = document.getElementById("segundos"),
    textoSiglas = document.getElementById("siglas");

textoFecha.innerHTML=`${nombresDias[diaSemana]} ${diaNum} de ${nombresMeses[mes]} del ${anio}`

if (hs >= 12) {
    hs -=12;
    siglas = "PM";
}else{
    siglas = "AM";
}
if (hs == 0) {
    hs = 12;
}
if (hs < 10) {
    hs = "0" + hs;
}
if (min < 10) {
    min = "0" + min;
}
if (seg < 10) {
    seg = "0" + seg;
}
textoHs.innerHTML = `${hs}<small class="fs-6 ps-1">hs</small>`
textoMin.innerHTML = `${min}<small class="fs-6 ps-1">min</small>`
textoSeg.innerHTML = `${seg}<small class="fs-6 ps-1">seg</small>`
textoSiglas.innerHTML = `${siglas}`