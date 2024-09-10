import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

/**
 * @swagger
 * /subscribe/checkout:
 *   post:
 *     summary: Create a Stripe checkout session
 *     description: Creates a checkout session for purchasing products.
 *     responses:
 *       302:
 *         description: Redirects to the Stripe Checkout page.
 *       500:
 *         description: Error in creating a session.
 */
router.post('/checkout', async (req, res) => {
  try {
    const plans = [
        {
            price_data: {
            currency: 'usd',
            product_data: {
                name: 'Node.jssss and Express book'
            },
            unit_amount: 50 * 100
            },
            quantity: 1
        },
        {
            price_data: {
            currency: 'usd',
            product_data: {
                name: 'JavaScript T-Shirt'
            },
            unit_amount: 20 * 100
            },
            quantity: 8
        }
    ];
    const session = await stripe.checkout.sessions.create({
        line_items:plans,
        mode: 'payment',
        success_url: `${process.env.BASE_URL}/Home?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/cancel`
    });
    // res.redirect(session.url);
    res.status(200).send({url: session.url, plans: plans});
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

export default router;
