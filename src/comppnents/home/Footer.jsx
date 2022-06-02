import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid1">
          <div className="box">
          <h1><Link to="/">Thierno</Link></h1>
            <p>Hi, i'm Junior Web Developer</p>
          </div>

          <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2>Junior Web Developer</h2>
            <div className="text">
              <p>FrontEnd</p>
              <span> React</span>
            </div>
            <div className="text">
              <p>BackEnd</p>
              <span>NodeJs</span>
            </div>
            <div className="text">
              <p>DataBase</p>
              <span>MongoDB, MySql</span>
            </div>
          </div>

          <div className="box">
            <h2>Address</h2>

            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
              <label>Brussels (Woluwe Saint Pierre)</label>
            </div>
            <div className="icon">
              <i className="fa fa-phone"></i>
              <label>Phone: +32 466 240 103</label>
            </div>
            <div className="icon">
              <i className="fa fa-envelope"></i>
              <label>Email: thiernobarry554@gmail.com</label>
            </div>
          </div>
        </div>
        <div className="legal container">
          <p>Copyright @2022. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
