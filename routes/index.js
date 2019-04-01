const express           = require('express');
var router              = express.Router();
const topicController   = require('../controllers/topicController');

router.get('/', topicController.getAllData);
router.post('/', topicController.createData);
// router.get('/user/:id', topicController.getSingleData);

module.exports = router;