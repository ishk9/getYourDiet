import axios from "axios";

const sendRequest = async (type, url, data = {}, config = {}) => {
    try {
        let resp;
        if (type === 'get') {
            resp = await axios.get(url, config);
        } else {
            resp = await axios[type](url, data, config);
        }
        console.log("Response: ", resp.data);
        return resp.data;
    } catch (err) {
        console.log("Error sending request to backend!", err.response?.data || err.message);
    }
};


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

export const verifyResponse = async(data) => {
    return await sendRequest('post', `${process.env.NEXT_PUBLIC_API_URL}/llm-response`, data);
}

export const generateDiet = async(data) => {
    const userId = localStorage.getItem('userId');
    data.userId = userId;
    return await sendRequest('post', `${process.env.NEXT_PUBLIC_API_URL}/llm-response/diet`, data);
}

export const getUserDetails = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return await sendRequest('get', `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`, null, config);
}

export const getDiet = async () => {
    const userId = localStorage.getItem('userId');
    console.log("Fetching diet for userId:", userId);
    return await sendRequest('get', `${process.env.NEXT_PUBLIC_API_URL}/llm-response/diet/${userId}`, null);
};
