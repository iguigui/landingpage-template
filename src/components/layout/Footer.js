import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="fullwidth footer">
      <div className="boxes">
        <div className="box">
          <h3 className="ui header">Follow Us</h3>
          <div className="social">
            <a
              className="item social"
              href="https://www.linkedin.com/GrilledCode/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="linkedin icon"></i>
            </a>
            <a
              className="item social"
              href=" https://twitter.com/grilledcode"
              target="_blank"
              rel="noreferrer"
            >
              <i className="twitter icon"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <h3 className="ui header">HEADQUARTERS</h3>
          <p>GrilledCode</p>
          <p>Dubai, UAE</p>
          <p>info@grilledcode.io</p>
          <p>+971 56 210 86 89</p>
        </div>
      </div>
      <p style={{ marginTop: "50px", marginLeft: "30px", fontSize: "14px" }}>
        Copyright © 2023 GrilledCode. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
