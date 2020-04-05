const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  router = require("./route/index"),
  bodyParser = require("body-parser"),
  config = require("../config");

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.connectURL, { useURLParser: true });
const db = mongoose.connection;

mongoose.set("useCreateIndex", true);
app.set("port", process.env.PORT || 4000);

app.use(bodyParser.json());
app.use("/", router);

require("./module/auth").setup(app);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
