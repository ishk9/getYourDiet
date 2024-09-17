import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';




const signupUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log("Signup details: ", req.body);
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
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
const updatePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }
    console.log("Update password details: ", req.body);
    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid current password' });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        await user.save();

        console.log("Password updated for user: ", user);
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getUserDetails = async (req, res) => {
    const userId = req.params.userId;
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if (decoded.id !== userId) {
            return res.status(403).json({ error: 'Unauthorized access' });
        }

        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'User details retrieved successfully', data: user });
    } catch (err) {
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid token' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};



export { signupUser, loginUser, updatePassword, getUserDetails };
