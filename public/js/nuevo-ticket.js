// comando para establecer la conexion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function () {
    console.log('-->> conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('!! Desconectado al servidor !!');
});

$('button').on('click', function () {
    socket.emit('siguienteTicket', null, function (siguienteTicket) {
        label.text(siguienteTicket);
    });
});

socket.on('estadoActual', function(estado){
    label.text(estado.actual);
});
