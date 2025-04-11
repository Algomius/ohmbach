const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Tout le monde a le droit d'accéder
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Methodes disponibles
    next();
});

app.use('/api/comments', (req, res, next) => {
    const stuff = [
        {
            _id: 'obj1',
            texte: 'Mon premier commentaire',
        },
        {
            _id: 'obj2',
            texte: 'Mon second commentaire',
        }
    ];
    res.status(200).json(stuff);
});

module.exports = app;