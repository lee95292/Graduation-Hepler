exports.filter = (req, res, next) => {
  console.log("req.user", req.user);
  console.log("req.isAuthenticated()", req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
  } else {
    res.json({ result: false });
  }
};

exports.checker = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ result: true });
  } else {
    res.json({ result: false });
  }
};
