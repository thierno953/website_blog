import React from "react";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <>
      <section className="Services">
        <div className="container topMarign">
          <div className="heading">
            <h1>Start where you are, use what you have, and do what you can.</h1>
            <p>
              One of the important skills you need to learn as a Self-taught developer is to be resourceful, my father taught me this skill when I was still very young, and I didn’t know it would take me far in life, and I want you to do the same.
            </p>
            <h3>having the ability to find clever ways to overcome difficulties.</h3>
            <p>Here are some important resources that every developer needs to know. I am not affiliated with any of it, I am just using them personally and would want to share it with you, especially to all Self-taught developer</p>
            <p>
              It is important for us developers to always be learning, to always be updated, and to continue to grow to become the best developer that we can be.
              Junior developers nowadays are lucky to have a lot of resources available online, you just have to be patient enough to find them. When I started four years ago, I didn’t even know any self-taught developer at that time, I didn’t know how to do it. I didn’t even know if it was possible until I made myself one.
              So be resourceful and take advantage to all of it, you don’t have to spend so much just to learn, to be honest, you just have to be smart and be resourceful.
            </p>
          </div>

          <div className="contain grid topMarign">
            {ServicesData.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
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

export default Services;
