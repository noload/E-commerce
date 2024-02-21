const addProductController = async (req, res) => {
  const { name, total_qnty, category, price } = req.body;

  if (!name || !total_qnty || !category || !price) {
  }
};

module.exports = {
  addProductController,
};
