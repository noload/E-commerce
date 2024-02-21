const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");
module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(404).json({
      success: false,
      message: "Token not found",
    });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Auth failed",
    });
  }
};
