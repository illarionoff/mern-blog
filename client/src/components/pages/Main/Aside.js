import React from "react";
import "./Aside.scss";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside__about">
        <img
          className="image image-circle"
          src="https://source.unsplash.com/150x150"
          alt="Profile photo"
        />
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptas quae culpa incidunt, eum eius, doloribus sapiente facilis
          aperiam quod cupiditate! Iure unde, molestias ut velit autem dicta
          eius tempora!
        </p>
      </div>
      <div className="aside__social">
        <i className="fab fa-twitter" /> <i className="fab fa-instagram" />
        <i className="fab fa-youtube" /> <i className="fab fa-facebook-f" />
        <i className="fab fa-linkedin-in" />
      </div>
      <div className="aside__insta">
        <h3 className="title title-secondary">Instagram</h3>
        <div className="solid-line" />
        <div className="aside__insta__photo">
          <img
            src="https://source.unsplash.com/100x100"
            alt="instagram photos"
          />
          <img
            src="https://source.unsplash.com/100x100"
            alt="instagram photos"
          />
          <img
            src="https://source.unsplash.com/100x100"
            alt="instagram photos"
          />
          <img
            src="https://source.unsplash.com/100x100"
            alt="instagram photos"
          />
        </div>
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
