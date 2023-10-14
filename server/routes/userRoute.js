import express from "express";
import {
  creatUser,
  deleteUser,
  forgetPassword,
  getAllUser,
  updateUser,
  userLogin,
  verifyOtp,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create-user", creatUser);
router.post("/user-login", userLogin);
router.get("/get-all-user", getAllUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);
router.post("/forget-password", forgetPassword);
router.post("/verify-otp", verifyOtp);

export default router;
