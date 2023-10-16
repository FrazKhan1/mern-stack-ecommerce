import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      link: "home",
      title: "Home",
    },
    {
      link: "/login",
      title: "Login",
    },
    {
      link: "product",
      title: "Product",
    },
    {
      link: "shop",
      title: "Shop",
    },
  ];

  return (
    <Wrapper bgColor="primary">
      <nav className="w-full bg-primary flex py-6 justify-between items-center navbar">
        <h1 className="text-3xl text-white">Logo</h1>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.link}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.link}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            //   src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
