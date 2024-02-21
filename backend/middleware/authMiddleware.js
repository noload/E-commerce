const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");
module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  const decode = await jwt.verify(token, JWT_SECRET);
  console.log(decode);
};
