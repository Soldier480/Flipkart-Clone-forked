import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (err) {
        console.log(`error while calling signup api`, err);
    }
};

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (err) {
        console.log(`error while calling signup api`, err);
        return err.response;
    }
};

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${url}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}

