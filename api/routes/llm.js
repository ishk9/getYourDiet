import express from 'express';
import { validatellmResponse, validatellmDiet } from '../validations/llm.js';
import { formulateResponse, generateDiet } from '../controllers/llm.js';

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

export default router;