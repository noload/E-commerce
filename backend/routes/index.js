const { Router } = require("express");
const router = Router();
const authRoute = require("./Auth");
const productRoute = require("./Product");

router.use("/auth", authRoute);
router.use("/products", productRoute);

module.exports = router;
