import React from "react";
import Blogdata from "./Blogdata";

const Blog = () => {
  return (
    <>
      <section className="blog Services">
        <div className="container topMarign">
          <div className="heading">
            <h1>Be a part of</h1>
            <p>Communities help developers connect with others who share the same experience, failures, and successes within the industry. Here is a list of some of the best online communities for software developers. </p>
          </div>

          <div className="contain grid topMarign">
            {Blogdata.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <span>{val.desc}</span>
                    <a href={val.link} target="_blank">Check it out →</a>
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
