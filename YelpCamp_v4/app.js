var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    seedDB        = require("./seeds");
    
var Campground = require("./models/campground"),
    Comment    = require("./models/comment");



mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extender: true}));
app.set("view engine", "ejs");

seedDB();

// ===========================================================================
//  RESTFUL ROUTES
// ===========================================================================
app.get("/", function(req, res){
    res.render("landing");
});

// INDEX ROUTE - Show All Campgrounds
app.get("/campgrounds", function(req, res){
    //res.render("campgrounds", {campgrounds: campgrounds});
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
    
});

// CREATE ROUTE - Create a New Campground to DB
app.post("/campgrounds", function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc};
   //campgrounds.push(newCampground);
   Campground.create(newCampground, function(err, newlyCreated){
      if(err){
          console.log(err);
      } else { 
             res.redirect("/campgrounds");
      }
   });    
});

// NEW ROUTE - Shpw Form to create New Campground
app.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new");
});

// SHOW ROUTE - Show Details of One Campground
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});



// ===========================================================================
//  COMMENTS ROUTES
//============================================================================

app.get("/campgrounds/:id/comments/new", function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
                res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
    })
});




















app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server is running");
});