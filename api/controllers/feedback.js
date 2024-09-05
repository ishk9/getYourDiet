import Feedback from '../models/feedback.js';

const uploadFeedback = async (req, res) => {
    const { name, email, feedback } = req.body;
    console.log("Body is", req.body);
    try {
        const newFeedback = new Feedback({ name, email, feedback });
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { uploadFeedback };
