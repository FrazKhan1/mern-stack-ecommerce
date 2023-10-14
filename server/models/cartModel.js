import mongoose from "mongoose";

const schema = mongoose.Schema;

const cartSchema = new schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
  {
    timestamps: true,
  }
);

const cartModel = new mongoose.model("cart", cartSchema);

export default cartModel;
