const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema({
  track: {
    //연구,산학트랙
    type: String,
    required: true
  },
  catagory: {
    //이수 카테코리 :논문/발표 등
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  diploma: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

const model = mongoose.model("Requirement", requirementSchema);

module.exports = model;
