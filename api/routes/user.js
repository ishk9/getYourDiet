import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.get("/", async(req, res) => {
    const isUser = await User.find({phoneNumber: req.data.phoneNumber});
});

router.post("/", async(req, res) => {
    const body = req.body;
    if(!body || !body.phoneNumber || !body.FullName){
        return res.status(400).json({msg: "All fields are required"});
    }

    const result = await User.create({
        FullName: body.FullName,
        phoneNumber: body.PhoneNumber
    });

    return res.status(201).json({ msg: "Success"} );
})

export default router;