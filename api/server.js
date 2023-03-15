const STRIPE_SK_GLOBAL =
  'sk_test_51MU2jiKfFoFhc3tbJhpBV7qkOJA3qvSbRYy4s3eTfl9aPvtrdxDTrfjEpyo7DlRLettF4lodG61eqLXvXzOLEdaB00KCcTqFMD';
const STRIPE_SK_EU =
  'sk_test_51MU2jiKfFoFhc3tbJhpBV7qkOJA3qvSbRYy4s3eTfl9aPvtrdxDTrfjEpyo7DlRLettF4lodG61eqLXvXzOLEdaB00KCcTqFMD';

const stripeGlobal = require('stripe')(STRIPE_SK_GLOBAL);
const stripeEu = require('stripe')(STRIPE_SK_EU);

const handleGlobal = async event => {
  // Create or retrieve the Stripe Customer object associated with your user.
  const customer = await stripeGlobal.customers.create({
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
  const ephemeralKey = await stripeGlobal.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2020-08-27'},
  );

  // Create a PaymentIntent with the payment amount, currency, and customer
  const paymentIntent = await stripeGlobal.paymentIntents.create({
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
    publishableKey: STRIPE_SK_GLOBAL,
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
const handleEu = async event => {
  // Create or retrieve the Stripe Customer object associated with your user.
  const customer = await stripeEu.customers.create({
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
  const ephemeralKey = await stripeEu.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2020-08-27'},
  );

  // Create a PaymentIntent with the payment amount, currency, and customer
  const paymentIntent = await stripeEu.paymentIntents.create({
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
    publishableKey: STRIPE_SK_EU,
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

exports.handler = async event => {
  const {region} = event;

  if (region === 'eu') {
    const res = await handleEu(event.event);
    return res;
  } else {
    const res = await handleGlobal(event.event);
    return res;
  }
};
