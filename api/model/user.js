import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
});


const User = mongoose.model("User", userSchema);
export default User;