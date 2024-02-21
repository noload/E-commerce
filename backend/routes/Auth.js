const { Router } = require("express");
const {
  signUpController,
  signInController,
} = require("../controllers/authController");
const router = Router();

router.post("/signup", signUpController);
router.post("/signin", signInController);

module.exports = router;
