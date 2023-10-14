import bodyParser from "body-parser";
import express from "express";
import dbConfig from "./config/dbConfig.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRoute from "../routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";

const app = express();

app.use(bodyParser.json());
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
