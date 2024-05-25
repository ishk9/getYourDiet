import mongoose from "mongoose"

const reviewSchema = mongoose.Schema({
    review: {
        type: String,
        required: true,
    },
    updates: {
        type: Boolean,
        required: true,
    }
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;