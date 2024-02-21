const { Product } = require("../model");

const addProductController = async (req, res) => {
  try {
    const { name, total_qnty, category, price } = req.body;

    if (!name || !total_qnty || !category || !price) {
      res.status(404).json({
        success: false,
        message: "All field required",
      });
    }

    const product = await Product.create(req.body);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "something went wrong in add product controller",
    });
  }
};

const getProductsController = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      message: "Product detail fetched succesfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Something went wrong in get product controller",
    });
  }
};

const getByIdController = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    res.status(200).json({
      success: true,
      message: "Product detail fetched succesfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something wen wrong to get product based on id",
    });
  }
};

const getByCategoryController = async (req, res) => {
  const category = req.params.category;
  console.log(category);
  try {
    const product = await Product.find({ category: category });
    res.status(200).json({
      success: true,
      message: "Product detail fetched succesfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something wen wrong to get product based on id",
    });
  }
};

module.exports = {
  addProductController,
  getProductsController,
  getByIdController,
  getByCategoryController,
};
