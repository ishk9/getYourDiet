import express from 'express'
import {validateFeedback} from '../validations/feedback.js'
import { uploadFeedback } from '../controllers/feedback.js';

const router = express.Router();

router.post('/', validateFeedback, uploadFeedback)
/**
 * @openapi
 * '/feedback':
 *  post:
 *     tags:
 *     - Feedback
 *     summary: Submit feedback from a visitor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the visitor
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the visitor
 *               feedback:
 *                 type: string
 *                 description: Feedback from the visitor
 *     responses:
 *       200:
 *         description: Feedback submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Feedback submitted successfully"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Please enter a valid email address"
 */


export default router;