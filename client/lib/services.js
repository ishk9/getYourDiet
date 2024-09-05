import axios from "axios";

export const sendUserFeedback = async(data) => {
    try{
        console.log(process.env.NEXT_PUBLIC_API_URL);
        const resp = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/feedback`, data);
        return resp.data;
    }
    catch(err){
        console.log("Error sending req to backend!");
    }
} 