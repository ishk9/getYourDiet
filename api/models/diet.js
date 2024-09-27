import mongoose from "mongoose";

const dietSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    goal: {
        type: String,
        required: true
    },
    meals: [{
        meal_time: {
            type: String,
            required: true
        },
        options: [{
            type: String
        }]
    }],
    explanation: {
        type: String,
        required: true
    },
    importanConsiderations: [{
        type: String
    }]
}, { timestamps: true });

const Diet = mongoose.model('Diet', dietSchema);

export default Diet;