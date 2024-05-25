import express from 'express';
import { getData } from '../controller/data.js'

const dataRouter = express.Router();

dataRouter.post('/', getData);

export default dataRouter;