const { Router } = require('express');
const HttpStatus = require('http-status-codes');

const router = Router();
const baseStationService = require('../services/basestation.service');

router.post('/', async (req, res) => {
    const commands = req.body;
    try {
        const data = await baseStationService.proccesCommands(commands);
        res.json(data);
    } catch (error) {
        console.log('Error: ', error);
        res.sendStatus(HttpStatus.BAD_REQUEST);
    }
});

module.exports = router;