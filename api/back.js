// const STRIPE_SK =
//   "sk_test_51M0L2VSFJgtn9Lb9Yi2MWeE0t4IHAnC9QbsBRWmBAnGvYw9DTiJWbHtoQEivXt8Jk0kznog2MnZUIK4SIxsIO3wo00QuHVLzl2";

const STRIPE_SK =
  'sk_test_51MU2jiKfFoFhc3tbJhpBV7qkOJA3qvSbRYy4s3eTfl9aPvtrdxDTrfjEpyo7DlRLettF4lodG61eqLXvXzOLEdaB00KCcTqFMD';

const stripe = require('stripe')(STRIPE_SK);

exports.handler = async event => {
  // Create or retrieve the Stripe Customer object associated with your user.
  const customer = await stripe.customers.create({
    name: event.name || '',
    // temp adding  address to handle indian rule
    address: {
      line1: event.address || '',
      postal_code: event.postal_code || '',
      city: event.city || '',
      state: event.state || '',
      country: event.country || '',
    },
  });

  // Create an ephemeral key for the Customer; this allows the app to display saved payment methods and save new ones
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2020-08-27'},
  );

  // Create a PaymentIntent with the payment amount, currency, and customer
  const paymentIntent = await stripe.paymentIntents.create({
    amount: event.product.amount || '',
    description: event.product.des || '',
    // temp adding  address to handle indian rule
    shipping: {
      name: event.name || '',
      address: {
        line1: event.address || '',
        postal_code: event.postal_code || '',
        city: event.city || '',
        state: event.state || '',
        country: event.country || '',
      },
    },
    // currency: 'inr',
    currency: 'usd',
    customer: customer.id,
  });
  const data = {
    publishableKey: STRIPE_SK,
    paymentIntent: paymentIntent.client_secret,
    customer: customer.id,
    ephemeralKey: ephemeralKey.secret,
  };
  const response = {
    statusCode: 200,
    data: JSON.stringify(data),
  };
  return response;
};
