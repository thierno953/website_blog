import React from "react";
import Image from "../../../assets/flex-removebg-preview.png";

const About = () => {
  const data = [
    {
      title: "Knowledge sharing",
      desc1:
        "Knowledge might be power, but it’s much more powerful when it’s shared! If only one person knows how to do something, that prevents others from developing and can hinder your organisation’s progress.",
      desc2:
        "Plus, what happens if they hoard knowledge and decide to leave!? But that’s enough doom and gloom because when you manage knowledge properly and give people a platform to share and access it, you’re opening the door to a whole host of benefits! Software development is such a challenging field that it’s almost impossible to succeed in it without having some sort of support system.",
      desc3:
        "With the many popular languages, frameworks, tools, and libraries available, having someone who can guide or mentor you will significantly increase your chances of success in this field.",
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
                    <h1>Let's share.</h1>
                    <p>A place for programmers to share ideas and help each other grow. All developers are welcome to submit stories, tutorials, question</p>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>

                </div>

              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
