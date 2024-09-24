import Diet from "../models/diet.js";
import jwt from 'jsonwebtoken';

const fetchDiets = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = req.params.userId || decoded.userId;
        console.log("User ID from token: ", decoded.userId);

        const diets = await Diet.find({ userId: userId });

        if (!diets || diets.length === 0) {
            return res.status(404).json({ message: 'No diets found for this user.' });
        }

        console.log("Diets: ", diets);
        res.status(200).json({ message: 'Diets fetched successfully', data: diets });
    } catch (err) {
        if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Invalid or expired token.' });
        }
        console.error("Error fetching diets: ", err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { fetchDiets };