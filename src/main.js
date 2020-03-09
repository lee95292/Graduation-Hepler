const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  router = require("./route/index"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  session = require("express-session");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ghelper", { useURLParser: true });
const db = mongoose.connection;

mongoose.set("useCreateIndex", true);
app.set("port", process.env.PORT || 4000);

app.use(bodyParser.json());
app.use("/", router);
app.use(passport.initialize());
app.use(passport.session());
// app.use(session({ secret }));

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
