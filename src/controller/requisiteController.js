const Requirements = require("../model/requirment");

module.exports = {
  index: (req, res) => {
    console.log("est");
    res.json({
      test: "test"
    });
  },

  create: (req, res) => {
    // console.log(req.body, req.params.track, req.param("track"));
    // const track = req.params.track,
    //   catagory = req.params.catagory;
    console.log(req.body);
    let requisiteParams = {
      track: req.body.track,
      catagory: req.body.catagory,
      name: req.body.name,
      diploma: req.body.diploma
    };
    Requirements.create(requisiteParams)
      .then(requirement => {
        res.json(requirement);
      })
      .catch(error => {
        console.log("error: create requisite", error);
      });
  },

  list: (req, res) => {
    const diploma = req.param("diploma"),
      track = req.param("track");
    Requirements.find({ track: track, diploma: diploma }).then(requires => {
      res.json(requires);
    });
  },
  listall: (req, res) => {
    Requirements.find({}).then(requires => {
      res.json(requires);
    });
  },

  delete: (req, res) => {
    const id = req.param("id");
    Requirements.remove({ _id: id })
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  }
};
