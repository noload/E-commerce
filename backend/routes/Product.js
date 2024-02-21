const { Router } = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  addProductController,
  getProductsController,
  getByIdController,
  getByCategoryController,
} = require("../controllers/productController");
const router = Router();

router.post("/new", authMiddleware, addProductController);
router.get("/products", authMiddleware, getProductsController);
router.get("/product/:id", authMiddleware, getByIdController);
router.get("/products/:category", authMiddleware, getByCategoryController);

module.exports = router;
