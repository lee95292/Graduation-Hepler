const mongoose = requrie("mongoose"),
  schema = mongoose.Schema;

const completeRequirement = new schema({
  user: {
    type: schema.Types.ObjectId,
    requried: true
  },
  requirement: {
    type: schema.Types.ObjectId,
    required: true
  },
  description: {
    type: String
  }
});

const model = mongoose.model("CompleteRequirement", completeRequirement);

module.exports = model;
