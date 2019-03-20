var express = require('express');
var site = express();
var port = 3000;

site.use(express.static(__dirname + '/public'));

site.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

site.listen(port, () => console.log(`App listening on port ${port}`))