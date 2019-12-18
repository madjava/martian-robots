const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
    res.status(200).json('OK');
});

module.exports = router;