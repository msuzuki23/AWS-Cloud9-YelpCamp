var Campground = require("../models/campground");
var Comment = require("../models/comment");

var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
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
    
middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
               console.log(err);
               res.redirect("back");
            } else {
                // does user own the comment?
               if(foundComment.author.id.equals(req.user._id)){
                   next();
               } else {
                   res.redirect("back");
               }
           }
        });
    } else {
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = middlewareObj;








