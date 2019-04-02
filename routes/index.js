const express           = require('express');
var router              = express.Router();
const topicController   = require('../controllers/topicController');

router.get('/', topicController.getAllData);
router.post('/', topicController.createData);
router.get('/upvote/:id', topicController.upvoteData);
router.get('/downvote/:id', topicController.downvoteData);

module.exports = router;