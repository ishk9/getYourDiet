import express from 'express';
import {getUser, getUserById, addUser, updateUserById} from '../controller/user.js'

const router = express.Router();

router.get("/", getUser);

router.route("/:id").get(getUserById).patch(updateUserById);

router.post("/submit", addUser);

// router.post("/review", addReview);

// router.post("/", )

export default router;