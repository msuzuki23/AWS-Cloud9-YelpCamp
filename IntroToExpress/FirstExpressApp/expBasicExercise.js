var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, Welcome to Express Basic Exercise");
});

// Animal Sounds
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var sound = ""
    if(animal === "pig"){
        sound = "Oink";
    } else if(animal === "cow") {
        sound = "Moo";
    } else if (animal === "dog") {
        sound = "Woof Woof";
    } else {
        sound = "silence";
    };
    res.send("The " + animal + " says '"+ sound + "'");
});



// Visiting Times:
app.get("/repeat/:word/:times", function(req, res){
   var times = req.params.times;
   var word = req.params.word;
   var phrase = "";
   if(parseInt(times,10)){
       for(var i=0; i < times; i++){
           phrase += word + " ";
        };
        res.send(phrase);
   } else {
       res.send("Sorry you have to specify the number of times in Integer");
   }
   
});


app.get("*", function(req, res){
    res.send("You are a Star!");
});



// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});