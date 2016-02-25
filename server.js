var express = require('express'),
    app = express();

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});

