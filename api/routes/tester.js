import express from 'express'
const router = express.Router()

router.get('/api/heroes', getHeroesHandler)
/**
 * @openapi
 * '/api/heroes':
 *  get:
 *     tags:
 *     - Hero
 *     summary: Get all heroes
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
