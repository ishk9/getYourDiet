import User from "../models/user.js";

export async function getUser(req, res){
    const isUser = await User.find({phoneNumber: req.data.phoneNumber});
    return isUser;
}
export async function updateUserById(req, res){
    await User.findIdAndUpdate(req.params.id, {FullName: "Changed"});
    return res.json({ status: 'success' });
}
export async function getUserById(req, res){
    const user = await User.findById(req.body.id);
    if(!user) return res.status(404).json({error: 'User not found'});
    return res.json(user);
}
export async function addUser(req, res){
    const body = req.body;
    if(!body || !body.phoneNumber || !body.FullName){
        return res.status(400).json({msg: "All fields are required"});
    }

    const result = await User.create({
        FullName: body.FullName,
        phoneNumber: body.PhoneNumber
    });

    return res.status(201).json({ msg: "Success"} );
}