var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response) {
  // Add sequelize code to find all posts, and return them to the user with res.json
  db.Burger.findAll({}).then(function(dbBurger) {
    // We have access to the todos as an argument inside of the callback function
    var hbsObject = {
      burgers: dbBurger
    };
    console.log(hbsObject);
    response.render("index", hbsObject);
  });
});

router.post("/", function(request, response) {
  db.Burger.create({
    burger_name: request.body.burger_name,
    devoured: 0
  }).then(function() {
    response.redirect("/");
  });
});

router.put("/:id", function(request, response) {

  console.log("here!!!");
  /*  
  db.Burger.update({devoured: 1},
    {
      where: {
        id: request.params.id
      }
    }).then(function() {
      response.redirect("/");
  });
  */
});

// Export routes for server.js to use.
module.exports = router;
