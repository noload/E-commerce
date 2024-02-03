const mongoose = require("mongoose");
const { DB_URL } = require("../config/serverConfig");

mongoose.connect(DB_URL);

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  total_qnty: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    require: true,
  },
});

const User = mongoose.model("user", UserSchema);
const Product = mongoose.model("product", ProductSchema);

module.exports = {
  User,
  Product,
};
