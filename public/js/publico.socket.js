// comando para establecer la conexion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function () {
    console.log('-->> conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('!! Desconectado al servidor !!');
});


socket.on('ticketsPorEscritorio', function (atendiendo) {
    var audio = new Audio('../audio/new-ticket.mp3');


    console.log(atendiendo.length);

    if (atendiendo.length > 0) {

        for (var i = 1; i <= atendiendo.length; i++) {
            $('#lblTicket' + i).text('Ticket ' + atendiendo[i - 1].numero);
            $('#lblEscritorio' + i).text('Escritorio ' + atendiendo[i - 1].escritorio);
        }
    }
});
