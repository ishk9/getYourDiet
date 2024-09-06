import User from '../models/user.js';
import bcrypt from 'bcrypt';

const signupUser = async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
    console.log("Signup details: ", req.body);
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, phoneNumber, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User signed up successfully', data: user });
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
        res.status(200).json({ message: 'Login successful', data: user });
    } catch(err){
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { signupUser, loginUser };
