const express = require('express');
const router = express.Router();
const multer = require('multer');

router.post('/create', (req,res) => {
    res.send("Submit successful");
});

module.exports = router;