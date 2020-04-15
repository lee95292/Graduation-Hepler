const router = require("express").Router();

const userInfo = [
  {
    email: "lee95292@jbnu.ac.kr",
    name: "MyeongGyu-Lee",
    diploma: "석사",
    track: "산학",
    grade: 2,
  },
  {
    email: "changheon@jbnu.ac.kr",
    name: "Changheon-Lee",
    diploma: "박사",
    track: "산학",
    grade: 1,
  },
  {
    email: "Hyeongjung@jbnu.ac.kr",
    name: " Hyeongjung-Kim",
    diploma: "박사",
    track: "산학",
    grade: 2,
  },
];

router.get("/search/eamil/:eamil", (req, res) => {
  const { email } = req.params;
  const user = userInfo.find((info) => info.email === email);
  res.json(user);
});

router.get("/listall", (req, res) => {
  res.json(userInfo);
});

module.exports = router;
