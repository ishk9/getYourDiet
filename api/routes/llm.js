import express from 'express';
import { validatellmResponse, validatellmDiet } from '../validations/llm.js';
import { formulateResponse, generateDiet, getDiet } from '../controllers/llm.js';
import { validateUserId } from "../validations/auth.js";

const router = express.Router();

router.post('/', validatellmResponse, formulateResponse);

/**
 * @openapi
 * /llm-response:
 *  post:
 *     tags:
 *     - OpenAI API
 *     summary: Generate a response from an LLM (Large Language Model) based on user input
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 description: User input to be used for the AI response
 *                 example: "What's the weather like today?"
 *               answer:
 *                 type: string
 *                 description: Answer for the above question
 *                 example: "50 degrees"
 *     responses:
 *       201:
 *         description: Response generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Response generated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     role:
 *                       type: string
 *                       example: "assistant"
 *                     content:
 *                       type: string
 *                       example: "The weather today is sunny with a slight breeze."
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid input provided"
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


router.post('/diet', validatellmDiet, generateDiet);

/**
 * @openapi
 * /llm-response:
 *  post:
 *     tags:
 *     - OpenAI API
 *     summary: Generate a response from an LLM (Large Language Model) based on user input
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 description: User input to be used for the AI response
 *                 example: "What's the weather like today?"
 *               answer:
 *                 type: string
 *                 description: Answer for the above question
 *                 example: "50 degrees"
 *     responses:
 *       201:
 *         description: Response generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Response generated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     role:
 *                       type: string
 *                       example: "assistant"
 *                     content:
 *                       type: string
 *                       example: "The weather today is sunny with a slight breeze."
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid input provided"
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


router.get('/diet/:userId', validateUserId, getDiet);
/**
 * @openapi
 * /diet/{userId}:
 *   get:
 *     tags:
 *     - Diet
 *     summary: Retrieve diet details for a user by userId
 *     description: Fetches the diet information stored in the database for a specific user based on their userId.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to fetch diet details for
 *     responses:
 *       200:
 *         description: Diet data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Diet data retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "60a2a87bc25e0b23d8e1c568"
 *                       userId:
 *                         type: string
 *                         example: "60a2a87bc25e0b23d8e1c567"
 *                       mealPlan:
 *                         type: string
 *                         example: "Low-carb meal plan"
 *                       calories:
 *                         type: number
 *                         example: 1800
 *                       protein:
 *                         type: number
 *                         example: 100
 *                       fat:
 *                         type: number
 *                         example: 50
 *                       carbs:
 *                         type: number
 *                         example: 150
 *                       date:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-09-16T14:20:30Z"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid user ID"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Authorization token required"
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized access"
 *       404:
 *         description: Diet data not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No diet data found for this user"
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

export default router;