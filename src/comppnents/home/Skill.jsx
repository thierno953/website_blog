import React from "react";

const Skill = () => {
  const data = [
    {
      title: "Every Day is a New Challenge",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.",
      para1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.",
    },
  ];
  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="heading">
            <h3> WHY CHOOSE US</h3>
            <h1>Some of my challenges</h1>
          </div>

          <div className="content flex">
            <div className="left topMarign">
              <div className="skill_flex">
                <div className="skill_background">
                  <i class="fa-solid fa-address-card"></i>
                  <h4>WHY CHOOSE US</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                    autem
                  </p>
                </div>
                <div className="skill_background">
                  <i class="fa-brands fa-amazon-pay"></i>
                  <h4>Every Day is a New Challenge</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                    autem
                  </p>
                </div>
                <div className="skill_background">
                  <i class="fa-brands fa-apple"></i>
                  <h4>WHY CHOOSE US</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                    autem
                  </p>
                </div>
                <div className="skill_background">
                  <i class="fa-solid fa-arrows-rotate"></i>
                  <h4>WHY CHOOSE US</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                    autem
                  </p>
                </div>
              </div>
            </div>
            <div className="right mtop">
              {data.map((val, index) => {
                return (
                  <div key={index}>
                    <h1>{val.title}</h1>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
