//==================================================
//DEPENDENCIES
//==================================================

var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");


//==================================================
//ROUTES
//==================================================
app.get("/",function(req,res)
{
		res.render("home");
		});

app.get("/contact",function(req,res)
{
		res.render("contact");
		});

app.get("/collections",function(req,res)
{
		res.render("collections");
		});

app.get("/*",function(req,res)
{
		res.render("home");
		});


app.listen(process.env.PORT || 3000, process.env.IP, () =>{
	console.log('Serv3r has started');
});
	