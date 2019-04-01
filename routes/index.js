const express           = require('express');
var router              = express.Router();
const topicController   = require('../controllers/topicController');

router.get('/', topicController.getAllData);
// router.get('/user/:id', topicController.getSingleData);

module.exports = router;