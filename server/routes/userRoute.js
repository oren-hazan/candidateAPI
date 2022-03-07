const express = require('express');
const router = express.Router();
const create = require('../controllers/userController')

router.post('/user/create', create);


module.exports = router;
