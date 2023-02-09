export async function contactFormValidate(values) {
  const errors = contactFormVerify({}, values);
  return errors;
}

const contactFormVerify = (error = {}, values) => {
  if (!values.name) {
    error.name = "Name required";
  } else if (values.name.length <= 2) {
    error.name = "Name should be greater than 3 characters";
  }

  if (!values.email) {
    error.email = "Email required";
  } else if (values.email.includes(" ")) {
    error.email = "Invalid email";
  } else if (values.email.length <= 2) {
    error.email = "Email should be greater than 3 characters";
  }

  if (!values.phone) {
    error.phone = "Phone required";
  } else if (values.phone.includes(" ")) {
    error.phone = "Invalid phone";
  } else if (values.phone.length < 10) {
    error.phone = "Phone number should be 10 digit";
  }

  if (!values.subject) {
    error.subject = "Subject required";
  } else if (values.subject.length <= 2) {
    error.subject = "Subject should be greater than 3 characters";
  }

  if (!values.message) {
    error.message = "Message required";
  } else if (values.message.length <= 2) {
    error.message = "Message should be greater than 3 characters";
  }
  console.log(error);
  return error;
};

export async function loginValidation(values) {
  const errors = adminLoginVerify({}, values);
  return errors;
}

const adminLoginVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = "username Required";
  } else if (values.username.length <= 3) {
    error.username = "username should be greater than 3 characters";
  }

  if (!values.password) {
    error.password = "password Required";
  } else if (values.password.length <= 6) {
    error.password = "password should be greater than 6 characters";
  }

  return error;
};
