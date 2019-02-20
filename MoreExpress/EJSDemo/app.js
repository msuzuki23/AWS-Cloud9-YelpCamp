var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
   var thing = req.params.thing;
   res.render("love", {thing: thing});
});

app.get("/posts", function(req, res){
   var posts = [
       {title: "Post1", author: "Mark"},
       {title: "Post2", author: "Mary"},
       {title: "Post3", author: "Anthony"}
       ];
   
   res.render("posts", {posts: posts});
    
});










// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});