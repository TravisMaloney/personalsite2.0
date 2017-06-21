const express = require('express');
const app = express();
const engines = require('consolidate');

app.engine('html', engines.mustache);
app.set('view engine', 'html');

// NEW CODE
app.use('/public', express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

// END OF NEW CODE

app.get("/", function(req,res){
    res.render('index.html')
});

 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendfile( __dirname + req.params[0]); 
 });


app.listen(3000, () => {
	console.log('Server Started on http://localhost:3000');
	console.log('Press CTRL + C to stop server');
});

