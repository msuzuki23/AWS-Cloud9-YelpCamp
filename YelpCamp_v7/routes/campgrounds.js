var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");






// ===========================================================================
//  RESTFUL ROUTES
// ===========================================================================

// INDEX ROUTE - Show All Campgrounds
router.get("/", function(req, res){
    //console.log(req.user);
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
router.post("/", function(req, res){
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
router.get("/new", function(req, res){
    res.render("campgrounds/new");
});

// SHOW ROUTE - Show Details of One Campground
router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

module.exports = router;

