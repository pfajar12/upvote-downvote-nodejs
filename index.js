const express   = require('express');
var routes      = require('./routes/index');
var swig        = require('swig-templates');
var bodyParser  = require('body-parser');
var session     = require('express-session');
var flash       = require('@avaly/connect-flash');
const app       = express();
let port        = process.env.PORT;
if(port == null || port == ""){
    port = 8000;
}

app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: "itsasecret"}));
app.use(flash());

app.use('/', routes);

app.get('*', (req, res) => {
    var html = swig.compileFile('templates/404.html');
    var output = html()
    res.end(output);
});

app.listen(port, () => {
    console.log(`Server started on port `+port);
});