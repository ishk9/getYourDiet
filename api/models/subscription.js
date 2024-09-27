import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    sessionId: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
