import React from "react";
import Image from "../../assets/undraw_programming_re_kg9v.svg";
import Skill from "../home/Skill";

const AboutInfo = () => {
  const data = [
    {
      title: "Thierno Barry",
      desc:
        "Junior web developer. Delighted to meet you. I create professional websites and application. I like to develop my ideas, work in team and I always try to bring my points of view, to find the solution and ready to learn new technologies. I'm quietly confident, naturally curious, and perpetually working to improve my chops one design issue at a time.",
      cover: Image,
    },
  ];
  return (
    <>
      <section className="about topMarign">
        <div className="container flex">
          {data.map((value) => {
            return (
              <>
                <div className="right">
                  <div className="img">
                    <img src={value.cover} alt="" />
                  </div>
                </div>
                <div className="left mtop">
                  <div className="heading">
                    <h3>HI, I'M </h3>
                    <h1>{value.title}</h1>
                  </div>
                  <p>{value.desc}</p>
                </div>

              </>
            );
          })}
        </div>
      </section>
      <Skill />
    </>
  );
};

export default AboutInfo;
