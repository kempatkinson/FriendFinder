var path = require("path");
var friendsdata = require("../data/friends.js")
module.exports = function (app) {
    
    app.post("/api/friends", function (req, res) {
       // post survey results in database (array in friends.js)
       
        console.log("this is the post" + req.body)
        friendsdata.push(req.body)
        res.json(req.body)
       // for loop to ad   d each question to scores array

       // add MakeFriends to friends.js
    });

    app.get("/api/friends", function (req, res) {
        console.log("this is the get" + JSON.stringify(friendsdata, null, 2));
        res.json(friendsdata)
    });
    

  
};


function MakeFriends(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
}
