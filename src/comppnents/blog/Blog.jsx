import React from "react";
import Blogdata from "./Blogdata";
import { useState } from "react";
import BlogInfo from "./BlogInfo";

const Blog = () => {
  const [items, setItems] = useState(Blogdata);

  return (
    <>
      <section className="blog Services">
        <div className="container topMarign">
          <div className="heading">
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>

          <div className="contain grid topMarign">
            {items.map((item, id) => {
              return <BlogInfo key={item.id} item={item} setItems={setItems} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
