import User from '../models/user.js';

const signupUser = async (req, res) => {
    const { name, email, phoneNumber } = req.body;
    console.log("Body is", req.body);
    try {
        const user = new User({ name, email, phoneNumber });
        await user.save();
        res.status(201).json({ message: 'Feedback submitted successfully', data: user });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { signupUser };
