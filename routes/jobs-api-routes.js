var path = require("path");
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

//GET route for jobs view page
app.get("/api/jobs", function(req, res) {
    db.Job.findAll(function(data) {
    res.json(data);
    });
});

//POST route for jobs submission page
app.post("/api/jobs", function(req, res) {
    db.Job.create(
        req.body
    )
    .then(function(result) {
        res.json(result);
    });
});

      // DELETE route for deleting posts
  app.delete("/api/jobs/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/jobs/:id", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

};

//add in get routes for jobs by category for sort
//add in get/post routs for tentative messaging system