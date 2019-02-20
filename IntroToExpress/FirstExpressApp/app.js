var express = require("express");
var app = express();



// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW!");
});

//Route Pattern
app.get("/r/:subredditName", function(req, res){
    console.log(req.params);
    var reddit = req.params.subredditName;
    res.send("Welcome to Subreddit: " + reddit);
});

app.get("/r/:subredditName/comment/:id/:title/", function(req, res){
    console.log(req.params);
    var id = req.params.id;
    var title = req.params.title;
    res.send("Comments Section, id: " + id + ", Title: " + title);
});

app.get("*", function(req, res){
    res.send("You are a Star!");
});




// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});