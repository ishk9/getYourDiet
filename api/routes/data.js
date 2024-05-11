import express from 'express';
import { getData } from '../controller/data';

const dataRouter = express.Router();

dataRouter.get('/', getData);

export default dataRouter;