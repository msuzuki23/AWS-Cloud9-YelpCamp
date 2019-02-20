var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Salmon Creek",
        image: "https://pixabay.com/get/eb30b00d21f0053ed1584d05fb1d4e97e07ee3d21cac104491f8c87ba4eeb2bf_340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, orci eu tincidunt convallis, odio odio elementum magna, ac aliquet felis mi a odio. Nam dapibus hendrerit tellus, et sagittis purus vestibulum eget. Aliquam scelerisque maximus erat, quis facilisis purus bibendum in. Curabitur consequat tincidunt eros bibendum hendrerit. Aliquam mattis velit nulla, ac tristique sem interdum ut. Donec vestibulum turpis hendrerit quam tincidunt, quis fringilla ex tempus. Nam consectetur ante et lacus consequat, in feugiat arcu dignissim. Nam pharetra libero venenatis auctor suscipit. Phasellus ac augue ultricies, placerat eros eget, laoreet tortor. Proin sit amet vulputate diam. Proin lacus lacus, facilisis a bibendum id, euismod sed felis."
    },
    {
        name: "Jumpy Jumpy",
        image: "https://pixabay.com/get/e83db3062df51c22d2524518b7444795ea76e5d004b014459df9c37aa4eab2_340.jpg",
        description: "Vivamus lobortis est non ipsum consequat mollis. Suspendisse potenti. Vestibulum et libero consequat, vestibulum sem id, suscipit leo. Donec vulputate consectetur massa sed rhoncus. Pellentesque finibus odio sit amet suscipit venenatis. Sed sapien lacus, lacinia id pretium sit amet, dignissim ut odio. Mauris vulputate viverra felis, in ultricies neque convallis eget. Aliquam vel molestie nunc, eu hendrerit tellus. Etiam venenatis ut purus vel tristique. Nullam eget efficitur magna, in dictum quam."
    },
    {
        name: "Lake Nice",
        image: "https://pixabay.com/get/e83db80d2cfd053ed1584d05fb1d4e97e07ee3d21cac104491f8c87ba4eeb2bf_340.jpg",
        description: "Nulla quis tortor ac libero pellentesque pulvinar. Aliquam congue sapien sit amet erat posuere, nec aliquet tortor placerat. Donec vitae facilisis est, sed malesuada mauris. Etiam porttitor est vel aliquet dignissim. Proin semper odio pharetra tellus maximus, quis semper nunc lacinia. Vestibulum et lacus sed leo accumsan faucibus quis quis augue. Nullam odio neque, vehicula vel orci vitae, pulvinar tristique metus. Aliquam erat volutpat. Quisque dignissim nec nunc sed congue. Proin a ornare felis, ac aliquet massa. Aenean non tincidunt magna, non blandit est. Nulla facilisi."
    },
    {
        name: "Piney Peak",
        image: "https://pixabay.com/get/ea32b80828fc013ed1584d05fb1d4e97e07ee3d21cac104491f8c87ba4eeb2bf_340.jpg",
        description: "Aliquam et massa finibus, varius augue at, suscipit ex. Proin viverra justo et sapien aliquet, eget consequat elit feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vehicula, augue eu consequat ultricies, libero mi cursus dui, ac pharetra nisl ante ac elit. In rhoncus malesuada congue. Praesent eleifend, lorem vel luctus dictum, leo lacus ornare augue, sed bibendum justo tellus vitae enim. Suspendisse in tristique tortor, et venenatis risus. Vestibulum mattis nulla ut orci accumsan, quis vestibulum magna tincidunt."
    },
    {
        name: "Thunder Camp",
        image: "https://photosforclass.com/download/flickr-8137270056",
        description: "Nam sit amet semper lacus. Maecenas purus nisi, commodo at consectetur a, molestie vel ex. Praesent dapibus at dolor id ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce maximus neque et urna consectetur, vel pulvinar nulla elementum. Duis a justo a magna mollis ornare ut ut eros. Maecenas id nisi vitae massa varius lacinia non et lacus. Mauris gravida ligula justo, sed ornare ligula laoreet vitae. Nulla elementum justo vitae lobortis euismod. Etiam imperdiet elit erat. Nullam fermentum rhoncus euismod. Morbi luctus leo eget sem sodales luctus. Curabitur vulputate, elit quis efficitur sagittis, sem lorem feugiat ex, non eleifend sem ex vel erat. Praesent tristique, risus quis fermentum bibendum, ex ligula fringilla nisl, et vestibulum nulla arcu ut magna."
    },
    {
        name: "Granite Head",
        image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg",
        description: "Vivamus lobortis est non ipsum consequat mollis. Suspendisse potenti. Vestibulum et libero consequat, vestibulum sem id, suscipit leo. Donec vulputate consectetur massa sed rhoncus. Pellentesque finibus odio sit amet suscipit venenatis. Sed sapien lacus, lacinia id pretium sit amet, dignissim ut odio. Mauris vulputate viverra felis, in ultricies neque convallis eget. Aliquam vel molestie nunc, eu hendrerit tellus. Etiam venenatis ut purus vel tristique. Nullam eget efficitur magna, in dictum quam."
    }
];

function seedDB() {
    //Remove All Campgrounds
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        //console.log("removed campgrounds!");
        
        //REMOVE ALL COMMENTS
        Comment.deleteMany({}, function(err){
            if(err){
                console.log(err);
            }
            //console.log("comments removed");
        
            //ADD A FEW CAMPGROUNDS
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        //console.log("added a campground");
                        
                        //ADD A FEW COMMENTS
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was Internet.",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);                               
                                    campground.save();
                                    //console.log("Created New Comment");
                                }
                        })};   
                    });
            });
        });
    });
}

module.exports = seedDB;