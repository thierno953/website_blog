import React from "react";
import Blogdata from "./Blogdata";

const Blog = () => {
  return (
    <>
      <section className="blog Services">
        <div className="container topMarign">
          <div className="heading">
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>

          <div className="contain grid topMarign">
            {Blogdata.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <span>{val.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
