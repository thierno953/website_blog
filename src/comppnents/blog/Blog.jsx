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
            <h1>Skill up everyday</h1>
            <p>
            Being a developer today just might be one of the coolest jobs in the universe. It's like being a painter during the Renaissance or an astronaut during the Space Race. As web developers we are not only witnessing, but participating in daily revolutions in technology. The landscape is radically changing and inventions and discoveries are happening at an ever increasing pace. Because of this, there's almost no stability, which means that there are more opportunities than there are people to take advantage of them. It's not exactly a bad problem to have, but it also means that we can't afford to stop learning. So, to help you stay on top of your game, I've rounded up some essential learning resources web development. 
            </p>
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
