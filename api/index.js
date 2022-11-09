// const express = require('express');
// const Stripe = require('stripe');
// const cors = require('cors');

const STRIPE_SK =
  'sk_test_51M0L2VSFJgtn9Lb9Yi2MWeE0t4IHAnC9QbsBRWmBAnGvYw9DTiJWbHtoQEivXt8Jk0kznog2MnZUIK4SIxsIO3wo00QuHVLzl2';
// const stripe = new Stripe(STRIPE_SK, {
//   //@ts-ignore
//   apiVersion: '2020-08-27',
//   typescript: true,
// });

// const app = express();

// app.use(express.json());
// app.get('/stripe-token', async (req, res) => {
//   console.log('OK');
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: 5000, // 50$
//       currency: 'usd',
//     });

//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     res.status(400).send({
//       error: error,
//     });
//   }
// });

// app.get('/', (req, res) => {
//   res.send('heelo');
// });

// app.listen(3000, () => console.log('running: 3000'));

// ------

const express = require('express');
const app = express();
const {resolve} = require('path');
const stripe = require('stripe')(STRIPE_SK);
app.use(express.static('.'));
app.use(express.json());
// An endpoint for your checkout
app.post('/checkout', async (req, res) => {
  // Create or retrieve the Stripe Customer object associated with your user.
  let customer = await stripe.customers.create(); // This example just creates a new Customer every time

  // Create an ephemeral key for the Customer; this allows the app to display saved payment methods and save new ones
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2020-08-27'},
  );

  // Create a PaymentIntent with the payment amount, currency, and customer
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 973,
    currency: 'usd',
    customer: customer.id,
  });

  res.send({
    publishableKey: STRIPE_SK,
    paymentIntent: paymentIntent.client_secret,
    customer: customer.id,
    ephemeralKey: ephemeralKey.secret,
  });
});

app.listen(8000, () => console.log(`Node server listening on port ${8000}!`));
