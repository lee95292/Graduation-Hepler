const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  homeController = require("./controller/homeController"),
  errorController = require("./controller/errorController"),
  router = require("./route/index"),
  passport = require("passport");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ghelper", { useURLParser: true });

mongoose.set("useCreateIndex", true);

const db = mongoose.connection;

app.set("port", process.env.PORT || 4000);

app.use("/", router);
app.use(passport.initialize());
app.use(passport.session());

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
