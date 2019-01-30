const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Validate email
  data.email = !isEmpty(data.email) ? data.email : "";
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //   Validate password
  data.password = !isEmpty(data.password) ? data.password : "";
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
