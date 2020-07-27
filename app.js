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

app.get("/all",function(req,res)
{
		res.render("all");
		});

app.get("/gold",function(req,res)
{
		res.render("gold");
		});

app.get("/timeless",function(req,res)
{
		res.render("timeless");
		});

app.get("/explorer",function(req,res)
{
		res.render("explorer");
		});

app.get("/perpetual",function(req,res)
{
		res.render("perpetual");
		});

app.get("/stardustgold",function(req,res)
{
		res.render("stardustgold");
		});

app.get("/cosmographdaytona",function(req,res)
{
		res.render("cosmographdaytona");
		});

app.get("/greyscale",function(req,res)
{
		res.render("greyscale");
		});

app.get("/diamondgoldlink",function(req,res)
{
		res.render("diamondgoldlink");
		});


app.get("/wellington",function(req,res)
{
		res.render("wellington");
		});

app.get("/braun",function(req,res)
{
		res.render("braun");
		});

app.get("/nixonrosegold",function(req,res)
{
		res.render("nixonrosegold");
		});

app.get("/raymondwell",function(req,res)
{
		res.render("raymondwell");
		});

app.get("/goldsparkle",function(req,res)
{
		res.render("goldsparkle");
		});

app.get("/oldtowngold",function(req,res)
{
		res.render("oldtowngold");
		});


app.get("/*",function(req,res)
{
		res.render("home");
		});


app.listen(process.env.PORT || 3000, process.env.IP, () =>{
	console.log('Serv3r has started');
});
	