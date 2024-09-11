import axios from "axios";

const sendRequest = async(type, url, data, config = {}) => {
    try{
        const resp = await axios[type](url, data, config);
        console.log("Response: ", resp.data);
        return resp.data;
    }
    catch(err){
        console.log("Error sending req to backend!");
    }
}

// Feedback services
export const sendUserFeedback = async(data) => {
    return await sendRequest('post',`${process.env.NEXT_PUBLIC_API_URL}/feedback`, data);
} 

// User services
export const signup = async(data) => {
    return await sendRequest('post', `${process.env.NEXT_PUBLIC_API_URL}/user/signup`, data);
}

export const login = async(data) => {
    return await sendRequest('post', `${process.env.NEXT_PUBLIC_API_URL}/user/login`, data);
}

export const changePassword = async(data) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return await sendRequest('patch', `${process.env.NEXT_PUBLIC_API_URL}/user/change-password`, data, config);
}