var Campground = require("../models/campground");
var Comment = require("../models/comment");

var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
               //console.log("Cannot Update");
               console.log(err);
               req.flash("error", "Campground Not Found!");
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
                   req.flash("error", "You don't have permission to do that!");
                   res.redirect("back");
               }
           }
        });
    } else {
        //console.log("YOU NEED TO BE LOGGED IN TO TO THAT!!!!");
        req.flash("error", "You need to be Logged In!")
        res.redirect("back");
    }
}
    
middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
               console.log(err);
               req.flash("error", "Comment Not Found!");
               res.redirect("back");
            } else {
                // does user own the comment?
               if(foundComment.author.id.equals(req.user._id)){
                   next();
               } else {
                   req.flash("error", "You don't have permission to do that!");
                   res.redirect("back");
               }
           }
        });
    } else {
        req.flash("error", "You need to be Logged In to do that!");
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be Logged In!");
    res.redirect("/login");
}

module.exports = middlewareObj;








