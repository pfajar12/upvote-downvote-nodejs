const express   = require('express');
var routes      = require('./routes/index');
var swig        = require('swig-templates');
const app       = express();

app.use(express.static('assets'));

app.use('/', routes);

app.get('*', (req, res) => {
    var html = swig.compileFile('templates/404.html');
    var output = html()
    res.end(output);
});

app.listen(8888, () => {
    console.log(`Server started on port 8888`);
});