const express   = require('express');
var swig        = require('swig-templates');
var bodyParser  = require('body-parser');
var flash       = require('@avaly/connect-flash');


const app       = express();
app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());

// topics in-memory
const topics = [];

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