import express from "express";
import { validateUser, validateLoginUser } from "../validations/auth.js";
import { signupUser, loginUser } from "../controllers/auth.js";

const router = express.Router();

router.post('/signup', validateUser, signupUser);
router.post('/login', validateLoginUser, loginUser);

/**
 * @openapi
 * '/user/signup':
 *  post:
 *     tags:
 *     - User
 *     summary: Sign up a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the user
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the user
 *                 example: "johndoe@example.com"
 *               phoneNumber:
 *                 type: string
 *                 description: Phone number of the user
 *                 example: "1234567890"
 *               password:
 *                 type: string
 *                 description: password
 *                 example: "password1"   
 *     responses:
 *       201:
 *         description: User signed up successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User signed up successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "613b6c9f5a3c5a6a3e6b9b65"
 *                     name:
 *                       type: string
 *                       example: "John Doe"
 *                     email:
 *                       type: string
 *                       example: "johndoe@example.com"
 *                     phoneNumber:
 *                       type: string
 *                       example: "1234567890"
 *                     password:
 *                       type: string
 *                       description: password
 *                       example: "password1"  
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid input data"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */


/**
 * @openapi
 * '/user/login':
 *  post:
 *     tags:
 *     - User
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the user
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 description: Password of the user
 *                 example: "password1"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login successful"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "613b6c9f5a3c5a6a3e6b9b65"
 *                     name:
 *                       type: string
 *                       example: "John Doe"
 *                     email:
 *                       type: string
 *                       example: "johndoe@example.com"
 *                     phoneNumber:
 *                       type: string
 *                       example: "1234567890"
 */
export default router;