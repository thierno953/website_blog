import React from "react";

const Skill = () => {
  const data = [
    {
      title: "About me",
      para: "I have always been passionate about technology, that's why I joined a coding bootcamp training to combine passion and employment. I would like to take advantage of this great opportunity to learn more, go further and be able to reinvent myself, once again."
    }
  ];
  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="content flex">
            <div className="left topMarign">
              <div className="skill_flex">
                <div className="skill_background">
                <i class="fa-brands fa-react"></i>
                  <h4>REACT</h4>
                  <p>
                  The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.
                  </p>
                </div>
                <div className="skill_background">
                <i class="fa-brands fa-css3"></i>
                  <h4>CSS/UI</h4>
                  <p>
                  Many websites today allow the user to change the layout of a site without changing the content. Style sheets that are stored externally allow the user to make the required changes on their own.
                  </p>
                </div>
                <div className="skill_background">
                <i class="fa-brands fa-node"></i>
                  <h4>NODEJS</h4>
                  <p>
                  JodeJs can natively serialize and deserialize JSON thanks to the fact that it uses JavaScript. The most used package manager: with Node. js you will use the npm package manager which is the most used in the world.
                  </p>
                </div>
                <div className="skill_background">
                <i class="fa-brands fa-html5"></i>
                  <h4>HTML5</h4>
                  <p>
                  HTML is used to structure the page. It tells crawlers how they should understand the page and what elements it contains
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
