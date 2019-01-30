const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function validateMovieInput(data) {
  let errors = {};

  // Validate email
  data.title = !isEmpty(data.title) ? data.title : "";
  if (validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  //   Validate password
  data.body = !isEmpty(data.body) ? data.body : "";
  if (validator.isEmpty(data.body)) {
    errors.body = "Main body is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
