const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.sendStatus(200);
});

module.exports = app;