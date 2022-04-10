import React from "react";
import { Link } from "react-router-dom";

function BlogInfo({ item: { id, cover, date, title, desc } }) {
  return (
    <>
      <div className="box" key={id}>
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="text">
          <span>{date}</span>
          <h2>{title}</h2>
          <p>{desc}</p>
          <Link to={`/blog/${id}`}>
            Read More
            <i className="fa-solid fa-arrow-right-long icon"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogInfo;
