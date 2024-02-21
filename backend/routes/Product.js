const { Router } = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  addProductController,
  getProductsController,
} = require("../controllers/productController");
const router = Router();

router.post("/new", authMiddleware, addProductController);
router.get("/products", authMiddleware, getProductsController);

module.exports = router;
