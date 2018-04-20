var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friendsArray = [
	{
		name: 'The Prez',
		photo: 'https://c.tribune.com.pk/2017/11/1568411-donaldtrumpdonkeyhoteyx-1511623982-407-640x480.jpg',
		scores: [
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5'
		]
	},
	{
		name: 'charicature dude',
		photo: 'https://edge.alluremedia.com.au/m/g/2016/07/TACC1157_Graham_Ribs.jpg',
		scores: [
			'5',
			'4',
			'3',
			'2',
			'1',
			'5',
			'4',
			'3',
			'2',
			'1'
		]
	}
];
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
    // res.send("work in progress from the server.js page!!");
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res){
    res.json(friendsArray);
});

app.post("/api/new", function(req, res){
    // get the data from the post 
	var data = req.body;
	// push to friends array 
	friendsArray.push(data);
	    // respond with messsage";
    res.json({
        "message": "Added New Friend!",
        "dataSent": data
    });
    
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});