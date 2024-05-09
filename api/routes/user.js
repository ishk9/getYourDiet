import express from 'express';
import User from '../models/user.js';
import {getUser, getUserById, addUser, updateUserById} from '../controller/user.js'

const router = express.Router();

router.get("/", getUser);

router.route("/:id").get(getUserById).patch(updateUserById);

router.post("/submit", addUser);

// router.post("/", )

export default router;