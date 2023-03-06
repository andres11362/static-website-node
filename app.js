const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => { console.log('error:', err)});

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Sitio de Andrés',
        titulo: 'Prueba de NodeJs'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Sitio de Andrés',
        titulo: 'Prueba de NodeJs'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Sitio de Andrés',
        titulo: 'Prueba de NodeJs'
    });
});

// app.get('*', (req, res) => {
//     res.status(404);
//     res.sendFile(__dirname + '/public/404.html');
// });

app.listen(port, () => {
    console.log(`Corriendo en http://localhost:${port}`);
});