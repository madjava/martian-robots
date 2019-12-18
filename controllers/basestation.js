const { Router } = require('express');
const router = Router();
const baseStationService = require('../services/basestation.service');

router.post('/', (req, res) => {
    const commands = req.body;
    const data = baseStationService.proccesCommands(commands);
    res.json(data);
});

module.exports = router;