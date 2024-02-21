const mongoose = require("mongoose");
const { DB_URL, JWT_SECRET } = require("../config/serverConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
mongoose.connect(DB_URL);

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare password
UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};
//JWT Token
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, JWT_SECRET, { expiresIn: "1d" });
};

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
