import { GoogleGenerativeAI } from "@google/generative-ai";

const formulateResponse = async (req, res) => {
    const { question, answer } = req.body;
    console.log("Body is", req.body);
    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = answer + " is the answer to the question ->" + question + "You just have to answer in YES or NO whether the given answer can be a possible answer or not. It does not have to be accurate but all i want to know is whether it lies in the solution possibility or not. I dont want any other text from your side. Strictly reply in YES or NO";

        const result = await model.generateContent(prompt);
        console.log("Result: ", result.response.text());
        // console.log(result.response.text());
        res.status(201).json({ message: 'Response generated successfully', data: result.response.text() });
        
    } catch (err) {
        console.log("Error: ", err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { formulateResponse };