import React, { Component } from "react";
import axios from "axios";
import "./Article.scss";
import Blogpost from "./Blogpost";

class Article extends Component {
  state = {
    blogposts: []
  };

  setStateLoading = () => {
    this.setState({
      loading: true
    });
  };

  componentDidMount() {
    this.setStateLoading();
    axios
      .get("api/blogposts/")
      .then(res => {
        this.setState({
          blogposts: res.data,
          loading: false
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <article className="body__list">
        {this.state.blogposts.map(blogpost => (
          <Blogpost blogpost={blogpost} key={blogpost._id} />
        ))}
      </article>
    );
  }
}

export default Article;
