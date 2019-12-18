const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;