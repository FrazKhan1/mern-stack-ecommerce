import React from "react";
import { Tabs } from "antd";
import AddProduct from "./addProduct";

const ProductData = () => {
  const items = [
    {
      key: "1",
      label: "New Product",
      children: <AddProduct />,
    },
    {
      key: "2",
      label: "Products",
      children: "2",
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" type="card" items={items} />
    </div>
  );
};

export default ProductData;
