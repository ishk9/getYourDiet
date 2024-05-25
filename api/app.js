import express from 'express';
import cors from 'cors';
import router from "./routes/user.js";
import dataRouter from './routes/data.js';
import connectMongoDb from './connection.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes and other configurations
app.use("/user", router);
app.use("/data", dataRouter);

// connectMongoDb(process.env.MONGOURL).then(() => {
//   console.log("Connected to MongoDB");
// }).catch((err) => {
//   console.log(err);
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});