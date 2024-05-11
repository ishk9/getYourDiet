import { fetchDataFromLLM } from "../utils/connection";

export async function getData(req, res){
    try{
        const {data} = req.body;
        let prompt = "Formulate a diet for me keeping the following things in mind" + data;

        const response = await fetchDataFromLLM(prompt);
        console.log(response);

        res.json({success: true, message: response});
    } catch(err){
        console.log(err);
        res.json({success: false, message:"Failed to fetch data!"})
    }

}