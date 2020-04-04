const router = require("express").Router(),

router.get("/listall", (req, res) => {
  Requirements.find({}).then(requires => {
    res.json(requires);
  });
});

router.get("/list", (req, res) => {
  const diploma = req.param("diploma"),
    track = req.param("track");
  Requirements.find({ track: track, diploma: diploma }).then(requires => {
    res.json(requires);
  });
});

router.get("/delete", (req, res) => {
  const id = req.param("id");
  Requirements.remove({ _id: id })
    .then(() => {})
    .catch(error => {
      console.log(error);
    });
});

router.post("/create", (req, res) => {
  let requisiteModel = {
    track: req.body.track,
    catagory: req.body.catagory,
    name: req.body.name,
    diploma: req.body.diploma
  };

  Requirements.create(requisiteModel)
    .then(requirement => {
      res.json(requirement);
    })
    .catch(error => {
      console.log("error: create requisite", error);
    });
});

module.exports = router;
