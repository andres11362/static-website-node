const http = require('http');

const server = http.createServer( (req, res) => {
    // res.writeHead(404);

    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');

    // res.writeHead(200, { 'Content-Type': 'application/csv'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Andrés'
    // }

    // res.write( 'id, nombre\n' );
    // res.write( '1, Juan\n');
    // res.write( '2, Andrés\n');
    // res.write( '3, Carolina\n');
    // res.write( '4, Johana\n');
    res.write( 'Hola mundo' );
    res.end();
});

server.listen( 8080 );

console.log('Escuchando en el puerto', 8080);
