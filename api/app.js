import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerDocs from './swagger.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    swaggerDocs(app, PORT);
    console.log(`Server is running on port ${PORT}`);
});

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('MongoDB connected');
// }).catch(err => {
//     console.log(err);
// });