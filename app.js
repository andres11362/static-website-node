const express = require('express');
const app = express();
const port = 8080;

// TODO: require('hbs');
app.set('view engine', 'hbs');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Sitio de Andrés',
        titulo: 'Prueba de NodeJs'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });

// app.get('*', (req, res) => {
//     res.status(404);
//     res.sendFile(__dirname + '/public/404.html');
// });

app.listen(port, () => {
    console.log(`Corriendo en http://localhost:${port}`);
});