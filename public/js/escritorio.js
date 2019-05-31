// comando para establecer la conexion

var socket = io();

var searchParams = new URLSearchParams(window.location.search);

var small = $('small');

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio!!');
}

var escritorio = searchParams.get('escritorio');

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function () {
    socket.emit('atenderTicket', { escritorio: escritorio }, function (atendiendo) {

        if (!atendiendo.numero === 'undefined') {
            alert('No hay tickets');
            return;
        } else {
            small.text('Ticket ' + atendiendo.numero);
        }

    });
});

