var swig        = require('swig-templates');

// topics in-memory
const topics = [
    {id: 1, topic: "test for mocha", votecount: 0}
];

class TopicController{

    static getAllData(req, res){
        var html = swig.compileFile('templates/index.html');
        var output = html({
            topics  : TopicController.methodGetAllData(),
            flashmsg_successaddtopic : req.flash('success-addtopic'),
            flashmsg_successupvote : req.flash('success-upvote'),
            flashmsg_successdownvote : req.flash('success-downvote'),
        });
        res.end(output);
    }

    static createData(req, res){
        var newtopic = req.body.newtopic
        TopicController.methodCreateData(newtopic);
        req.flash('success-addtopic', 'Add topic success');
        res.redirect('/');
        res.end();
    }

    static upvoteData(req, res){
        let id = req.params.id;
        // get array index of choosen data
        let index = topics.findIndex(x=> x.id==id);
        // add vote += 1
        topics[index].votecount +=1;
        req.flash('success-upvote', 'Upvote success');
        res.redirect('/');
    }

    static downvoteData(req, res){
        let id = req.params.id;
        // get array index of choosen data
        let index = topics.findIndex(x=> x.id==id);
        // add vote += 1
        topics[index].votecount -=1;
        req.flash('success-downvote', 'Downvote success');
        res.redirect('/');
    }

    static methodGetAllData(){
        // sort topics by votecount descending limit 20
        return topics.sort((a, b) => (a.votecount > b.votecount) ? -1 : 1).slice(0,20);
    }

    static methodCreateData(newtopic){
        // push to in-memory
        topics.push({
            id : topics.length +1,
            topic : newtopic,
            votecount : 0
        })

        return topics.length;
    }

    // static methodUpVote(){
    //     topics
    // }
}

module.exports = TopicController;