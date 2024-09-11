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

const generateDiet = async (req, res) => {
    const { requirements } = req.body;
    console.log("Body is", req.body);
    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
            These are all the requirements. They are in a <question -> answer> format. 
            Consider them and generate a diet plan. 
            Return the diet plan in valid JSON format with keys for title, goal, frequency, activity level, allergies, meals, explanation, importantConsiderations. 
            Here are the requirements-> ${requirements}
        `;

        const result = await model.generateContent(prompt);

        // Get the response text
        const responseText = await result.response.text();

        // Log the raw response to inspect it
        console.log("Raw AI Response: ", responseText);

        // Clean up the response (remove backticks and spaces)
        const cleanedResponse = responseText.replace(/```json|```/g, '').trim(); // Remove the backticks and clean the string

        // Try parsing the cleaned response as JSON
        const jsonResponse = JSON.parse(cleanedResponse); 

        // Return the JSON-formatted response to the frontend
        res.status(201).json({ message: 'Response generated successfully', data: jsonResponse });

    } catch (err) {
        console.log("Error: ", err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};




export { formulateResponse, generateDiet };