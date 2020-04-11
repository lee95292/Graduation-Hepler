const router = require("express").Router();
const model = require("../../model");
const service = require("../../service");

router.get("/:email", (req, res) => {
  const { email } = req.params;

  model.complete.find({ userEmail: email }).then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  const { requisiteId, description, email } = req.body;

  model.complete
    .create({
      userEmail: email, //Todo: refactor user source
      requisite: requisiteId,
      description: description,
    })
    .then((data) => {
      res.json({ result: "true", complete: data });
    })
    .catch((err) => {
      console.log(err);
      res.json({ result: "false" });
    });
});

module.exports = router;
