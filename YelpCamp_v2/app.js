var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");


mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extender: true}));
app.set("view engine", "ejs");



// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Salmon Creek",
//         image: "https://pixabay.com/get/eb30b00d21f0053ed1584d05fb1d4e97e07ee3d21cac104491f8c87ba4eeb2bf_340.jpg",
//         description: "Vivamus lobortis est non ipsum consequat mollis. Suspendisse potenti. Vestibulum et libero consequat, vestibulum sem id, suscipit leo. Donec vulputate consectetur massa sed rhoncus. Pellentesque finibus odio sit amet suscipit venenatis. Sed sapien lacus, lacinia id pretium sit amet, dignissim ut odio. Mauris vulputate viverra felis, in ultricies neque convallis eget. Aliquam vel molestie nunc, eu hendrerit tellus. Etiam venenatis ut purus vel tristique. Nullam eget efficitur magna, in dictum quam."
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND");
//             console.log(campground);
//         }
//     });

// MANUALLY CREATE AN ARRAY 
// var campgrounds = [
//     {
//         name: "Salmon Creek",
//         image: "https://pixabay.com/get/eb30b00d21f0053ed1584d05fb1d4e97e07ee3d21cac104491f8c87ba4eeb2bf_340.jpg"
//     },
//     {
//         name: "Jumpy Jumpy",
//         image: "https://pixabay.com/get/e83db3062df51c22d2524518b7444795ea76e5d004b014459df9c37aa4eab2_340.jpg"
//     },
//     {
//         name: "Lake Nice",
//         image: "https://pixabay.com/get/e83db80d2cfd053ed1584d05fb1d4e97e07ee3d21cac104491f8c87ba4eeb2bf_340.jpg"
//     },
//     {
//         name: "Piney Peak",
//         image: "https://pixabay.com/get/ea32b80828fc013ed1584d05fb1d4e97e07ee3d21cac104491f8c87ba4eeb2bf_340.jpg"
//     },
//     {
//         name: "Thunder Camp",
//         image: "https://photosforclass.com/download/flickr-8137270056"
//     },
//     {
//         name: "Granite Head",
//         image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg"
//     }
// ];




// ===========================================================================
//RESTFUL ROUTES
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
            res.render("index", {campgrounds: allCampgrounds});
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
    res.render("new");
});

// SHOW ROUTE - Show Details of One Campground
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
});




















app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server is running");
});