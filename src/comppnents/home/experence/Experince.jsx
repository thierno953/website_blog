import React from "react";
import "./experince.css";

const Experince = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className='progress'>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          <h4> {title}</h4>
          <h4> {done}%</h4>
        </div>
      </div>
    )
  }

  const data = [
    {
      title: "Every Day is a New Challenge",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.",
      para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.",
    },
  ]
  return (
    <>
      <section className='skill'>
        <div className='container'>
          <div className='heading'>
            <h3> WHY CHOOSE US</h3>
            <h1>Some Of My Skills</h1>
          </div>

          <div className='content flex'>
            <div className='left topMarign'>
              <Progress done='90' title='HTML' />
              <Progress done='85' title='CSS' />
              <Progress done='75' title='JAVASCRIPT' />
              <Progress done='75' title='REACT JS' />
              <Progress done='70' title='NODEJS JS' />
            </div>
            <div className='right mtop'>
              {data.map((val) => {
                return (
                  <>
                    <h1>{val.title}</h1>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experince
