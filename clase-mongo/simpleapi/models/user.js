const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  dni: {
    type: Number,
  },
  isAlive: {
    type: Boolean,
    default: false,
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User; 