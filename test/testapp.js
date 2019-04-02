const assert = require('chai').assert;
const topic  = require('../controllers/topicController');

describe('App', function(){
    it('app should return total of topic at most 20', function(){
        assert.isBelow(topic.methodGetAllData().length, 21);
    });

    it('topics list shouldn\'t empty anymore', function(){
        assert.isAtLeast(topic.methodCreateData(), 1)
    });

    it('topic votecount should be substracted by 1 ', function(){
        assert.isTrue(topic.methodDownVote(0))
    });

    it('topic votecount should be added by 1 ', function(){
        assert.isTrue(topic.methodUpVote(0))
    });
})