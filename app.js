var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
	res.render("landing");
});

app.get("/form", function(req, res){
	res.render("form");
})

app.get("/beds", function(req, res){
	res.render("beds");
})
// app.get("/result",function(req,res){
// 	res.render("dashboard")
// })
app.get("/result/:risk/:death/:riskacc/:deathacc",function(req,res){
	res.render("dashboard",{risk:req.params.risk,death:req.params.death,riskacc:req.params.riskacc,deathacc:req.params.deathacc})
})
// app.get("/results", function(req, res){
// 	var query = req.query.search;
// 	var url = "http://www.omdbapi.com/?s=" + query +"&apikey=thewdb";
// 	request(url, function(error, response, body){
// 		if(!error && response.statusCode == 200){
// 			var data = JSON.parse(body);
// 			console.log(data);
// 			res.render("results", {data: data});
// 		}
// 	});
// });

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});