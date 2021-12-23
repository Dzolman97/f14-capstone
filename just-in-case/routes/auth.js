const router = require('express').Router();
const path = require('path');

router.get("/", (req, res) => {
   res.send("hey it's auths route")
})

module.exports = router