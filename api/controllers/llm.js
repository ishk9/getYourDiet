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
        // const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // const prompt = `
        //     These are all the requirements. They are in a <question -> answer> format. 
        //     Consider them and generate a diet plan. 
        //     Return the diet plan in valid JSON format with keys for title, goal, frequency, activity level, allergies, meals, explanation, importantConsiderations. 
        //     Here are the requirements-> ${requirements}
        // `;

        // const result = await model.generateContent(prompt);

        // const responseText = await result.response.text();

        // console.log("Raw AI Response: ", responseText);

        // const cleanedResponse = responseText.replace(/```json|```/g, '').trim();
        // const jsonResponse = JSON.parse(cleanedResponse); 
        const jsonResponse = {
            "title": "Ironman Prep Diet Plan",
            "goal": "Fueling for Ironman Training",
            "frequency": "5 meals per day",
            "activity level": "Moderate",
            "allergies": "None",
            "meals": [
              {
                "meal_time": "Breakfast (7:00 AM)",
                "options": [
                  "2 cups oatmeal with 1/4 cup berries and 1/8 cup nuts",
                  "3 eggs with 1 slice whole wheat toast and 1/2 avocado",
                  "Smoothie with 1 scoop protein powder, 1/2 cup fruit, and 1/4 cup spinach"
                ]
              },
              {
                "meal_time": "Mid-Morning Snack (10:00 AM)",
                "options": [
                  "Fruit and yogurt",
                  "Trail mix",
                  "Energy bar"
                ]
              },
              {
                "meal_time": "Lunch (1:00 PM)",
                "options": [
                  "Salad with grilled chicken or fish and quinoa",
                  "Whole wheat sandwich with lean protein and vegetables",
                  "Lentil soup with a side of whole grain bread"
                ]
              },
              {
                "meal_time": "Afternoon Snack (4:00 PM)",
                "options": [
                  "Fruit and nuts",
                  "Rice cakes with peanut butter",
                  "Protein shake"
                ]
              },
              {
                "meal_time": "Dinner (7:00 PM)",
                "options": [
                  "Grilled salmon with roasted vegetables",
                  "Chicken stir-fry with brown rice",
                  "Lentil curry with cauliflower rice"
                ]
              }
            ],
            "explanation": "This diet plan focuses on providing you with the necessary nutrients to support your Ironman training. It emphasizes complex carbohydrates for energy, lean protein for muscle recovery, and healthy fats for hormone production. Five meals per day ensure consistent energy levels throughout the day.",
            "importantConsiderations": [
              "Hydration is crucial during Ironman training. Aim to drink water throughout the day.",
              "Adjust portion sizes based on your individual needs and training intensity.",
              "Listen to your body and adjust your diet as needed.",
              "Consult with a registered dietitian for personalized advice."
            ]
          }
          
        res.status(201).json({ message: 'Response generated successfully', data: jsonResponse });

    } catch (err) {
        console.log("Error: ", err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};




export { formulateResponse, generateDiet };