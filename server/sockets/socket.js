const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control')

const ticketCtrl = new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {
        var siguiente = ticketCtrl.siguiente()

        console.log(siguiente);

        callback(siguiente);

    });

    client.emit('estadoActual', {
        actual: ticketCtrl.estadoActual()
    });

    client.emit('ticketsPorEscritorio', ticketCtrl.atendiendoPorEscritorio());

    client.on('atenderTicket', (data, callback) => {

        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'escritorio es necesario'
            });
        }
        let atender = ticketCtrl.atenderTicket(data.escritorio);

        callback(atender);

        client.broadcast.emit('ticketsPorEscritorio', ticketCtrl.atendiendoPorEscritorio());
    });

});