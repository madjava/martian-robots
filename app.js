const { readFileSync } = require('fs');
const path = require('path');

const express = require('express');
const HttpStatus = require('http-status-codes');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const infoData = readFileSync(path.join(__dirname, 'resources', 'instructions.txt'));

const baseStationController = require('./controllers/basestation');

app.use(cors());
app.use(helmet());

app.use('/basestation', baseStationController);

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(infoData);
});

app.use((req, res) => {
    res.sendStatus(HttpStatus.NOT_FOUND);
})

module.exports = app;