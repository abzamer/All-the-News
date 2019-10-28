var express = require("express");
var mongoose = require("mongoose");

//Scraping tools 
var axios = require("axios");
var cheerio = require("cheerio");

//require all models
var db = require("./models");

var PORT: 3000;

//Initialize Express
var app = express();

//parse the request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Public static folder
app.use(express.static("public"));

//if deployed, use the deployed database. otherwise use the local
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//connect to Mongo DB
Mongoose.connect(MONGODB_URI);

//Axios used to make request & grab HTML from Rotten Tomatoes News section
axios.get("https://editorial.rottentomatoes.com/").then(function(response){
    var $ = cheerio.load(response.data);
    var results = [];
})
