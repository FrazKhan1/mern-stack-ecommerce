import React from "react";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__contact">
          <section>
            <Link to={"/"} className="footer__contact--logo">
              <h1>Logo Here</h1>
            </Link>

            <nav className="footer__contact--nav">
              <Link className="footer__link" to="/">
                Home
              </Link>
            </nav>

            <p className="footer__contact--paragraph paragraph">
              Ecom is an all in one stop to fulfill your audio needs. We're a
              small team of music lovers and sound specialists who are devoted
              to helping you get the most out of personal audio. Come and visit
              our demo facility - we’re open 7 days a week.
            </p>

            <p className="footer__contact--copyright paragraph">
              Copyright 2021. All Rights Reserved
            </p>

            <div className="footer__contact--links">
              <ul>
                <li>
                  <a href="*" target="_blank">
                    <FaFacebookSquare className="footer__contact--link" />
                  </a>
                </li>

                <li>
                  <a href="*" target="_blank">
                    <FaTwitter className="footer__contact--link" />
                  </a>
                </li>

                <li>
                  <a href="*" target="_blank">
                    <FaInstagram className="footer__contact--link" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
