var express = require("express"),
	bodyParser =- require("body-parser"),
	app = express(),
	_ =require("underscore");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());\
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/view/index.html');
});



var newPost = ("");
app.post("/newPost");