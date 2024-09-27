import express from 'express';
import Stripe from 'stripe';
import Subscription from '../models/subscription.js';
import Diet from '../models/diet.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  maxNetworkRetries: 2,
  timeout: 10000,
  telemetry: false,
});
const router = express.Router();

/**
 * @swagger
 * /subscribe/checkout:
 *   post:
 *     summary: Create a Stripe checkout session
 *     description: Creates a checkout session for purchasing subscription plans. Available plans include "single", "family", and "professional".
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               plan:
 *                 type: string
 *                 description: The subscription plan to purchase (e.g., "single", "family", "professional").
 *                 example: single
 *            
 *     responses:
 *       200:
 *         description: Successfully created the checkout session.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                   description: The URL of the Stripe Checkout session.
 *       302:
 *         description: Redirects to the Stripe Checkout page.
 *       500:
 *         description: Error in creating a session.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error creating checkout session.
 */

router.post('/checkout', async (req, res) => {
  try {
    const { plan } = req.body;
    console.log("Plan, email ", plan);
    if(!plan){
      return res.status(500).send("Invalid plan!");
    }
    let priceId = '';
    switch (plan.toLowerCase()) {

      case 'single':
        priceId = 'price_1Q0hqoSDqK3xqcuA21qyTqI7';
        break;

      case 'family':
        priceId = 'price_1Q0hr8SDqK3xqcuAmRJiTGvF';
        break;

      case 'professional':
        priceId = 'price_1Q0hrpSDqK3xqcuASUS2Dwpc';
        break;
    
      default:
        return res.status(500).send("Invalid plan!");
    }
    console.log("Price id: ", priceId);
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items:[
        {
          price:priceId,
          quantity:1
        }
      ],
      success_url: `${process.env.BASE_URL}/Home?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}`
    });
    res.status(200).send({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating checkout session');
  }
});


/**
 * @swagger
 * /subscribe/plans:
 *   get:
 *     summary: Get available subscription plans and their details from Stripe.
 *     description: Fetches all subscription plans and their details from the Stripe price catalog.
 *     responses:
 *       200:
 *         description: Successfully fetched plans from Stripe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 plans:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The ID of the plan.
 *                       name:
 *                         type: string
 *                         description: The name of the plan.
 *                       price:
 *                         type: number
 *                         description: The price of the plan in cents.
 *                       currency:
 *                         type: string
 *                         description: The currency of the plan.
 *       500:
 *         description: Error in fetching plans.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error fetching plans.
 */

router.get('/plans', async (req, res) => {
  try {
    const products = await stripe.products.list();
    // console.log("Products: ", products);
    const prices = await stripe.prices.list();
    // console.log(prices.metadata);
    const plans = products.data.map((product) => {
      const price = prices.data.find((p) => p.product === product.id);
      return {
        id: product.id,
        name: product.name,
        price: (price.unit_amount / 100).toFixed(2),
        currency: price.currency,
        metadata: product.metadata
      };
    });
    console.log(plans);

    res.status(200).json({ plans });
  } catch (error) {
    console.error('Error fetching plans:', error);
    res.status(500).json({ message: 'Error fetching plans.' });
  }
});

/**
 * @swagger
 * /subscribe/payment-status:
 *   get:
 *     summary: Check payment status and retrieve customer ID
 *     description: Verifies the payment status for a Stripe session based on the user ID and returns the customer ID along with card details and payment amount.
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID to find the Stripe checkout session.
 *     responses:
 *       200:
 *         description: Payment status and details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payment_status:
 *                   type: string
 *                   description: The status of the payment (e.g., "complete", "incomplete").
 *                   example: complete
 *                 customer_id:
 *                   type: string
 *                   description: The ID of the customer associated with the session.
 *                   example: cus_L8mIljdB3eqvLr
 *                 payment_amount:
 *                   type: number
 *                   description: The amount received for the payment (in dollars).
 *                   example: 29.99
 *       400:
 *         description: Missing or invalid user ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User ID is required.
 *       500:
 *         description: Error in retrieving payment status.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error checking payment status.
 */



router.get('/payment-status', async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).send('User ID is required.');
    }
    const sessionDetails = await Subscription.findOne({userId});
    const sessionId = sessionDetails.sessionId;
    
    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log("Session details: ", session);
    // Retrieve the payment intent associated with the session
    const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);

    // Extract card details and payment amount
    const paymentAmount = paymentIntent.amount_received;

    res.status(200).json({
      payment_status: session.payment_status,
      customer_id: session.customer,
      payment_amount: paymentAmount / 100, // Convert amount from cents to dollars
    });
  } catch (error) {
    console.error('Error checking payment status:', error);
    res.status(500).json({ message: 'Error checking payment status.' });
  }
});

/**
 * @swagger
 * /subscribe/paid:
 *   get:
 *     summary: Check if a user has paid for a subscription
 *     description: Verifies if the user has an active subscription by checking the database for the user's payment status.
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user whose payment status is being checked.
 *     responses:
 *       200:
 *         description: Payment status retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payment_status:
 *                   type: boolean
 *                   description: Indicates whether the user has an active subscription.
 *                   example: true
 *       400:
 *         description: Missing or invalid user ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User ID is required.
 *       500:
 *         description: Error in checking payment status.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error checking payment status.
 */

router.get(`/paid/:userId`, async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("userid is :", userId);
    if (!userId) {
      return res.status(400).send('User ID is required.');
    }
    const sessionDetails = await Subscription.findOne({userId});
    console.log("sessionDetails", sessionDetails);
    if(sessionDetails){
      res.status(200).json({
        paymentStatus: true,
      });
    }
    else{
      res.status(200).json({
        paymentStatus: false,
      });
    } 
  } catch (error) {
    console.error('Error checking payment status:', error);
    res.status(500).json({ message: 'Error checking payment status.' });
  }
});

router.post('/add-session-id', async (req, res) => {
  try {
    const { userId, sessionId } = req.body;

    if (!userId) {
      return res.status(400).send('User ID is required.');
    }
    const subscription = await Subscription.create({ userId, sessionId });
    console.log("Subscription", subscription);

    res.status(200).json({ message: 'Session id added!' });    
  } catch (error) {
    console.error('Error checking payment status:', error);
    res.status(500).json({ message: 'Error checking payment status.' });
  }
});

/**
 * @swagger
 * /subscribe/diet-limit/{userId}:
 *   get:
 *     summary: Check the diet plan limit for a user
 *     description: This endpoint checks the number of diet plans a user can have based on their subscription amount. The limits are determined by the payment amount in the user's Stripe session.
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user whose diet limit is being checked.
 *     responses:
 *       200:
 *         description: Successfully checked the diet limit.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that the limit check was successful.
 *                   example: Checked the limit successfully!
 *                 data:
 *                   type: boolean
 *                   description: true if the user can add more diets, false if they have reached the limit.
 *                   example: true
 *       400:
 *         description: Missing or invalid user ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that the user ID is required.
 *                   example: User ID is required.
 *       500:
 *         description: Error fetching the diet limit.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that an error occurred while fetching the diet limit.
 *                   example: Error fetching the diet limit.
 */


router.get('/diet-limit/:userId', async(req, res) => {
  try{
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).send('User ID is required.');
    }
    const sessionDetails = await Subscription.findOne({userId});
    const sessionId = sessionDetails.sessionId;

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const amnt = session.amount_total;

    var limit = 0;
    switch (amnt) {
      case 500:
        limit = 1;
        break;
      case 1200:
        limit = 4;
        break;
      case 2500:
        limit = 12;
        break;
      default:
        break;
    }
    const diets = await Diet.find({ userId: userId });
    console.log("Limit: ", limit, "Created till now: ", diets.length);
    if(diets.length >= limit){
      res.status(200).json({ message: 'Checked the limit successfully!', data: false });
    } else{
      res.status(200).json({ message: 'Checked the limit successfully!', data: true });
    }

  } catch(err){
    console.error('Error fetching the diet limit:', err);
    res.status(500).json({ message: 'Error fetching the diet limit' });
  }
});

export default router;