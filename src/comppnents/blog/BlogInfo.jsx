import React from "react";

function BlogInfo({ item: { id, cover, link, title, description1 } }) {
  return (
    <>
      <div className="box" key={id}>
        {/* <div className="img">
          <img src={cover} alt="" />
        </div> */}
        <div className="text">
          <h2>{title}</h2>
          <span>{description1}</span>
          <a href={link} target="_blank">
            Read More
            <i className="fa-solid fa-arrow-right-long icon"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default BlogInfo;
