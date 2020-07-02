const { model, Schema } = require("mongoose");

const User = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  address: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    unique: true
  },
  sellItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  soldItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  buyItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  boughtItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

User.plugin(require("passport-local-mongoose"))

module.exports = model("User", User);
