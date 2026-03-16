const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.get('/json', (req, res) => {
    res.json({ mensaje: '¡Hola, mundo formato JSON!'});
    
});

app.get('/inf', (req, res) => {
    res.json({ Nombre: 'Daniel Caicedo Ortiz', Edad: '15', Institucion: 'La Salle de Campo Amor'});
});


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});