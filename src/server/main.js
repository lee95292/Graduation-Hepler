const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  router = require("./route/index"),
  bodyParser = require("body-parser"),
  config = require("./config"),
  authModule = require("./module/auth"),
  cors = require("cors"),
  https = require("https"),
  fs = require("fs");

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.connectURL, { useURLParser: true });
const db = mongoose.connection;
app.use("/", express.static("public"));

mongoose.set("useCreateIndex", true);
app.set("port", process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4000", credentials: true }));
authModule.setup(app);

app.use("/", router);

// https
//   .createServer(
//     {
//       key: fs.readFileSync("keys/private.pem"),
//       cert: fs.readFileSync("keys/public.pem")
//     },
//     app
//   )
//   .listen(4000, () => {
//     console.log("listening... 443");
//   });

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
