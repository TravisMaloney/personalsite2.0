const express = require('express');
const app = express();
const engines = require('consolidate');

app.engine('html', engines.mustache);
app.set('view engine', 'html');

// NEW CODE
app.use('/vendor', express.static('/vendor'));
app.use('/img', express.static('/img'));
app.use('/css', express.static('/css'));
app.use('/js', express.static('/js'));



// END OF NEW CODE

app.get("/", function(req,res){
    res.render('index.html')
});

app.listen(8080, () => {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

