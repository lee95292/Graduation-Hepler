const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  diploy: {
    type: String,
    required: true
  },
  age: {
    type: Number
  }
});

userSchema.plugin(passportLocalMongoose, { userFiled: "email" });
const model = mongoose.model("User", userSchema);

module.exports = model;
