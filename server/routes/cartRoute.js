import express from "express";
import {
  creatCart,
  getAllCarts,
  updateCarts,
} from "../controllers/cartController.js";

const router = express.Router();

router.post("/create-cart", creatCart);
router.get("/get-carts/:userId", getAllCarts);
router.put("/update-carts", updateCarts);

export default router;
