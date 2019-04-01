const express           = require('express');
var router              = express.Router();
const topicController   = require('../controllers/topicController');

router.get('/', topicController.getAllData);
router.post('/', topicController.createData);
router.get('/upvote/:id', topicController.upvoteData);

module.exports = router;