import express from 'express'
import {validateFeedback} from '../validations/feedback.js'
import { uploadFeedback } from '../controllers/feedback.js';

const router = express.Router();

router.post('/', validateFeedback, uploadFeedback)
/**
 * @openapi
 * '/feedback':
 *  get:
 *     tags:
 *     - Feedback
 *     summary: Submit the feedback of a visitor
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */

export default router;