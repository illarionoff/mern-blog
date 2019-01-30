const isEmpty = require("./isEmpty");
const Validator = require("validator");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Validate email
  data.email = !isEmpty(data.email) ? data.email : "";
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //   Validate password
  data.password = !isEmpty(data.password) ? data.password : "";
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Between 6 and 30 characters";
  }

  // Validate password2
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password is required";
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
