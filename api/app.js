import express from 'express';
import cors from 'cors';
import router from "./routes/user.js";
import connectMongoDb from './connection.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes and other configurations
app.use("/user", router);

// connectMongoDb(process.env.MONGOURL);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});