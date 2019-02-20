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
router.post("/", isLoggedIn, function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var author = {
       id: req.user._id,
       username: req.user.username
   };
   
   var newCampground = {name: name, image: image, description: desc, author: author};
   //console.log(req.user);
   //campgrounds.push(newCampground);
   Campground.create(newCampground, function(err, newlyCreated){
      if(err){
          console.log(err);
      } else { 
             //console.log(newlyCreated);
             res.redirect("/campgrounds");
      }
   });    
});

// NEW ROUTE - Shpw Form to create New Campground
router.get("/new", isLoggedIn, function(req, res){
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

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", function(req, res){
    //find and update the correct campground
    //console.log(req.body.campground);
    //console.log("body: " + req.body.id + ", Params: " + req.params.id);
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var editCampground = {name: name, image: image, description: desc};
    
    console.log(req.params.id);
    Campground.findByIdAndUpdate(req.params.id, editCampground, function(err, updatedCampground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            //console.log(updatedCampground);
            //redirect somewhere(show page)
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});







// ==========================================================================
// Middleware
// ==========================================================================
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

function checkCampgroundOwnership(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
               //console.log("Cannot Update");
               console.log(err);
               res.redirect("back");
            } else {
               //console.log("updated");
               // does not own the campground?
               //console.log(foundCampground.author.id);
               //console.log(req.user._id);
               if(foundCampground.author.id.equals(req.user._id)){
                   //res.render("campgrounds/edit", {campground: foundCampground});
                   next();
               } else {
                   //res.send("YOU DO NOT HAVE PERMISSION TO DO TAT");
                   res.redirect("back");
               }
           }
        });
    } else {
        //console.log("YOU NEED TO BE LOGGED IN TO TO THAT!!!!");
        res.redirect("back");
    }
}






// =========================================================================
module.exports = router;

