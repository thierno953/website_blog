import React from "react";
import { Link } from "react-router-dom";

const Wrapper = () => {
  const data = [
    {
      title: "LOOKING FOR EXCLUSIVE SERVICES?",
      heading: "Get The Best For Your Business",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <section className="Branding wrapper">
        <div className="container">
          {data.map((value, index) => {
            return (
              <div className="box" key={index}>
                <h3>{value.title}</h3>
                <h2>{value.heading}</h2>
                <p>{value.desc}</p>
                <button className='primary-btn'><Link to="/contact">Contact Us</Link></button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
