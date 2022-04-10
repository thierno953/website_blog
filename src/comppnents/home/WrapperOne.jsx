import React from "react"
import Experince from "./experence/Experince"

const WrapperOne = () => {
  const data = [
    {
      num: "520%",
      text: "AWARDS WINNING",
    },
    {
      num: "99%",
      text: "SATISFIED CLIENTS",
    },
    {
      num: "3325",
      text: "CREATIVE PROJECTS",
    },
    {
      num: "54380",
      text: "LINES OF CODE ",
    },
  ]
  return (
    <>
      <section className='Branding wrapperOne'>
        <div className='container grid1'>
          {data.map((value, index) => {
            return (
              <div className='box' key={index}>
                <h1>{value.num}</h1>
                <p>{value.text}</p>
              </div>
            )
          })}
        </div>
      </section>
      <Experince />
    </>
  )
}

export default WrapperOne