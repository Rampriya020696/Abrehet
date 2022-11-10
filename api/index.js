const STRIPE_SK =
  'sk_test_51M0L2VSFJgtn9Lb9Yi2MWeE0t4IHAnC9QbsBRWmBAnGvYw9DTiJWbHtoQEivXt8Jk0kznog2MnZUIK4SIxsIO3wo00QuHVLzl2';

const express = require('express');
const app = express();

// const body = {
//   name: '',
//   address: '',
//   postal_code: '', --
//   city: '',
//   state: '',
//   country: '', ---
//   product: {
//     amount: '',
//     des: '',
//   },
// };

const stripe = require('stripe')(STRIPE_SK);
app.use(express.static('.'));
app.use(express.json());

const handleStripeCheckout = async (req, res) => {
  // Create or retrieve the Stripe Customer object associated with your user.
  const customer = await stripe.customers.create({
    name: req.body.name || '',
    // temp adding  address to handle indian rule
    address: {
      line1: req.body.address || '',
      postal_code: req.body.postal_code || '',
      city: req.body.city || '',
      state: req.body.state || '',
      country: req.body.country || '',
    },
  });

  // Create an ephemeral key for the Customer; this allows the app to display saved payment methods and save new ones
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2020-08-27'},
  );

  // Create a PaymentIntent with the payment amount, currency, and customer
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.product.amount || '',
    description: req.body.product.des || '',
    // temp adding  address to handle indian rule
    shipping: {
      name: req.body.name || '',
      address: {
        line1: req.body.address || '',
        postal_code: req.body.postal_code || '',
        city: req.body.city || '',
        state: req.body.state || '',
        country: req.body.country || '',
      },
    },
    // currency: 'inr',
    currency: 'usd',
    customer: customer.id,
  });
  res.send({
    publishableKey: STRIPE_SK,
    paymentIntent: paymentIntent.client_secret,
    customer: customer.id,
    ephemeralKey: ephemeralKey.secret,
  });
};

// An endpoint for your checkout
app.post('/checkout', handleStripeCheckout);

app.listen(8000, () => console.log(`Node server listening on port ${8000}!`));
