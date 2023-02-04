import axios from "axios";
const BASE_URL = "http://localhost:8080/api/auth/";
const PRIVATE_URL = "http://localhost:8080/api/private";
const config = {
    Headers: {
        "Content-type": "Application/json"
    }
}
export async function ContactFormAPI(values) {
    const URL = `${BASE_URL}contact-us`
    try {
        const response = await axios.post(URL, values, config)
        return response
    } catch (error) {
        return error.message
    }


}

export async function handleLogin(values) {
    try {
        const response = await axios.post(`${PRIVATE_URL}/admin-login`, values, config);
        return response;
    } catch (error) {

        return error.response.data.error
    }
}

export async function handleAuthVerification(token) {
    try {
        const response = await axios.get(`${PRIVATE_URL}/verify-token`, { headers: { "Authorization": `Bearer ${token}` } })
        return response
    } catch (error) {
        return error
    }


}