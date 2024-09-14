import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerDocs from './swagger.js';

import feedbackRoutes from './routes/feedback.js';
import userRoutes from './routes/auth.js';
import subscribeRoutes from './routes/subscription.js';
import llmRoutes from './routes/llm.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());

const allowedOrigins = ['http://localhost:3000', 'https://get-your-diet.vercel.app'];
app.use(cors({
  origin: function (origin, callback) {
    // If origin is in the allowed list, allow it
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization'
}));
app.options('*', cors());

app.use('/feedback', feedbackRoutes); 
app.use('/user', userRoutes);
app.use('/subscribe', subscribeRoutes);
app.use('/llm-response', llmRoutes);

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
