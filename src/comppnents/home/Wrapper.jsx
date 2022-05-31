import React from "react";
import { Link } from "react-router-dom";

const Wrapper = () => {
  const data = [
    {
      heading: "Primary Objective",
      desc: "Our main goal is to become your daily tool to discover new resources and facilitate your professional growth as a developer. We are convinced that everything starts from the dedication and pleasure of doing this job.",
    },
  ];
  return (
    <>
      <section className="Branding wrapper">
        <div className="container">
          {data.map((value, index) => {
            return (
              <div className="box" key={index}>
                <h2>{value.heading}</h2>
                <p>{value.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
