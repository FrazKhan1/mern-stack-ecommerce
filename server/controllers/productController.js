import Product from "../models/productModel.js";

// New User
export const createProduct = async (req, res) => {
  try {
    const {
      productTitle,
      productDescription,
      productPrice,
      productCategory,
      productBrand,
      productInventory,
      productRating,
    } = req.body;
    if (
      (!productTitle,
      !productDescription,
      !productPrice,
      !productCategory,
      !productBrand,
      !productInventory,
      !productRating)
    ) {
      return res
        .status(400)
        .send({ message: "Please enter all fields", success: false });
    }

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
// Get All User
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
// Update User
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
// Delete the User
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
