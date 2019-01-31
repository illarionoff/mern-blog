import { SET_POST, SET_EDIT_POST, GET_ERRORS } from "./types";
import axios from "axios";

// Set  blogpost
export const setPost = post => {
  return {
    type: SET_POST,
    payload: post
  };
};
// Set Edit blogpost
export const setEditPost = post => {
  return {
    type: SET_EDIT_POST,
    payload: post
  };
};
// Add Edit movie
export const addNewPost = (newBlogpost, history) => dispatch => {
  console.log(newBlogpost);
  axios
    .post("api/blogposts", newBlogpost)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
