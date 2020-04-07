exports.filter = (req, res, next) => {
  console.log("req.isAuthenticated()", req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
  } else {
    res.json({ result: "fail" });
  }
};

exports.checker = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ result: "success" });
  } else {
    res.json({ result: "fail" });
  }
};
