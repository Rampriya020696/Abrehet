const buy = async (model, context) => {
  const customer = await stripe.customers.create({
    name: user.firstName || '',
    // temp adding  address to handle indian rule
    address: {
      line1: '510 Townsend St',
      postal_code: '98140',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    },
  });

  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2020-08-27'},
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: coin.coins,
    description: 'social services',
    // temp adding  address to handle indian rule
    shipping: {
      name: 'Jenny Rosen',
      address: {
        line1: '510 Townsend St',
        postal_code: '98140',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
      },
    },
    currency: 'inr',
    customer: customer.id,
    payment_method_types: [model.paymentMethod],
  });

  const payment = await new db.payment({
    user: user.id,
    coin: coin.id,
    pi: paymentIntent.id,
    status: paymentIntent.status,
    customerId: customer.id,
    amount: coin.price,
  }).save();

  log.end();
  return {
    paymentIntent: paymentIntent.client_secret,
    status: paymentIntent.status,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: '',
  };
};

// User name  speryamo@gmail.com
// Pass: 816HelenSewitSara

// Console sign-in URL

// https://807954077262.signin.aws.amazon.com/console
// User name

// abrehet-2.0
// Console password

// ]i4E9Q@e
// Hide

// Access key
// AKIA3YHOQ2ZHAI23VLOI
// Secret access key
// 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
