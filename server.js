var express = require('express');

var app = express();


app.get('/home',function(req,res){
	res.send("Welcome home ");
});

app.listen(3000,function(){

	console.log("Express server started on port",3000);
});