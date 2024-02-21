const { User } = require("../model");
const bcrypt = require("bcrypt");
module.exports.signUpController = async (req, res) => {
  let { firstname, lastname, email, password } = req.body;
  try {
    if (!firstname || !lastname || !email || !password) {
      res.status(404).json({
        success: false,
        message: "All field required",
        data: [],
        error: {},
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(404).json({
        success: false,
        message: "User already exist",
      });
    }
    let user = new User({ firstname, lastname, email, password });
    await user.save();
    if (user) {
      res.status(200).json({
        success: true,
        message: "User Created successfully",
        user,
        error: {},
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Something went wrong in signcontroller",
      data: [],
      error: error,
    });
  }
};

module.exports.signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(404).json({
        success: false,
        message: "All field required",
        data: [],
        error: {},
      });
    }
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User  Not Found",
      });
    }

    const passwordCheck = await user.comparePassword(password);
    if (!passwordCheck) {
      res.status(404).json({
        success: false,
        message: "Invalid crediantial",
      });
    }

    const token = await user.createJWT();
    res.status(200).json({
      success: true,
      message: "User Logged successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong in controller",
    });
  }
};
