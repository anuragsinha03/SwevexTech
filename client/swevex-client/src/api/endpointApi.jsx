import axios from "axios";
const BASE_URL = "/api/auth/";
const PRIVATE_URL = "/api/private";
const config = {
  Headers: {
    "Content-type": "Application/json",
  },
};
export async function ContactFormAPI(values) {
  const URL = `${BASE_URL}contact-us`;
  try {
    const response = await axios.post(URL, values, config);
    return response;
  } catch (error) {
    return error.message;
  }
}

export async function SendCarrierData(values) {
  const URL = `${BASE_URL}carrier-apply`;
  try {
    const response = await axios.post(URL, values, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function handleLogin(values) {
  try {
    const response = await axios.post(
      `${PRIVATE_URL}/admin-login`,
      values,
      config
    );
    return response;
  } catch (error) {
    return error.response.data.error;
  }
}

export async function handleAuthVerification(token) {
  try {
    const response = await axios.get(`${PRIVATE_URL}/verify-token`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function getContactDetails() {
  try {
    const response = await axios.get(`${PRIVATE_URL}/get-contact-details`);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getCarrierApplyDetails() {
  try {
    const response = await axios.get(
      `${PRIVATE_URL}/get-carrier-apply-details`
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function deleteCarrierApplyDetails(id) {
  const response = await axios.delete(
    `${PRIVATE_URL}/delete-carrier-apply-details/${id}`
  );
  return response;
}

export async function ValidateEmailAndSendOtp(emailId) {
  const response = await axios.post(`${BASE_URL}send-otp`, { emailId }, config);
  return response;
}

export async function validateOTP(otp) {
  const response = await axios.post(`${BASE_URL}validate-otp`, { otp }, config);
  return response;
}

export async function loginChangePassword(password) {
  const response = await axios.put(
    `${BASE_URL}change-password`,
    { password },
    config
  );
  return response;
}
