import React, { useEffect, useState } from "react";
import "./blog.css";
import { useParams } from "react-router-dom";
import Blogdata from "./Blogdata";
import EmptyFile from "./EmptyFile";

const BlogSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = Blogdata.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <>
      <div className="section">
        <section className="container">
          {item ? (
            <div className="container_image">
              <h1 className="position">{item.title}</h1>
              <img className="image1" src={item.cover} alt={item.title} />
              <div className="single_max">
                <div className="profile">
                  <span>{item.date}</span>
                  <span>{item.name}</span>
                </div>

                <div className="info_blog">
                  <h1 className="absolute">{item.category}</h1>
                  <h2>{item.title1}</h2>
                  <p>{item.description1}</p>

                  <h2>{item.title1}</h2>
                  <p>{item.description1}</p>
                  <div className="profile_image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h2>{item.title1}</h2>
                  <p>{item.description1}</p>
                </div>
              </div>
            </div>
          ) : (
            <EmptyFile />
          )}
        </section>
      </div>
    </>
  );
};

export default BlogSingle;
