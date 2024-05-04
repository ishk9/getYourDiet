import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());

// Routes and other configurations


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});