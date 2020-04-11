const router = require("express").Router();
const model = require("../../model");
const auth = require("../../middleware/auth");

router.get("/listall", (req, res) => {
  model.requisite.find({}).then((requisites) => {
    res.json(requisites);
  });
});

router.get("/list/:track/:diploma", (req, res) => {
  const { diploma, track } = req.params;
  model.requisite
    .find({ track: track, diploma: diploma })
    .then((requisites) => {
      res.json(requisites);
    });
});

router.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  model.requisite
    .remove({ _id: id })
    .then(() => {
      res.json({ removed: true });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/create", (req, res) => {
  //track, catagory, name, diploma
  model.requisite
    .create({ ...req.body })
    .then((requisite) => {
      res.json(requisite);
    })
    .catch((error) => {
      console.log("error: create requisite", error);
      res.json("false");
    });
});

module.exports = router;
