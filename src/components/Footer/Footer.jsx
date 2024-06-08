import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <span className="logo">HungryHub</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              explicabo ratione eveniet iste, laborum eum debitis laboriosam
              necessitatibus tenetur aspernatur blanditiis itaque reprehenderit
              quaerat iusto laudantium quasi rem quos? Impedit consequatur autem
              accusantium numquam vitae!
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="Facebook" />
              <img src={assets.twitter_icon} alt="Twitter" />
              <img src={assets.linkedin_icon} alt="Linkedin" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
              <li>+91-704-420-4959</li>
              <li>contact@hungryhub.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 &copy; HungryHub.com - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
