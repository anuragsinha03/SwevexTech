import axios from "axios";
const BASE_URL = "http://localhost:8080/api/auth/";
const config = {
    Headers: {
        "Content-type": "Application/json"
    }
}
export async function ContactFormAPI(values) {
    const URL = `${BASE_URL}contact-us`
    console.log(URL)
    try {
        const response = await axios.post(URL, values, config)
        return response
    } catch (error) {
        return error.message
    }


}