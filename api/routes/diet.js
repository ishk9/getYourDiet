import express from 'express';
import { fetchDiets } from '../controllers/diet.js';
import { validateUserId } from "../validations/auth.js";


const router = express.Router();

router.get('/:userId', fetchDiets);
/**
 * @openapi
 * '/diet':
 *  get:
 *     tags:
 *     - Diets
 *     summary: Fetch diets for a specific user
 *     description: Retrieves a list of diets for a user based on their user ID. Requires Bearer token for authorization.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: Bearer token to authorize the request
 *         schema:
 *           type: string
 *           example: "Bearer <your_access_token>"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the user whose diets are being fetched
 *                 example: "64c1e2b2a4f1a234c6d7f0b2"
 *     responses:
 *       201:
 *         description: Diets fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Diets fetched successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "613b6c9f5a3c5a6a3e6b9b65"
 *                       userId:
 *                         type: string
 *                         example: "64c1e2b2a4f1a234c6d7f0b2"
 *                       mealType:
 *                         type: string
 *                         example: "Breakfast"
 *                       calories:
 *                         type: number
 *                         example: 500
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-09-17T10:20:30Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2023-09-18T11:21:31Z"
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


export default router