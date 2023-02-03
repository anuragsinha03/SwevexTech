export async function contactFormValidate(values) {
  const errors = contactFormVerify({}, values);
  return errors;
}

const contactFormVerify = (error = {}, values) => {
  if (!values.name) {
    error.name = "name Required";
  } else if (values.name.length <= 3) {
    error.name = "name should be greater than 3 characters";
  }

  if (!values.email) {
    error.email = "email Required";
  } else if (values.email.includes(" ")) {
    error.email = "Invalid email";
  } else if (values.email.length <= 3) {
    error.email = "email should be greater than 3 characters";
  }

  if (!values.phone) {
    error.phone = "phone Required";
  } else if (values.phone.includes(" ")) {
    error.phone = "Invalid phone";
  } else if (values.phone.length < 10) {
    error.phone = "Phone number should be 10 digit";
  }

  if (!values.subject) {
    error.subject = "subject Required";
  } else if (values.subject.length <= 3) {
    error.subject = "name should be greater than 3 characters";
  }

  if (!values.message) {
    error.message = "message Required";
  } else if (values.message.length <= 3) {
    error.message = "name should be greater than 3 characters";
  }
  console.log(error);
  return error;
};

export async function loginValidation(values) {
  const errors = adminLoginVerify({}, values)
  return errors
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