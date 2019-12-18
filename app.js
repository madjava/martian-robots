const { readFileSync } = require('fs');
const path = require('path');

const express = require('express');
var HttpStatus = require('http-status-codes');

const app = express();
const infoData = readFileSync(path.join(__dirname, 'resources', 'instructions.txt'));

const baseStationController = require('./controllers/basestation');

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(infoData);
});

app.use('/basestation', baseStationController);

app.use((req, res) => {
    res.sendStatus(HttpStatus.NOT_FOUND);
})

module.exports = app;