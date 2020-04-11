const mongoose = require("mongoose");

const requisiteSchema = new mongoose.Schema({
  track: {
    //연구,산학트랙
    type: String,
    required: true,
  },
  catagory: {
    //이수 카테코리 :논문/발표 등
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  diploma: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  num_of_pass: {
    type: Number,
    default: 1,
  },
});

const model = mongoose.model("Requisite", requisiteSchema);

module.exports = model;
