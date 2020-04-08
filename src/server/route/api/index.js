const router = require("express").Router(),
  requisiteRouter = require("./requisite"),
  authRouter = require("./auth");

router.use("/requisite", requisiteRouter);
router.use("/auth", authRouter);

module.exports = router;
