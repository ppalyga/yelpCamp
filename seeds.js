var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")
var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Bacon ipsum dolor amet turkey ham fatback frankfurter. Pancetta turducken jerky ground round pastrami turkey boudin. Cupim filet mignon pork chop shankle prosciutto flank. Andouille strip steak burgdoggen pastrami, ribeye pork belly fatback ham turkey capicola. Ball tip t-bone beef ribs, bresaola andouille rump fatback cow. Hamburger shank short loin ground round tongue tail. Shoulder burgdoggen porchetta andouille ribeye meatball. Pork loin ground round drumstick, pig corned beef shoulder short loin pancetta ham hock rump. Pork loin ham hock filet mignon, alcatra doner spare ribs corned beef burgdoggen flank tail salami frankfurter beef pork hamburger. Salami shank chuck alcatra leberkas, pork chop pork loin strip steak boudin. Andouille chicken shankle boudin capicola prosciutto pork hamburger kielbasa ham sausage leberkas cow ribeye. "
    },
    {
        name: "Desert Mesa",
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "Bacon ipsum dolor amet turkey ham fatback frankfurter. Pancetta turducken jerky ground round pastrami turkey boudin. Cupim filet mignon pork chop shankle prosciutto flank. Andouille strip steak burgdoggen pastrami, ribeye pork belly fatback ham turkey capicola. Ball tip t-bone beef ribs, bresaola andouille rump fatback cow. Hamburger shank short loin ground round tongue tail. Shoulder burgdoggen porchetta andouille ribeye meatball. Pork loin ground round drumstick, pig corned beef shoulder short loin pancetta ham hock rump. Pork loin ham hock filet mignon, alcatra doner spare ribs corned beef burgdoggen flank tail salami frankfurter beef pork hamburger. Salami shank chuck alcatra leberkas, pork chop pork loin strip steak boudin. Andouille chicken shankle boudin capicola prosciutto pork hamburger kielbasa ham sausage leberkas cow ribeye. "
    },
    {
        name: "Canyon Floor",
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Bacon ipsum dolor amet turkey ham fatback frankfurter. Pancetta turducken jerky ground round pastrami turkey boudin. Cupim filet mignon pork chop shankle prosciutto flank. Andouille strip steak burgdoggen pastrami, ribeye pork belly fatback ham turkey capicola. Ball tip t-bone beef ribs, bresaola andouille rump fatback cow. Hamburger shank short loin ground round tongue tail. Shoulder burgdoggen porchetta andouille ribeye meatball. Pork loin ground round drumstick, pig corned beef shoulder short loin pancetta ham hock rump. Pork loin ham hock filet mignon, alcatra doner spare ribs corned beef burgdoggen flank tail salami frankfurter beef pork hamburger. Salami shank chuck alcatra leberkas, pork chop pork loin strip steak boudin. Andouille chicken shankle boudin capicola prosciutto pork hamburger kielbasa ham sausage leberkas cow ribeye. "
    }
]

function seedDB() {
    // REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Removed campgrounds");
        }
        // ADD A FEW CAMPGROUNDS
        data.forEach(function (seed) {
            Campground.create(seed, function (err, campground) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Added campground");
                    // CREATE A COMMENT
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was Wifi",
                            author: "Homer"
                        }, function (err, comment) {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save()
                                console.log("Created new comment");
                            }
                        }
                    );
                }
            });
        });
    });
}

module.exports = seedDB;