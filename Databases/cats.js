var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app", {useNewUrlParser: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//adding a new cat to DB
// var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 6,
//     temperament: "Charmy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went Wrong!");
//     } else {
        
//         console.log("We just added cat to DB");
//         console.log(cat);
//     }
// });


// Another Method/Syntax on how create an item/cat in Mongodb

// Cat.create({
//     name: "Snow White",
//     age: 15,
//     temperament: "Bland"
// }, function(err, cat){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(cat);
//     }
// });




// retrieve cats in the DB and console.log each one
var Cat = mongoose.model("Cat", catSchema);
Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh No, ERROR!");
        console.log(err);
    } else {
        // console.log(cats);
        cats.forEach(function(cat){
            console.log(cat.name);
        })
    }
});