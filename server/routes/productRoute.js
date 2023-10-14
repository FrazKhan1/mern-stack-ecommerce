import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/get-all-product", getAllProduct);
router.put("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);

export default router;
