import axios from "axios";

const sendRequest = (url, data) => {
    try{
        const resp = axios.post(url, data);
        return resp.data;
    }
    catch(err){
        console.log("Error sending req to backend!");
    }
}

// Feedback services
export const sendUserFeedback = async(data) => {
    sendRequest(`${process.env.NEXT_PUBLIC_API_URL}/feedback`, data);
} 

// User services
export const signup = async(data) => {
    sendRequest(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, data);
}

export const login = async(data) => {
    sendRequest(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, data);
}