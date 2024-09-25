import express from 'express';
import Stripe from 'stripe';

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
    const {plan} = req.body;
    console.log("Plan is ", plan);
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
    console.log("Session is", session);
    res.status(200).send({url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating checkout session');
  }
});

/**
 * @swagger
 * /subscribe/complete:
 *   get:
 *     summary: Handle successful checkout
 *     description: Completes the payment and returns a success message.
 *     responses:
 *       200:
 *         description: Payment was successful.
 *       400:
 *         description: Invalid session ID.
 */
router.get('/complete', async (req, res) => {
  try {
    const result = await Promise.all([
      stripe.checkout.sessions.retrieve(req.query.session_id, {
        expand: ['payment_intent.payment_method'],
      }),
      stripe.checkout.sessions.listLineItems(req.query.session_id),
    ]);

    console.log(JSON.stringify(result));

    res.send('Your payment was successful');
  } catch (error) {
    console.error(error);
    res.status(400).send('Invalid session ID');
  }
});

/**
 * @swagger
 * /subscribe/cancel:
 *   get:
 *     summary: Handle checkout cancellation
 *     description: Redirects to the home page if payment is canceled.
 *     responses:
 *       302:
 *         description: Redirects to the home page.
 */
router.get('/cancel', (req, res) => {
  res.redirect('/');
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
 * /subscribe/payment-methods:
 *   get:
 *     summary: Fetch payment methods for a customer
 *     description: Fetches all payment methods associated with a specific customer.
 *     parameters:
 *       - in: query
 *         name: customerId
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer ID.
 *     responses:
 *       200:
 *         description: Successfully fetched payment methods.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 paymentMethods:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The ID of the payment method.
 *                       brand:
 *                         type: string
 *                         description: The brand of the card.
 *                       last4:
 *                         type: string
 *                         description: The last four digits of the card.
 *                       exp_month:
 *                         type: integer
 *                         description: The expiration month of the card.
 *                       exp_year:
 *                         type: integer
 *                         description: The expiration year of the card.
 *       500:
 *         description: Error in fetching payment methods.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error fetching payment methods.
 */

router.get('/payment-methods', async (req, res) => {
  try {
    const { customerId } = req.query;

    if (!customerId) {
      return res.status(400).json({ message: 'Customer ID is required' });
    }

    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    });

    const formattedMethods = paymentMethods.data.map(method => ({
      id: method.id,
      brand: method.card.brand,
      last4: method.card.last4,
      exp_month: method.card.exp_month,
      exp_year: method.card.exp_year,
    }));

    res.status(200).json({ paymentMethods: formattedMethods });
  } catch (error) {
    console.error('Error fetching payment methods:', error);
    res.status(500).json({ message: 'Error fetching payment methods.' });
  }
});

/**
 * @swagger
 * /subscribe/invoices:
 *   get:
 *     summary: Fetch invoices for a customer
 *     description: Fetches all invoices associated with a specific customer.
 *     parameters:
 *       - in: query
 *         name: customerId
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer ID.
 *     responses:
 *       200:
 *         description: Successfully fetched invoices.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 invoices:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The invoice ID.
 *                       amount_due:
 *                         type: number
 *                         description: The amount due on the invoice.
 *                       status:
 *                         type: string
 *                         description: The status of the invoice (e.g., paid, open).
 *                       date:
 *                         type: string
 *                         description: The date the invoice was created.
 *       500:
 *         description: Error in fetching invoices.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error fetching invoices.
 */

router.get('/invoices', async (req, res) => {
  try {
    const { customerId } = req.query;

    if (!customerId) {
      return res.status(400).json({ message: 'Customer ID is required' });
    }

    const invoices = await stripe.invoices.list({
      customer: customerId,
    });

    const formattedInvoices = invoices.data.map(invoice => ({
      id: invoice.id,
      amount_due: (invoice.amount_due / 100).toFixed(2),
      status: invoice.status,
      date: new Date(invoice.created * 1000).toISOString(),
    }));

    res.status(200).json({ invoices: formattedInvoices });
  } catch (error) {
    console.error('Error fetching invoices:', error);
    res.status(500).json({ message: 'Error fetching invoices.' });
  }
});



export default router;
