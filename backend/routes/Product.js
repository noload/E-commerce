const { Router } = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { addProductController } = require("../controllers/productController");
const router = Router();

router.post("/new", authMiddleware, addProductController);

module.exports = router;
