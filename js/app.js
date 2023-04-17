let fechaActual = new Date(),
    diaNum = fechaActual.getDate(),
    diaSemana = fechaActual.getDay(),
    mes = fechaActual.getMonth(),
    anio = fechaActual.getFullYear();
const nombresDias= ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let textoFecha = document.getElementById("textoFecha")
textoFecha.innerHTML=`${nombresDias[diaSemana]} ${diaNum} de ${nombresMeses[mes]} del ${anio}`