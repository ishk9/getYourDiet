import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';




const signupUser = async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
    console.log("Signup details: ", req.body);
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, phoneNumber, password: hashedPassword });
        await user.save();
        console.log("User: ", user);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        console.log("Token: ", token);
        res.status(201).json({ message: 'User signed up successfully', data: user, token });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const loginUser = async(req, res) => {
    const { email, password } = req.body;
    console.log("Login details: ", req.body);
    try{
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        console.log("Token: ", token);
        res.status(200).json({ message: 'Login successful', data: user, token });
    } catch(err){
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { signupUser, loginUser };
