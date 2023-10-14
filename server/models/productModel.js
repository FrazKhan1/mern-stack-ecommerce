import mongoose from "mongoose";

const schema = mongoose.Schema;

const productSchema = new schema(
  {
    productTitle: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    productBrand: {
      type: String,
      required: true,
    },
    productInventory: {
      type: Number,
      required: true,
    },
    productRating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = new mongoose.model("products", productSchema);

export default productModel;
