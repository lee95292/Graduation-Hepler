const router = require("express").Router();
const auth = require("../../middleware/auth");

const userInfo = {
  email: "lee95292@jbnu.ac.kr",
  name: "MyeongGyu-Lee",
  diploma: "석사",
  track: "산학",
  grade: 1,
};

router.get("/check", auth.checker);

router.get("/userinfo", (req, res) => {
  res.json(userInfo);
});

router.get("/login");
module.exports = router;
