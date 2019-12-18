const { readFileSync } = require('fs');
const path = require('path');

const express = require('express');
var HttpStatus = require('http-status-codes');

const app = express();
const infoData = readFileSync(path.join(__dirname, 'resources', 'instructions.txt'));

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(infoData);
});

app.post('/basestation', (req, res) => {
    res.sendStatus(200);
});

app.use((req, res) => {
    res.sendStatus(HttpStatus.NOT_FOUND);
})

module.exports = app;