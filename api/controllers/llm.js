import { GoogleGenerativeAI } from "@google/generative-ai";

const formulateResponse = async (req, res) => {
    const { response, instruction } = req.body;
    console.log("Body is", req.body);
    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = "Write a story about a magic backpack.";

        const result = await model.generateContent(prompt);
        // console.log(result.response.text());
        res.status(201).json({ message: 'Response generated successfully', data: result.response.text() });
        
    } catch (err) {
        console.log("Error: ", err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { formulateResponse };