import Product from "../models/productModel.js";

// New Product
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    await newProduct.save();
    res.status(200).send({
      message: "Product Created Succesfully",
      success: true,
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};
// Get All Products
export const getAllProduct = async (req, res) => {
  try {
    const response = await Product.find();
    res.status(200).send({
      message: "Product Data fetch Succesfully",
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};
// Update Products
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      productTitle,
      productDescription,
      productPrice,
      productCategory,
      productBrand,
      productInventory,
      productRating,
    } = req.body;

    const response = await Product.findByIdAndUpdate(
      id,
      {
        productTitle,
        productDescription,
        productPrice,
        productCategory,
        productBrand,
        productInventory,
        productRating,
      },
      { new: true }
    );

    res.status(200).send({
      message: "Product Data Updated Successfully",
      success: true,
      data: response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};
// Delete the Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await Product.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).send({
        message: "User not found",
        success: false,
      });
    }
    res.status(200).send({
      message: "Product Deleted Successfully",
      success: true,
      data: deletedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};
