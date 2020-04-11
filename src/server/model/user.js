const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },

  diploma: {
    type: String,
  },

  grade: {
    type: Number,
  },

  track: {
    type: String,
  },
});

userSchema.plugin(passportLocalMongoose, { userFiled: "email" });
const model = mongoose.model("User", userSchema);

module.exports = model;
