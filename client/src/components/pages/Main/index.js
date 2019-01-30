import React from "react";
import "./Main.scss";

// Components
import Article from "./Article";
import Aside from "./Aside";

export default function index() {
  return (
    <div className="main">
      <Article />
      <Aside />
    </div>
  );
}
