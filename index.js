// Importacion de modulos nativos de Node en una constante
const express = require('express');
const path    = require('path');

// Asignacion de una variable app al modulo de express
const app = express();
const PORT = 3000;

// Se declara una ruta publica para obtener los recursos estaticos deseados
const publicPath = path.join(__dirname, './public');
app.use( express.static( publicPath ));

// Forma de abreviar la ruta que se desea abrir y que sea privada
app.get('/', (req,res) => {
    res.sendFile('./index.html', {root: 'views'});
    // Otra forma de abrir la vista seleccionada para levantar el servidor con path.resolve
    //res.sendFile(path.resolve(__dirname, './views/home.html'));
});

// Ruta a vistas y van en cascada

// Clase 10
app.get('/servidores-express', (req,res) => {
    res.sendFile('/servidores-express.html', {root: 'views/clase-10'})
});
app.get('/dh-heroes', (req,res) => {
    res.sendFile('/dh-heroes.html', {root: 'views/clase-10'})
});
app.get('/babbage', (req,res) => {
    res.sendFile('/babbage.html', {root: 'views/clase-10/dh-heroes'})
});
app.get('/berners-lee', (req,res) => {
    res.sendFile('/berners-lee.html', {root: 'views/clase-10/dh-heroes'})
});
app.get('/clarke', (req,res) => {
    res.sendFile('/clarke.html', {root: 'views/clase-10/dh-heroes'})
});
app.get('/hamilton', (req,res) => {
    res.sendFile('/hamilton.html', {root: 'views/clase-10/dh-heroes'})
});
app.get('/hopper', (req,res) => {
    res.sendFile('/hopper.html', {root: 'views/clase-10/dh-heroes'})
});
app.get('/lovelace', (req,res) => {
    res.sendFile('/lovelace.html', {root: 'views/clase-10/dh-heroes'})
});
app.get('/turing', (req,res) => {
    res.sendFile('/turing.html', {root: 'views/clase-10/dh-heroes'})
});

// Clase 11
app.get('/contenido-clase-11', (req,res) => {
    res.sendFile('/contenido-clase-11.html', {root: 'views/clase-11'})
});
app.get('/proyecto-clase-11', (req,res) => {
    res.sendFile('/proyecto-clase-11.html', {root: 'views/clase-11'})
});
app.get('/microdesafio-clase-11', (req,res) => {
    res.sendFile('/microdesafio-clase-11.html', {root: 'views/clase-11'})
});

// Clase 12
app.get('/contenido-clase-12', (req,res) => {
    res.sendFile('/contenido-clase-12.html', {root: 'views/clase-12'})
});
app.get('/proyecto-clase-12', (req,res) => {
    res.sendFile('/proyecto-clase-12.html', {root: 'views/clase-12'})
});
app.get('/microdesafio-clase-12', (req,res) => {
    res.sendFile('/microdesafio-clase-12.html', {root: 'views/clase-12'})
});



// Servidor escuchando en el puerto/PORT 3000
app.listen( PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');
});