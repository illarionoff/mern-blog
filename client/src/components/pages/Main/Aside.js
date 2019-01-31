import React from "react";
import "./Aside.scss";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside__about">
        <img src="https://source.unsplash.com/200x200" alt="Profile photo" />
        <h3>Name here</h3>
      </div>
      <div className="aside__social">
        <i className="fab fa-twitter" /> <i className="fab fa-twitter" />
        <i className="fab fa-twitter" /> <i className="fab fa-twitter" />
        <i className="fab fa-twitter" />
      </div>
      <div className="aside__insta">
        <img src="https://source.unsplash.com/100x100" alt="instagram photos" />
        <img src="https://source.unsplash.com/100x100" alt="instagram photos" />
        <img src="https://source.unsplash.com/100x100" alt="instagram photos" />
        <img src="https://source.unsplash.com/100x100" alt="instagram photos" />
      </div>
      <div className="aside__youtube">
        {/* <iframe
          src="https://www.youtube.com/embed/-QCHbHnUD1Y"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        /> */}
      </div>
    </aside>
  );
}
