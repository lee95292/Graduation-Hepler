const mongoose = require("mongoose"),
  schema = mongoose.Schema;

const completeRequisite = new schema({
  userEmail: {
    type: String,
    requried: true,
  },
  requisite: {
    type: schema.Types.ObjectId,
    required: true,
  },
  description: {
    type: String,
  },
});

const model = mongoose.model("CompleteRequisite", completeRequisite);

module.exports = model;
