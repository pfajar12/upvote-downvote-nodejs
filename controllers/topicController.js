const express   = require('express');
var swig        = require('swig-templates');
var bodyParser  = require('body-parser');
var flash       = require('@avaly/connect-flash');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());

// topics in-memory
const topics = [
    {topic : 'ini adalah test 1', votecount: 312},
    {topic : 'ini adalah test 2', votecount: 222}
];

class TopicController{

    static getAllData(req, res){
        var html = swig.compileFile('templates/index.html');
        var output = html({
            topics  : topics
        });
        res.end(output);
    }

}

module.exports = TopicController;