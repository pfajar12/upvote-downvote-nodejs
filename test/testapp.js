const assert = require('chai').assert;
const topic  = require('../controllers/topicController');

describe('App', function(){
    it('app should return total of topic at most 20', function(){
        assert.isBelow(topic.methodGetAllData().length, 21);
    });

    it('topics list won\'t empty anymore', function(){
        assert.isAtLeast(topic.methodCreateData(), 1)
    });
})