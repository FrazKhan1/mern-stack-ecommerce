import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import ProductList from "../../components/ProductList";
import axios from "axios";
import { useSelector } from "react-redux";

const Home = () => {
  const [productlist, setProductList] = useState([]);
  console.log(productlist);
  const getData = async () => {
    try {
      const response = await axios.post(
        "/api/user/get-user-info-by-id",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/product/get-all-product");
      if (response.data.success) {
        setProductList(response.data.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getData();
    getProducts();
  }, []);
  const recenProducts = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 3,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 4,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 5,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 6,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  ];
  return (
    <div>
      {/* Carousel */}
      {/* <Carousel autoplay>
        <div>
          <img
            style={{ width: "100%", height: "1000px" }}
            src={slider2}
            alt="Carousel 1"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "1000px" }}
            src={slider3}
            alt="Carousel 1"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "1000px" }}
            src={slider1}
            alt="Carousel 1"
          />
        </div>
      </Carousel> */}
      {/* Product List */}
      <ProductList listTitle="Recent Products" products={productlist} />
    </div>
  );
};

export default Home;
