import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerDocs from './swagger.js';
import feedbackRoutes from './routes/feedback.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/feedback', feedbackRoutes); 


app.listen(PORT, () => {
    swaggerDocs(app, PORT);
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.log(err);
});