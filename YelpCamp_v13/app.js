var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride = require("method-override"),
    seedDB          = require("./seeds");

// Requiring Models    
var Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    User       = require("./models/user");

// Requiring Routes    
var campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes    = require("./routes/comments"),
    indexRoutes      = require("./routes/index");


mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true}); //DB Connection
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//seedDB();     // SEED THE DATABASE

// ===========================================================================
// PASSPORT CONFIGURATION
// ===========================================================================

app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ==========================================================================
// MIDDLEWARE to enable disable Login Buttons on Navbar
// =========================================================================
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


// ==========================================================================
// ROUTES
// ==========================================================================

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


// ===========================================================================
// START SERVER
// ===========================================================================

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server is running");
});