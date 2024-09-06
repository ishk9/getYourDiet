import axios from "axios";

const sendRequest = async(url, data) => {
    try{
        const resp = await axios.post(url, data);
        console.log("Response: ", resp.data);
        return resp.data;
    }
    catch(err){
        console.log("Error sending req to backend!");
    }
}

// Feedback services
export const sendUserFeedback = async(data) => {
    return await sendRequest(`${process.env.NEXT_PUBLIC_API_URL}/feedback`, data);
} 

// User services
export const signup = async(data) => {
    return await sendRequest(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, data);
}

export const login = async(data) => {
    return await sendRequest(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, data);
}