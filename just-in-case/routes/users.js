const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
   res.sendFile(path.resolve('../capstone-proj/public/index.html'));
});

module.exports = router