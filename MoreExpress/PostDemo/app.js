var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = [
    {name: "Tony", age: 18},
    {name: "Miranda", age: 19},
    {name: "Justin", age: 20},
    {name: "Pierre", age:30},
    {name: "Lily", age: "27"}
    ];

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
   res.render("friends", {friends: friends}); 
});

app.post("/addfriend", function(req, res){
    // console.log(req.body);
    var newFriend = req.body.newfriend;
    var newAge = req.body.age;
    //res.send("you are in the post request"); 
    friends.push({name: newFriend, age: newAge});
    res.redirect("/friends");
});


// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});